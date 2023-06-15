package com.server.kakao.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.server.kakao.service.KakaoService;

@RestController
@RequestMapping("/kakao")
public class KakaoController {
	private KakaoService kakaoService;

	private String tokens;
	private String accessToken;
	private String refreshToken;

	public KakaoController(KakaoService kakaoService) {
		this.kakaoService = kakaoService;
	}

	@GetMapping()
	public Object getKakao(@RequestParam(value = "code", required = false) String code) {
		if (code == null) {
			return new ModelAndView("index.html");
		}

		String response = "토큰이 성공적으로 발급 되었습니다.\\n"
				+ "버튼을 눌러 메시지를 보내보세요.(버튼 미구현)\\n\\n"
				+ "http://teamdev/kakao/{message}\\n"
				+ "{message} 대신 원하는 메시지를 입력하면 전송됩니다.";

		try {
			if (tokens == null) {
				tokens = kakaoService.getTokens(code);
			}
		} catch (Exception exception) {
			return "토큰 발급에 실패했습니다. 오류 제보 부탁드립니다.";
		}

		if (tokens != null) {
			JsonElement jsonElement = JsonParser.parseString(tokens);
			accessToken = jsonElement.getAsJsonObject().get("access_token").toString();
			refreshToken = jsonElement.getAsJsonObject().get("refresh_token").toString();
		}
		response = kakaoService.sendMessage(accessToken, response);

		return response.replace("\\n", "<br />");
	}

	@GetMapping("/{message}")
	public String postMessage(@PathVariable("message") String message) {
		return kakaoService.sendMessage(accessToken, message);
	}
}
