package com.server.member.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.server.answer.entity.Answer;
import com.server.answer.service.AnswerService;
import com.server.auth.utils.CustomAuthorityUtils;
import com.server.comment.entity.Comment;
import com.server.comment.service.CommentService;
import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.member.entity.Member;
import com.server.member.repository.MemberRepository;
import com.server.question.entity.Question;
import com.server.question.service.QuestionService;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    @Autowired
    private QuestionService questionService;

    @Autowired
    private AnswerService answerService;

    @Autowired
    private CommentService commentService;

    private CustomAuthorityUtils customAuthorityUtils;

    private final PasswordEncoder passwordEncoder;

    public MemberService(MemberRepository memberRepository,
            CustomAuthorityUtils customAuthorityUtils,
            PasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.customAuthorityUtils = customAuthorityUtils;
        this.passwordEncoder = passwordEncoder;
    }

    // 회원가입
    public Member createMember(Member member) {
        // 중복 메일 확인
        verifyExistsEmail(member.getEmail());

        // password 암호화
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        List<String> roles = customAuthorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        return memberRepository.save(member);
    }

    // 회원정보 수정
    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());
        Optional.ofNullable(member.getEmail())
                .ifPresent(email -> findMember.setEmail(email));
        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> findMember.setPassword(password));
        Optional.ofNullable(member.getUsername())
                .ifPresent(userName -> findMember.setUsername(userName));
        Optional.ofNullable(member.getContent())
                .ifPresent(content -> findMember.setContent(content));

        return memberRepository.save(findMember);
    }

    // 회원 조회
    public Member findMember(Long memberId) {
        return findVerifiedMember(memberId);
    }

    // 회원 탈퇴
    public void deleteMember(Long memberId) {
        Member member = findVerifiedMember(memberId);
        List<Question> questions = member.getQuestions();
        List<Answer> answers = member.getAnswers();
        List<Comment> comments = member.getComments();

        for (Comment comment : comments) {
            commentService.deleteComment(comment.getCommentId());
        }
        for (Answer answer : answers) {
            answerService.deleteAnswer(answer.getAnswerId());
        }
        for (Question question : questions) {
            questionService.deleteQuestion(question.getQuestionId());
        }
        memberRepository.deleteById(memberId);
    }

    // 중복된 이메일인지 확인
    private void verifyExistsEmail(String email) {
        Optional<Member> optional = memberRepository.findByEmail(email);
        if (optional.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_EMAIL_EXISTS);
        }

    }

    // 존재하는 회원인지 확인
    private Member findVerifiedMember(Long memberId) {
        Optional<Member> optional = memberRepository.findById(memberId);
        Member findMember = optional
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findMember;
    }
}
