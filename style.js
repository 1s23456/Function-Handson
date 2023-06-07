//Ques 1:

function add(){
              let a=2;
              let b=3;
              let c=a+b;
              console.log(c)
}
add()


//QUES2:
function sum(x,y){
              let S= x+y;
              console.log("Sum of" + " " + x + " " +"and " + y + " is" + " "+ S)
}
sum(3,4)

//QUES 3:ARROW FUNCTION

let product = (num1,num2)=>{
             console.log(num1*num2);
}
product(2,4)



//Ques4: Print Output:-
var x = 21;
var girl = function(){
          console.log(x);
          var x =20;    
};
girl()


//QUES 5: Print Output:-

var x =21;
girl();
console.log(x)
function girl(){
              console.log(x);
              var x = 20;
};


//QUES 6 : Print Output:-

var x =21;
a();
b();

function a(){
              x =20;
              console.log(x);
};
function b(){
              x = 40;;
              console.log(x)
}

//Ques 7: 
function factorial(n){
              let result = 1 ;
              for(let i = 1;i<=n ; i++){
                            result = result * i;
              }
              return result ;
}
console.log(factorial(5));



//DAy2 QUESTIONS:--

//QUES1:
                  function FindSum(a,b){
                    return a + b;
                  }
                  function DisplayData(data,batch){
                    console.log(`i am ${data} and My batch is EA${batch}`)
                  }
                  DisplayData("Prepbytes",FindSum(10,9));



//Q2:
 Abc();
 const Abc = function(){
     let value = 20;
     console.log(value);
}


//QUes3:
var a = 10;
(function (){
    console.log(a);
    var a =20;
})();

//Q4:
const greet =  function(name){
              return function(m){
            console.log(`Hi!! ${name}, ${m}`);
              }
           }  
        const greet_message = greet('EA19');
         greet_message("Welcome To PrepBytes")









