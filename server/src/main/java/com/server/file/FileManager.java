package com.server.file;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileManager {
//    @Value("${upload.path}")
    private String basePath;

    public void saveFiles(long id, String resources, List<MultipartFile> files) {
        for (int i = 0; i < files.size(); i++) {
            MultipartFile file = files.get(i);
            // String fileName = file.getOriginalFilename();
            // String extension = fileName.substring(fileName.lastIndexOf('.'));
            // String dbPath = String.format("/%s/%d/%d%s",
            //     resources,
            //     id,
            //     i,
            //     extension);
            String dbPath = String.format("/%s/%d/%d",
                resources,
                id,
                i);
            File target = new File(basePath + dbPath);
            if (!target.exists()) {
                target.mkdirs();
            }
            try {
                file.transferTo(target);
            } catch (IllegalStateException e) {
                throw new RuntimeException(e.getMessage());
            } catch (IOException e) {
                throw new RuntimeException(e.getMessage());
            }
        }

    }

    public List<byte[]> getFiles(int size, long id, String resources) {
        List<byte[]> files = new ArrayList<>();

        for (int i = 0; i < size; i++) {
            String fullPath = String.format("%s/%s/%d/%d",
                basePath,
                resources,
                id,
                i);
            File file = new File(fullPath);
            if (file.exists()) {
                try {
                    files.add(FileUtils.readFileToByteArray(file));
                } catch (IOException e) {
                    throw new RuntimeException("입출력 오류");
                }
            }
        }

        return files;
    }
}
