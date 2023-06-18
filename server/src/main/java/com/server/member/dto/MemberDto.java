package com.server.member.dto;

import com.server.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

public class MemberDto {

    //회원가입 요청
    @Getter
    @Setter
    public static class MemberPostDto {
        @NotBlank(message = "이메일을 작성해 주세요.")
        @Email(message = "유효하지 않은 이메일 형식입니다.")
        private String email;

        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,20}$",
                message = "password 길이는 최소 8자 이상 최대 20자 이하, 숫자 1자 이상, 대소문자 구분없이 영문자 1자 이상, 특수문자 1자 이상 입력 해주세요.")
        private String password;

        @NotBlank(message = "성함을 작성해 주세요.")
        private String name;

        @NotBlank(message = "닉네임을 작성해 주세요")
        private String userName;
    }

    //회원정보 수정
    @Getter
    @Setter
    public static class MemberPatchDto {
        private Long memberId;

        @NotBlank(message = "이메일을 작성해 주세요.")
        @Email(message = "유효하지 않은 이메일 형식입니다.")
        private String email;

        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,20}$",
                message = "password 길이는 최소 8자 이상 최대 20자 이하, 숫자 1자 이상, 대소문자 구분없이 영문자 1자 이상, 특수문자 1자 이상 입력 해주세요.")
        private String password;


        @NotBlank(message = "닉네임을 작성해 주세요")
        private String userName;
    }

    //회원가입, 수정 응답
    @Setter
    @Getter
    public static class MemberResponseDto {
        private Long memberId;
        private String email;
        private String name;
        private String userName;
    }

}