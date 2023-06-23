package com.server.vote.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.member.entity.Member;
import com.server.member.repository.MemberRepository;
import com.server.vote.dto.VoteDto;
import com.server.vote.entity.Vote;
import com.server.vote.mapper.VoteMapper;
import com.server.vote.service.VoteService;

@RestController
@RequestMapping("/votes")
public class VoteContoller {
    private VoteService voteService;
    private VoteMapper voteMapper;

    @Autowired
    private MemberRepository memberRepository;

    public VoteContoller(VoteService voteService,
            VoteMapper voteMapper) {
        this.voteService = voteService;
        this.voteMapper = voteMapper;
    }

    @PostMapping
    public ResponseEntity postVote(@RequestBody VoteDto.Post postDto,
            Authentication authentication) {
        String email = authentication.getName();
        Member member = memberRepository.findByEmail(email).get();
        Vote vote = voteMapper.postDtoToVote(postDto);
        vote.setMember(member);

        int voteQuantity = voteService.saveVote(vote);

        return new ResponseEntity<>(voteQuantity, HttpStatus.OK);
    }

}
