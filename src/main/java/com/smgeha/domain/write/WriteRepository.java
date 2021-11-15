package com.smgeha.domain.write;

import com.smgeha.web.dto.write.WriteDto;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WriteRepository {
    int saveProduct(@Param(value="write") WriteDto write);
    void saveProductImages(@Param(value="id") int id, @Param(value="images")List<String> images);
}
