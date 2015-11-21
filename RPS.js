var compare = function(choice1,choice2)
{

if(choice1 === choice2)
{
	return "The result is a tie!";
}

else if(choice1 === "rock")
			{
				if (choice2 ==="scissors") 
				{return "rock wins";}
				else
				{return "paper wins";}
			}
else if(choice1==="paper")
			{	
				if(choice2==="rock")
				{return "paper wins";}
				else
				{return "scissors win";}
			}
else if(choice1==="scissors")
			{	
				if(choice2==="paper")
				{return "scissors wins";}
				else
				{return "rock wins";}
			}
}

var RPS = function(userChoice)
{

    var computerChoice = Math.random();
    console.log(computerChoice);

    if(computerChoice<= 1/3)
    {	
	computerChoice = "rock";
    }
    else if(computerChoice > 1/3  && computerChoice <= 2/3)
    {
	computerChoice = "paper";
    }
    else{
	computerChoice = "scissors";
    }
    console.log("Computer: " + computerChoice);

    return compare(userChoice,computerChoice);
    
}

RPS("rock"); //just a test call 