package com.server.member.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.server.Response.Response;
import com.server.member.dto.MemberDto;
import com.server.member.entity.Member;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member postDtoToMember(MemberDto.Post memberPostDto);

    Member patchDtoToMember(MemberDto.Patch memberPatchDto);

    Response memberToResponse(Member member);

    List<Response> membersToResponses(List<Member> members);
}
