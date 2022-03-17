package com.smgeha.mapper.write;

import com.smgeha.domain.write.WriteDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface WriteMapper {
    public int saveProduct (WriteDTO write);
    public void saveProductSearchInfo (@Param("id") int id, @Param("code") int code, @Param("subCode") int subCode);
    public void saveProductImages (@Param("id") int id, @Param("image") String image);
}
