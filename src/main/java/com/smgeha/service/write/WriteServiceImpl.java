package com.smgeha.service.write;

import com.smgeha.domain.write.WriteRepository;
import com.smgeha.web.dto.write.WriteDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class WriteServiceImpl implements WriteService {
    @Autowired
    private WriteRepository writeRepository;


    @Override
    public int saveProduct (WriteDto write) {
        return writeRepository.saveProduct(write);
    };

    @Override
    public void saveProductImages (int id, List<String> images) {
    writeRepository.saveProductImages(id, images);
    };
}
