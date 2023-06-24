package com.server.tag.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import com.server.tag.entity.Tag;

public interface TagRepository extends JpaRepository<Tag, Long> {
    boolean existsByTagName(String tagName);

    Tag findByTagName(String tagName);

    List<Tag> findAllByTagNameContainingIgnoreCase(String tagName, Sort sort);
}
