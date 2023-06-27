package com.server.auth.userdetails;

import java.util.Optional;

import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Component;

import com.server.member.entity.Member;
import com.server.member.repository.MemberRepository;

import lombok.extern.slf4j.Slf4j;

// 외부 OAuth2 제공자에게 인증된 사용자에 대한 UserDetails 객체 로드
@Slf4j
@Component
public class OAuth2UserDetailsService extends DefaultOAuth2UserService {
    private final MemberRepository memberRepository;

    public OAuth2UserDetailsService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        String email = String.valueOf(oAuth2User.getAttributes().get("email"));
        String password = String.valueOf(oAuth2User.getAttributes().get("password"));
        String username;
        // github, facebook 로그인을 통해서 email 이 null 이라면 username 은 기본 값 name 설정
        // 이메일의 @gmail.com 을 제거하여 기본 닉네임으로 사용
        if (email.equals("null")) {
            username = "name";
        } else {
            username = email.replace("@gmail.com", "");
        }

        Optional<Member> findMember = memberRepository.findByEmail(email);

        Member member = findMember.orElseGet(() -> new Member(email, password, username));
        memberRepository.save(member);

        return new PrincipalDetails(member, oAuth2User.getAttributes());
    }

}
