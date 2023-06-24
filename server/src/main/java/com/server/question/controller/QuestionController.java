package com.server.question.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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

import com.server.Response.PagingResponse;
import com.server.Response.PagingResponse.Info;
import com.server.Response.Response;
import com.server.file.FileManager;
import com.server.question.dto.QuestionDto;
import com.server.question.entity.Question;
import com.server.question.entity.QuestionTag;
import com.server.question.mapper.QuestionMapper;
import com.server.question.service.QuestionService;
import com.server.question.service.QuestionTagService;
import com.server.tag.entity.Tag;
import com.server.tag.service.TagService;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {
    private QuestionService questionService;
    private QuestionTagService questionTagService;
    private QuestionMapper questionMapper;

    @Autowired
    private TagService tagService;

    @Autowired
    private FileManager fileManager;

    public QuestionController(QuestionService questionService,
            QuestionMapper questionMapper,
            QuestionTagService questionTagService) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
        this.questionTagService = questionTagService;
    }

    @PostMapping("/write")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post postDto) {
        Question question = questionMapper.postDtoToQuestion(postDto);
        question.setSolve(false);
        question.setView(0L);
        question.setVoteQuantity(0);

        Question savedQuestion = questionService.saveQuestion(question);
        List<Tag> tags = tagService.saveTags(new ArrayList<>(postDto.getTagNames()));

        if (tags == null) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        List<QuestionTag> questionTags = new ArrayList<>();

        for (Tag tag : tags) {
            Question saveQuestion = new Question();
            saveQuestion.setQuestionId(savedQuestion.getQuestionId());
            Tag saveTag = new Tag();
            saveTag.setTagId(tag.getTagId()); // 최적화 필요
            QuestionTag questionTag = new QuestionTag();
            questionTag.setQuestion(saveQuestion);
            questionTag.setTag(saveTag);
            questionTags.add(questionTag);
        }
        questionTagService.saveQuestionTags(questionTags);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{questionId}/edit")
    public ResponseEntity patchQuestion(@Valid @RequestBody QuestionDto.Patch patchDto,
            @PathVariable("questionId") long questionId) {
        Question question = questionMapper.patchDtoToQuestion(patchDto);
        question.setQuestionId(questionId);

        Question updatedQuestion = questionService.updateQuestion(question);
        List<Tag> tags = tagService.saveTags(new ArrayList<>(patchDto.getTagNames()));

        List<QuestionTag> existingQuestionTags = updatedQuestion.getQuestionTags();
        for (int i = 0; i < existingQuestionTags.size(); i++) {
            if (tags == null) {
                break;
            }
            QuestionTag existingQuestionTag = existingQuestionTags.get(i);
            for (Tag tag : tags) {
                if (tag.getTagName().equals(existingQuestionTag.getTag().getTagName())) {
                    existingQuestionTags.remove(i--);
                    break;
                }
            }
        }
        questionTagService.deleteQuestionTags(existingQuestionTags);

        List<QuestionTag> questionTags = new ArrayList<>();

        for (Tag tag : tags) {
            Question saveQuestion = new Question();
            saveQuestion.setQuestionId(updatedQuestion.getQuestionId());
            Tag saveTag = new Tag();
            saveTag.setTagId(tag.getTagId()); // 최적화 필요
            QuestionTag questionTag = new QuestionTag();
            questionTag.setQuestion(saveQuestion);
            questionTag.setTag(saveTag);
            questionTags.add(questionTag);
        }
        questionTagService.updateQuestionTags(questionTags);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions(@RequestParam("size") int size,
            @RequestParam("page") int page) {
        Page<Question> pageQuestions = questionService.findQuestions(size, page - 1);
        List<Question> questions = pageQuestions.getContent();
        // List<Question> questions = questionService.findQuestions();
        List<Response> responses = questionMapper.questionsToResponses(questions);

        Info info = new Info(pageQuestions.getTotalElements(),
            pageQuestions.getTotalPages(),
            pageQuestions.getNumber() + 1,
            pageQuestions.getNumberOfElements());
        PagingResponse pagingResponse = new PagingResponse(info, responses);

        return new ResponseEntity<>(pagingResponse, HttpStatus.OK);
    }

    @GetMapping("/{questionId}")
    public ResponseEntity getQuestion(@PathVariable("questionId") long questionId) throws Exception {
        Question findQuestion = questionService.findQuestion(questionId);
        findQuestion.setView(findQuestion.getView() + 1);
        findQuestion.setCanUpdate(false);

        questionService.saveQuestion(findQuestion);
        Response response = questionMapper.questionToResponse(findQuestion);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity getQuestionsByKeyword(@RequestParam("size") int size,
            @RequestParam("page") int page,
            @RequestParam("keyword") String keyword) {
        Page<Question> pageQuestions = questionService
                .findQuestionsByKeyword(size, page - 1, keyword);
        List<Question> questions = pageQuestions.getContent();
        List<Response> responses = questionMapper.questionsToResponses(questions);
        Info info = new Info(pageQuestions.getTotalElements(),
            pageQuestions.getTotalPages(),
            pageQuestions.getNumber() + 1,
            pageQuestions.getNumberOfElements());
        PagingResponse pagingResponse = new PagingResponse(info, responses);

        return new ResponseEntity<>(pagingResponse, HttpStatus.OK);
    }

    @GetMapping("/tags/search")
    public ResponseEntity getQuestionsByTagName(@RequestParam("size") int size,
            @RequestParam("page") int page,
            @RequestParam("tagName") String tagName) {
        Page<QuestionTag> pageQuestionTags = questionTagService
                .findQuestionsByTagName(size, page - 1, tagName);
        List<QuestionTag> questionTags = pageQuestionTags.getContent();

        List<Question> questions = questionMapper.questionTagsToQuestions(questionTags);
        List<Response> responses = questionMapper.questionsToResponses(questions);

        Info info = new Info(pageQuestionTags.getTotalElements(),
            pageQuestionTags.getTotalPages(),
            pageQuestionTags.getNumber() + 1,
            pageQuestionTags.getNumberOfElements());
        PagingResponse pagingResponse = new PagingResponse(info, responses);

        return new ResponseEntity<>(pagingResponse, HttpStatus.OK);
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
