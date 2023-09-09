// DNA Pairing
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
    //constructiong base pair for the latteron capmparison
    const basePair=
    {
      "A":"T",
      "T":"A",
      "C":"G",
      "G":"C"
    }
  //empty array to store the pair
    const result=[]
  //iterating over each element of string  
  for(let i=0;i<str.length;i++)
  {
    //value of string
    const base=str[i]
    //value of strig and its pair from string and obj
     const pair=[base,basePair[base]]
     //finally pushing he array in the result
     result.push(pair)
  }
  return result
  }
  
  pairElement("ATCGA");
