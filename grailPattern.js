/* 圣杯模式
用来继承父类，但改变子类的原型不会影响到父类
 */
 function Father(){

 }
 Father.prototype.lastName = function(){
     console.log("My lastName is Rorbert!");
 }

 function Son(){
    
 }
 grailMod(Father,Son);
 Son.prototype.sex = 'female';

 function grailMod(origin,target){
     var target = target || {};
     function Temp(){

     }
     Temp.prototype = origin.prototype;
     target.prototype = new Temp();   
     target.prototype.constructor = target; // 构造指向归位，否则constructor会指向origin
     target.prototype.uber = origin.prototype; // 超类
 }
 