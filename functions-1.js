let jonSnowHealth = 100


//String conversion.
//jonSnowHealth = 100 + ''
//console.log(jonSnowHealth)
// jonSnowHealth = String(jonSnowHealth)
//console.log(jonSnowHealth)


//winner reassigning
let theWinnerIs = `Jamie is the winner!`

let newWinner = theWinnerIs.toLowerCase().replace(`jamie`,`Jon`)



//convert-string-to-kebab-case
//convert to lower case, then 

//newWinner = newWinner.toLowerCase().replaceAll(` `,`-`)

// let newWinnerLower = newWinner.toLocaleLowerCase()
// let newWinnerSplit = newWinnerLower.split(` `)
// let newWinnerKabob = newWinnerSplit.join(`-`)

//same as above but minified by chaining commands
let newWinnerKabob = newWinner.toLowerCase().split(` `).join(`-`)

//console.log(newWinner, `------------`,newWinnerKabob)


//functions

//lets create a function that will check to see if Jon is alive.

function isJonAlive() {
    if(jonSnowHealth > 0) {
        console.log(`Jon is alive!`)
    } else {
        console.log(`RIP Jon Snow.`)
    }
}

isJonAlive()


//lets create a function that will be used everytime Jon is attacked.

function surpriseAttack(attack){
    jonSnowHealth -= attack
    isJonAlive()
}

surpriseAttack(21)
surpriseAttack(13)
surpriseAttack(32)
surpriseAttack(26)
surpriseAttack(26)


//create a function that allows two people to greet eachother

function greetings(nameOne,nameTwo) {
    console.log(`Hello, ${nameOne}`)
    console.log(`Howdy, ${nameTwo}`)
}

greetings(`Devin`,`Dj`)





