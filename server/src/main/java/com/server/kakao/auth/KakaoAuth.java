package com.server.kakao.auth;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

@Component
public class KakaoAuth {
	public String getTokens(String code) {
		String tokens = WebClient.create("https://kauth.kakao.com/oauth/token")
				.post()
				.contentType(MediaType.APPLICATION_FORM_URLENCODED)
				.body(BodyInserters
						.fromFormData("grant_type", "authorization_code")
						.with("client_id", "0454767c5440ffe39451b5e9a84c732e")
						.with("redirect_url", "http://teamdev.shop/kakao")
						.with("code", code))
				.retrieve()
				.bodyToMono(String.class)
				.block();

		return tokens;
	}

	public String sendMessage(String accessToken, String message) {
		String body = "{\"object_type\": \"text\", \"text\": \"" + message + "\", \"link\": {}}";

		String result_code = WebClient.create("https://kapi.kakao.com/v2/api/talk/memo/default/send")
				.post()
				.accept(MediaType.APPLICATION_JSON)
				.contentType(MediaType.APPLICATION_FORM_URLENCODED)
				.header("Authorization", "Bearer " + accessToken)
				.body(BodyInserters
						.fromFormData("template_object", body))
				.retrieve()
				.bodyToMono(String.class)
				.block();

		return message;
	}

	public WebClient getClient(String url) {
		// return WebClient.create(url).get();
		return null;
	}

	public WebClient postClient() {
		return null;
	}
}
