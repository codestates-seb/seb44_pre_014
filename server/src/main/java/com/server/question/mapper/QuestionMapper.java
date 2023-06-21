package com.server.question.mapper;

import org.mapstruct.Mapper;

import com.server.question.dto.QuestionDto;
import com.server.question.entity.Question;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
	Question questionPostDtoToQuestion(QuestionDto.Post postDto);
	Question questionPatchDtoToQuestion(QuestionDto.Patch patchDto);

}
