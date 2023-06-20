package com.server.comment.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.server.Response.Response;
import com.server.comment.dto.CommentDto;
import com.server.comment.entity.Comment;
import com.server.comment.mapper.CommentMapper;
import com.server.comment.service.CommentService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/comments")
public class CommentController {
    private CommentService commentService;
    private CommentMapper commentMapper;

    public CommentController(CommentService commentService,
            CommentMapper commentMapper) {
        this.commentService = commentService;
        this.commentMapper = commentMapper;
    }

    @PostMapping("/write")
    public ResponseEntity postComment(@RequestBody CommentDto.Post postDto) {
        Long qid = postDto.getQuestionId();
        Long aid = postDto.getAnswerId();

        if (qid == null && aid == null || qid != null && aid != null) {
            return new ResponseEntity<>("questionId 또는 answerId 중 하나를 입력해야합니다.",
                HttpStatus.BAD_REQUEST);
        }
        Comment comment = commentMapper.postDtoToComment(postDto);

        commentService.saveComment(comment);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{commentId}/edit")
    public ResponseEntity postComment(@RequestBody CommentDto.Patch patchDto,
            @PathVariable("commentId") long commentId) {
        Comment comment = commentMapper.patchDtoToComment(patchDto);
        comment.setCommentId(commentId);

        commentService.updateComment(comment);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity findComments(@RequestParam(value = "questionId", required = false) Long questionId,
            @RequestParam(value = "answerId", required = false) Long answerId) {
        if (questionId == null && answerId == null
                || questionId != null && answerId != null) {
            String message = "댓글을 조회하고자 하는 글의 아이디를 입력하세요.\n"
                    + "예시) ?questionId=5 또는 ?answerId=5 중 하나";
            return new ResponseEntity<>(message, HttpStatus.BAD_REQUEST);
        }
        List<Comment> comments = commentService.findComments(questionId, answerId);
        List<Response> responses = commentMapper.commentsToResponses(comments);

        return new ResponseEntity<>(responses, HttpStatus.OK);
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity deleteComment(@PathVariable long commentId) {
        commentService.deleteComment(commentId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
