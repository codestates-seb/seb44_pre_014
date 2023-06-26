package com.server.vote.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.member.repository.MemberRepository;
import com.server.question.entity.Question;
import com.server.question.repository.QuestionRepository;
import com.server.vote.entity.Vote;
import com.server.vote.repository.VoteRepository;

@Service
public class VoteService {
    private VoteRepository voteRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private MemberRepository memberRepository;

    public VoteService(VoteRepository voteRepository) {
        this.voteRepository = voteRepository;
    }

    public int saveVote(Vote vote) {
        long memberId = vote.getMember().getMemberId();
        long questionId = vote.getQuestion().getQuestionId();
        Vote foundVote = voteRepository
                .findByMember_MemberIdAndQuestion_QuestionId(memberId,
                    questionId);

        if (foundVote != null) {
            return foundVote.getQuestion().getVoteQuantity();
        }
        Question foundQuestion = questionRepository.findById(questionId).get();
        foundQuestion.setCanUpdate(false);
        foundQuestion.setVoteQuantity(foundQuestion.getVoteQuantity()
                + vote.getUpDown());

        vote.setQuestion(foundQuestion);

        voteRepository.save(vote);

        return foundQuestion.getVoteQuantity();
    }
}
