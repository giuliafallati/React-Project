package com.blanka.jdbcProject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.Collection;

@RestController
public class PhotosController {

    private final PhotosService photosService;

    public PhotosController(@Autowired PhotosService photosService) {
        this.photosService = photosService;
    }

    @GetMapping("/photos")
    public Collection<Photo> getPhotos() {
        return photosService.get();
    }

    @PostMapping("/photos")
    public Photo uploadPhoto(@RequestPart("data") MultipartFile file,
                             @RequestParam("circleColor") String circleColor) throws IOException {
        if (file.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "File is empty");
        }
        return photosService.save(file.getOriginalFilename(), file.getContentType(), file.getBytes(), circleColor);
    }

    @DeleteMapping("/photos/{id}")
    public void deletePhoto(@PathVariable String id) {
        Photo photo = photosService.remove(id);
        if (photo == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
}
