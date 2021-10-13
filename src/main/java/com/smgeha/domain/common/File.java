package com.smgeha.domain.common;


import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Data
public class File {
    private Long id;

    private String originFileName;

    private String fileName;

    private String filePath;

}
