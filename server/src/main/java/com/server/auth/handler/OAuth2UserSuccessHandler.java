package com.server.auth.handler;

import java.io.IOException;
import java.net.URI;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import com.server.auth.jwt.JwtTokenizer;
import com.server.auth.userdetails.PrincipalDetails;

import lombok.extern.slf4j.Slf4j;

// OAuth2 인증 성공 시 처리하는 핸들러 클래스
@Slf4j
@Component
public class OAuth2UserSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;
    public OAuth2UserSuccessHandler(JwtTokenizer jwtTokenizer) {
        this.jwtTokenizer = jwtTokenizer;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        String accessToken = delegateAccessToken(authentication);
        //String refreshToken = delegateRefreshToken(authentication);

        String uri = createURI(accessToken).toString();
        getRedirectStrategy().sendRedirect(request, response, uri);

        response.setHeader("Authorization",  "Bearer_" + accessToken);
        //response.setHeader("Refresh", refreshToken);
    }

    // JWT 토큰은 delegateAccessToken 메서드를 통해 생성
    private String delegateAccessToken(Authentication authentication) {
        PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();

        Map<String, Object> claims = new HashMap<>();
        claims.put("memberId", principalDetails.getMemberId());
        claims.put("email", principalDetails.getEmail());
        claims.put("roles", principalDetails.getRoles());

        String subject = principalDetails.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationSeconds());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        return jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);
    }

    // JWT 토큰을 포함한 리다이렉트 URL 생성
    private URI createURI(String accessToken) {

        //UriComponentsBuilder 클래스를 사용하여 URL 을 생성하고, 쿼리 스트링에 JWT 토큰을 포함함
        return UriComponentsBuilder
                .newInstance()
                .fromUriString("http://localhost:8080")
                // .path("/")
                // .queryParam("Authorization", "Bearer_" + accessToken)
                .build()
                .toUri();
    }
}
