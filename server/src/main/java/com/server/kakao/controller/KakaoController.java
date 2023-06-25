package com.server.kakao.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.server.kakao.auth.Token;
import com.server.kakao.service.KakaoService;

@RestController
@RequestMapping("/kakao")
public class KakaoController {
    @Value("${kakao.redirect-url}")
    private String redirecUrl;

    private String accessToken;
    private String refreshToken;
    private Token tokens;
    private KakaoService kakaoService;

    public KakaoController(KakaoService kakaoService) {
        this.kakaoService = kakaoService;
    }

    @GetMapping
    public Object getKakao(@RequestParam(value = "code", required = false) String code) {
        // 토큰 갱신 작업 필요
        if (code == null) {
            return getMainPage(redirecUrl);
        }
        try {
            tokens = kakaoService.getTokens(code, tokens);
        } catch (Exception exception) {
            return "토큰 발급에 실패했습니다. 오류 제보 부탁드립니다.";
        }
        String response = "토큰이 성공적으로 발급 되었습니다.\\n"
                + "버튼을 눌러 메시지를 보내보세요.(버튼 미구현)\\n\\n"
                + redirecUrl + "/kakao/{message}\\n"
                + "{message} 대신 원하는 메시지를 입력하면 전송됩니다.";

        accessToken = tokens.getAccess_token();
        refreshToken = tokens.getRefresh_token();
        response = kakaoService.sendMessage(accessToken, response);

        return response.replace("\\n", "<br />");
    }

    @GetMapping("/{message}")
    // 나중에 입력창을 구현하고 Post요청으로 메시지 정보를 받으려고 한다.
    public String postMessage(@PathVariable("message") String message,
            HttpServletResponse response) throws IOException {
        if (tokens == null) {
            // response.sendRedirect(redirecUrl + "/kakao");
            response.sendRedirect("https://naver.com");
            return "인증 필요";
        }

        return kakaoService.sendMessage(accessToken, message);
    }

    public ModelAndView getMainPage(String redirectUrl) {
        boolean isLocal = redirecUrl.charAt(7) == 'l';

        if (isLocal) {
            return new ModelAndView("local.html");
        }
        return new ModelAndView("kakao.html");
    }
}
