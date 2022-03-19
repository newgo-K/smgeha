package com.smgeha.domain.write;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
public class WriteFormDTO {
    private int id;
    private short productCode;
    private short manufactureCode;
    private short sizeCode;
    private short typeCode;
    private String title;
    private String url;
    private String serial;
    private String manufacture;
    private String size;
    private String price;
    private List<String> images;
    private String image;
}
