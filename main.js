window.onload = function() {
  var lower = document.getElementById("lower");
  var higher = document.getElementById("higher");
  var score = document.getElementById("score");
  var num = document.getElementById("num");
  var end = document.getElementById("end");
  var reset = document.getElementById("reset");
  var gameover = false;

  function start(choice) {
    if (gameover === false) {
      if (check(choice) === true) {
        score.innerHTML = parseInt(score.innerHTML) + 1;
      } else {
        end.innerHTML = "GAME OVER";
        lower.setAttribute("disabled", "disabled");
        higher.setAttribute("disabled", "disabled");
        gameover = true;
      }
    }
  }

  function reset_game() {
    score.innerHTML = 0;
    num.innerHTML = 50;
    end.innerHTML = "status";
    lower.removeAttribute("disabled");
    higher.removeAttribute("disabled");
    gameover = false;
  }

  function check(choice) {
    var current_value = parseInt( num.innerHTML );
    num.innerHTML = get_random_values();
    var next_value = parseInt( num.innerHTML );

    if (choice === "lower") {
      return (next_value < current_value) ? true : false;
    } else {
      return (current_value < next_value) ? true : false;
    }
  }

  function get_random_values() {
    var current_value = parseInt( num.innerHTML );
    var next_value = 1 + Math.floor( Math.random() * 100);
    return (current_value === next_value) ? get_random_values() : next_value;
  }

  lower.onclick = function() {
    start("lower");
  }

  higher.onclick = function() {
    start("higher");
  }

  reset.onclick = function() {
    reset_game();
  }
}
