package com.server.vote.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server.vote.entity.Vote;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    Vote findByMember_MemberIdAndQuestion_QuestionId(long memberId,
            long questionId);
}
