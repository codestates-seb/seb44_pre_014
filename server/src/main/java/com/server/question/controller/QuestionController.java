package com.server.question.controller;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.server.Response.Response;
import com.server.file.FileManager;
import com.server.question.dto.QuestionDto;
import com.server.question.entity.Question;
import com.server.question.mapper.QuestionMapper;
import com.server.question.service.QuestionService;

@RestController
@RequestMapping("/questions")
public class QuestionController {
    private QuestionService questionService;
    private QuestionMapper questionMapper;

    @Autowired
    private FileManager fileManager;

    public QuestionController(QuestionService questionService,
            QuestionMapper questionMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
    }

    @PostMapping("/write")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post postDto) {
        Question question = questionMapper.postDtoToQuestion(postDto);
        question.setSolve(false);

        questionService.saveQuestion(question);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity getQuestions() {
        List<Question> questions = questionService.findQuestions();
        List<Response> responses = questionMapper.questionsToResponses(questions);

        return new ResponseEntity<>(responses, HttpStatus.OK);
    }

    @GetMapping("/{questionId}")
    public ResponseEntity getQuestion(@PathVariable("questionId") long questionId) throws Exception {
        Question findQuestion = questionService.findQuestion(questionId);
        Response response = questionMapper.questionToResponse(findQuestion);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity getQuestionsByKeyword(@RequestParam("keyword") String keyword) {
        // 검색 기능 별도 구현 필요
        return new ResponseEntity<>("검색 기능 별도 구현 필요", HttpStatus.BAD_REQUEST);
    }

    @PatchMapping("/{questionId}/edit")
    public ResponseEntity patchQuestion(@Valid @RequestBody QuestionDto.Patch patchDto,
            @PathVariable("questionId") long questionId) {
        Question question = questionMapper.patchDtoToQuestion(patchDto);
        question.setQuestionId(questionId);

        questionService.updateQuestion(question);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{questionId}")
    public ResponseEntity deleteQuestion(@PathVariable("questionId") long questionId) {
        questionService.deleteQuestion(questionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/{questionId}/files")
    public ResponseEntity postFile(@PathVariable("questionId") long questionId,
            @RequestPart("files") List<MultipartFile> files) throws Exception {
        fileManager.saveFiles(questionId, "questions", files);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{questionId}/files")
    public ResponseEntity getFile(@PathVariable long questionId,
            @RequestParam("size") int size) throws IOException {
        List<byte[]> files = fileManager.getFiles(size, questionId, "questions");

        return new ResponseEntity<>(files, HttpStatus.OK);
        // return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(files.get(0));
    }
}
