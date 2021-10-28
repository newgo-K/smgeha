package com.smgeha.domain.write;

import org.springframework.web.multipart.MultipartFile;

import java.io.Serializable;
import java.util.List;

public class Write  {
    private String title;
    private String serial;
    private short product;
    private short manufacture;
    private String size;
    private short type;
    private String price;
    private List<MultipartFile> imgs;
}
