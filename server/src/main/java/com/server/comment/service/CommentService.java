package com.server.comment.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.server.comment.entity.Comment;
import com.server.comment.repository.CommentRepository;

@Service
public class CommentService {
    private CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment saveComment(Comment comment) {
        Comment savedComment = commentRepository.save(comment);

        return savedComment;
    }

    public Comment updateComment(Comment comment) {
        Comment findComment = findComment(comment.getCommentId());
        findComment.setContent(comment.getContent());

        Comment savedComment = commentRepository.save(findComment);

        return savedComment;
    }

    public Comment findComment(long commentId) {
        Optional<Comment> optional = commentRepository.findById(commentId);

        return optional.orElseThrow(() -> new RuntimeException("찾는 댓글이 없습니다."));
    }

    public List<Comment> findComments(Long questionId, Long answerId) {
        if (questionId != null) {
            return commentRepository.findAllByQuestion_QuestionId(questionId);
        }
        return commentRepository.findAllByAnswer_AnswerId(answerId);
    }

    public void deleteComment(long commentId) {
        findComment(commentId);
        commentRepository.deleteById(commentId);
    }
}
