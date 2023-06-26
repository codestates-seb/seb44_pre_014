package com.server.auth.userdetails;

import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import com.server.auth.userdetails.PrincipalDetails;
import com.server.member.entity.Member;
import com.server.member.repository.MemberRepository;
import com.server.exception.ExceptionCode;
import com.server.exception.BusinessLogicException;

import java.util.Optional;

@Component
@Slf4j
public class CustomUserDetailsService implements UserDetailsService {
    private final MemberRepository memberRepository;

    public CustomUserDetailsService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    // 유저 이름(username)에 해당하는 정보(email)를 DB 에서 조회하여
    // UserDetails 인터페이스 구현체인 PrincipalDetails 객체 반환
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Member> optional = memberRepository.findByEmail(email);
        Member findMember = optional.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return new PrincipalDetails(findMember);
    }
}
