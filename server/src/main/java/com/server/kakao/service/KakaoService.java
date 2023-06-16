package com.server.kakao.service;

import org.springframework.stereotype.Service;

import com.server.kakao.auth.KakaoAuth;

@Service
public class KakaoService {
	private KakaoAuth kakaoAuth;

	public KakaoService(KakaoAuth kakaoAuth) {
		this.kakaoAuth = kakaoAuth;
	}

	public String sendMessage(String accessToken, String message) {
		try {
			kakaoAuth.sendMessage(accessToken, message);
		} catch (Exception e) {
			return "메시지 전송 실패. 오류 제보 부탁드립니다.";
		}

		return "메시지 전송 성공: " + message;
	}

	public String getTokens(String code) {
		// 토큰이 있을때, 없을때, 유효하지않을떄
		
		return kakaoAuth.getTokens(code);
	}
}
