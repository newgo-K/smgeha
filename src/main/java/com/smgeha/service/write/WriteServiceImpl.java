package com.smgeha.service.write;

import com.smgeha.domain.write.WriteDTO;
import com.smgeha.mapper.write.WriteMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WriteServiceImpl implements WriteService {
    @Autowired
    private WriteMapper writeMapper;

    @Override
    public int saveProduct (WriteDTO write) {
        return writeMapper.saveProduct(write);
    };

    @Override
    public void saveProductSearchInfo (WriteDTO write) {
        int id = write.getId();
        int code = write.getProductCode();
        int subCode = write.getManufactureCode();

        writeMapper.saveProductSearchInfo(id, code, subCode);

        subCode = write.getSizeCode();
        writeMapper.saveProductSearchInfo(id, code, subCode);

        subCode = write.getTypeCode();
        writeMapper.saveProductSearchInfo(id, code, subCode);
    }

    @Override
    public void saveProductImages (int id, List<String> images) {
        for(String image : images) {
            writeMapper.saveProductImages(id, image);
        }

    };
}
