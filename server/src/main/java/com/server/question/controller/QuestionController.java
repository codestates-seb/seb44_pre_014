package com.server.question.controller;

import com.server.question.service.QuestionService;

// @RestController
// @RequestMapping("/questions")
public class QuestionController {
    private QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

}
