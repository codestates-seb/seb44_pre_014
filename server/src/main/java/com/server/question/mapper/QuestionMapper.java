package com.server.question.mapper;

import java.util.ArrayList;
import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.server.question.dto.QuestionDto;
import com.server.question.entity.Question;
import com.server.question.entity.QuestionTag;
import com.server.response.Response;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    @Mapping(source = "memberId", target = "member.memberId")
    Question postDtoToQuestion(QuestionDto.Post postDto);

    Question patchDtoToQuestion(QuestionDto.Patch postDto);

    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "member.username", target = "writer")
    @Mapping(source = "questionTags", target = "tagNames")
    Response questionToResponse(Question question);

    List<Response> questionsToResponses(List<Question> questions);

    default List<String> questionTagsToTagNames(List<QuestionTag> questionTags) {
        // if (questionTags.size() == 0) {
        //     return null;
        // }
        List<String> tagNames = new ArrayList<>();

        for (QuestionTag questionTag : questionTags) {
            tagNames.add(questionTag.getTag().getTagName());
        }

        return tagNames;
    }

    default List<Question> questionTagsToQuestions(List<QuestionTag> questionTags) {
        List<Question> questions = new ArrayList<>();

        for (QuestionTag questionTag : questionTags) {
            questions.add(questionTag.getQuestion());
        }

        return questions;
    }
}
