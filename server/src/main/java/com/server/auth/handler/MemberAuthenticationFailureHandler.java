package com.server.auth.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import com.server.exception.ExceptionCode;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// 인증 실패 시 처리하는 핸들러 클래스
@Slf4j
public class MemberAuthenticationFailureHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request,
                                        HttpServletResponse response,
                                        AuthenticationException exception) throws IOException, ServletException {
        log.error(" Authentication failed : {}", exception.getMessage());

        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");
        response.setStatus(409);
        String message = ExceptionCode.INVALID_MEMBER.getMessage();

        String result = "{\"status\" : \""+409+"\",\n\"message\": \"" +message +"\"\n}";
        response.getWriter().write(result);
    }
}

