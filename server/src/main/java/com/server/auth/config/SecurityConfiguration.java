package com.server.auth.config;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.server.auth.filter.JwtAuthenticationFilter;
import com.server.auth.filter.JwtVerificationFilter;
import com.server.auth.handler.MemberAuthenticationFailureHandler;
import com.server.auth.handler.MemberAuthenticationSuccessHandler;
import com.server.auth.handler.OAuth2UserSuccessHandler;
import com.server.auth.jwt.JwtTokenizer;
import com.server.auth.userdetails.OAuth2UserDetailsService;
import com.server.auth.utils.CustomAuthorityUtils;

@Configuration
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils customAuthorityUtils;
    private final OAuth2UserDetailsService oAuth2UserDetailsService;
    private final OAuth2UserSuccessHandler oAuth2UserSuccessHandler;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer,
            CustomAuthorityUtils customAuthorityUtils,
            OAuth2UserDetailsService oAuth2UserDetailsService,
            OAuth2UserSuccessHandler oAuth2UserSuccessHandler) {
        this.jwtTokenizer = jwtTokenizer;
        this.customAuthorityUtils = customAuthorityUtils;
        this.oAuth2UserDetailsService = oAuth2UserDetailsService;
        this.oAuth2UserSuccessHandler = oAuth2UserSuccessHandler;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                // click jacking 공격을 방지하기 위한 설정
                .headers().frameOptions().sameOrigin()

                // csrf 공격 방지
                .and()
                .csrf().disable()
                .cors().configurationSource(corsConfigurationSource())
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .logout()
                .logoutSuccessUrl("/")
                .and()

                // JWT 인증 필터와 JWT 검증 필터를 등록
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .anyRequest().permitAll() /** 권한에 따른 페이지 접근 권한 추후 수정 **/
                )
                // OAuth2
                .oauth2Login()
                .successHandler(oAuth2UserSuccessHandler)
                .userInfoEndpoint()
                .userService(oAuth2UserDetailsService);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    // cors 설정
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        // configuration.setAllowedOrigins(List.of("https://codestates.shop"));
        configuration.setAllowedOrigins(
            List.of("http://192.168.219.104:3000", "http://192.168.219.104:8080", "http://192.168.219.104:80"));
        configuration.addAllowedMethod("*");
        configuration.addAllowedHeader("*");
        // configuration.addExposedHeader("Authorization");
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    // spring security filter 등록
    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(jwtTokenizer,
                authenticationManager);
            jwtAuthenticationFilter.setFilterProcessesUrl("/members/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, customAuthorityUtils);

            builder.addFilter(jwtAuthenticationFilter);
            builder.addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
            builder.addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class);
        }
    }
}
