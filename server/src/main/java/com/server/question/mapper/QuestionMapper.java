package com.server.question.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.server.Response.Response;
import com.server.question.dto.QuestionDto;
import com.server.question.entity.Question;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    @Mapping(source = "memberId", target = "member.memberId")
    Question postDtoToQuestion(QuestionDto.Post postDto);

    Question patchDtoToQuestion(QuestionDto.Patch postDto);

    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "member.username", target = "writer")
    Response questionToResponse(Question question);

    List<Response> questionsToResponses(List<Question> questions);
}
