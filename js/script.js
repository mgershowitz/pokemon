console.log('connected')
var turn = 0;
var counter = 1;

function getData(){
//does AJAX stuff! But the AJAX URL should be different for every query, so make sure that the url is dynamic to your search!
  let iChooseYou = $('#pokeDex').val();
  $.ajax({
    url: 'http://pokeapi.co/api/v2/pokemon/'+iChooseYou,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      handleResponse(data);
      console.log(data);
    },
    error: function() {
      toggleModal();
      console.log(arguments);
    }
  })
}

//var handleResponse(data)
//will parse through the data that the API returns! What are we supposed to do with that data according to the MVP?
function handleResponse(data) {
  let player;
  let img = data.sprites.back_shiny;
  if($('#player').val() === "player1"){
    player = $('#player1');
    img = data.sprites.front_default;
  } else {
    player = $('#player2');
    img = data.sprites.front_default;
  }
  let name = data.name;
  let HP = data.stats[5].base_stat;
  let attack = data.stats[4].base_stat;
  let defense = data.stats[3].base_stat;
  let speed = data.stats[0].base_stat;
  let move = data.moves[0].move.name;
  appendPokemon(player, name, HP, attack, defense, speed, img, move);
  console.log("appended")
};


function appendPokemon(player, name, HP, attack, defense, speed, img, move) {
//should take the parsed response data and create elements and values based on that data! It will append a "pokemon" to the correct player section!
  player.empty()
  .append($('<h2 class=pokemon>').text(capitalize(name)))
  .append($('<img>').attr('src', img))
  .append($('<ul>')
  .append($('<li id="hp">').text("HP: " + HP).css('display', 'inline').val(HP))
  .append($('<li id="attack">').text("Attack: " + attack).css('display', 'inline').val(attack)))
  .append($('<ul>')
  .append($('<li id="defense">').text("Defense: " + defense).css('display', 'inline').val(defense))
  .append($('<li id="speed">').text("Speed: " + speed).css('display', 'inline').val(speed)))
  .append($('<button class="attack">'+move+'</button>'));
  battleStart();
};


function toggleModal() {
//should toggle modal!
  $('#error-modal').fadeToggle('fast');
  console.log('toggled')
  }



function battleStart() {
  if($('.pokemon').length > 1) {
    $('.attack').click(attack);
    $('#banner img').attr('src', 'http://community.usvsth3m.com/fight/fight.png').css('width','38%');
    $('#counter-modal').fadeToggle('fast')
} else {
  $('.attack').off('click',attack);
};
  if($('#player1 #speed').val() < $('#player2 #speed').val()){
    turn++;
  }
  switchAttacker();
}

function attack(){
  if (turn % 2 === 0) {
  $('#player2 #hp').val($('#player2 #hp').val() - ($('#player1 #attack').val()/$('#player2 #defense').val()*10));
  if($('#player2 #hp').val() > 0) {
    $('#player2 #hp').text("HP: "+ $('#player2 #hp').val());
  } else {
    $('#player2 #hp').text("HP: "+ 0);
  }
  $('#player2 img').removeClass()
  .addClass('animated bounceIn')
  .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  $('#player2 img').removeClass()
  });
  counter++
  turn++;
  switchAttacker();
  checkHealth();
} else {
  $('#player1 #hp').val($('#player1 #hp').val() - ($('#player2 #attack').val()/$('#player1 #defense').val()*10));
  if($('#player1 #hp').val() > 0) {
    $('#player1 #hp').text("HP: "+ $('#player1 #hp').val());
  } else {
    $('#player1 #hp').text("HP: "+ 0);
  }
  $('#player1 img').removeClass()
  .addClass('animated bounceIn')
  .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  $('#player1 img').removeClass()
  });
  counter++
  turn++;
  switchAttacker();
  checkHealth();
}
  console.log('attack');
}
//should find the attacking "pokemon's" attack stat, the defending "pokemon's" defense stat, and use the formula to subtract damage from the defending "pokemon's" health
//An attack should remove (attacking "pokemon" attack stat / defending "pokemon" defense stat) * 10 from the defending pokemon's health
//when you click the button, it needs to take the attack stat, the defense stat and subtract from the opposing pokemon


//should switch which attack button is enabled and disabled based on the turns counter (hint - is there something in jQuery that will disable/enable buttons instead of removing and adding event listeners?)
function switchAttacker() {
  if(turn % 2 === 0) {
    $('#player1 .attack').prop('disabled',false);
    $('#player2 .attack').prop('disabled',true);
    $('#turn').text("Your move: "+$('#player1 h2').text());
  } else {
    $('#player1 .attack').prop('disabled',true);
    $('#player2 .attack').prop('disabled',false);
    $('#turn').text("Your move: "+$('#player2 h2').text());
  }
  $('#counter').text("Turn: "+counter)
}



function checkHealth() {
//should check to see if the defending "pokemon's" health has dropped below 0 after every attack, and toggle the modal accordingly!
  let play1HP = $('#player1 #hp').val();
  let play2HP = $('#player2 #hp').val();
  if (play1HP < 1 || play2HP < 1) {
    if (play2HP < 1) {
      $('#winner-modal p').text("Player 1 (Ash Ketchum) wins!!!");
      $('#winner-modal img').attr('src', 'https://pbs.twimg.com/media/BnUHglcIQAA0m63.jpg');
    } else {
      $('#winner-modal p').text("Player 2 (Gary) wins!!!");
      $('#winner-modal img').attr('src', 'http://www.60cards.net/media/user_blog/user_98f13708210194c475687be6106a3b84/content//gary-oak-winner-trophy-crown-1.jpg');
    }
    $('#winner-modal').fadeToggle('fast');
    $('#banner img').attr('src','https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/English_Pok%C3%A9mon_logo.svg/2000px-English_Pok%C3%A9mon_logo.svg.png').css('width', '50%');
    $('#counter-modal').fadeToggle('fast')
  }
}




function capitalize(str) {
    var map = Array.prototype.map;
    return map.call(str, (c,i) => {
      return i === 0 ? c.toUpperCase() : c;
    }).join('');
  }

$(document).ready(function() {


var pokeDex = $('#pokeDex')

$('#pokeball').on('click', function(e) {
  console.log('clicked');
  getData()
  })

pokeDex.on('keypress', function(event) {
  if ( event.which == 13 ){
    getData();
  }
})



$('#random').on('click', function(e) {
  let iChooseYou = Math.floor(Math.random()*722);
  console.log('click');
  $.ajax({
    url: 'http://pokeapi.co/api/v2/pokemon/'+iChooseYou,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      handleResponse(data);
      console.log(data);
    },
    error: function() {
      toggleModal();
      console.log(arguments);
    }
  })
})
// $('#error-modal').click(toggleModal);
$('#error-modal button').click(toggleModal);
$('#winner-modal button').on('click', function(e) {
  $('#winner-modal').fadeToggle('fast');
  $('#replay-modal').fadeToggle('slow');
});

$('#replay-modal button').on('click', function(e) {
  $('#replay-modal').fadeToggle('fast');
  turn = 0;
  counter = 1;
  $('#player1').empty();
  $('#player2').empty();
})
   });














