package com.server.member.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.server.answer.entity.Answer;
import com.server.audit.BaseEntity;
import com.server.comment.entity.Comment;
import com.server.question.entity.Question;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Member extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, length = 20)
    private String password;

    @OneToMany(mappedBy = "member")
    private List<Question> questions;

    @OneToMany(mappedBy = "member")
    private List<Answer> answers;

    @OneToMany(mappedBy = "member")
    private List<Comment> comments;
}
