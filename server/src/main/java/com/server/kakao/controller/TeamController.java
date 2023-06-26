package com.server.kakao.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/team")
public class TeamController {
    @GetMapping
    public String getTeamPage(HttpServletResponse response) throws IOException {
        String redirecUrl = "https://marred-wavelength-6bf.notion.site/caafba1487854c3ca7b2613937442662?v=931dc3d47e0248d4a9c6940502dbf61d";

        response.sendRedirect(redirecUrl);

        return "동료가 되어주세요";
    }
}
