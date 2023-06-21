package com.server.question.controller;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.server.question.dto.QuestionDto;
import com.server.question.entity.Question;
import com.server.question.mapper.QuestionMapper;
import com.server.question.service.QuestionService;

@RestController
@RequestMapping("/questions")
@Validated
public class QuestionController {
	private final QuestionService questionService;
	private final QuestionMapper mapper;

	public QuestionController(QuestionService questionService, QuestionMapper mapper) {
		this.questionService = questionService;
		this.mapper = mapper;
	}

	@PostMapping("/write")
	public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post questionPostDto) {
		Question question = mapper.questionPostDtoToQuestion(questionPostDto);
		questionService.createQuestion(question);

		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@PatchMapping("/{question-id}/edit")
	public ResponseEntity patchQuestion(@RequestBody QuestionDto.Patch questionPatchDto,
		@PathVariable("question-id") long questionId) {
		Question question = mapper.questionPatchDtoToQuestion(questionPatchDto);
		question.setQuestionId(questionId);

		questionService.updateQuestion(question);

		return new ResponseEntity<>(HttpStatus.OK);
	}

	@GetMapping("/{question-id}")
	public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
		Question question = questionService.findQuestion(questionId);

		return new ResponseEntity<>(question, HttpStatus.OK);
	}

	@GetMapping
	public ResponseEntity getQuestions(@RequestParam("page") int page,
		@RequestParam("size") int size) {
		Page<Question> pageQuestions = questionService.findQuestions(page - 1, size);
		List<Question> questions = pageQuestions.getContent();

		return new ResponseEntity<>(questions, HttpStatus.OK);
	}

	@GetMapping("/search?keyword={keyword}")
	public ResponseEntity getQuestionsByKeyword(@PathVariable("keyword") String keyword) {
		// 키워드 검색 기능 구현

		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/{question-id}")
	public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
		questionService.deleteQuestion(questionId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
