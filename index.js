function dwarfRollCall(dwarves) {
  let listDwarves = []
  for(let i = drawves.length/2 ; i < dwarves.length; i++){
    
    listDwarves.push(`${i+1}. ${dwarves[i]} `)
    
  }
  return listDwarves.join(""); 
}


function summonCaptainPlanet(planeteerCalls){
  let uppercasePlaneteerCalls = [];
  for(let i = 0; i < planeteerCalls.length; i++){
    let punctuation = "!"
    uppercasePlaneteerCalls.push(`${planeteerCalls[i]}${punctuation}`.toUpperCase())
  }
  return uppercasePlaneteerCalls
}



function longPlaneteerCalls(words) {
  
  for(let i = 0; i < words.length; i++){
    
    if(words[i].length>4){
      return true
    }
  }
  return false
}



function findTheCheese (foods) {
  
  for (var i = 0; i < foods.length; i++) {
    
    if (foods[i] ===  'gouda'|| foods[i]===  'cheddar' || foods[i]==='camembert' || foods[i]=== 'swiss') {
      return foods[i];
    }
  }
  return 'no cheese!'
}