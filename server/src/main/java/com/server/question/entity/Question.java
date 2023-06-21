package com.server.question.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.server.answer.entity.Answer;
import com.server.audit.BaseEntity;
import com.server.comment.entity.Comment;
import com.server.member.entity.Member;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Question extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    private String title;

    private String content;

    private LocalDateTime createdAt = LocalDateTime.now();

    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "memberId")
    private Member member;

    @OneToMany(mappedBy = "question")
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "question")
    private List<Answer> answers = new ArrayList<>();

    public enum QuestionStatus {
        QUESTION_WITH_NO_REPLY(1, "답변 없음"),
        QUESTION_WITH_REPLY(2, "답변 있음");

        @Getter
        private int stepNumber;

        @Getter
        private String stepDescription;

        QuestionStatus(int stepNumber, String stepDescription) {
            this.stepNumber = stepNumber;
            this.stepDescription = stepDescription;
        }
    }

}
