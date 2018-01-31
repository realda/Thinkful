function getTokens(rawString) {
    // NB: `.filter(Boolean)` removes any falsy items from an array
    // Use regular expression to get all the single words from input parameter rawString.
    return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function mostFrequentWord(text) {
    // Get every words from text.
    var words = getTokens(text);

    // Count frequency for each word. If the word is already available in wordFrequencies object, increase the frequency value by 1. Otherwise, add new pair into wordFrequencies object for the new word, and also set the frequency value to be 1.
    var wordFrequencies = {};
    for (var i = 0; i <= words.length; i++) {
        if (words[i] in wordFrequencies) {
            wordFrequencies[words[i]]++;
        }
        else {
            wordFrequencies[words[i]]=1;
        }
    }
    // Find the max count key from wordFrequencies object:
    // First, get the first key from object as default value of max count key.
    var currentMaxKey = Object.keys(wordFrequencies)[0];
    // Second, get the default value of max count.
    var currentMaxCount = wordFrequencies[currentMaxKey];
    // Third, loop each key(word) from object to find the max count keys.
    for (var word in wordFrequencies) {
        if (wordFrequencies[word] > currentMaxCount) {
            currentMaxKey = word;
            currentMaxCount = wordFrequencies[word];
        }
    }
    return currentMaxKey;
}