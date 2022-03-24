package com.smgeha.service.write;

import com.smgeha.domain.write.WriteDTO;
import com.smgeha.domain.write.WriteFormDTO;
import com.smgeha.mapper.product.ProductMapper;
import com.smgeha.mapper.write.WriteMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WriteServiceImpl implements WriteService {
    @Autowired
    private WriteMapper writeMapper;

    @Autowired
    private ProductMapper productMapper;

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
        if(subCode != 0) {
            writeMapper.saveProductSearchInfo(id, code, subCode);

            subCode = write.getTypeCode();
            writeMapper.saveProductSearchInfo(id, code, subCode);
        }
    }

    @Override
    public void saveProductImages (int id, List<String> images) {
        for(String image : images) {
            writeMapper.saveProductImages(id, image);
        }
    };

    @Override
    public WriteFormDTO selectWriteData(int id) {
        WriteFormDTO write = new WriteFormDTO();

        write = writeMapper.selectProductInfo(id);
        write.setProductCode(writeMapper.selectProductSearchInfoId(id));
        List<Short> codes = writeMapper.selectProductSearchInfo(id);

        write.setManufactureCode(codes.get(0));

        if(codes.size() > 1) {

            write.setSizeCode(codes.get(1));
            write.setTypeCode(codes.get(2));
        }

        write.setImages(writeMapper.selectProductSubImg(id));
        return write;
    }

    @Override
    public void updateWrite(int id, WriteDTO write) {
        productMapper.deleteProductSearchInfo(id);
        productMapper.deleteProductSubImg(id);
        productMapper.deleteProductInfo(id);
    }
}
