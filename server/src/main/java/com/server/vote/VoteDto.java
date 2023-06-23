package com.server.vote;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.server.member.entity.Member;
import com.server.question.entity.Question;

// @Entity
public class VoteDto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long likeId;

    @ManyToOne
    @JoinColumn(name = "questionId")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "memberId")
    private Member member;
}
