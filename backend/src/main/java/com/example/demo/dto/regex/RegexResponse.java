package com.example.demo.dto.regex;

import java.util.ArrayList;
import java.util.List;

public class RegexResponse {

    private List<int[]> matchIndices = new ArrayList<>();
    private String errorMessage;

    public RegexResponse() {}

    public List<int[]> getMatchIndices() {
        return matchIndices;
    }

    public void setMatchIndices(List<int[]> matchIndices) {
        this.matchIndices = matchIndices;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

}
