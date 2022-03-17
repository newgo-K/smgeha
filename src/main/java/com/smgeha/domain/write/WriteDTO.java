package com.smgeha.domain.write;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
public class WriteDTO {
    private int id;
    private short productCode;
    private short manufactureCode;
    private short sizeCode;
    private short typeCode;
    private String title;
    private String url;
    private String serial;
    private short product;
    private String manufacture;
    private String size;
    private String price;
    private List<MultipartFile> images;
    private String image;
}
