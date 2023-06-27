package com.server.answer.controller;

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

import com.server.answer.dto.AnswerDto;
import com.server.answer.entity.Answer;
import com.server.answer.mapper.AnswerMapper;
import com.server.answer.service.AnswerService;
import com.server.file.FileManager;
import com.server.response.Response;

@RestController
@RequestMapping("/answers")
public class AnswerController {
    private AnswerService answerService;
    private AnswerMapper answerMapper;

    @Autowired
    private FileManager fileManager;

    public AnswerController(AnswerService answerService,
            AnswerMapper answerMapper) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
    }

    @PostMapping("/write")
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post postDto) {
        Answer answer = answerMapper.postDtoToAnswer(postDto);
        answer.setChoose(false);

        answerService.saveAnswer(answer);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity getAnswers(@RequestParam("questionId") long questionId) {
        List<Answer> answers = answerService.findAnswers(questionId);
        List<Response> responses = answerMapper.answersToResponses(answers);

        return new ResponseEntity<>(responses, HttpStatus.OK);
    }

    @GetMapping("/{answerId}")
    public ResponseEntity getAnswer(@PathVariable("answerId") long answerId) throws Exception {
        Answer findAnswer = answerService.findAnswer(answerId);
        Response response = answerMapper.answerToResponse(findAnswer);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity getAnswersByKeyword(@RequestParam("keyword") String keyword) {
        // 검색 기능 별도 구현 필요
        return new ResponseEntity<>("검색 기능 별도 구현 필요", HttpStatus.BAD_REQUEST);
    }

    @PatchMapping("/{answerId}/edit")
    public ResponseEntity patchAnswer(@Valid @RequestBody AnswerDto.Patch patchDto,
            @PathVariable("answerId") long answerId) {
        Answer answer = answerMapper.patchDtoToAnswer(patchDto);
        answer.setAnswerId(answerId);

        answerService.updateAnswer(answer);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{answerId}")
    public ResponseEntity deleteAnswer(@PathVariable("answerId") long answerId) {
        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/{answerId}/files")
    public ResponseEntity postFile(@PathVariable("answerId") long answerId,
            @RequestPart("files") List<MultipartFile> files) throws Exception {
        fileManager.saveFiles(answerId, "answers", files);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{answerId}/files")
    public ResponseEntity getFile(@PathVariable long answerId,
            @RequestParam("size") int size) throws IOException {
        List<byte[]> files = fileManager.getFiles(size, answerId, "answers");

        return new ResponseEntity<>(files, HttpStatus.OK);
        // return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(files.get(0));
    }
}
