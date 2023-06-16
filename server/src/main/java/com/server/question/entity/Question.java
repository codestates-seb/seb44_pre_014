package com.server.question.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Entity
@Getter
@AllArgsConstructor
public class Question {
	@Id
	long questionId;
	String writer;
	String title;
	String content;
	LocalDateTime createdAt;
	LocalDateTime modifiedAt;

	// public Question() {
	// }
}
