package com.smgeha.domain;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
// 클래스 상속시 칼럼으로 인식
@MappedSuperclass
// 클래스에 Auditing 기능 포함
@EntityListeners(AuditingEntityListener.class)
public class BaseTimeEntity {
    // Entity가 생성되어 저장될 때 시간이 자동 저장
    @CreatedDate
    private LocalDateTime createdDate;

    // 조회한 Entity 값 변경 때 시간이 자동 저장
    @LastModifiedDate
    private LocalDateTime modifiedDate;
}
