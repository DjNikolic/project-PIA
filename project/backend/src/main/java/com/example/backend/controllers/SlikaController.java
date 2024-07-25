package com.example.backend.controllers;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/slika")
@CrossOrigin( origins = "http://localhost:4200/")
public class SlikaController {

    // Relativna putanja do assets foldera u frontend projektu
    private static final String UPLOAD_DIR = "../frontend/src/assets/";

    @PostMapping("/ubaciSliku")
    public void ubaciSliku(@RequestParam("file") MultipartFile f, @RequestParam("k") String k){
        File directory = new File(UPLOAD_DIR);
        if (!directory.exists()) {
            directory.mkdirs();
        }
        File uploadFile = new File(UPLOAD_DIR + k + f.getOriginalFilename());
        try (FileOutputStream fos = new FileOutputStream(uploadFile)) {
            fos.write(f.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }    
    }

     @PostMapping("/obrisiSliku")
    public void obrisiSliku(@RequestBody String filepath) {
        File file = new File(UPLOAD_DIR + filepath);
        if (file.exists()) 
            file.delete();
    }
}
    

