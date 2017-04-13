// your code here!
$(function(){
    // This Function removes returns and replaces them with a space
    // It also removes all the punctuations except spaces. 
    // Spaces are left so that the split can create an array of words based on the spaces.
    function valueCleanUp(value){
        var noReturnValues = value.replace(/(\r\n|\n|\r)/gm," ");
        var cleanValue = noReturnValues.replace(/[.,\/#!$%\^&\*;:{}=\-_`~\'()]/g,"");
        return cleanValue;
    }

    // Finds the length of the Array of words that were created
    function getWordCount(words){
        var cleanArray = valueCleanUp(words).split(" ");
        return cleanArray.length;
    }
    
    // Removes spaces and gives you the character count
    function getWordCharacterCount(wordsValue){
        return valueCleanUp(wordsValue).replace(/[ ]/g, '').split('').length;
    }

    // Converts array to object of unique words
    function getUniqueWords(wordsArray){
        var uniqueWords = wordsArray.filter(function(el, i, arr){
            return arr.indexOf(el) === i;
        })
        return uniqueWords.length;
    }

    // This function handles the actions when the form gets submitted
    function formSubmitActions(){
        var submittedWords = $('#user-text').val();        
        var wordsArray = valueCleanUp(submittedWords).split(' ');

        $('.text-report').removeClass('hidden');

        $('.wordCountResult').text(getWordCount(submittedWords));
        // console.log(getWordCount(submittedWords));

        $('.uniqueWordResult').text(getUniqueWords(wordsArray));
        // console.log(getUniqueWords(wordsArray));

        $('.averageWordResult').text(function(){
           return Math.round(getWordCharacterCount(submittedWords) / getWordCount(submittedWords) * 100) / 100 + ' Characters';
        })    
    }

    // On Submit Function
    $('#analyzeWordsForm').submit(function(event){
        event.preventDefault();
        formSubmitActions();
    });
});