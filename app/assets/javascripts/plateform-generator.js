people = [
  "Un chauffeur",
  "Un ministre",
  "Une princesse",
  "Un roi",
  "Une grenouille",
  "Un professeur",
  "Un informaticien",
  "Un businessman",
  "Un avocat",
  "Un médecin",
  "Un sportif",
  "Un artiste",
  "Un facteur",
  "Un cordonnier",
];

place = [
  "à la piscine",
  "au musée",
  "dans la rue",
  "dans un château",
  "dans sa cuisine",
  "dans une grotte",
  "dans un avion",
  "en voiture",
  "dans un champ",
  "dans une église",
  "au restaurant",
  "en boîte de nuit",
  "dans le désert",
  "dans une manifestation",
];

mood = [
  "qui est heureux",
  "qui est triste",
  "qui a peur",
  "qui est amoureux",
  "qui a un sentiment de désir",
  "qui a chaud",
  "qui a froid",
  "en colère",
  "qui est exaspéré",
  "qui est déprimé",
  "qui est histérique",
  "qui a honte",
  "qui est étonné",
];

action = [
  "et qui arrose les plantes",
  "et qui mange un hamburger",
  "et qui promène son chien",
  "et qui fait du skateboard",
  "et qui apprend l'Allemand",
  "et qui passe le permis de conduire",
  "et qui joue dans une comédie musicale",
  "et qui fait les boutiques",
  "et qui cuisine",
  "et qui perd la mémoire",
  "et qui divorce",
  "et qui se marie",
];

$(document).ready(function() {
  $('#js-people').click(function(){
    var $this = $(this);
    $new_text = people[Math.floor(Math.random() * people.length)];

    $this.text($new_text);
  });

  $('#js-place').click(function(){
    var $this = $(this);
    $new_text = place[Math.floor(Math.random() * place.length)];

    $this.text($new_text);
  });

  $('#js-mood').click(function(){
    var $this = $(this);
    $new_text = mood[Math.floor(Math.random() * mood.length)];

    $this.text($new_text);
  });

  $('#js-action').click(function(){
    var $this = $(this);
    $new_text = action[Math.floor(Math.random() * action.length)];

    $this.text($new_text);
  });

  $('#js-shuffle').click(function(){
    $('#js-people').text(people[Math.floor(Math.random() * people.length)]);
    $('#js-place').text(place[Math.floor(Math.random() * place.length)]);
    $('#js-mood').text(mood[Math.floor(Math.random() * mood.length)]);
    $('#js-action').text(action[Math.floor(Math.random() * action.length)]);
    return false;
  });
});