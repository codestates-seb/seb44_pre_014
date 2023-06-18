package com.server.member.mapper;

import org.mapstruct.Mapper;
import com.server.member.entity.Member;
import com.server.member.dto.MemberDto;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberDto.MemberPostDto memberPostDto);
    Member memberPatchDtoToMember(MemberDto.MemberPatchDto memberPatchDto);
    default MemberDto.MemberResponseDto memberToMemberResponseDto(Member member) {
        if (member == null) {
            return null;
        }
        MemberDto.MemberResponseDto memberResponseDto = new MemberDto.MemberResponseDto();
        memberResponseDto.setMemberId(member.getMemberId());
        memberResponseDto.setEmail(member.getEmail());
        memberResponseDto.setName(member.getName());
        memberResponseDto.setUserName(member.getUserName());

        return memberResponseDto;
    }
}
