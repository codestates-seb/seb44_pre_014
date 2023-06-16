package com.server.comment.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Entity
@Getter
@AllArgsConstructor
public class Comment {
	@Id
	long commentId;
	long questionId;
	long answerId;
	String writer;
	String content;
	LocalDateTime createdAt;
	LocalDateTime modifiedAt;

	// public Comment() {
	// }
}
