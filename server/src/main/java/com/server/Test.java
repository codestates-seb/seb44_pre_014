package com.server;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Entity
@AllArgsConstructor
@Getter
public class Test {
	@Id
	int id;
	String name;
	String password;
	String email;

	public Test() {
	}

	@Override
	public String toString() {
		return String.format("%d, %s, %s, %s", id, name, password, email);
	}
}
