package com.server.member.mapper;

import com.server.Response.Response;
import com.server.answer.entity.Answer;
import com.server.comment.entity.Comment;
import com.server.member.dto.MemberDto;
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
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member postDtoToMember(MemberDto.Post memberPostDto) {
        if ( memberPostDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( memberPostDto.getEmail() );
        member.setPassword( memberPostDto.getPassword() );
        member.setDisplayName( memberPostDto.getDisplayName() );

        return member;
    }

    @Override
    public Member patchDtoToMember(MemberDto.Patch memberPatchDto) {
        if ( memberPatchDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( memberPatchDto.getMemberId() );
        member.setEmail( memberPatchDto.getEmail() );
        member.setPassword( memberPatchDto.getPassword() );
        member.setDisplayName( memberPatchDto.getDisplayName() );

        return member;
    }

    @Override
    public Response memberToResponse(Member member) {
        if ( member == null ) {
            return null;
        }

        Response response = new Response();

        response.setMemberId( member.getMemberId() );
        response.setQuestions( questionListToResponseList( member.getQuestions() ) );
        response.setAnswers( answerListToResponseList( member.getAnswers() ) );
        response.setComments( commentListToResponseList( member.getComments() ) );
        response.setEmail( member.getEmail() );
        response.setDisplayName( member.getDisplayName() );
        response.setContent( member.getContent() );
        response.setCreatedAt( member.getCreatedAt() );
        response.setModifiedAt( member.getModifiedAt() );

        return response;
    }

    @Override
    public List<Response> membersToResponses(List<Member> members) {
        if ( members == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( members.size() );
        for ( Member member : members ) {
            list.add( memberToResponse( member ) );
        }

        return list;
    }

    protected Response questionToResponse(Question question) {
        if ( question == null ) {
            return null;
        }

        Response response = new Response();

        response.setQuestionId( question.getQuestionId() );
        response.setTitle( question.getTitle() );
        response.setContent( question.getContent() );
        response.setCreatedAt( question.getCreatedAt() );
        response.setModifiedAt( question.getModifiedAt() );

        return response;
    }

    protected List<Response> questionListToResponseList(List<Question> list) {
        if ( list == null ) {
            return null;
        }

        List<Response> list1 = new ArrayList<Response>( list.size() );
        for ( Question question : list ) {
            list1.add( questionToResponse( question ) );
        }

        return list1;
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

    protected Response answerToResponse(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        Response response = new Response();

        response.setAnswerId( answer.getAnswerId() );
        response.setComments( commentListToResponseList( answer.getComments() ) );
        response.setContent( answer.getContent() );
        response.setCreatedAt( answer.getCreatedAt() );
        response.setModifiedAt( answer.getModifiedAt() );

        return response;
    }

    protected List<Response> answerListToResponseList(List<Answer> list) {
        if ( list == null ) {
            return null;
        }

        List<Response> list1 = new ArrayList<Response>( list.size() );
        for ( Answer answer : list ) {
            list1.add( answerToResponse( answer ) );
        }

        return list1;
    }
}
