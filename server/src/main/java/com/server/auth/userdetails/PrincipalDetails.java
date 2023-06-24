package com.server.auth.userdetails;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;
import com.server.member.entity.Member;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

// spring security 에서 인증된 사용자에 대한 정보를 나타내는 클래스
@Slf4j
public class PrincipalDetails extends Member implements UserDetails, OAuth2User {
    private Map<String, Object> attributes;

    // MemberDetails
    public PrincipalDetails(Member member) {
        setMemberId(member.getMemberId());
        setUsername(member.getUsername());
        setEmail(member.getEmail());
        setPassword(member.getPassword());
        setRoles(member.getRoles());
    }

    // OAuth2Member
    public PrincipalDetails(Member member, Map<String, Object> attributes) {
        setMemberId(member.getMemberId());
        setUsername(member.getUsername());
        setEmail(member.getEmail());
        setPassword(member.getPassword());
        setRoles(member.getRoles());
        this.attributes = attributes;
    }

    // OAuth2
    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<String> roles = this.getRoles();
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
    }

    @Override
    public String getUsername() {
        return getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    @Override
    public String getName() {
        return null;
    }
}
