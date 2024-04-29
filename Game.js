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
    { classes: "Ranger", Skills: ["Alertness", "Archery", "Athletics", "Dodge", "Food preservation", "Healing", "Herbalism", "Survival", "Swimming", "Two weapon combat", "Woodcraft","First aid"]},
    { classes: "Thief", Skills: ["Alertness", "Appraising", "Backstabbing", "Detect traps", "Disarm traps", "Pick locks", "Pick pockets", "Stealth"]},
    { classes: "Assassin", Skills: ["Alchemy", "Alertness", "Archery", "Backstabbing", "Detect traps", "Dodge", "Find weakness", "Pick pockets", "Stealth", "Two weapon combat","First aid"]},
    { classes: "Wizard", Skills: ["Alchemy", "Concentration", "Healing", "Herbalism", "Literacy", "Stealth", "Ventrilloquism"]},
    { classes: "Priest", Skills: ["Concentration", "Detect item status", "Healing", "Herbalism", "Literacy", "Music","First aid"]},
    { classes: "Bard", Skills: ["Music"]},
    { classes: "Monk", Skills: ["Alertness", "Athletics", "Concentration", "Dodge", "Find weakness", "Healing", "Literacy", "Stealth","First aid"]},
    { classes: "Healer", Skills: ["Alertness", "Concentration", "Cooking", "Find weakness", "Healing", "Herbalism", "Literacy","First aid"]},
    { classes: "Weaponsmith", Skills: ["Appraising", "Athletics", "Concentration", "Detect traps", "Find weakness", "Metallurgy", "Smithing"]},
    { classes: "Archer", Skills: ["Alertness", "Archery", "Concentration", "Dodge", "Fletchery", "Stealth","First aid"]},
    { classes: "Merchant", Skills: ["Alchemy", "Appraising", "Detect item status", "Gemology", "Herbalism", "Pick pockets", "Survival"]},
    { classes: "Farmer", Skills: ["Archery", "Bridge building", "Cooking", "Fletchery", "Food preservation", "Gardening", "Herbalism", "Smithing", "Stealth", "Survival", "Woodcraft","First aid"]},
    { classes: "Mindcrafter", Skills: ["Concentration", "Gemology", "Herbalism", "Literacy", "Music", "Stealth"]},
    { classes: "Barbarian", Skills: ["Athletics", "Dodge", "Herbalism", "Literacy", "Stealth", "Survival", "Swimming", "Two weapon combat"]},
    { classes: "Druid", Skills: ["Concentration", "Gardening", "Healing", "Herbalism", "Literacy", "Survival", "Swimming", "Woodcraft","First aid"]},
    { classes: "Necromancer", Skills: ["Alchemy", "Appraising", "Concentration", "Find weakness", "Food preservation", "Herbalism", "Literacy", "Necromancy", "Stealth"]},
    { classes: "Elementalist", Skills: ["Concentration", "Gemology", "Healing", "Literacy", "Metallurgy", "Swimming","First aid"]},
    { classes: "Beastfighter", Skills: ["Athletics", "Dodge", "Healing", "Herbalism", "Literacy", "Stealth", "Survival", "Swimming"]},
    { classes: "Duelist", Skills: ["Alertness", "Athletics", "Concentration", "Dodge", "Find weakness", "Healing", "Law"]},
    { classes: "Chaos Knight", Skills: ["Athletics", "Backstabbing", "Dodge", "Find weakness", "Two weapon combat"]},
  ];


  const toolTipClasses = {
    "Fighter": "Sturdy class with good melee and missile capabilities. Generally very average in abilities and skills.",
    "Paladin": "Melee fighter with strong ability for divine casting. Excellent skillset and decent class powers.",
    "Ranger": "Specialist in two-weapon combat and wilderness survival. Competent melee fighter and missile user. Fantastic skillset, but dreadful class powers.",
    "Thief": "Specialist in thievery, stealth, and traps. Poor combat, missile, and casting prospects. Considered very difficult for most races.",
    "Assassin": "Master of poisons and use of critical strikes to defeat opponents. Vulnerable in the early game, but strong melee and missile prospects as the game progresses. Excellent skillset and class powers.",
    "Wizard": "Master of arcane magic. Generally incompetent with melee or missile weapons, but extremely powerful once a few spells are learned. Considered to be one of the most powerful classes.",
    "Priest": "Master of divine magic. Limited ability with melee or missile weapons, but powerful spellcasters. Their ability to automatically identify the B/U/C status of items is very convenient.",
    "Bard": "Musically inclined class with an otherwise random skillset. Difficulty and playstyle is variable depending on the whims of the RNG.",
    "Monk": "Excels at hand-to-hand fighting with strong potential for midgame casting. Difficult to start, but immensely powerful as the game progresses.",
    "Healer": "Extremely durable class due to immense health regeneration abilities and high starting toughness. Excellent prospects for melee and casting abilities.",
    "Weaponsmith": "Specialist in smithing of weapons and armor. Decent melee capabilities in the early game with possible late-game casting available.",
    "Archer": "Master of all missile weapons. Limited abilities with melee or magic, but unbelievably powerful with any missile attacks. One of the most powerful classes.",
    "Merchant": "Receives discounts from shops and can automatically identify one type of item (potions, wands, scrolls or rings). Receives to-hit and damage bonuses for coins as improvised missiles, but otherwise has no combat advantages. Generally considered very difficult.",
    "Farmer": "Excels at gardening and herbalism. Requires significant knowledge of how to exploit herbs to be reasonably effective. Decent prospects as a missile user.",
    "Mindcrafter": "Uses mental powers to confuse and damage opponents. Difficult to start, but very unique to play compared to other classes.",
    "Barbarian": "Tremendously powerful in melee combat, but completely incapable at magic.",
    "Druid": "Divine caster who specializes in wilderness survival. Generally easy to start, but long-term prospects not as good as priests.",
    "Necromancer": "Arcane caster with the ability to raise dead humanoids as undead. Difficult to get started, but tremendously powerful as the game progresses.",
    "Elementalist": "Arcane caster who primarily learns spells as they level rather than through books. Strong early game due to easy availability of spells, but needs spellbooks, melee or missile support once naturally gained spells run out, and is not as adept at reading books as the Wizard.",
    "Beastfighter": "Master of unarmed combat and very durable, but inept with melee weapons, shields or magic. Tricky to get started, but power increases dramatically as they level.",
    "Duelist": "Weapon masters that have the potential to become extremely powerful as the game progresses; as long they aren't burdened by armor or carried weight, and they keep one hand free. Fantastic skill set makes it one the best melee-oriented classes.",
    "Chaos Knight": "Challenge class that starts with high PV armor, but also with very chaotic alignment and is thus unable to receive many quests without changing alignment. Changing alignment from Chaotic incurs ongoing damage.  Can vary significantly in difficulty from game to game due to starting with 3 random corruptions."
    }



  const toolTipSkills = { 
    "Alchemy": "Allows brewing potions using a fixed list of recipes",
    "Alertness": "Gives a chance to evade combat magic and trap",
    "Appraising": "Performs item quality evaluation",
    "Archery": "Grants missile attack bonuses",
    "Athletics": "Grants speed bonus, helps physical Attributes training",
    "Backstabbing": "Grants a chance to inflict bonus damage on unaware opponents",
    "Bridge building": "Allows building bridges",
    "Climbing": "Grants a chance to climb out of pits; prerequisite to enter the Rift",
    "Concentration": "Increases magic regeneration rate; improves spell learning process",
    "Cooking": "Allows cooking corpses",
    "Courage": "Reduces to-hit penalties when fighting with multiple enemies",
    "Detect item status": "Gives a chance to automatically identify B/U/C (blessed/uncursed/cursed) status of an item",
    "Detect traps": "Gives a chance to find traps passively/on the specified location",
    "Disarm traps": "Allows disarming traps",
    "Dodge": "Grants DV (Defensive Value) bonus, grants a small chance to avoid combat magic",
    "Find weakness": "Grants a chance to inflict a critical hit",
    "First aid": "Can be used to restore recently lost HP",
    "Fletchery": "Allows creating ammunition using fletchery sets",
    "Food preservation": "Increases the chance to generate corpses, helps preserve corpses longer",
    "Gardening": "Allows planting herb bushes and gathering herb seeds from blossoming bushes",
    "Gemology": "Grants a chance to generate and automatically identify gems from digging",
    "Healing": "Passively restores HP",
    "Herbalism": "Improves the quality B/U/C status (blessed/uncursed/cursed) of collected herbs",
    "Law": "Provides messages when the PC performs lawful/chaotic acts",
    "Literacy": "Allows reading scrolls, spellbooks and inscriptions on graves",
    "Metallurgy": "Can be used to identify item material if it is metallic",
    "Music": "Allows playing musical instruments to tame animals",
    "Necromancy": "Can be used to create undead slaves",
    "Pick locks": "Allows the use of thieves picks to open locked doors",
    "Pick pockets": "Can be used to steal from humanoid enemies",
    "Smithing": "Can be applied to use a forge to improve metallic items",
    "Stealth": "Grants a chance to not be detected by monsters/other beings",
    "Survival": "Can be used to find food in the wilderness",
    "Swimming": "Reduces drowning damage",
    "Two weapon combat": "Decreases to-hit and energy cost penalties while dual-wielding",
    "Woodcraft": "Decreases the time to cut down trees, increases critical hit chance against plant monsters"
    };






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

  document.getElementById('life').innerHTML = raceDiscription;









  const toolTipForClasses = toolTipClasses[classCalc];;
  const toolTipForSkills = [];
  classStore.forEach(skill => {
    let tooltip = toolTipForSkills[skill];  });

  document.getElementById('Class').title = toolTipForClasses[classCalc];
  for (let i = 0; i < classStore.length; i++) {
    let elementId = 'Skills-Classes' + (i + 1);
    let element = document.getElementById(elementId);
    if (element !== null) {
      element.title = toolTipForSkills[classStore[i]];
    }
  }





  



  let skillsAndClasses = "You have the class of " + classCalc + ". Your skills are " + classStore[0] + ", " + classStore[1] + ", and " + classStore[2];

  document.getElementById('Skiils-Classes').innerHTML = skillsAndClasses;




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