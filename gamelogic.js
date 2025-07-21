// Stats
let playerHP = 20;
let critical_chance = 5;
let enemyHP = 20;
let isPlayerTurn = true;

// Battle Status
function updateStatus() {
  document.getElementById("status").innerText =
    `Player HP: ${playerHP} | Enemy HP: ${enemyHP} | ${isPlayerTurn ? "Your turn" : "Enemy's turn"}`;
}

// Player's Attacks
function playerAttack() {
  if (!isPlayerTurn) return;

  // let dmg = Math.floor(Math.random() * 4) + 1;

  // Critical Output Possibility
  let critical_output = Math.floor(Math.random() * critical_chance);
  if (critical_output >= 3) {
    let dmg = Math.floor(Math.random() * 8) + 1;
    enemyHP -= dmg;

    // Message(CriticalDamage)
    alert(`You land a CRITICAL for ${dmg} damage!`);

  } else {
    // Normal Damage without Critical
    let dmg = Math.floor(Math.random() * 4) + 1;
    enemyHP -= dmg;
    // Message(NormalDamage)
    alert(`You land a attack for ${dmg} damage!`);
  }

  // checking if enemy is dead
  if (enemyHP <= 0) {
    alert("You win!");
    return;
  }

  isPlayerTurn = false;
  updateStatus();

  setTimeout(enemyTurn, 1000);
}

// Player Heal
function playerHeal() {
  if (!isPlayerTurn) return;

  // checking heal boost condition
  if (playerHP >= 10) {
    let heal = Math.floor(Math.random() * 5) + 1;
    playerHP += heal;
    alert(`You restored for ${heal} HP!`);

    isPlayerTurn = false;
    updateStatus();

    setTimeout(enemyTurn, 1000);
  } else {
    alert('You are in low health, your heal boost is activated!');
    let heal = Math.floor(Math.random() * 5) + 3;
    playerHP += heal;
    alert(`You burst healed for ${heal} HP!`);

    isPlayerTurn = false;
    updateStatus();

    setTimeout(enemyTurn, 1000);
  }

  if (playerHP >= 20) {
    alert("Max HP reached!");
    return;
  }

}

function enemyTurn() {
  // condtion for phase
  if (enemyHP >= 10) {

    // Critical Output Possibility
    let critical_output = Math.floor(Math.random() * critical_chance);
    if (critical_output >= 3) {
      let dmg = Math.floor(Math.random() * 8) + 1;
      playerHP -= dmg;

      // Message(CriticalDamage)
      alert(`Enemy land a CRITICAL for ${dmg} damage!`);

    } else {
      // Normal Damage without Critical
      let dmg = Math.floor(Math.random() * 4) + 1;
      playerHP -= dmg;
      // Message(NormalDamage)
      alert(`Enemy land a attack for ${dmg} damage!`);
    }

  } else {
    // Phase 2

    // Critical Output Possibility
    let critical_output = Math.floor(Math.random() * critical_chance);
    if (critical_output >= 3) {

      // Enemy went Berserk
      let dmg = Math.floor(Math.random() * 10) + 3;
      playerHP -= dmg;
      alert(`Enemy land a CRITICAL for ${dmg} damage! in Berserk mode!`);

    } else {

      // Normal Damage without Critical
      let dmg = Math.floor(Math.random() * 5) + 1;
      playerHP -= dmg;

      // Message(NormalDamage)
      alert(`Enemy land a attack for ${dmg} damage in Berserk mode!`);
    }

    if (playerHP <= 0) {
      alert("You lose!");
      return;
    }
  }

  isPlayerTurn = true;
  updateStatus();
}

updateStatus();