package com.smgeha.web.dto.write;

import lombok.Data;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Getter
@Data
public class WriteDto {
    private String title;
    private String serial;
    private short product;
    private short manufacture;
    private String size;
    private short type;
    private String price;
    private List<MultipartFile> images;
}
