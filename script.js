function showFlashCard() {
    
    const flash = document.getElementById("flashCard");
    var flashCard = document.createElement('div');
    flashCard.className = "flashCard";
    flashCard.innerHTML = `
    <h1>Welcome to the game</h1>
    <p>Once upon a time, there was a mysterious 
        entity known as the Shadow Lord, who 
        lived in the darkest corner of the forest.
        No one knew what it looked like or what 
        it wanted, but rumors spread that it 
        was planning to attack the nearby human 
        kingdom.
        </p>
        <p>The humans, being terrified of this 
            mysterious entity, decided to gather 
            their armies and prepare for war. 
            They called upon you, the player, 
            to lead their troops.
        </p>
        <p>
            As you marched towards the 
            Shadow Lord's territory, 
            you could feel an eerie silence 
            in the air. The forest, which was 
            once filled with chirping birds 
            and rustling leaves, was now 
            completely still. Finally you 
            came face to face with the 
            Shadow Lord. Shadow Lord and you 
            decide to set the scores by playing 
            the battle of three.
        </p>
        <p>
            Shadow lord and you have three 
            options to choose from: the warrior, 
            the dragon, or the mushroom. The 
            warrior can kill the dragon with 
            their wisdom and strength, the 
            mushrooms can kill the warrior with 
            its strong poisonous fumes, and the 
            dragon could burn the mushroom to 
            ashes. Your choice must be made 
            wisely, as the person with the most 
            victories will win the war.
        </p>
        <button class="btn" onclick="hideFlashCard()">Let the war begin!</button>
        `;
    flash.appendChild(flashCard);
}

function hideFlashCard() {
    
    // remove the flash card from the DOM
    const contain = document.getElementById('container');
    const flash = document.getElementById('flashCard');
    contain.removeChild(flash);

    //Load the game play
    const gameplay = document.getElementById('gamePlay');
    const war = document.createElement("div");
    war.className = 'war';
    war.innerHTML = `
    <div class="scoreboard">
        <div class="score">
            <div class="row">
                <div class="col col-heading">
                    <h1>Player</h1>
                </div>
                <div class="col col-display" id="scorePlayer">0</div>
            </div>
            <div class="row">
                <div class="col col-heading">
                    <h1>Shadow</h1>
                </div>
                <div class="col col-display" id="scoreComp">0</div>
            </div>
        </div>
    </div>
    <div id="arena">
        <img src="" id='playerImg' />
        <p id='naration'></p>
        <img src ="" id='compImg' />
    </div>
    <h1 class="heading">Make your choice :</h1>
    <div class="btns">
        <img src="./images/athena.png" alt="warrior" class="btn-img" id ='warrior' onclick='showImage(this.id)'>
        <img src="./images/dragon (1).png" alt="dragon" class="btn-img" id='dragon' onclick='showImage(this.id)'>
        <img src="./images/mushroom.png" alt="mushroom" class="btn-img" id='mushroom' onclick='showImage(this.id)'>
    </div>`;
    gameplay.appendChild(war);
    const playerImg = document.getElementById('playerImg');
    const compImg = document.getElementById('compImg');
    const field = document.getElementById('naration');
    const pscore = document.getElementById('scorePlayer');
    const cscore = document.getElementById('scoreComp');
    
}

let functionCall = 0;
let player = 0;
let comp = 0;

function showImage(id){
    
    functionCall += 1;
    
    if (functionCall <= 5){
        const image = document.getElementById(id);
        const displayImg = document.getElementById('playerImg');

        displayImg.src = image.src;
        
        const arr =[
            "./images/athena.png", 
            "./images/dragon (1).png", 
            "./images/mushroom.png"
        ];
        
        let randomIndex = Math.floor(Math.random()* arr.length);
        const displayCompImg = document.getElementById("compImg");
        displayCompImg.src = arr[randomIndex];

        const naration = document.getElementById('naration');
        
        const pscore = document.getElementById('scorePlayer');
        const cscore = document.getElementById('scoreComp');


        if(id ==='warrior' && randomIndex === 0){
            naration.textContent = `The two warriors 
            stood on opposite ends of the 
            battlefield, each ready to strike the 
            other down. They clashed swords and 
            shields, neither giving an inch to the 
            other. Blow after blow was exchanged, 
            but neither could land a decisive hit. 
            In the end, both warriors stood, 
            battered and bruised, but the fight had 
            gone nowhere, resulting in a tie.`;
            
        }

        else if(id ==='warrior' && randomIndex === 1){
            naration.textContent = `The warrior and 
            the dragon locked eyes, ready to fight. 
            With a swift swing of her sword, the 
            warrior struck the dragon's vulnerable 
            spot. The dragon let out a final roar 
            before collapsing to the ground defeated.
            You get a point!`;
            player += 1;
            pscore.innerHTML = player;
        }

        else if (id === 'warrior' && randomIndex === 2){
            naration.textContent = `The warrior 
            charged towards the mushroom, her sword 
            gleaming in the sunlight. But as she 
            approached, the mushroom released a 
            cloud of poisonous gas that engulfed him. 
            The warrior fell to the ground, defeated, 
            as the mushroom stood tall, victorious.
            Shadow Lord gets a point`;
            comp += 1;
            cscore.innerHTML = comp;
        }

        else if(id ==='dragon' && randomIndex === 0){
            naration.textContent = `The warrior and 
            the dragon locked eyes, ready to fight. 
            With a swift swing of her sword, the 
            warrior struck the dragon's vulnerable 
            spot. The dragon let out a final roar 
            before collapsing to the ground defeated.
            Shadow Lord gets the point`;
            comp += 1;
            cscore.innerHTML = comp;
        }

        else if(id ==='dragon' && randomIndex === 1){
            naration.textContent = `The two dragons 
            circled each other in the air, growling 
            and snapping their jaws, neither able to 
            gain the upper hand. Their powerful wings 
            flapped furiously as they clashed in 
            mid-air, but their strength was equally 
            matched. Eventually, they both tired and 
            landed on opposite sides of the mountain, 
            their battle ending in a stalemate.
            It's a tie`;
            
        }

        else if (id === 'dragon' && randomIndex === 2){
            naration.textContent = `The dragon let 
            out a fierce roar as it breathed a 
            stream of scorching flames towards the 
            mushroom. The mushroom trembled and 
            tried to defend itself with its 
            poisonous fumes, but it was no match for 
            the dragon's fiery power. In a matter of 
            seconds, the mushroom was reduced to a 
            pile of smoldering ashes, and the dragon 
            emerged victorious from the battle.
            You get a point`;
            player += 1;
            pscore.innerHTML = player;
        }
        else if(id ==='mushroom' && randomIndex === 0){
            naration.textContent = `The warrior 
            charged towards the mushroom, her sword 
            gleaming in the sunlight. But as she 
            approached, the mushroom released a 
            cloud of poisonous gas that engulfed him. 
            The warrior fell to the ground, defeated, 
            as the mushroom stood tall, victorious.
            You get a point`;
            player += 1;
            pscore.innerHTML = player;
        }

        else if(id ==='mushroom' && randomIndex === 1){
            naration.textContent = `The dragon let 
            out a fierce roar as it breathed a 
            stream of scorching flames towards the 
            mushroom. The mushroom trembled and 
            tried to defend itself with its 
            poisonous fumes, but it was no match for 
            the dragon's fiery power. In a matter of 
            seconds, the mushroom was reduced to a 
            pile of smoldering ashes, and the dragon 
            emerged victorious from the battle.
            Shadow Lord gets a point`;
            comp += 1;
            cscore.innerHTML = comp;
        }

        else if (id === 'mushroom' && randomIndex === 2){
            naration.textContent = `The two mushrooms 
            stood facing each other, emitting their 
            toxic fumes, but neither seemed to have 
            a clear advantage. They continued to 
            circle each other, waiting for an 
            opening, but the fight went nowhere. 
            Eventually, they both withdrew, 
            acknowledging that it was a tie, and 
            went back to their respective sides.
            It's a tie`;
            
        }
        
        
        
    }

    if (functionCall === 5){
        const contain = document.getElementById('container');
        const gameplay = document.getElementById('gamePlay');
        contain.removeChild(gameplay);

        if (player > comp){
            contain.innerHTML = `<h1 class ='result'>YOU WON!</h1>
            <div id="arena">
                <p id='naration'>After the shadow 
                lord loses the war, the player 
                offers him a job at a local 
                restaurant. The shadow lord, who is 
                a terrible cook, keeps burning the 
                food and causing chaos in the kitchen. 
                However, his dragon's fire breath 
                proves to be an effective way to 
                cook food quickly, and the restaurant 
                becomes a huge hit with customers who 
                enjoy the "dragon-cooked" meals.</p>
            </div>`;
        }
        else if(comp > player){
            contain.innerHTML = `<h1 class ='result'>SHADOW LORD WON!</h1>
            <div id="arena">
                <p id='naration'>As the war ends 
                with Shadow Lord's victory, he 
                approaches you with a wide smile on 
                his face. Instead of punishing you, 
                he tells you that he's been looking 
                for a baking partner for a long time 
                and saw the potential in you during 
                the battle. Shadow Lord reveals that 
                he's actually a master baker and 
                invites you to join him in his 
                baking adventures. You are initially 
                hesitant but after trying some of his 
                delicious cakes and pastries, you 
                gladly accept the offer and become his 
                official sous-chef.</p>
            </div>`;
        }
        else{
            contain.innerHTML = `<h1 class ='result'>IT'S A TIE</h1>
            <div id="arena">
                <p id='naration'>As the war between 
                you and the shadow lord came to an 
                end in a tie, both sides were left 
                clueless. Suddenly, the shadow lord 
                approached you, causing fear and 
                suspicion. But then, unexpectedly, 
                the shadow lord got down on one knee 
                and confessed his love for you. You 
                were taken aback, but then you 
                realized that you loved him too. 
                So, you both decided to get married 
                and rule the kingdom together, 
                bringing peace and prosperity for 
                all.</p>
            </div>`;
        }
    }
    
    
}

// initialize Scores







//Get computer input

/*function getComputerChoice(){
    let arr = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()* arr.length);
    let randomElement = arr[randomIndex];
    return randomElement;
}


//Keep track of the points and rounds

function playRound(playerSelection, computerSelection){

    
    if (playerSelection === computerSelection){
        console.log("It is a tie")
        return "tie";
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You lose! Paper beats Rock");
        return "lose";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You lose! Scissors beats paper");
        return "lose";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You lose! Rock beats scissors");
        return "lose";
    }
    else {
        console.log("You get a point!")
        return "win";
    }
    
}

function gameRound(){

    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Choose rock, paper or scissors!");
        console.log (playerSelection);
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        let scores = playRound(playerSelection, computerSelection);
        if (scores === "win"){
            playerScore += 1;
        }
        else if (scores === "lose"){
            computerScore += 1;
        }
        console.log(`Player Score = ${playerScore} and Computer Score = ${computerScore}`);
    }
}

gameRound() */
