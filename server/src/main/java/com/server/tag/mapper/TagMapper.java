package com.server.tag.mapper;

import java.util.ArrayList;
import java.util.List;

import org.mapstruct.Mapper;

import com.server.tag.entity.Tag;

@Mapper(componentModel = "spring")
public interface TagMapper {
    default List<Tag> tagNamesToTags(List<String> tagNames) {
        List<Tag> tags = new ArrayList<>();

        for (String tagName : tagNames) {
            Tag tag = new Tag();
            tag.setTagName(tagName);
            tags.add(tag);
        }

        return tags;
    }

    default List<String> tagsToTagNames(List<Tag> tags) {
        List<String> tagNames = new ArrayList<>();

        for (Tag tag : tags) {
            tagNames.add(tag.getTagName());
        }

        return tagNames;
    }
}
