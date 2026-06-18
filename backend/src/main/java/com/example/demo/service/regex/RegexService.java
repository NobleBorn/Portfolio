package com.example.demo.service.regex;

import org.springframework.stereotype.Service;

import com.example.demo.dto.regex.RegexResponse;

import java.util.regex.*;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

@Service
public class RegexService {

    private Pattern pattern;
    private Boolean isGlobal;
    private HashMap<Character, Integer> flags;
    private RegexResponse response;

    public RegexService() {
        this.isGlobal = false;
        flags = new HashMap<>();

        flags.put('g', 0); // Global flag is handled separately, so we set it to 0 in the map
        flags.put('i', Pattern.CASE_INSENSITIVE);
        flags.put('m', Pattern.MULTILINE);
        flags.put('s', Pattern.DOTALL);
        flags.put('u', Pattern.UNICODE_CASE);
        flags.put('d', Pattern.UNIX_LINES);
        flags.put('x', Pattern.COMMENTS);

        response = new RegexResponse();
        
    }

    public RegexResponse testRegex(String regex, String testText, String flags) {
        // Implementation for testing regex
        int flagValue = getFlags(flags);
        if (isValidRegex(regex, flagValue)) {
            response.setMatchIndices(performRegexTest(regex, testText));
            response.setErrorMessage(null);
        } else {
            response.setMatchIndices(new ArrayList<>());
            response.setErrorMessage("Invalid regex pattern.");
        }

        return response;
    }

    private boolean isValidRegex(String regex, int flags) {
        try {
            this.pattern = Pattern.compile(regex, flags);
            return true;
        } catch (PatternSyntaxException e) {
            return false;
        }
    }

    private List<int[]> performRegexTest(String regex, String testText) {
        List<int[]> matchIndices = new ArrayList<>();

        Matcher matcher = this.pattern.matcher(testText);

        while (matcher.find()) {
            matchIndices.add(new int[]{matcher.start(), matcher.end()});
            if (!isGlobal) {
                break; // If not global, stop after the first match
            }
        }

        return matchIndices;
    }

    private int getFlags(String flagsStr) {
        int combinedFlags = 0;
        for (char flag : flagsStr.toCharArray()) {
            if (flags.containsKey(flag)) {
                if (flag == 'g') {
                    this.isGlobal = true; // Set global flag for later use
                } else {
                    combinedFlags |= flags.get(flag);
                }
            }
        }
        return combinedFlags;
    }
    
}
