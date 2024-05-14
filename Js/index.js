function randomText() {
  var names = [
    "- Oscar Wilde -",
    "- Frank Zappa -",
    "- Albert Einstein -",
    "- Mae West -",
    "- Mahatma Gandhi -",
    "- Mark Twain -",
    "- Friedrich Nietzsche -",
    "- Andre Gide -",
    "- Ralph Waldo Emerson -"
  ];

  var text = [
    "“Be yourself; everyone else is already taken.”",
    "So many books, so little time.",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“Be the change that you wish to see in the world.”",
    "“If you tell the truth, you don't have to remember anything.”",
    "“Without music, life would be a mistake.”",
    "“It is better to be hated for what you are than to be loved for what you are not.”",
    "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”"
  ];

  var num = Math.floor(Math.random() * names.length);
  document.getElementById("name").innerHTML = ` <h4> ${text[num]}</h4>`;
  document.getElementById("text").innerHTML = ` <h3> ${names[num]}</h3>`;
}
