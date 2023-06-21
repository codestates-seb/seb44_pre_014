package com.server.question.dto;

import java.time.LocalDateTime;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class QuestionDto {

	@Getter
	@AllArgsConstructor
	public static class Post {
		private long questionId;
		private long memberId;

		@NotBlank(message = "제목은 공백이 아니어야 합니다.")
		private String title;

		private String content;
	}

	@Getter
	@AllArgsConstructor
	public static class Patch {
		private String title;

		private String content;
	}

	// @Getter
	// @AllArgsConstructor
	// public static class Response {
	// 	private long memberId;
	// 	private String title;
	// 	private String content;
	// 	private LocalDateTime createdAt;
	// }
}
