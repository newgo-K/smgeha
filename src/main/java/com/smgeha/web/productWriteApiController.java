package com.smgeha.web;

import com.smgeha.domain.write.Write;
import com.smgeha.web.dto.write.WriteDto;
import com.smgeha.web.util.MD5Generator;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class productWriteApiController {
    @Value("${file.path}")
    private String fileRealPath;

    @PostMapping(value = "/write", consumes = "multipart/form-data")
    public String write(/*@RequestPart("images") List<MultipartFile> images,*/ @ModelAttribute WriteDto write) throws IOException {
        String a = reFile(write.getImages());

        return a;
    }
//    @PostMapping("/write")

    public String reFile(List<MultipartFile> files) throws IOException {
//    public String reFile(List<MultipartFile> files) throws IOException {
        // 파일이 빈 것이 들어오면 빈 것을 반환
        if (files.isEmpty()) {
            return null;
        }

        // 파일 이름을 업로드 한 날짜로 바꾸어서 저장할 것이다
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMM");
        String current_date = simpleDateFormat.format(new Date());


        /* 실행되는 위치의 'files' 폴더에 파일이 저장됩니다. */
        String path = fileRealPath + "images/" + current_date;
        /* 파일이 저장되는 폴더가 없으면 폴더를 생성합니다. */

        File file = new File(path);
        // 저장할 위치의 디렉토리가 존지하지 않을 경우
        if (!file.exists()) {
            // mkdir() 함수와 다른 점은 상위 디렉토리가 존재하지 않을 때 그것까지 생성
            file.mkdirs();
        }

        // 파일들을 이제 만져볼 것이다
        for (MultipartFile multipartFile : files) {
            // 파일이 비어 있지 않을 때 작업을 시작해야 오류가 나지 않는다
            if (!multipartFile.isEmpty()) {
                // jpeg, png, gif 파일들만 받아서 처리할 예정
                String contentType = multipartFile.getContentType();
                String originalFileExtension;
                // 확장자 명이 없으면 이 파일은 잘 못 된 것이다
                if (ObjectUtils.isEmpty(contentType)) {
                    break;
                } else {
                    if (contentType.contains("image/jpeg")) {
                        originalFileExtension = ".jpg";
                    } else if (contentType.contains("image/png")) {
                        originalFileExtension = ".png";
                    } else if (contentType.contains("image/gif")) {
                        originalFileExtension = ".gif";
                    }
                    // 다른 파일 명이면 아무 일 하지 않는다
                    else {
                        break;
                    }
                }
                // 각 이름은 겹치면 안되므로 나노 초까지 동원하여 지정
                String new_file_name = Long.toString(System.nanoTime()) + originalFileExtension;

                // 저장된 파일로 변경하여 이를 보여주기 위함
                file = new File(path + "/" + new_file_name);
                multipartFile.transferTo(file);
            }
        }
        return "ok";
    }
}
