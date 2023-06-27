package com.server.member.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.server.member.dto.MemberDto;
import com.server.member.entity.Member;
import com.server.response.Response;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member postDtoToMember(MemberDto.Post memberPostDto);

    Member patchDtoToMember(MemberDto.Patch memberPatchDto);

    Response memberToResponse(Member member);

    List<Response> membersToResponses(List<Member> members);
}
