package com.server;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.server.answer.entity.Answer;
import com.server.comment.entity.Comment;
import com.server.member.entity.Member;
import com.server.question.entity.Question;

@RestController
@RequestMapping
public class Controller {
	static LocalDateTime time = LocalDateTime.now().withNano(0);
	static String writer = "작성자";

	static String titleQ = "질문 제목";
	static String contentQ = "질문 내용입니다.\n".repeat(10);
	static String contentA = "에 달린 답변 내용입니다.\n";
	static String contentC = "에 달린 댓글 내용입니다.\n";

	// Question

	// 질문 전체 목록 조회
	@GetMapping("/questions")
	public ResponseEntity Q1() {
		List<Question> list = new ArrayList<>();

		for (int i = 1; i <= 100; i++) {
			list.add(new Question(
				i,
				writer + i,
				titleQ + i,
				contentQ,
				time,
				time));
		}

		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	// 질문 검색
	@GetMapping("/questions/search")
	public ResponseEntity Q2(@RequestParam("keyword") String keyword) {
		List<Question> list = new ArrayList<>();

		for (int i = 1; i <= 50; i++) {
			list.add(new Question(
				i,
				writer + i,
				keyword + "에 관련된 질문" + i,
				(keyword + "에 관련된 질문 내용입니다.\n").repeat(10),
				time,
				time));
		}

		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	// 질문 조회
	@GetMapping("/questions/{questionId}")
	public ResponseEntity Q3(@PathVariable("questionId") long id) {
		Question question = new Question(id, writer + id, titleQ + id, contentQ, time, time);

		return new ResponseEntity<>(question, HttpStatus.OK);
	}

	@PostMapping("/questions/write")
	public ResponseEntity Q4() {
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PatchMapping("/questions/{questionId}/edit")
	public ResponseEntity Q5(@PathVariable("questionId") long id) {
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/questions/{questionId}")
	public ResponseEntity Q6(@PathVariable("questionId") long id) {
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	// answer
	@GetMapping("/answers")
	public ResponseEntity A1() {
		List<Answer> list = new ArrayList<>();

		for (int i = 1; i <= 100; i++) {
			list.add(new Answer(
				i,
				100 - i,
				writer + i,
				("질문" + (100 - i) + contentA).repeat(10),
				time,
				time));
		}

		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@GetMapping("/answers/search")
	public ResponseEntity A2(@RequestParam("keyword") String keyword) {
		List<Answer> list = new ArrayList<>();

		for (int i = 1; i <= 50; i++) {
			list.add(new Answer(
				i,
				100 - i,
				writer + i,
				("질문" + (100 - i) + "에 달린 " + keyword + "에 관련된 답변 내용입니다.\n").repeat(10),
				time,
				time));
		}

		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@GetMapping("/answers/{answerId}")
	public ResponseEntity A3(@PathVariable("answerId") long id) {
		Answer answer = new Answer(
			id,
			100 - id,
			writer + id,
			("질문" + (100 - id) + contentA).repeat(10),
			time,
			time);

		return new ResponseEntity<>(answer, HttpStatus.OK);
	}

	@PostMapping("/answers/write")
	public ResponseEntity A4() { // questionId 필수
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PatchMapping("/answers/{answerId}/edit")
	public ResponseEntity A5(@PathVariable("answerId") long id) {
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/answers/{answerId}")
	public ResponseEntity A6(@PathVariable("answerId") long id) {
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@GetMapping("/members")
	public ResponseEntity M1() {
		List<Member> list = new ArrayList<>();

		for (int i = 1; i <= 100; i++) {
			list.add(new Member(
				i,
				String.format("mail%d@naver.com", i),
				"닉네임" + i,
				Integer.toString(i).repeat(5),
				"실명" + i));
		}

		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@GetMapping("/members/{memberId}")
	public ResponseEntity M2(@PathVariable("memberId") long id) {
		Member member = new Member(
			id,
			String.format("mail%d@naver.com", id),
			"닉네임" + id,
			Long.toString(id).repeat(5),
			"실명" + id);

		return new ResponseEntity<>(member, HttpStatus.OK);
	}

	@DeleteMapping("/members/{memberId}")
	public ResponseEntity M3(@PathVariable("memberId") long id) {
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@PostMapping("/members/signup")
	public ResponseEntity M4() {
		return new ResponseEntity<>("회원가입 미구현", HttpStatus.BAD_REQUEST);
	}

	@PostMapping("/members/login")
	public ResponseEntity M5() {
		return new ResponseEntity<>("로그인 미구현", HttpStatus.BAD_REQUEST);
	}

	@PostMapping("/members/logout")
	public ResponseEntity M6() {
		return new ResponseEntity<>("로그아웃 미구현", HttpStatus.BAD_REQUEST);
	}

	@PatchMapping("/members/{memberId}/edit")
	public ResponseEntity M7(@PathVariable("memberId") long id) {
		return new ResponseEntity<>("회원 정보 수정 미구현", HttpStatus.BAD_REQUEST);
	}

	@GetMapping("/comments")
	public ResponseEntity C1(@RequestParam(value = "questionId", required = false) Long questionId,
			@RequestParam(value = "answerId", required = false) Long answerId) {
		if (questionId == null && answerId == null) {
			return new ResponseEntity<>("댓글을 조회하고자 하는 글의 아이디를 입력하세요.\n"
					+ "예시) ?questionId=5 또는 ?answerId=5", HttpStatus.BAD_REQUEST);
		}
		List<Comment> list = new ArrayList<>();

		if (answerId == null) {
			for (int i = 1; i <= 10; i++) {
				list.add(new Comment(
					i,
					questionId,
					0,
					writer + i,
					("질문" + questionId + contentC).repeat(2),
					time,
					time));
			}
			return new ResponseEntity<>(list, HttpStatus.OK);
		}
		for (int i = 1; i <= 10; i++) {
			list.add(new Comment(
				i,
				0,
				answerId,
				writer + i,
				("답변" + answerId + contentC).repeat(2),
				time,
				time));
		}

		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@PostMapping("/comments/write")
	public ResponseEntity C2(@RequestParam("questionId") Long questionId,
			@RequestParam(value = "answerId", required = false) Long answerId) {
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PatchMapping("/comments/{commentId}/edit")
	public ResponseEntity C3(@PathVariable("commentId") long id) {
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/comments/{commentId}")
	public ResponseEntity C4(@PathVariable("commentId") long id) {
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
