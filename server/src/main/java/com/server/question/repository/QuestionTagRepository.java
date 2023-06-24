package com.server.question.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.server.question.entity.QuestionTag;

public interface QuestionTagRepository extends JpaRepository<QuestionTag, Long> {
    boolean existsByQuestion_QuestionIdAndTag_TagId(long questionId, long tagId);

    Page<QuestionTag> findByTag_TagName(String tagName,
            Pageable pageable);
}
