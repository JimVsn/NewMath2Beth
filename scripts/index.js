if(document.documentElement.clientWidth < 700) {
    // тут ваш скрипт
    document.getElementById('elem').style.display = 'none';
    document.getElementById('menu').style.display = 'none';
  }
  if(document.documentElement.clientWidth < 700) {
      // тут ваш скрипт
      document.getElementById('mobile').style.display = 'flex';
      // document.classList.remove('.line-winHome-persent');
      
    }
  


    

  
const resultMathButton = document.querySelector('.math-button');

function areaRectangle(){
    var a=1*document.formMath.homeScored.value;
    var b=1*document.formMath.awayScored.value;
    var e=1*document.formMath.homeMissed.value;
    var o=1*document.formMath.awayMissed.value;
    var p=1*document.formMath.selectAttackHome.value;
    var q=1*document.formMath.selectAttackAway.value;
    var d=1*document.formMath.selectDefHome.value;
    var f=1*document.formMath.selectDefAway.value;
    var j=1*document.formMath.teamClassHome.value;
    var k=1*document.formMath.teamClassAway.value;

  var l=(a/5+o/5)-1.3;
  var r=(b/5+e/5)-1.3;
  var u=p-f;
  var i=q-d;
  var w=j-k;
  var m=l;
  var y=r;

 var m=m+(0);
 var y=y-(0);

if(u===1)
  m=m*0.8;
  if(u===2)
   m=m*0.5;
  if(u===3) 
   m=m*0.1;
  if(u===-1)
  m=m*1.1;
  if(u===-2)
   m=m*1.5;
  if(u===-3) 
   m=m*1.8; 
   if(i===1) 
   y=y*0.8; 
   if(i===2) 
   y=y*0.5;
   if(i===3) 
   y=y*0.1;
   if(i===-1) 
   y=y*1.1;
   if(i===-2) 
   y=y*1.5;
   if(i===-3) 
   y=y*1.8;
  
   if (w===4) m=m+(1*2); y=y-(1*2);
   if (w===3) m=m+(1*1.5); y=y-(1*1.5); 
   if (w===2) m=m+(1*1); y=y-(1*1); 
   if (w===1) m=m+(1*0.8); y=y-(1*0.8); 
   if (w===-1) m=m-(1*0.8); y=y+(1*0.8); 
   if (w===-2) m=m-(1*1); y=y+(1*1);
   if (w===-3) m=m-(1*1.5); y=y+(1*1.5);
   if (w===-4) m=m-(1*2); y=y+(1*2);
  
  if (w===4) y=y-(1*2);
  if (w===3) y=y-(1*1.5);
  if (w===2) y=y-(1*1);
  if (w===1) y=y-(1*0.8);
  if (w===-1) y=y+(1*0.8);
  if (w===-2) y=y+(1*1);
  if (w===-3) y=y+(1*1.5);
  if (w===-4) y=y+(1*2);
  
  if (m<0.1) m=0.1;
  if (y<0.1) y=0.1;
  
 
  return {
      mm: m.toFixed(1), yy: y.toFixed(1)
  };

}


  //Функция Пуассона
function PoissonDistrib(key_var , lambda_var){
    const data = areaRectangle();
    const resultHome = data.mm;
    const resultAwayTeam = data.yy;

    console.log(data.mm)
    console.log(data.yy)

    console.log(resultHome)
    console.log(resultAwayTeam)
    
    
     
    var u = resultHome ; //Полученное среднее значение голов домашней команды из предыдущей формулы
    var awaygoal = resultAwayTeam; //Полученное среднее значение голов команды гостей из предыдущей формулы
    const k = [0, 1, 2, 3, 4, 5, 6, 7];  //массив 0т 0 до 7 для хозяев
    var awayK = [0, 1, 2, 3, 4, 5, 6, 7];  //массив для гостей
  
    var result = k.map(i=>(Fixed(PoissonTerm( u, [i] ),8,4)*100).toFixed(2),) 
    var resultAway =awayK.map(i=>Fixed(PoissonTerm( awaygoal,[i] ),8,4),);
  
  
  //цикл для получения процентов для каждого счета
    var finalResult = []
    for (var i=0; i<result.length; i++) {
     for (var j=0; j<resultAway.length; j++) {
        finalResult.push(result[i]*resultAway[j]);
       }
      }
    console.log(finalResult)
  
    // получение максимального элемента массива
    var max = getMaxValue(finalResult);
    function getMaxValue(finalResult){
     var max = finalResult[0]; // берем первый элемент массива
     for (var f = 0; f < finalResult.length; f++) { // переберем весь массив
         // если элемент больше, чем в переменной, то присваиваем его значение переменной
         if (max < finalResult[f]) max = finalResult[f]; 
     }
     // возвращаем максимальное значение
     return max;
  }
    console.log(max);
    //Находим индекс наибольшего значения массива finalResult
    const maxIndex = Math.max(...finalResult);
    const randomIndex = finalResult.indexOf(maxIndex);
    console.log(randomIndex)
    //Массив со счетами 
    const allScore = [
      "0 - 0", "0 - 1", "0 - 2", "0 -3", "0 - 4", "0 - 5", "0 - 6", "0 - 7",
      "1 - 0", "1 - 1", "1 - 2", "1 - 3", "1 - 4", "1 - 5", "1 - 6", "1 - 7", "2 - 0", "2 - 1", 
      "2 - 2", "2 - 3", "2 - 4", "2 - 5", "2 - 6", "2 - 7", "3 - 0", "3 - 1", "3 - 2", "3 - 3", "3 - 4", 
      "3 - 5", "3 - 6", "3 - 7", "4 - 0", "4 - 1", "4 - 2", "4 - 3", "4 - 4", "4 - 5", "4 - 6", "4 - 7",
      "5 - 0", "5 - 1", "5 - 2", "5 - 3", "5 - 4", "5 - 5", "5 - 6", "5 - 7", "6 - 0", "6 - 1", "6 - 2",
      "6 - 3", "6 - 4", "6 - 5", "6 - 6", "6 - 7", "7 - 0", "7 - 1", "7 - 2", "7 - 3", "7 - 4", "7 - 5",
      "7 - 6", "7 - 7"]
     
    //Выводим самый вероятный счет
    const scoreIndex = allScore[randomIndex]
    const scoreResult = document.querySelector('.line__result-goalscore');
    scoreResult.textContent = scoreIndex
    console.log(scoreIndex)
  
    //вероятность счета
    // const scoreVer = document.querySelector('.score-ver');
    // scoreVer.textContent = max.toFixed(2) + ' %';
      //Победа хозяев
  
    const oneNull = finalResult[8]; //1-0  
    const twoNull = finalResult[16]; //2-0
    const twoOne = finalResult[17]; //2-1
    const threeNull = finalResult[24]; //3-0
    const threeOne = finalResult[25]; //3-1
    const threeTwo = finalResult[26]; //3-2
    const fourNull = finalResult[32]; //4-0
    const fourOne = finalResult[33]; //4-1
    const fourTwo = finalResult[34];//4-2
    const fourThree = finalResult[35]; //4-3
    const fiveNull = finalResult[40]; //5-0
    const fiveOne = finalResult[41]; //5-1
    const fiveTwo = finalResult[42];//5-2
    const fiveThree = finalResult[43]; //5-3
    const fiveFour = finalResult[44]; //5-4
    const sixNull = finalResult[48]; //6-0
    const sixOne = finalResult[49]; //6-1
    const sixTwo = finalResult[50];//6-2
    const sixThree = finalResult[51]; //6-3
    const sixFour = finalResult[52]; //6-4
    const sixFive = finalResult[53]; //6-5
    const sevenNull = finalResult[56]; //7-0
    const sevenOne = finalResult[57]; //7-1
    const sevenTwo = finalResult[58];//7-2
    const sevenThree = finalResult[59]; //7-3
    const sevenFour = finalResult[60]; //7-4
    const sevenFive = finalResult[61]; //7-5
    const sevenSix = finalResult[62]; //7-6
  
    //Ничьи
  
  
    const nullNull = finalResult[0]; //0-0
    const oneOne = finalResult[9]; //1-1
    const twoTwo = finalResult[18]; //2-2
    const threeThree = finalResult[27]; //3-3
    const fourFour = finalResult[36]; //4-4
    const fiveFive = finalResult[45]; //5-5
    const sixSix = finalResult[54]; //6-6
    const sevenSeven = finalResult[63]; //7-7
  
    //Победа гостей
  
    
  
    const nullOne = finalResult[1];  //0-1
    const nullTwo = finalResult[2]; //0-2
    const nullThree = finalResult[3]; //0-3
    const nullFour = finalResult[4]; //0-4
    const nullFive = finalResult[5];//0-5
    const nullSix = finalResult[6]; //0-6
    const nullSeven = finalResult[7]; //0-7 
    const oneTwo = finalResult[10]; //1-2
    const oneThree = finalResult[11]; //1-3
    const oneFour = finalResult[12]; //1-4
    const oneFive = finalResult[13]; //1-5
    const oneSix = finalResult[14]; //1-6
    const oneSeven = finalResult[15]; //1-7
    const twoThree = finalResult[19]; //2-3
    const twoFour = finalResult[20]; //2-4
    const twoFive = finalResult[21]; //2-5
    const twoSix = finalResult[22]; //2-6
    const twoSeven = finalResult[23]; //2-7
    const threeFour = finalResult[28]; //3-4
    const threeFive = finalResult[29]; //3-5
    const threeSix = finalResult[30]; //3-6
    const threeSeven = finalResult[31]; //3-7
    const fourFive = finalResult[37]; //4-5
    const fourSix = finalResult[38]; //4-6
    const fourSeven = finalResult[39]; //4-7
    const fiveSix = finalResult[46]; //5-6
    const fiveSeven = finalResult[47]; //5-7
    const sixSeven = finalResult[55]; //6-7
  
    
   //Процент победы домашней команды
   const winHomeTeam = oneNull+twoNull+twoOne+threeNull+threeOne+threeTwo+fourNull+fourOne+fourTwo+fourThree+fiveOne+fiveNull+fiveTwo+fiveThree+fiveFour+sixNull+sixOne+sixTwo+sixThree+sixFour+sixFive+sevenNull+sevenOne+sevenTwo+sevenThree+sevenFour+sevenFive+sevenSix;
   const winPersent = document.querySelector('.win-persent');
   winPersent.textContent = winHomeTeam.toFixed(2) + ' %';

   const awinPersentMod = document.querySelector('.line-winHome-persent_mod');
   awinPersentMod.textContent = winHomeTeam.toFixed(2) + ' %';

   const lineWinHomePersent = document.querySelector('.line-winHome-persent');
   lineWinHomePersent.textContent = winHomeTeam.toFixed(2) + ' %';

   
  
   const profitWinFirstTeam = 1.15/(winHomeTeam/100);
   const profitKef = document.querySelector('.profit-kef');
   profitKef.textContent = profitWinFirstTeam.toFixed(2);

   const lineboxlinetextlinkmod = document.querySelector('.profit-kef_mod');
   lineboxlinetextlinkmod.textContent = profitWinFirstTeam.toFixed(2);
   
  
   //Процент победы выездной команды
   const winAwayTeam = nullOne+nullTwo+nullThree+nullFour+nullFive+nullSix+nullSeven+oneTwo+oneThree+oneFour+oneFive+oneSix+oneSeven+twoThree+twoFour+twoFive+twoSix+twoSeven+threeFour+threeFive+threeSix+threeSeven+fourFive+fourSix+fourSeven+fiveSix+fiveSeven+sixSeven;
   const lossPersent = document.querySelector('.awayWin-persent');
   lossPersent.textContent = winAwayTeam.toFixed(2) + ' %';

   const awayWin = document.querySelector('.away-win');
   awayWin.textContent = winAwayTeam.toFixed(2) + ' %';

   const awayWinMod = document.querySelector('.away-win_mod');
   awayWinMod.textContent = winAwayTeam.toFixed(2) + ' %';
  
   const profitWinSecondTeam = 1.15/(winAwayTeam/100);
   const profitKefB = document.querySelector('.away-win-profit')
   profitKefB.textContent = profitWinSecondTeam.toFixed(2);

   const profitKefBMod = document.querySelector('.away-win-profit_mod')
   profitKefBMod.textContent = profitWinSecondTeam.toFixed(2);
   
  
   //Процент на ничью
   const drawHomeAway = 100-winHomeTeam.toFixed(2)-winAwayTeam.toFixed(2);
   const drawPersent = document.querySelector('.draw-persent');
   drawPersent.textContent = drawHomeAway.toFixed(2) + ' %';

   const draw = document.querySelector('.draw');
   draw.textContent = drawHomeAway.toFixed(2) + ' %';
  
   const profitDraw = 1.15/(drawHomeAway/100);
   const profitKefA = document.querySelector('.draw-profit');
   profitKefA.textContent = profitDraw.toFixed(2);

   const drawMod = document.querySelector('.draw_mod')
   drawMod.textContent = drawHomeAway.toFixed(2) + ' %';

   const drawProfitMod = document.querySelector('.draw-profit_mod')
   drawProfitMod.textContent = profitDraw.toFixed(2);
   
  
   //Процент на 1х
   const oneXHomeTeam = winHomeTeam+drawHomeAway;
   const homeX = document.querySelector('.homeX')
   homeX.textContent = oneXHomeTeam.toFixed(2) + ' %';

   const homeXMod = document.querySelector('.homeX_mod')
   homeXMod.textContent = oneXHomeTeam.toFixed(2) + ' %';
  
   const profitXfirstTeam = 1.15/(oneXHomeTeam/100);
   const profitKefC = document.querySelector('.homeX-profit');
   profitKefC.textContent = profitXfirstTeam.toFixed(2);

   const profitKefCMod = document.querySelector('.homeX-profit_mod');
   profitKefCMod.textContent = profitXfirstTeam.toFixed(2);
  
   // 2x
   const twoXAwayTeam = winAwayTeam+drawHomeAway;
   const awayX = document.querySelector('.awayX');
   awayX.textContent = twoXAwayTeam.toFixed(2) + ' %';

   const awayXMod = document.querySelector('.awayX_mod');
   awayXMod.textContent = twoXAwayTeam.toFixed(2) + ' %';
  
   const profitXSecondTeam = 1.15/(twoXAwayTeam/100);
   const profitKefE = document.querySelector('.awayX-profit');
   profitKefE.textContent = profitXSecondTeam.toFixed(2); 

   const profitKefEMod = document.querySelector('.awayX-profit_mod');
   profitKefEMod.textContent = profitXSecondTeam.toFixed(2); 
  
   //12
   const notDrawHomeAway = 100-drawHomeAway;
   const notDraw = document.querySelector('.notDraw')
   notDraw.textContent = notDrawHomeAway.toFixed(2) + ' %';

   const notDrawMod = document.querySelector('.notDraw_mod')
   notDrawMod.textContent = notDrawHomeAway.toFixed(2) + ' %';
  
   const profitNotDraw = 1.15/(notDrawHomeAway/100);
   const profitKefD = document.querySelector('.notDraw-profit');
   profitKefD.textContent = profitNotDraw.toFixed(2);

   const profitKefDMod = document.querySelector('.notDraw-profit_mod');
   profitKefDMod.textContent = profitNotDraw.toFixed(2);
  
   //1(0)
   const homeNull = document.querySelector('.homeNull')
//    homeNull.textContent = winHomeTeam.toFixed(2) + ' %';
   
  
   const profitNullFirstTeam = ((winHomeTeam+drawHomeAway))/1.15;
   const profitKefF = document.querySelector('.homeNull-profit')
//    profitKefF.textContent = profitNullFirstTeam.toFixed(2);
  
   //2(0)
   const awayNull = document.querySelector('.awayNull')
//    awayNull.textContent = winAwayTeam.toFixed(2) + ' %';
  
   const profitNullSecondTeam = 1.15/((winAwayTeam+drawHomeAway)/100) ;
   const profitKefG = document.querySelector('.awayNull-profit')
//    profitKefG.textContent = profitNullSecondTeam.toFixed(2);
  
   //1(-1)
   const minusOneFirstTeam = twoNull+threeNull+threeOne+fourNull+fourOne+fourTwo+fiveNull+fiveOne+fiveTwo+fiveThree+sixNull+sixOne+sixTwo+sixThree+sixFour+sevenNull+sevenOne+sevenTwo+sevenThree+sevenFour+sevenFive;
   const homeMinusOne = document.querySelector('.home-minusOne')
//    homeMinusOne.textContent = minusOneFirstTeam.toFixed(2) + ' %';
  
   const profitMinusOneFirstTeam = 1.15/(minusOneFirstTeam/100);
   const profitKefH = document.querySelector('.home-minusOne-profit')
//    profitKefH.textContent = profitMinusOneFirstTeam.toFixed(2);
  
   //2(-1)
   const minusOneSecondTeam = nullTwo+nullThree+oneThree+nullFour+oneFour+twoFour+nullFive+oneFive+twoFive+threeFive+nullSix+oneSix+twoSix+threeSix+fourSix+nullSeven+oneSeven+twoSeven+threeSeven+fourSeven+fiveSeven;
   const awayMinusOne = document.querySelector('.away-minusOne')
//    awayMinusOne.textContent = minusOneSecondTeam.toFixed(2) + ' %';
  
   const profitMinusOneSecondTeam = 1.15/(minusOneSecondTeam/100);
   const profitKefI = document.querySelector('.away-minusOne-profit')
//    profitKefI.textContent = profitMinusOneSecondTeam.toFixed(2);
  
   //1(-1,5)
   const homeMinusOneFive = document.querySelector('.home-minusOneFive');
   homeMinusOneFive.textContent = minusOneFirstTeam.toFixed(2) + ' %';
   const profitKefJ = document.querySelector('.home-minusOneFive-profit');

   const homeMinusOneFiveMod = document.querySelector('.home-minusOneFive_mod');
   homeMinusOneFiveMod.textContent = minusOneFirstTeam.toFixed(2) + ' %';
   const profitKefJMod = document.querySelector('.home-minusOneFive-profit_mod');
  
   const profitMinusOneFiveFirstTeam = 1.15/(minusOneFirstTeam/100);
   profitKefJ.textContent = profitMinusOneFiveFirstTeam.toFixed(2);

   profitKefJMod.textContent = profitMinusOneFiveFirstTeam.toFixed(2);
  
  
  
   //2(-1,5)
   const awayMinusOneFive = document.querySelector('.away-minusOneFive');
   awayMinusOneFive.textContent = minusOneSecondTeam.toFixed(2) + ' %';
   const profitKefK = document.querySelector('.away-minusOneFive-profit');

   const awayMinusOneFiveMod = document.querySelector('.away-minusOneFive_mod');
   awayMinusOneFiveMod.textContent = minusOneSecondTeam.toFixed(2) + ' %';
   const profitKefKMod = document.querySelector('.away-minusOneFive-profit_mod');
  
   const profitMinusOneFiveSecondTeam = 1.15/(minusOneSecondTeam/100);
   profitKefK.textContent = profitMinusOneFiveSecondTeam.toFixed(2);
   profitKefKMod.textContent = profitMinusOneFiveSecondTeam.toFixed(2);
  
   //1(-2)
   const minusTwoFirstTeam = threeNull+fourNull+fourOne+fiveNull+fiveOne+fiveTwo+sixNull+sixOne+sixTwo+sixThree+sevenNull+sevenOne+sevenTwo+sevenThree+sevenFour;
   const homeMinusTwo = document.querySelector('.home-minusTwo');
//    homeMinusTwo.textContent = minusTwoFirstTeam.toFixed(2) + ' %';
   const profitKefL = document.querySelector('.home-minusTwo-profit');
   
   const profitMinusTwoFirstTeam = 1.15/(minusTwoFirstTeam/100);
//    profitKefL.textContent = profitMinusTwoFirstTeam.toFixed(2);
  
   //2(-2)
   const minusTwoSecondTeam = nullThree+nullFour+oneFour+nullFive+oneFive+twoFive+nullSix+oneSix+twoSix+threeSix+nullSeven+oneSeven+twoSeven+threeSeven+fourSeven;
   const awayMinusTwo = document.querySelector('.away-minusTwo');
//    awayMinusTwo.textContent = minusTwoSecondTeam.toFixed(2) + ' %';
   const profitKefM = document.querySelector('.away-minusTwo-profit');
   
   const profitMinusTwoSecondTeam = 1.15/(minusTwoSecondTeam/100);
//    profitKefM.textContent = profitMinusTwoSecondTeam.toFixed(2);
  
   //1(-2.5)
   const minusTwoFiveFirstTeam = threeNull+fourNull+fourOne+fiveNull+fiveOne+fiveTwo+sixNull+sixOne+sixTwo+sixThree+sevenNull+sevenOne+sevenTwo+sevenThree+sevenFour;
   const homeMinusTwoFive= document.querySelector('.home-minusTwoFive');
   homeMinusTwoFive.textContent = minusTwoFiveFirstTeam.toFixed(2) + ' %';
   const profitKefN = document.querySelector('.home-minusTwoFive-profit');

   const homeMinusTwoFiveMod = document.querySelector('.home-minusTwoFive_mod');
   homeMinusTwoFiveMod.textContent = minusTwoFiveFirstTeam.toFixed(2) + ' %';
   const profitKefNMod = document.querySelector('.home-minusTwoFive-profit_mod');
   
   const profitMinusTwoFiveFirstTeam = 1.15/(minusTwoFiveFirstTeam/100);
   profitKefN.textContent = profitMinusTwoFiveFirstTeam.toFixed(2);

   profitKefNMod.textContent = profitMinusTwoFiveFirstTeam.toFixed(2);
  
   //2(-2.5)
   const minusTwoFiveSecondTeam = nullThree+nullFour+oneFour+nullFive+oneFive+twoFive+nullSix+oneSix+twoSix+threeSix+nullSeven+oneSeven+twoSeven+threeSeven+fourSeven;
   const awayMinusTwoFive = document.querySelector('.away-minusTwoFive');
   awayMinusTwoFive.textContent = minusTwoFiveSecondTeam.toFixed(2) + ' %';
   const profitKefO = document.querySelector('.away-minusTwoFive-profit');
   
   const awayMinusTwoFiveMod = document.querySelector('.away-minusTwoFive_mod');
   awayMinusTwoFiveMod.textContent = minusTwoFiveSecondTeam.toFixed(2) + ' %';
   const profitKefOMod = document.querySelector('.away-minusTwoFive-profit_mod');

   const profitMinusTwoFiveSecondTeam = 1.15/(minusTwoFiveSecondTeam/100);
   profitKefO.textContent = profitMinusTwoFiveSecondTeam.toFixed(2);
   profitKefOMod.textContent = profitMinusTwoFiveSecondTeam.toFixed(2);
  
   //1(+1)
   const plusOneFirstTeam = winHomeTeam+drawHomeAway;
   const homePlusOne = document.querySelector('.home-plusOne');
//    homePlusOne.textContent = plusOneFirstTeam.toFixed(2) + ' %';
   const profitKefP = document.querySelector('.home-plusOne-profit');
   
   const profitPlusOneFirstTeam = 1.15/(plusOneFirstTeam/100);
//    profitKefP.textContent = profitPlusOneFirstTeam.toFixed(2);
  
   //2(+1)
   const plusOneSecondTeam = winAwayTeam+drawHomeAway;
   const awayPlusOne = document.querySelector('.away-plusOne');
//    awayPlusOne.textContent = plusOneSecondTeam.toFixed(2) + ' %';
   const profitKefQ = document.querySelector('.away-plusOne-profit');
   
   const profitPlusOneSecondTeam = 1.15/(plusOneSecondTeam/100);
//    profitKefQ.textContent = profitPlusOneSecondTeam.toFixed(2);
  
   //1(+1.5)
   const plusOneFiveFirstTeam = winHomeTeam+drawHomeAway+nullOne+oneTwo+twoThree+threeFour+fourFive+fiveSix+sixSeven;
   const homePlusOneFive = document.querySelector('.home-plusOneFive');
   homePlusOneFive.textContent = plusOneFiveFirstTeam.toFixed(2) + ' %';
   const profitKefR = document.querySelector('.home-plusOneFive-profit');

   const homePlusOneFiveMod = document.querySelector('.home-plusOneFive_mod');
   homePlusOneFiveMod.textContent = plusOneFiveFirstTeam.toFixed(2) + ' %';
   const profitKefRMod = document.querySelector('.home-plusOneFive-profit_mod');
   
   const profitPlusOneFiveFirstTeam = 1.15/(plusOneFiveFirstTeam/100);
   profitKefR.textContent = profitPlusOneFiveFirstTeam.toFixed(2);

   profitKefRMod.textContent = profitPlusOneFiveFirstTeam.toFixed(2);
  
   //2(+1.5)
   const plusOneFiveSecondTeam = winAwayTeam+drawHomeAway+oneNull+twoOne+threeTwo+fourThree+fiveFour+sixFive+sevenSix;
   const awayPlusOneFive= document.querySelector('.away-plusOneFive');
   awayPlusOneFive.textContent = plusOneFiveSecondTeam.toFixed(2) + ' %';
   const profitKefS = document.querySelector('.away-plusOneFive-profit');

   const awayPlusOneFiveMod = document.querySelector('.away-plusOneFive_mod');
   awayPlusOneFiveMod.textContent = plusOneFiveSecondTeam.toFixed(2) + ' %';
   const profitKefSMod = document.querySelector('.away-plusOneFive-profit_mod');
   
   const profitPlusOneFiveSecondTeam = 1.15/(plusOneFiveSecondTeam/100);
   profitKefS.textContent = profitPlusOneFiveSecondTeam.toFixed(2);
   profitKefSMod.textContent = profitPlusOneFiveSecondTeam.toFixed(2);
  
   //1(+2)
   const plusTwoFirstTeam = winHomeTeam+drawHomeAway+nullOne+oneTwo+twoThree+threeFour+fourFive+fiveSix+sixSeven;
   const homePlusTwo = document.querySelector('.home-plusTwo');
//    homePlusTwo.textContent = plusTwoFirstTeam.toFixed(2) + ' %';
   const profitKefT = document.querySelector('.home-plusTwo-profit');
   
   const profitPlusTwoFirstTeam = 1.15/(plusTwoFirstTeam/100);
//    profitKefT.textContent = profitPlusTwoFirstTeam.toFixed(2);
  
   //2(+2)
   const plusTwoSecondTeam = winAwayTeam+drawHomeAway+oneNull+twoOne+threeTwo+fourThree+fiveFour+sixFive+sevenSix;
   const awayPlusTwo = document.querySelector('.away-plusTwo');
//    awayPlusTwo.textContent = plusTwoSecondTeam.toFixed(2) + ' %';
   const profitKefU = document.querySelector('.away-plusTwo-profit');
   
   const profitPlusTwoSecondTeam = 1.15/(plusTwoSecondTeam/100);
//    profitKefU.textContent = profitPlusTwoSecondTeam.toFixed(2);
  
   //1(+2.5)
   const plusTwoFiveFirstTeam = winHomeTeam+drawHomeAway+nullOne+oneTwo+twoThree+threeFour+fourFive+fiveSix+sixSeven+nullTwo+oneThree+twoFour+threeFive+fourSix+fiveSeven;
   const homePlusTwoFive = document.querySelector('.home-plusTwoFive');
   homePlusTwoFive.textContent = plusTwoFiveFirstTeam.toFixed(2) + ' %';
   const profitKefV = document.querySelector('.home-plusTwoFive-profit');

   const homePlusTwoFiveMod = document.querySelector('.home-plusTwoFive_mod');
   homePlusTwoFiveMod.textContent = plusTwoFiveFirstTeam.toFixed(2) + ' %';
   const profitKefVMod = document.querySelector('.home-plusTwoFive-profit_mod');
   
   const profitPlusTwoFiveFirstTeam = 1.15/(plusTwoFiveFirstTeam/100);
   profitKefV.textContent = profitPlusTwoFiveFirstTeam.toFixed(2);

   profitKefVMod.textContent = profitPlusTwoFiveFirstTeam.toFixed(2);
  
   //2(+2.5)
   const plusTwoFiveSecondTeam = winAwayTeam+drawHomeAway+oneNull+twoOne+threeTwo+fourThree+fiveFour+sixFive+sevenSix+twoNull+threeOne+fourTwo+fiveThree+sixFour+sevenFive;
   const awayPlusTwoFive = document.querySelector('.away-plusTwoFive');
   awayPlusTwoFive.textContent = plusTwoFiveSecondTeam.toFixed(2) + ' %';
   const profitKefW = document.querySelector('.away-plusTwoFive-profit');

   const awayPlusTwoFiveMod = document.querySelector('.away-plusTwoFive_mod');
   awayPlusTwoFiveMod.textContent = plusTwoFiveSecondTeam.toFixed(2) + ' %';
   const profitKefWMod = document.querySelector('.away-plusTwoFive-profit_mod');
   
   const profitPlusTwoFiveSecondTeam = 1.15/(plusTwoFiveSecondTeam/100);
   profitKefW.textContent = profitPlusTwoFiveSecondTeam.toFixed(2);
   profitKefWMod.textContent = profitPlusTwoFiveSecondTeam.toFixed(2);
  
   //Total more 0.5
   const totalNullFiveFirstTeam = (winHomeTeam+(drawHomeAway-nullNull)+winAwayTeam);
   const totalMoreNullFive = document.querySelector('.totalMore-nullFive');
   totalMoreNullFive.textContent = totalNullFiveFirstTeam.toFixed(2) + ' %';
   const profitKefX = document.querySelector('.totalMore-nullFive-profit');

   const totalMoreNullFiveMod = document.querySelector('.totalMore-nullFive_mod');
   totalMoreNullFiveMod.textContent = totalNullFiveFirstTeam.toFixed(2) + ' %';
   const profitKefXMod = document.querySelector('.totalMore-nullFive-profit_mod');
   
   const profitTotalNullFiveFirstTeam = 1.15/(totalNullFiveFirstTeam/100);
   profitKefX.textContent = profitTotalNullFiveFirstTeam.toFixed(2);

   profitKefXMod.textContent = profitTotalNullFiveFirstTeam.toFixed(2);
  
   //Total less 0.5
   const totalNullFiveSecondTeam = 100-totalNullFiveFirstTeam;
   const totalLessNullFive = document.querySelector('.totalLess-nullFive');
   totalLessNullFive.textContent = totalNullFiveSecondTeam.toFixed(2) + ' %';
   const profitKefY = document.querySelector('.totalLess-nullFive-profit');

   const totalLessNullFiveMod = document.querySelector('.totalLess-nullFive_mod');
   totalLessNullFiveMod.textContent = totalNullFiveSecondTeam.toFixed(2) + ' %';
   const profitKefYMod = document.querySelector('.totalLess-nullFive-profit_mod');
   
   const profitTotalNullFiveSecondTeam = 1.15/(totalNullFiveSecondTeam/100);
   profitKefY.textContent = profitTotalNullFiveSecondTeam.toFixed(2);
   profitKefYMod.textContent = profitTotalNullFiveSecondTeam.toFixed(2);
  
   //Total more 1
   const totalOneFirstTeam = oneOne+twoOne+threeOne+fourOne+fiveOne+sixOne+sevenOne+oneTwo+oneThree+oneFour+oneFive+oneSix+oneSeven+twoTwo+
   twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+twoNull+threeNull+fourNull+fiveNull+sixNull+sevenNull+nullTwo+
   nullThree+nullFour+nullFive+nullSix+nullSeven;
   const totalMoreOne = document.querySelector('.totalMore-one');
//    totalMoreOne.textContent = totalOneFirstTeam.toFixed(2) + ' %';
   const profitKefZ = document.querySelector('.totalMore-one-profit');
   
   const profitTotalOneFirstTeam = 1.15/(totalOneFirstTeam/100);
//    profitKefZ.textContent = profitTotalOneFirstTeam.toFixed(2);
  
   //Total less 1
   const totalOneSecondTeam = 100-totalOneFirstTeam;
   const totalLessOne = document.querySelector('.totalLess-one');
//    totalLessOne.textContent = totalOneSecondTeam.toFixed(2) + ' %';
   const profitKefAA = document.querySelector('.totalLess-one-profit');
  
   const profitTotalOneSecondTeam = 1.15/(totalOneSecondTeam/100);
//    profitKefAA.textContent = profitTotalOneSecondTeam.toFixed(2);
  
   //Total more 1.5
   const totalOneFiveFirstTeam = oneOne+twoOne+threeOne+fourOne+fiveOne+sixOne+sevenOne+oneTwo+oneThree+oneFour+oneFive+oneSix+oneSeven+twoTwo+
   twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+twoNull+threeNull+fourNull+fiveNull+sixNull+sevenNull+nullTwo+
   nullThree+nullFour+nullFive+nullSix+nullSeven;
   const totalMoreOneFive = document.querySelector('.totalMore-oneFive');
   totalMoreOneFive.textContent = totalOneFiveFirstTeam.toFixed(2) + ' %';
   const profitKefBB = document.querySelector('.totalMore-oneFive-profit');

   const totalMoreOneFiveMod = document.querySelector('.totalMore-oneFive_mod');
   totalMoreOneFiveMod.textContent = totalOneFiveFirstTeam.toFixed(2) + ' %';
   const profitKefBBMod = document.querySelector('.totalMore-oneFive-profit_mod');
   
   const profitTotalOneFiveFirstTeam = 1.15/(totalOneFiveFirstTeam/100);
   profitKefBB.textContent = profitTotalOneFiveFirstTeam.toFixed(2);

   profitKefBBMod.textContent = profitTotalOneFiveFirstTeam.toFixed(2);
  
   //Total less 1.5
   const totalOneFiveSecondTeam = 100-totalOneFiveFirstTeam;
   const totalLessOneFive = document.querySelector('.totalLess-oneFive');
   totalLessOneFive.textContent = totalOneFiveSecondTeam.toFixed(2) + ' %';
   const profitKefCC = document.querySelector('.totalLess-oneFive-profit');

   const totalLessOneFiveMod = document.querySelector('.totalLess-oneFive_mod');
   totalLessOneFiveMod.textContent = totalOneFiveSecondTeam.toFixed(2) + ' %';
   const profitKefCCMod = document.querySelector('.totalLess-oneFive-profit_mod');
  
   const profitTotalOneFiveSecondTeam = 1.15/(totalOneFiveSecondTeam/100);
   profitKefCC.textContent = profitTotalOneFiveSecondTeam.toFixed(2);
   profitKefCCMod.textContent = profitTotalOneFiveSecondTeam.toFixed(2);
  
   //Total more 2
   const totalTwoFirstTeam = twoOne+threeOne+fourOne+fiveOne+sixOne+sevenOne+oneTwo+oneThree+oneFour+oneFive+oneSix+oneSeven+twoTwo+
   twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+threeNull+fourNull+fiveNull+sixNull+sevenNull+
   nullThree+nullFour+nullFive+nullSix+nullSeven;
   const totalMoreTwo = document.querySelector('.totalMore-two');
//    totalMoreTwo.textContent = totalTwoFirstTeam.toFixed(2) + ' %';
   const profitKefEE = document.querySelector('.totalMore-two-profit');
   
   const profitTotalTwoFirstTeam = 1.15/(totalTwoFirstTeam/100);
//    profitKefEE.textContent = profitTotalTwoFirstTeam.toFixed(2);
  
   //Total less 2
   const totalTwoSecondTeam = 100-totalTwoFirstTeam;
   const totalLessTwo = document.querySelector('.totalLess-two');
//    totalLessTwo.textContent = totalTwoSecondTeam.toFixed(2) + ' %';
   const profitKefFF = document.querySelector('.totalLess-two-profit');
  
   const profitTotalTwoSecondTeam = 1.15/(totalTwoSecondTeam/100);
//    profitKefFF.textContent = profitTotalTwoSecondTeam.toFixed(2);
  
   //Total more 2.5
   const totalTwoFiveFirstTeam = twoOne+threeOne+fourOne+fiveOne+sixOne+sevenOne+oneTwo+oneThree+oneFour+oneFive+oneSix+oneSeven+twoTwo+
   twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+threeNull+fourNull+fiveNull+sixNull+sevenNull+
   nullThree+nullFour+nullFive+nullSix+nullSeven;
   const totalMoreTwoFive = document.querySelector('.totalMore-twoFive');
   totalMoreTwoFive.textContent = totalTwoFiveFirstTeam.toFixed(2) + ' %';
   const profitKefGG = document.querySelector('.totalMore-twoFive-profit');

   const totalMoreTwoFiveMod = document.querySelector('.totalMore-twoFive_mod');
   totalMoreTwoFiveMod.textContent = totalTwoFiveFirstTeam.toFixed(2) + ' %';
   const profitKefGGMod = document.querySelector('.totalMore-twoFive-profit_mod');
   
   const profitTotalTwoFiveFirstTeam = 1.15/(totalTwoFiveFirstTeam/100);
   profitKefGG.textContent = profitTotalTwoFiveFirstTeam.toFixed(2);

   profitKefGGMod.textContent = profitTotalTwoFiveFirstTeam.toFixed(2);
  
   //Total less 2.5
   const totalTwoFiveSecondTeam = 100-totalTwoFiveFirstTeam;
   const totalLessTwoFive = document.querySelector('.totalLess-twoFive');
   totalLessTwoFive.textContent = totalTwoFiveSecondTeam.toFixed(2) + ' %';
   const profitKefHH = document.querySelector('.totalLess-twoFive-profit');

   const totalLessTwoFiveMod = document.querySelector('.totalLess-twoFive_mod');
   totalLessTwoFiveMod.textContent = totalTwoFiveSecondTeam.toFixed(2) + ' %';
   const profitKefHHMod = document.querySelector('.totalLess-twoFive-profit_mod');
  
   const profitTotalTwoFiveSecondTeam = 1.15/(totalTwoFiveSecondTeam/100);
   profitKefHH.textContent = profitTotalTwoFiveSecondTeam.toFixed(2);
   profitKefHHMod.textContent = profitTotalTwoFiveSecondTeam.toFixed(2);
  
   //Total more 3
   const totalThreeFirstTeam = threeOne+fourOne+fiveOne+sixOne+sevenOne+oneThree+oneFour+oneFive+oneSix+oneSeven+twoTwo+
   twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+fourNull+fiveNull+sixNull+sevenNull+nullFour+nullFive+nullSix+nullSeven;
   const totalMoreThree = document.querySelector('.totalMore-three');
//    totalMoreThree.textContent = totalThreeFirstTeam.toFixed(2) + ' %';
   const profitKefII = document.querySelector('.totalMore-three-profit');
   
   const profitTotalThreeFirstTeam = 1.15/(totalThreeFirstTeam/100);
//    profitKefII.textContent = profitTotalThreeFirstTeam.toFixed(2);
  
   //Total less 3
   const totalThreeSecondTeam = 100-totalThreeFirstTeam;
   const totalLessThree = document.querySelector('.totalLess-three');
//    totalLessThree.textContent = totalThreeSecondTeam.toFixed(2) + ' %';
   const profitKefJJ = document.querySelector('.totalLess-three-profit');
  
   const profitTotalThreeSecondTeam = 1.15/(totalThreeSecondTeam/100);
//    profitKefJJ.textContent = profitTotalThreeSecondTeam.toFixed(2);
   
   //Total more 3.5
   const totalThreeFiveFirstTeam = threeOne+fourOne+fiveOne+sixOne+sevenOne+oneThree+oneFour+oneFive+oneSix+oneSeven+twoTwo+
   twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+fourNull+fiveNull+sixNull+sevenNull+nullFour+nullFive+nullSix+nullSeven;
   const totalMoreThreeFive = document.querySelector('.totalMore-threeFive');
   totalMoreThreeFive.textContent = totalThreeFiveFirstTeam.toFixed(2) + ' %';
   const profitKefTF = document.querySelector('.totalMore-threeFive-profit');

   const totalMoreThreeFiveMod = document.querySelector('.totalMore-threeFive_mod');
   totalMoreThreeFiveMod.textContent = totalThreeFiveFirstTeam.toFixed(2) + ' %';
   const profitKefTFMod = document.querySelector('.totalMore-threeFive-profit_mod');
   
   const profitTotalThreeFiveFirstTeam = 1.15/(totalThreeFiveFirstTeam/100);
   profitKefTF.textContent = profitTotalThreeFiveFirstTeam.toFixed(2);
   profitKefTFMod.textContent = profitTotalThreeFiveFirstTeam.toFixed(2);
  
   //Total less 3.5
   const totalThreeFiveSecondTeam = 100-totalThreeFiveFirstTeam;
   const totalLessThreeFive = document.querySelector('.totalLess-threeFive');
   totalLessThreeFive.textContent = totalThreeFiveSecondTeam.toFixed(2) + ' %';
   const profitKefLTF = document.querySelector('.totalLess-threeFive-profit');

   const totalLessThreeFiveMod = document.querySelector('.totalLess-threeFive_mod');
   totalLessThreeFiveMod.textContent = totalThreeFiveSecondTeam.toFixed(2) + ' %';
   const profitKefLTFMod = document.querySelector('.totalLess-threeFive-profit_mod');
  
   const profitTotalThreeFiveSecondTeam = 1.15/(totalThreeFiveSecondTeam/100);
   profitKefLTF.textContent = profitTotalThreeFiveSecondTeam.toFixed(2);
   profitKefLTFMod.textContent = profitTotalThreeFiveSecondTeam.toFixed(2);

   //Total more 4
   const totalMoreFourTeam = fourOne+fiveOne+sixOne+sevenOne+oneFour+oneFive+oneSix+oneSeven+
   twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+fourNull+fiveNull+sixNull+sevenNull+nullFive+nullSix+nullSeven;
   const totalMoreFour = document.querySelector('.totalMore-four');
//    totalMoreFour.textContent = totalMoreFourTeam.toFixed(2) + ' %';
   const profitTotalMoreFour = document.querySelector('.totalMOre-four-profit');

   const profitTotalMoreFourTeam =1.15/(totalMoreFourTeam/100);
//    profitTotalMoreFour.textContent = profitTotalMoreFourTeam.toFixed(2);

   //Total less 4
   const totalLessFourTeam = 100-totalMoreFourTeam;
   const totalLessFour = document.querySelector('.totalLess-four');
//    totalLessFour.textContent = totalLessFourTeam.toFixed(2) + ' %';
   const profitKefTLF = document.querySelector('.totalLess-four-profit');

   const profitTotalLessFourTeam = 1.15/(totalLessFourTeam/100);
//    profitKefTLF.textContent = profitTotalLessFourTeam.toFixed(2);

   //Total more 4.5
   const totalMoreFourFiveTeam = fourOne+fiveOne+sixOne+sevenOne+oneFour+oneFive+oneSix+oneSeven+
   twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+fiveNull+sixNull+sevenNull+nullFive+nullSix+nullSeven;
   const totalMoreFourFive = document.querySelector('.totalMore-fourFive');
   totalMoreFourFive.textContent = totalMoreFourFiveTeam.toFixed(2) + ' %';
   const profitTotalMoreFourFive = document.querySelector('.totalMore-fourFive-profit');

   const totalMoreFourFiveMod = document.querySelector('.totalMore-fourFive_mod');
   totalMoreFourFiveMod.textContent = totalMoreFourFiveTeam.toFixed(2) + ' %';
   const profitTotalMoreFourFiveMod = document.querySelector('.totalMore-fourFive-profit_mod');

   const profitTotalMoreFourFiveTeam =1.15/(totalMoreFourFiveTeam/100);
   profitTotalMoreFourFive.textContent = profitTotalMoreFourFiveTeam.toFixed(2);
   profitTotalMoreFourFiveMod.textContent = profitTotalMoreFourFiveTeam.toFixed(2);

   //Total less 4.5
   const totalLessFourFiveTeam = 100-totalMoreFourFiveTeam;
   const totalLessFourFive = document.querySelector('.totalLess-fourFive');
   totalLessFourFive.textContent = totalLessFourFiveTeam.toFixed(2) + ' %';
   const profitKefTLFF = document.querySelector('.totalLess-fourFive-profit');

   const totalLessFourFiveMod = document.querySelector('.totalLess-fourFive_mod');
   totalLessFourFiveMod.textContent = totalLessFourFiveTeam.toFixed(2) + ' %';
   const profitKefTLFFMod = document.querySelector('.totalLess-fourFive-profit_mod');

   const profitTotalLessFourFiveTeam = 1.15/(totalLessFourFiveTeam/100);
   profitKefTLFF.textContent = profitTotalLessFourFiveTeam.toFixed(2);

   profitKefTLFFMod.textContent = profitTotalLessFourFiveTeam.toFixed(2);


   //Total more 5
   const totalMoreFiveTeam = fiveOne+sixOne+sevenOne+oneFive+oneSix+oneSeven+twoFour+twoFive+twoSix+twoSeven+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+sixNull+sevenNull+nullSix+nullSeven;
   const totalMoreFive = document.querySelector('.totalMore-five');
//    totalMoreFive.textContent = totalMoreFiveTeam.toFixed(2) + ' %';
   const profitTotalMoreFive = document.querySelector('.totalMore-five-profit');

   const profitTotalMoreFiveTeam =1.15/(totalMoreFiveTeam/100);
//    profitTotalMoreFive.textContent = profitTotalMoreFiveTeam.toFixed(2);

   //Total less 5
   const totalLessFiveTeam = 100-totalMoreFiveTeam;
   const totalLessFive = document.querySelector('.totalLess-five');
//    totalLessFive.textContent = totalLessFiveTeam.toFixed(2) + ' %';
   const profitKefTLFiv = document.querySelector('.totalLess-five-profit');

   const profitTotalLessFiveTeam = 1.15/(totalLessFiveTeam/100);
//    profitKefTLFiv.textContent = profitTotalLessFiveTeam.toFixed(2);

   //All scored
   const allScoredTeam = oneOne+oneTwo+oneThree+oneFour+oneFive+oneSix+oneSeven+twoOne+threeOne+fourOne+
   fiveOne+sixOne+sevenOne+twoTwo+twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+
   sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+threeSeven+fourThree+fiveThree+sixThree+sevenThree+
   fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+fiveSix+fiveSeven+sixFive+
   sevenFive+sixSix+sixSeven+sevenSix+sevenSeven;
   const allScored = document.querySelector('.allScored');
   allScored.textContent = allScoredTeam.toFixed(2) + ' %';
   const profitAllScored = document.querySelector('.allScored-profit');

   const allScoredMod = document.querySelector('.allScored_mod');
   allScoredMod.textContent = allScoredTeam.toFixed(2) + ' %';
   const profitAllScoredMod = document.querySelector('.allScored-profit_mod');

   const profitAllScoredTeam = 1.15/(allScoredTeam/100);
   profitAllScored.textContent = profitAllScoredTeam.toFixed(2);
   profitAllScoredMod.textContent = profitAllScoredTeam.toFixed(2);

   //Not all scored
   const notAllScoredTeam = 100-allScoredTeam;
   const notAllScored = document.querySelector('.notAllScored');
   notAllScored.textContent = notAllScoredTeam.toFixed(2) + ' %';
   const profitNotAllScored = document.querySelector('.notAllScored-profit');

   const notAllScoredMod = document.querySelector('.notAllScored_mod');
   notAllScoredMod.textContent = notAllScoredTeam.toFixed(2) + ' %';
   const profitNotAllScoredMod = document.querySelector('.notAllScored-profit_mod');

   const profitNotAllScoredTeam = 1.15/(notAllScoredTeam/100);
   profitNotAllScored.textContent = profitNotAllScoredTeam.toFixed(2);
   profitNotAllScoredMod.textContent = profitNotAllScoredTeam.toFixed(2);
   
    }
  

function Fixed( s, wid, dec ) {
    var z = 1
    if (dec > 0) {
        z /= Math.pow( 10, dec );
        if (s < -z)  s -= 0.5 * z;
        else
            if (s > z)  s += 0.5 * z;
            else
              s = 0;
           }
      
    s = "" + s;
      
    var neg = 0;
    if (s.charAt(0) == "-") {
        neg = 2;
        s = s.substring( 1, s.length );
        }
      
    var exp = "";
    var e = s.lastIndexOf( "E" );
    if (e < 0)  e = s.lastIndexOf( "e" );
    if (e > -1) {
        exp = s.substring( e, s.length );
        s = s.substring( 0, e );
        }
      
    var dp = s.indexOf( ".", 0 );
    if (dp == -1) {
        dp = s.length;
        if (dec > 0) {
            s += ".";
            dp = s.length - 1;
            }
        }
      
    if (dp == 0) {
        s = '0' + s;
        dp = 1;
        }
      
    while ((dec > 0) && ((s.length - dp - 1) < dec))
        s += "0";
      
    var places = s.length - dp - 1;
    if (places > dec)
        if (dec == 0)
            s = s.substring( 0, dp );
        else
            s = s.substring( 0, dp + dec + 1 );
      
    s += exp;
      
    if (neg > 0)
        s = "-" + s;
      
    while (s.length < wid)
        s = " " + s;
      
    return s
    }
      
        
        
        
    function DoPoi( aform ) {
    var u = PosV(parseFloat(aform.u.value));
    aform.u.value = Fixed(u,10,4);
    var k = PosV(parseInt(aform.k.value));
    aform.k.value = Fixed(k,8,0);
    aform.tnk.value = Fixed(PoissonTerm( u, k ),8,4);
    var t = PoissonP( u, k );
    aform.puk.value = Fixed(t,8,4);
    aform.quk.value = Fixed(1-t,8,4);
    }
      
        
    function PoissonTerm( u, k ) {
       
    return  Math.exp( (k * Math.log(u)) - u - LnFact(k) );
    }
      
        
    function LnFact( x ) {
      
    if (x <= 1)  x = 1;
      
    if (x < 12)
        return Math.log( Fact(Math.round(x)) );
    else {
        var invx = 1 / x;
        var invx2 = invx * invx;
        var invx3 = invx2 * invx;
        var invx5 = invx3 * invx2;
        var invx7 = invx5 * invx2;
      
        var sum = ((x + 0.5) * Math.log(x)) - x;
        sum += Math.log(2*Math.PI) / 2;
        sum += (invx / 12) - (invx3 / 360);
        sum += (invx5 / 1260) - (invx7 / 1680);
      
        return sum;
        }
    }
      
    function Fact( x ) {
    var  t=1;
    while (x > 1)
        t *= x--;
    return t;
    }
      
        
    function PosV( x ) {
    if (x < 0)  x = -x;
    return x;
    }


   


resultMathButton.addEventListener('click', () => {
  areaRectangle()
  PoissonDistrib()
  })
    