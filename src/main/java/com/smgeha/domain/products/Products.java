package com.smgeha.domain.products;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Data
public class Products {
    private Long id;

    private String title;

    private String num;

    private String make;

    private String liter;

    private String door;

    private String design;

    private short productId;

}
