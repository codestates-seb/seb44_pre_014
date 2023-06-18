package com.server.member.service;

import org.springframework.stereotype.Service;
import com.server.member.entity.Member;
import com.server.member.repository.MemberRepository;
import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
//import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    //private final PasswordEncoder passwordEncoder;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
        //this.passwordEncoder = passwordEncoder;
    }

    // 회원가입
    public Member createMember(Member member) {
        // 중복 메일 확인
        verifyExistsEmail(member.getEmail());

        // password 암호화
        //String encryptedPassword = passwordEncoder.encode(member.getPassword());
        //member.setPassword(encryptedPassword);
        Member saveMember = memberRepository.save(member);

        return saveMember;
    }

    // 회원정보 수정
    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());
        Optional.ofNullable(member.getEmail())
                .ifPresent(email->findMember.setEmail(email));
        Optional.ofNullable(member.getPassword())
                .ifPresent(password->findMember.setPassword(password));
        Optional.ofNullable(member.getUserName())
                .ifPresent(userName->findMember.setUserName(userName));

        return memberRepository.save(findMember);
    }

    // 회원 조회
    public Member findMember(Long memberId) {
        return findVerifiedMember(memberId);
    }

    // 회원 탈퇴
    public void deleteMember(Long memberId) {
        Member member = findVerifiedMember(memberId);
        memberRepository.delete(member);
    }

    // 중복된 이메일인지 확인
    private void verifyExistsEmail(String email) {
        Optional<Member> findedMemberByEmail = memberRepository.findByEmail(email);
        if(findedMemberByEmail.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EMAIL_EXISTS);
    }

    // 존재하는 회원인지 확인
    private Member findVerifiedMember(Long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findedMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findedMember;
    }
}
