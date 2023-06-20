package com.server.comment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server.comment.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findAllByQuestion_QuestionId(Long questionId);

    List<Comment> findAllByAnswer_AnswerId(Long answerId);
}
