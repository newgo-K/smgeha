package com.smgeha.service.write;

import com.smgeha.domain.write.WriteDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface WriteService {
    int saveProduct (WriteDTO write);
    void saveProductSearchInfo (WriteDTO write);
    void saveProductImages (int id, List<String> images);
}
