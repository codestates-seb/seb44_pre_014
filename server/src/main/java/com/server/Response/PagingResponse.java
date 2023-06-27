package com.server.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PagingResponse {

    private Info info;
    private List<Response> contents;

    @Getter
    @AllArgsConstructor
    public static class Info {
        private Long totalCount;
        private Integer totalPage;
        private Integer currentPage;
        private Integer count;
    }
}
