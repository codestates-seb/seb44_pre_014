package com.server;

import javax.annotation.PostConstruct;

import org.springframework.web.bind.annotation.RestController;

import com.server.answer.entity.Answer;
import com.server.answer.service.AnswerService;
import com.server.comment.entity.Comment;
import com.server.comment.service.CommentService;
import com.server.member.entity.Member;
import com.server.member.service.MemberService;
import com.server.question.entity.Question;
import com.server.question.service.QuestionService;

@RestController
public class Init {
    private MemberService memberService;
    private QuestionService questionService;
    private AnswerService answerService;
    private CommentService commentService;

    public Init(MemberService memberService,
            QuestionService questionService,
            AnswerService answerService,
            CommentService commentService) {
        this.memberService = memberService;
        this.questionService = questionService;
        this.answerService = answerService;
        this.commentService = commentService;
    }

    @PostConstruct
    public void init() {
        Member member = new Member();
        member.setContent("자기소개");
        member.setEmail("email1@naver.com");
        member.setName("실명");
        member.setUsername("닉네임");
        member.setPassword("비밀번호1234!");

        memberService.createMember(member);

        member.setMemberId(null);
        member.setContent("자기소개");
        member.setEmail("email2@naver.com");
        member.setName("희창님");
        member.setUsername("아가팀장님");
        member.setPassword("babyteamleader1!");

        memberService.createMember(member);

        member.setMemberId(null);
        member.setContent("자기소개");
        member.setEmail("email3@naver.com");
        member.setName("승효님");
        member.setUsername("승효짱123");
        member.setPassword("비밀번호1234!");

        memberService.createMember(member);

        member.setMemberId(null);
        member.setContent("자기소개");
        member.setEmail("email4@naver.com");
        member.setName("채은님");
        member.setUsername("채은짱123");
        member.setPassword("비밀번호1234!");

        memberService.createMember(member);

        member.setMemberId(null);
        member.setContent("자기소개");
        member.setEmail("email5@naver.com");
        member.setName("진아님");
        member.setUsername("진아짱123");
        member.setPassword("비밀번호1234!");

        memberService.createMember(member);

        member.setMemberId(null);
        member.setContent("자기소개");
        member.setEmail("email6@naver.com");
        member.setName("수현님");
        member.setUsername("수현짱123");
        member.setPassword("비밀번호1234!");

        memberService.createMember(member);

        member.setMemberId(null);
        member.setContent("자기소개");
        member.setEmail("email7@naver.com");
        member.setName("세빈님");
        member.setUsername("세빈짱123");
        member.setPassword("비밀번호1234!");

        memberService.createMember(member);

        member.setMemberId(null);
        member.setContent("자기소개");
        member.setEmail("email8@naver.com");
        member.setName("수희님");
        member.setUsername("수희짱123");
        member.setPassword("비밀번호1234!");

        memberService.createMember(member);

        for (int i = 1; i <= 50; i++) {
            member = new Member();
            member.setMemberId(1L);
            Question question = new Question();
            question.setMember(member);
            question.setTitle("질문 제목" + i);
            question.setContent("질문 내용입니다.\n".repeat(20));
            questionService.saveQuestion(question);
        }
        for (long i = 1; i <= 50; i++) {
            member = new Member();
            member.setMemberId(1L);
            Question question = new Question();
            question.setQuestionId(i);
            Answer answer = new Answer();
            answer.setMember(member);
            answer.setQuestion(question);
            answer.setContent("답변 내용입니다.\n".repeat(10));
            answerService.saveAnswer(answer);
        }
        for (long i = 1; i <= 50; i++) {
            member = new Member();
            member.setMemberId(1L);
            Question question = new Question();
            question.setQuestionId(i);
            Comment comment = new Comment();
            comment.setMember(member);
            comment.setQuestion(question);
            comment.setContent("댓글 내용입니다.\n".repeat(2));
            commentService.saveComment(comment);
        }
        for (long i = 1; i <= 50; i++) {
            member = new Member();
            member.setMemberId(1L);
            Answer answer = new Answer();
            answer.setAnswerId(i);
            Comment comment = new Comment();
            comment.setMember(member);
            comment.setAnswer(answer);
            comment.setContent("댓글 내용입니다.\n".repeat(2));
            commentService.saveComment(comment);
        }

    }
}
