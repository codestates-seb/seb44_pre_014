package com.server.comment.mapper;

import com.server.Response.Response;
import com.server.answer.entity.Answer;
import com.server.comment.dto.CommentDto;
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
public class CommentMapperImpl implements CommentMapper {

    @Override
    public Comment patchDtoToComment(CommentDto.Patch patchDto) {
        if ( patchDto == null ) {
            return null;
        }

        Comment comment = new Comment();

        comment.setContent( patchDto.getContent() );

        return comment;
    }

    @Override
    public Response commentToResponse(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        Response response = new Response();

        response.setMemberId( commentMemberMemberId( comment ) );
        response.setWriter( commentMemberDisplayName( comment ) );
        response.setQuestionId( commentQuestionQuestionId( comment ) );
        response.setAnswerId( commentAnswerAnswerId( comment ) );
        response.setCommentId( comment.getCommentId() );
        response.setContent( comment.getContent() );
        response.setCreatedAt( comment.getCreatedAt() );
        response.setModifiedAt( comment.getModifiedAt() );

        return response;
    }

    @Override
    public List<Response> commentsToResponses(List<Comment> comments) {
        if ( comments == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( comments.size() );
        for ( Comment comment : comments ) {
            list.add( commentToResponse( comment ) );
        }

        return list;
    }

    private Long commentMemberMemberId(Comment comment) {
        if ( comment == null ) {
            return null;
        }
        Member member = comment.getMember();
        if ( member == null ) {
            return null;
        }
        Long memberId = member.getMemberId();
        if ( memberId == null ) {
            return null;
        }
        return memberId;
    }

    private String commentMemberDisplayName(Comment comment) {
        if ( comment == null ) {
            return null;
        }
        Member member = comment.getMember();
        if ( member == null ) {
            return null;
        }
        String displayName = member.getDisplayName();
        if ( displayName == null ) {
            return null;
        }
        return displayName;
    }

    private Long commentQuestionQuestionId(Comment comment) {
        if ( comment == null ) {
            return null;
        }
        Question question = comment.getQuestion();
        if ( question == null ) {
            return null;
        }
        Long questionId = question.getQuestionId();
        if ( questionId == null ) {
            return null;
        }
        return questionId;
    }

    private Long commentAnswerAnswerId(Comment comment) {
        if ( comment == null ) {
            return null;
        }
        Answer answer = comment.getAnswer();
        if ( answer == null ) {
            return null;
        }
        Long answerId = answer.getAnswerId();
        if ( answerId == null ) {
            return null;
        }
        return answerId;
    }
}
