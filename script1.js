let myWords = "Hey there, am a fullstack dev in the making, what is your story though"

function myFun(){
 
    let newWords1 = myWords.split(" ").join("")
    let newWords2 = newWords1.split("")
    let newWords3 = newWords2.length

    let y = myWords.split(" ")
    let x = y.length
 
    let vowels = "aeiouAEIOU"
    let vowelsA = vowels.split(" ").join("")
    let vowelsB = vowelsA.split("")
    let count = 0

    for (let i = 0; i < newWords3; i++) {
        
        if (vowelsB.indexOf(newWords2[i]) !== -1) {
                count += 1;
            }
        }
    let finalResult = console.log(`There are ${x} Words, ${newWords3} letters and ${count} vowels`)
    return finalResult;
}

myFun()
