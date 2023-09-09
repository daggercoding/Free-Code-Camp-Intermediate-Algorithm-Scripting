// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    // defining regex
      const regex=/[a,e,i,o,u]/
    //if first element of string belongs vovels
      if(regex.test(str[0]))
      {
        return str+"way"
      }
      else
      {
        //checking for the index value of first vovel
        const firstVovel=str.indexOf(str.match(regex))
        //if any vovel is presented
        if(firstVovel>=0)
        {
        return str.slice(firstVovel)+str.slice  (0,        firstVovel)+"ay"
        }
        //if any vovel is not presented in the string
        else
        {
        return str+"ay";
        }
      
      }
    }
    
    translatePigLatin("rhythm");
    translatePigLatin("consonant");
    translatePigLatin("elephant");
