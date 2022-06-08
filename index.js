function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction (){
   return function namedFunction() {
       return "Named";
   }
}

function returnsAnAnonymousFunction (){
  return function (){
      console.log ("Anonymous function");
  }  
}