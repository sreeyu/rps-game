

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
                <div class="col col-display" id="scoreHome">0</div>
            </div>
            <div class="row">
                <div class="col col-heading">
                    <h1>Shadow</h1>
                </div>
                <div class="col col-display" id="scoreHome">0</div>
            </div>
        </div>
    </div>
    <div class="arena"></div>
    <h1 class="heading">Make your choice :</h1>
    <div class="btns">
        <img src="./images/athena.png" alt="warrior" class="btn-img warrior">
        <img src="./images/dragon (1).png" alt="dragon" class="btn-img dragon">
        <img src="./images/mushroom.png" alt="mushroom" class="btn-img shroom">
    </div>`;
    gameplay.appendChild(war);
}
