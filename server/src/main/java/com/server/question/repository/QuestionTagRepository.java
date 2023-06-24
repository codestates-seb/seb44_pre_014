package com.server.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server.question.entity.QuestionTag;

public interface QuestionTagRepository extends JpaRepository<QuestionTag, Long> {
}
