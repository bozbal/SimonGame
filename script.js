let randomTomb=[];var randomIndex=0;var clickIndex=0;var clickcount=-1;var level=1;$("body").keydown(function(){$("h1").text("Level: "+level);var elsoRandomHely=rando();szinezo(elsoRandomHely);randomTomb[randomIndex]=elsoRandomHely;$(".container").click(function(clickLocate){var clickColor=clickLocate.target.id;var colorID=clickColorConvert(clickColor);clickIndex++;clickcount++;$("."+clickColor).addClass("pressed");setTimeout(()=>{$("."+clickColor).removeClass("pressed")},200);var clickSound=new Audio('./sounds/'+clickColor+'.mp3');clickSound.play();if((randomTomb[0]!==colorID)&&(clickIndex===1)){var wrong=new Audio('./sounds/wrong.mp3');wrong.play();$("h1").text("Game Over, press any key to restart!");$("body").attr("class","game-over");$("body").keydown(function(){location.reload()})}
for(var i=0;i<randomTomb.length;i++){if(randomTomb[clickcount]===colorID){if(clickIndex==randomTomb.length){var secondRandomHely=rando();setTimeout(()=>{$("."+clickColor).removeClass("pressed");szinezo(secondRandomHely);randomIndex++
randomTomb[randomIndex]=secondRandomHely;clickIndex=0;clickcount=-1;level++;$("h1").text("Level: "+level)},500);break}
break}
if(clickIndex!==randomTomb.length){var wrong=new Audio('./sounds/wrong.mp3');wrong.play();$("h1").text("Game Over, press any key to restart!");$("body").attr("class","game-over");$("body").keydown(function(){location.reload()});break}
if((randomTomb.length===clickIndex)!==clickIndex){var wrong=new Audio('./sounds/wrong.mp3');wrong.play();$("h1").text("Game Over, press any key to restart!");$("body").attr("class","game-over");$("body").keydown(function(){location.reload()});break}
console.log("!!!!!!a tömb hossza: "+randomTomb.length+" színkód: "+randomTomb[clickcount]+" click szín: "+clickIndex)}})});function click(hely,index){var tomb3=[];$(".container").click(function(clickLocate){var clickColor=clickLocate.target.id;var colorID=clickColorConvert(clickColor);console.log(clickColor);console.log(colorID);$("."+clickColor).addClass("pressed");setTimeout(()=>{$("."+clickColor).removeClass("pressed")},200);var clickSound=new Audio('./sounds/'+clickColor+'.mp3');clickSound.play();for(var i=0;i<index;i++){tomb3[hely]=colorID}});return tomb3}
function szinezo(x){var color;if(x==0){var blue=new Audio('./sounds/blue.mp3');blue.play();$("#blue").fadeOut().fadeIn();color=$("#blue").attr("id")}
if(x==1){var green=new Audio('./sounds/green.mp3');green.play();$("#green").fadeOut().fadeIn();color=$("#green").attr("id")}
if(x==2){var red=new Audio('./sounds/red.mp3');red.play();$("#red").fadeOut().fadeIn();color=$("#red").attr("id")}
if(x==3){var yellow=new Audio('./sounds/yellow.mp3');yellow.play();$("#yellow").fadeOut().fadeIn();color=$("#yellow").attr("id")}}
function clickColorConvert(x){var clickColorID;if(x=="blue"){clickColorID=0}
if(x=="green"){clickColorID=1}
if(x=="red"){clickColorID=2}
if(x=="yellow"){clickColorID=3}
return clickColorID}
function rando(){var x=Math.random();x=Math.floor(x*4);return x}