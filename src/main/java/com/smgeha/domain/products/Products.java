package com.smgeha.domain.products;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length=100, nullable = false)
    private String title;

    @Column(length=100, nullable = false)
    private String num;

    @Column(length=100, nullable = false)
    private String make;

    @Column(length=100, nullable = false)
    private String liter;

    @Column(length=100, nullable = false)
    private String door;

    @Column(length=100, nullable = false)
    private String design;

    // 해당 클래스의 빌더 패턴 클래스 생성
    @Builder
    public Products(String title, String num, String make, String liter, String door, String design) {
        this.title = title;
        this.num = num;
        this.make = make;
        this.liter = liter;
        this.door = door;
        this.design = design;
    }

}
