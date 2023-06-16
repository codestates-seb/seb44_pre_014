package com.server.answer.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Entity
@Getter
@AllArgsConstructor
public class Answer {
	@Id
	long answerId;
	long questionId;
	String writer;
	String content;
	LocalDateTime createdAt;
	LocalDateTime modifiedAt;

	// public Answer() {
	// }
}
