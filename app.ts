import inquirer from "inquirer";
import chalk from "chalk"
import showBanner from "node-banner";

let score=0;
let play=true;

(async () => {
      await showBanner('Guissing Game', 'Guess to win',"green");
   })() 

async function GuessingNumber(){
    while (play) {
        
    
    let RandomNumber =Math.ceil((Math.random()*2)+1);
    let answer = await inquirer.prompt([{
        name:"userNumber",
        type:"number",
        message:"enter any number from 1 to 10"
    }]);

    if (answer.userNumber=== RandomNumber) {
        console.log(chalk.green("you guess a right number "))
        score +=10
        console.log(chalk.yellow(`here is your score ${score}`))
    }
    else{
      console.log(chalk.red("try again !!"))
      play=false
    }
}

}
setTimeout(() => {
    GuessingNumber()
}, 1000);
