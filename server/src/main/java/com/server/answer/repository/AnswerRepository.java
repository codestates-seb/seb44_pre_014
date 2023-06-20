package com.server.answer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server.answer.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    List<Answer> findAllByQuestion_QuestionId(long questionId);
}
