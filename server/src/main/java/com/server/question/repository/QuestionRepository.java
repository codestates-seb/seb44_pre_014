package com.server.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
