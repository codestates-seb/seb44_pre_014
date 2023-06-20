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
        member.setName("희창님");
        member.setUsername("아가 팀장님");
        member.setPassword("babyteamleader1!");

        memberService.createMember(member);

        member.setMemberId(null);
        member.setContent("자기소개");
        member.setEmail("email2@naver.com");
        member.setName("실명");
        member.setUsername("닉네임");
        member.setPassword("비밀번호1234!");

        memberService.createMember(member);

        member = new Member();
        member.setMemberId(1L);

        Question question = new Question();
        question.setMember(member);
        question.setTitle("질문");
        question.setContent("질문 내용입니다.");

        questionService.saveQuestion(question);

        member = new Member();
        member.setMemberId(2L);

        question = new Question();
        question.setQuestionId(1L);

        Answer answer = new Answer();
        answer.setMember(member);
        answer.setQuestion(question);
        answer.setContent("답변 내용입니다.");

        answerService.saveAnswer(answer);

        // answer.setAnswerId(5L);
        // answer.setMember(member);
        // answer.setQuestion(question);
        // answer.setContent("답변 내용입니다.");

        // answerService.saveAnswer(answer);
        member = new Member();
        member.setMemberId(1L);

        // question = new Question();
        answer = new Answer();
        answer.setAnswerId(1L);

        Comment comment = new Comment();
        comment.setMember(member);
        comment.setAnswer(answer);
        comment.setContent("댓글 내용입니다.");

        commentService.saveComment(comment);
    }

}
