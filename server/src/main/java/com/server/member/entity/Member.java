package com.server.member.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false, length = 20)
    private String password;
    @Column(nullable = false, updatable = false)
    private String name;
    @Column(nullable = false, unique = true)
    private String userName;
}
