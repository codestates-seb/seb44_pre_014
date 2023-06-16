package com.server;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class Controller {
	@GetMapping
	public ResponseEntity get() {
		List<Test> list = new ArrayList<>();

		for (int i = 1; i <= 10; i++) {
			list.add(new Test(i, "회원이름" + i, Integer.toString(i).repeat(5), String.format("asd%d@naver.com", i)));
		}
		for (Test t : list) {
			System.out.println(t.toString());
		}

		return new ResponseEntity<>(list, HttpStatus.OK);
	}
}
