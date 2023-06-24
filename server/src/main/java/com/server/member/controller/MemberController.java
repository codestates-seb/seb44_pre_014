package com.server.member.controller;

import java.io.IOException;
import java.net.URI;
import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponentsBuilder;

import com.server.file.FileManager;
import com.server.member.dto.MemberDto;
import com.server.member.entity.Member;
import com.server.member.mapper.MemberMapper;
import com.server.member.service.MemberService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@Validated
@RequestMapping("/members")
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;

//    @Autowired
    private FileManager fileManager;

    public MemberController(MemberService memberService,
            MemberMapper memberMapper) {
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    // 회원가입
    @PostMapping("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post postDto) {
        Member member = memberMapper.postDtoToMember(postDto);

        Member createMember = memberService.createMember(member);
        URI location = UriComponentsBuilder
                .newInstance()
                .path("/members/{member-id}")
                .buildAndExpand(createMember.getMemberId())
                .toUri();

        return ResponseEntity.created(location).build();
    }

    // 회원정보 수정
    @PatchMapping("/{member-id}/edit")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive Long memberId,
            @Valid @RequestBody MemberDto.Patch patchDto) {
        Member member = memberMapper.patchDtoToMember(patchDto);
        member.setMemberId(memberId);

        memberService.updateMember(member);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 회원 조회
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive Long memberId) {
        Member member = memberService.findMember(memberId);

        return new ResponseEntity<>(memberMapper.memberToResponse(member), HttpStatus.OK);
    }

    // 회원 탈퇴
    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive Long memberId) {
        memberService.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/{memberId}/files")
    public ResponseEntity postFile(@PathVariable("memberId") long memberId,
            @RequestPart("files") List<MultipartFile> files) throws Exception {
        if (files.size() != 1) {
            return new ResponseEntity<>("프로필 사진은 1장이어야 합니다.",
                HttpStatus.BAD_REQUEST);
        }
        fileManager.saveFiles(memberId, "members", files);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{memberId}/files")
    public ResponseEntity getFile(@PathVariable long memberId) throws IOException {
        List<byte[]> files = fileManager.getFiles(1, memberId, "members");

        // return new ResponseEntity<>(files.get(0), HttpStatus.OK);
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(files.get(0));
    }
}
