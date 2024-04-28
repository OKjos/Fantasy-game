//random number to select which array race 
//take the race and make an if statement for it
// in each if statement will be the classes for that race
// random math gen to get a random class
// once the class is selected make another array for it's skills
// loop through the skills a number of times till we get the correct amount

function lifeSelection() {

  const races = [
    { name: "Elf", maxAge: 1900, minAge: 1510 },
    { name: "Dwarf", maxAge: 500, minAge: 410 },
    { name: "Human", maxAge: 120, minAge: 50 },
    { name: "Demon", maxAge: 2200, minAge: 1800 },
    { name: "Dragon", maxAge: 6000, minAge: 4000 },
    { name: "Angel", maxAge: 2300, minAge: 1700 },
    { name: "Dark Elf", maxAge: 1300, minAge: 1210 }
  ];


  const skills = [
    { classes: "Fighter", Skills: ["Archery", "Athletics", "Dodge", "Find weakness", "Metallurgy", "Stealth", "Swimming", "Two weapon combat"] },
    { classes: "Paladin", Skills: ["Athletics", "Concentration", "Dodge", "Healing", "Law", "Literacy", "Stealth", "Swimming", "Two weapon combat"]},
    { classes: "Ranger", Skills: ["Alertness", "Archery", "Athletics", "Dodge", "Food preservation", "Healing", "Herbalism", "Survival", "Swimming", "Two weapon combat", "Woodcraft"]},
    { classes: "Thief", Skills: ["Alertness", "Appraising", "Backstabbing", "Detect traps", "Disarm traps", "Pick locks", "Pick pockets", "Stealth"]},
    { classes: "Assassin", Skills: ["Alchemy", "Alertness", "Archery", "Backstabbing", "Detect traps", "Dodge", "Find weakness", "Pick pockets", "Stealth", "Two weapon combat"]},
    { classes: "Wizard", Skills: ["Alchemy", "Concentration", "Healing", "Herbalism", "Literacy", "Stealth", "Ventrilloquism"]},
    { classes: "Priest", Skills: ["Concentration", "Detect item status", "Healing", "Herbalism", "Literacy", "Music"]},
    { classes: "Bard", Skills: ["Music"]},
    { classes: "Monk", Skills: ["Alertness", "Athletics", "Concentration", "Dodge", "Find weakness", "Healing", "Literacy", "Stealth"]},
    { classes: "Healer", Skills: ["Alertness", "Concentration", "Cooking", "Find weakness", "Healing", "Herbalism", "Literacy"]},
    { classes: "Weaponsmith", Skills: ["Appraising", "Athletics", "Concentration", "Detect traps", "Find weakness", "Metallurgy", "Smithing"]},
    { classes: "Archer", Skills: ["Alertness", "Archery", "Concentration", "Dodge", "Fletchery", "Stealth"]},
    { classes: "Merchant", Skills: ["Alchemy", "Appraising", "Detect item status", "Gemology", "Herbalism", "Pick pockets", "Survival"]},
    { classes: "Farmer", Skills: ["Archery", "Bridge building", "Cooking", "Fletchery", "Food preservation", "Gardening", "Herbalism", "Smithing", "Stealth", "Survival", "Woodcraft"]},
    { classes: "Mindcrafter", Skills: ["Concentration", "Gemology", "Herbalism", "Literacy", "Music", "Stealth"]},
    { classes: "Barbarian", Skills: ["Athletics", "Dodge", "Herbalism", "Literacy", "Stealth", "Survival", "Swimming", "Two weapon combat"]},
    { classes: "Druid", Skills: ["Concentration", "Gardening", "Healing", "Herbalism", "Literacy", "Survival", "Swimming", "Woodcraft"]},
    { classes: "Necromancer", Skills: ["Alchemy", "Appraising", "Concentration", "Find weakness", "Food preservation", "Herbalism", "Literacy", "Necromancy", "Stealth"]},
    { classes: "Elementalist", Skills: ["Concentration", "Gemology", "Healing", "Literacy", "Metallurgy", "Swimming"]},
    { classes: "Beastfighter", Skills: ["Athletics", "Dodge", "Healing", "Herbalism", "Literacy", "Stealth", "Survival", "Swimming"]},
    { classes: "Duelist", Skills: ["Alertness", "Athletics", "Concentration", "Dodge", "Find weakness", "Healing", "Law"]},
    { classes: "Chaos Knight", Skills: ["Athletics", "Backstabbing", "Dodge", "Find weakness", "Two weapon combat"]},
  ];

  const remainingSkills = skills.slice();
  const remainingClasses = remainingSkills.map(skills => skills.classes);

  const raceCalc = races[Math.floor(Math.random() * races.length)];
  const classCalc = remainingClasses[Math.floor(Math.random() * remainingClasses.length)];

  const classStore = [];
  for (let i = 0; i < 3; i++) {
    const skillIndex = Math.floor(Math.random() * remainingSkills.length);
    classStore.push(remainingSkills[skillIndex].Skills[Math.floor(Math.random() * remainingSkills[skillIndex].Skills.length)]);
    remainingSkills.splice(skillIndex, 1);
    remainingClasses.splice(remainingSkills[skillIndex].classes, 1);
  }


  const raceCalcc = races[Math.floor(Math.random() * races.length)];
  const age = Math.floor(Math.random() * (raceCalc.maxAge - raceCalc.minAge + 1)) + raceCalc.minAge;


  document.getElementById('Race').innerHTML = raceCalc.name;
  document.getElementById('Class').innerHTML = classCalc;
  document.getElementById('Skill').innerHTML = classStore[0];
  document.getElementById('Skill2').innerHTML = classStore[1];
  document.getElementById('Skill3').innerHTML = classStore[2];


  let kids = ["0", "1", "2", "3"];
  let wives = ["0", "0", "0", "1", "2", "3"];
  let death = ["Old age", "fighting to the death", "slipping and felling onto a rock", "being betrayed by your comrades", "being killed by an unknown God"];
  let deedes = [" good being.", " evil being.", " mediocre being.", " being that wasted all their potential."];

  let randKids = Math.floor(Math.random() * kids.length);
  let randWives = Math.floor(Math.random() * wives.length);
  let randDeath = Math.floor(Math.random() * death.length);
  let randDeedes = Math.floor(Math.random() * deedes.length);

  let raceDiscription = "You are a " + raceCalc.name + ". You have lived for " + age + " years." + "You had a total of " + kids[randKids] + " kids." + " You had a total of " + wives[randWives] + " wives/wife. " + " You died by " + death[randDeath] + ". You were a " + deedes[randDeedes];

  let skillsAndClasses = "You have the class of " + classCalc + ". Your skills are " + classStore[0] + ", " + classStore[1] + ", " + classStore[2];


  document.getElementById('Skiils-Classes').innerHTML = skillsAndClasses;
  document.getElementById('life').innerHTML = raceDiscription;

}

function stats() {

  let strength = Math.floor(Math.random() * 10 + 1);
  let Learning = Math.floor(Math.random() * 10 + 1);
  let Willpower = Math.floor(Math.random() * 10 + 1);
  let Dexterity = Math.floor(Math.random() * 10 + 1);
  let Toughness = Math.floor(Math.random() * 10 + 1);
  let Charisma = Math.floor(Math.random() * 10 + 1);
  let Appearance = Math.floor(Math.random() * 10 + 1);
  let Mana = Math.floor(Math.random() * 10 + 1);
  let Perception = Math.floor(Math.random() * 10 + 1);

  document.getElementById('Strength').innerHTML = strength;
  document.getElementById('Learning').innerHTML = Learning;
  document.getElementById('Willpower').innerHTML = Willpower;
  document.getElementById('Dexterity').innerHTML = Dexterity;
  document.getElementById('Toughness').innerHTML = Toughness;
  document.getElementById('Charisma').innerHTML = Charisma;
  document.getElementById('Appearance').innerHTML = Appearance;
  document.getElementById('Mana').innerHTML = Mana;
  document.getElementById('Perception').innerHTML = Perception;

}


document.addEventListener("DOMContentLoaded", function(){
  let button = document.getElementById('randomize-button');

  button.addEventListener('click', function() {
    lifeSelection();
    stats();
  });
});



//Stats 
//random number gen 1-10 of each stat listed

//create a story for the "life" of the player
//each race will have different life spans
//it will tell how you lived your life weather it was good or bad
//and what you accomplished within your lifespan