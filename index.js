// code your solution here
function saturdayFun(activity){
    let answer= 'This Saturday, I want to ';
    if(activity===undefined)
        return answer+ 'roller-skate!';
    else return answer+activity+'!';
}

const mondayWork=function(monday){
    let answer2 = 'This Monday, I will ';
    if(monday===undefined)
        return answer2+'go to the office.';
    else return answer2+monday+'.';
}

function wrapAdjective(flair='*'){
  const innerFunction= function(adjective='special'){
      return 'You are '+flair+adjective+flair+'!'; 
  }
  return innerFunction;
}