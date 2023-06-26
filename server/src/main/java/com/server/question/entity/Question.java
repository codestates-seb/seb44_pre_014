package com.server.question.entity;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PreUpdate;
import javax.persistence.Transient;

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

    private Long view;

    private Boolean solve;

    private Integer voteQuantity;

    @ManyToOne
    @JoinColumn(name = "memberId")
    private Member member;

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private List<Answer> answers;

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private List<Comment> comments;

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private List<QuestionTag> questionTags;

    @Transient
    private boolean canUpdate = true;

    @Override
    @PreUpdate
    public void preUpdate() {
        if (canUpdate) {
            LocalDateTime now = LocalDateTime.now().withNano(0);
            setModifiedAt(now);
        }
    }
}
