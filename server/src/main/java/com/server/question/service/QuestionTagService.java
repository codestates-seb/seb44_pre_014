package com.server.question.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.server.question.entity.QuestionTag;
import com.server.question.repository.QuestionTagRepository;

@Service
public class QuestionTagService {
    private QuestionTagRepository questionTagRepository;

    public QuestionTagService(QuestionTagRepository questionTagRepository) {
        this.questionTagRepository = questionTagRepository;
    }

    public void saveQuestionTags(List<QuestionTag> questionTags) {
        questionTagRepository.saveAll(questionTags);
    }

    public void updateQuestionTags(List<QuestionTag> questionTags) {
        for (QuestionTag questionTag : questionTags) {
            long questionId = questionTag.getQuestion().getQuestionId();
            long tagId = questionTag.getTag().getTagId();
            if (!questionTagRepository.existsByQuestion_QuestionIdAndTag_TagId(questionId, tagId)) {
                questionTagRepository.save(questionTag);
            }
        }
    }

    public Page<QuestionTag> findQuestionsByTagName(int size, int page, String tagName) {
        Sort sort1 = Sort.by("question.createdAt").descending();
        Sort sort2 = Sort.by("question.questionId").descending();
        Sort sort3 = sort1.and(sort2);

        return questionTagRepository.findByTag_TagName(tagName,
            PageRequest.of(page, size, sort3));
    }

    public void deleteQuestionTags(List<QuestionTag> questoinTags) {
        questionTagRepository.deleteAll(questoinTags);
    }
}
