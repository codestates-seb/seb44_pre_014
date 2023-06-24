package com.server.tag.service;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.server.tag.entity.Tag;
import com.server.tag.mapper.TagMapper;
import com.server.tag.repository.TagRepository;

@Service
public class TagService {
    private TagRepository tagRepository;
    private TagMapper tagMapper;

    public TagService(TagRepository tagRepository,
            TagMapper tagMapper) {
        this.tagRepository = tagRepository;
        this.tagMapper = tagMapper;
    }

    public List<Tag> saveTags(List<String> tagNames) {
        if (tagNames == null) {
            return null;
        }
        List<Tag> tags = tagMapper.tagNamesToTags(tagNames);

        for (Tag tag : tags) {
            Tag foundTag = tagRepository.findByTagName(tag.getTagName());
            if (foundTag == null) {
                tagRepository.save(tag);
            } else {
                tag.setTagId(foundTag.getTagId());
            }
        }

        return tags;
    }

    public List<Tag> findAllByTagName(String tagName) {
        Sort sort = Sort.by("tagName");
        List<Tag> tags = tagRepository.findAllByTagNameContainingIgnoreCase(tagName, sort);

        return tags;
    }
}
