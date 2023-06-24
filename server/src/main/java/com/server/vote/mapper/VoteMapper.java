package com.server.vote.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.server.vote.dto.VoteDto;
import com.server.vote.entity.Vote;

@Mapper(componentModel = "spring")
public interface VoteMapper {
    @Mapping(source = "questionId", target = "question.questionId")
    Vote postDtoToVote(VoteDto.Post postDto);
}
