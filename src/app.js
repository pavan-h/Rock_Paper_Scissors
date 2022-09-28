

const game  = () => {
    let playerScore = 0;
    let computerScore = 0;
    

    // Start The Game 
    const playBtn = document.querySelector(".play_btn"),
          intro = document.querySelector(".intro"),
          battle = document.querySelector(".battle_section");
          
    const startGame = () => {
        playBtn.addEventListener("click", () => {
            intro.classList.add("fadeOut");
            battle.classList.add("fadeIn");    
        });
    }
    

    // Start the battle 
    const sBattle = () => {
        const controls = document.querySelectorAll(".control_selector_container button"),
               playerControl = document.querySelector(".player_controls"),
               computerControl = document.querySelector(".computer_controls"),
               gameControls = document.querySelectorAll(".controls img");


        const computerOption = ["rock", "paper", "scissors"];
        
        gameControls.forEach(control => {
            control.addEventListener("animationend", function() {
                this.style.animation = "";
            })
        })

        // console.log(compNumber);
         
        controls.forEach(control => {
            control.addEventListener("click", function() {
                // console.log(this)

                // computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOption[computerNumber];
                // console.log(computerChoice)

                setTimeout(() => {
                    compareChoice(this.textContent, computerChoice);

                    // img
                    playerControl.src = `./img/${this.textContent}.png`;
                    computerControl.src = `./img/${computerChoice}.png`;
                }, 2000)


                // Animation Shake
                playerControl.style.animation = "shakePlayer 2s ease";
                computerControl.style.animation = "shakeComputer 2s ease";
            });
        });    

   

    };

    const updateScore = () => {
        const palyerResults = document.querySelector(".player_score p"),
              computerResults = document.querySelector(".computer_score p");

        palyerResults.textContent = playerScore;
        computerResults.textContent = computerScore;
    }

    const compareChoice = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".game_results");
        
        if(playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
        }

        // Rock
        if (playerChoice === "rock") {
            if(computerChoice === "scissors"){
                winner.textContent = "player Wins"
                playerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                computerScore++;   
                updateScore();
                return;
            }
        }

        //paper 
        if (playerChoice === "paper") {
            if(computerChoice === "rock"){
                winner.textContent = "Player Wins"
                playerScore++;    
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                computerScore++    
                updateScore();
                return;
            }
        }

        //scissors
        if (playerChoice === "scissors") {
            if(computerChoice === "rock"){
                winner.textContent = "Computer Wins"
                computerScore++ 
                updateScore();    
                return;
            } else {
                winner.textContent = "Player Wins";
                playerScore++;
                updateScore();                
                return;
            }
        }

        
         
    }

    startGame();
    sBattle();
}

game ();
