package com.server.audit;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@MappedSuperclass
// @EntityListeners(AuditingEntityListener.class)
public abstract class BaseEntity {
    private String content;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now().withNano(0);

    @LastModifiedDate
    private LocalDateTime modifiedAt = LocalDateTime.now().withNano(0);
}
