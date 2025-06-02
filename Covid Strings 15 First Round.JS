doc.type html
html lang en 
script
header=document create.element(header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’Center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings15 first round’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=first round overview
heading2=matchups
heading3=first round questions
heading4=advancing rounds
subheading1=team stealing
subheading2=result for matchup1
subheading3=result for matchup2
subheading4=result for matchup3
subheading5=result for matchup4
<header.html>
first round overview
an overview of the first round of covid strings15 including seeding 
html
head
utf8
viewport content=width=device-width, initial-scale=one
title covidstrings 15 first round bracket
div id bracket class bracket div
script src bracket.js
link rel= stylesheet href=css
head
body
bracket-container{}
matchup
solid zero;
padding 
text align center 
filename=covid strings15 first round.js
firstround=(highest overall seed ,second highest seed third highest seed first middle seed, second middle seed,  third lowest seed ,second lowest seed,lowest overall seed)
highest overall seed = 1 seed
second highest seed=2 seed
third highest seed=3 seed
firstmiddleseed=4seed
second middle seed = 5 seed
third lowest seed= 6 seed
second lowest seed = 7 seed
lowest overall seed = 8 seed
covidstringsteamlist15=[turquoise,green,white,magenta,red,yellow,purple, burgundy]
<header.html>
matchups 
for first round there are8 teams which equals4 matchups 
matchup1=(yellow versus white)
document.createelement 
matchupdiv.classname=(matchup)
matchupdiv.inner html =[matchup]
matchup2=(purple versus green)
document.createelement 
matchupdiv.classname=(matchup)
matchupdiv.inner html =[matchup]
matchup3=(magenta versus red)
document.createelement 
matchupdiv.classname=(matchup)
matchupdiv.inner html =[matchup]
matchup4=(burgundy versus turquoise)
bracket =getelementbyid(bracket);
document.createelement 
matchupdiv.classname=(matchup)
matchupdiv.inner html =[matchup]
rounddiv.appendchild(matchup)
create round
for (i in covid strings first round)
round div=create element
round div class name=covid strings15 first round
bracket.appendchild(round div)
if (event.target.covid strings seed list.contains(matchup))
return matchup
else:
create matchup
<header.html>
first round questions
the questions asked in the first round of the covid strings contest
java util.scanner
java.util
first round questions=[1-15]
collections.shuffle(arrays.aslist(questions)
question1
question2
question3
question4
question5
question6
question7
question8
question9
question10
question11
question12
question13
question14
question15
if selectedanswer==correct:
return true
else:
return false
advancingteam=slice(current teams)
if selectedanswer==correct:
return true
else:
return false
if selectedanswer=incorrect
return false
else:
return true
team1=lower ranked seed
team2=the higher seeded opponent
points: 10 points or 20 points
<subheading.html>
team stealing
steal points(stealingteam,victimteam,pointstosteal)
if(victimteam.points>=pointtosteal)
victimteam.points-=pointtosteal;
stealingteampoints+=pointstosteal
console.log([stealingteam.name} stole points from {victim team name}!)
else:
console.log({victimteam.name} doesnt have enough points to steal)
if teams final answer==incorrect:
opposing team steals
else:
change covid strings matchup score
<header.html>
advancing rounds
contains criteria required for a team to advance to the second round 
result=declarewinner(matchup1)
if white score>=forty:
console.log(white transit angels win)
else:
console.log(yellow moxie wins)
result=declarewinner(matchup2)
if green score>=forty:
console.log(green peacemakers win)
else:
console.log(purple bravehearts win)
result=declarewinner(matchup3)
if red score>=forty:
console.log(red protein spikers win)
else:
console.log(magenta magentizers win)
result=declarewinner(matchup4)
if turquoise score>=forty:
console.log(turquoise waves win)
else:
console.log(burgundy rebuilders win)
return filename

