package com.server.member.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Entity
@Getter
@AllArgsConstructor
public class Member {
	@Id
	long memberId;
	String email;
	String username;
	String password;
	String name;

	// public Member() {
	// }
}
