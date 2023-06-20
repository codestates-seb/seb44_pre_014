package com.server.answer.mapper;

import com.server.Response.Response;
import com.server.answer.dto.AnswerDto;
import com.server.answer.entity.Answer;
import com.server.comment.entity.Comment;
import com.server.member.entity.Member;
import com.server.question.entity.Question;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-21T00:21:06+0900",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer postDtoToAnswer(AnswerDto.Post postDto) {
        if ( postDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setMember( postToMember( postDto ) );
        answer.setQuestion( postToQuestion( postDto ) );
        answer.setContent( postDto.getContent() );

        return answer;
    }

    @Override
    public Answer patchDtoToAnswer(AnswerDto.Patch patchDto) {
        if ( patchDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setContent( patchDto.getContent() );

        return answer;
    }

    @Override
    public Response answerToResponse(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        Response response = new Response();

        response.setMemberId( answerMemberMemberId( answer ) );
        response.setWriter( answerMemberDisplayName( answer ) );
        response.setQuestionId( answerQuestionQuestionId( answer ) );
        response.setAnswerId( answer.getAnswerId() );
        response.setComments( commentListToResponseList( answer.getComments() ) );
        response.setContent( answer.getContent() );
        response.setCreatedAt( answer.getCreatedAt() );
        response.setModifiedAt( answer.getModifiedAt() );

        return response;
    }

    @Override
    public List<Response> answersToResponses(List<Answer> answers) {
        if ( answers == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( answers.size() );
        for ( Answer answer : answers ) {
            list.add( answerToResponse( answer ) );
        }

        return list;
    }

    protected Member postToMember(AnswerDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( post.getMemberId() );

        return member;
    }

    protected Question postToQuestion(AnswerDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( post.getQuestionId() );

        return question;
    }

    private Long answerMemberMemberId(Answer answer) {
        if ( answer == null ) {
            return null;
        }
        Member member = answer.getMember();
        if ( member == null ) {
            return null;
        }
        Long memberId = member.getMemberId();
        if ( memberId == null ) {
            return null;
        }
        return memberId;
    }

    private String answerMemberDisplayName(Answer answer) {
        if ( answer == null ) {
            return null;
        }
        Member member = answer.getMember();
        if ( member == null ) {
            return null;
        }
        String displayName = member.getDisplayName();
        if ( displayName == null ) {
            return null;
        }
        return displayName;
    }

    private Long answerQuestionQuestionId(Answer answer) {
        if ( answer == null ) {
            return null;
        }
        Question question = answer.getQuestion();
        if ( question == null ) {
            return null;
        }
        Long questionId = question.getQuestionId();
        if ( questionId == null ) {
            return null;
        }
        return questionId;
    }

    protected Response commentToResponse(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        Response response = new Response();

        response.setCommentId( comment.getCommentId() );
        response.setContent( comment.getContent() );
        response.setCreatedAt( comment.getCreatedAt() );
        response.setModifiedAt( comment.getModifiedAt() );

        return response;
    }

    protected List<Response> commentListToResponseList(List<Comment> list) {
        if ( list == null ) {
            return null;
        }

        List<Response> list1 = new ArrayList<Response>( list.size() );
        for ( Comment comment : list ) {
            list1.add( commentToResponse( comment ) );
        }

        return list1;
    }
}
