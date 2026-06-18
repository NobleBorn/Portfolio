package com.example.demo.controller.regex;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.dto.regex.RegexRequest;
import com.example.demo.dto.regex.RegexResponse;
import com.example.demo.service.regex.RegexService;

@RestController
@RequestMapping("/api/regex")
public class RegexController {

    private final RegexService regexService;

    public RegexController(RegexService regexService) {
        this.regexService = regexService;
    }

    @PostMapping("/test")
    public RegexResponse regex(@RequestBody RegexRequest regex) {
        return regexService.testRegex(regex.getPattern(), regex.getTestText(), regex.getFlags());
    }

    @GetMapping("/ping")
    public String ping() {
        return "Backend Works!";
    }
    
}
