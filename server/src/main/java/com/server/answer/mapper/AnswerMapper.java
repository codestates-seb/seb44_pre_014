package com.server.answer.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.server.Response.Response;
import com.server.answer.dto.AnswerDto;
import com.server.answer.entity.Answer;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    @Mapping(source = "memberId", target = "member.memberId")
    @Mapping(source = "questionId", target = "question.questionId")
    Answer postDtoToAnswer(AnswerDto.Post postDto);

    Answer patchDtoToAnswer(AnswerDto.Patch patchDto);

    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "member.username", target = "writer")
    @Mapping(source = "question.questionId", target = "questionId")
    Response answerToResponse(Answer answer);

    List<Response> answersToResponses(List<Answer> answers);
}
