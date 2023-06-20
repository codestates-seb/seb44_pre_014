package com.server.comment.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.server.Response.Response;
import com.server.answer.entity.Answer;
import com.server.comment.dto.CommentDto;
import com.server.comment.entity.Comment;
import com.server.member.entity.Member;
import com.server.question.entity.Question;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    default Comment postDtoToComment(CommentDto.Post postDto) {
        if (postDto == null) {
            return null;
        }
        Long qid = postDto.getQuestionId();
        Long aid = postDto.getAnswerId();

        Member member = new Member();
        member.setMemberId(postDto.getMemberId());

        Comment comment = new Comment();
        comment.setContent(postDto.getContent());
        comment.setMember(member);

        if (qid != null) {
            Question question = new Question();
            question.setQuestionId(qid);
            comment.setQuestion(question);
        } else if (aid != null) {
            Answer answer = new Answer();
            answer.setAnswerId(aid);
            comment.setAnswer(answer);
        }

        return comment;
    }

    Comment patchDtoToComment(CommentDto.Patch patchDto);

    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "member.displayName", target = "writer")
    @Mapping(source = "question.questionId", target = "questionId")
    @Mapping(source = "answer.answerId", target = "answerId")
    Response commentToResponse(Comment comment);

    List<Response> commentsToResponses(List<Comment> comments);
}
