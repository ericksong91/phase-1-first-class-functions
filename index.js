
//Returns an Anonymous function and passes it as an argument (as cb)
function receivesAFunction (cb){
    console.log(cb());
}

receivesAFunction(function(){
    return "Blah"
})

//Takes no arguments but returns a named function
function returnsANamedFunction(){
    return  function namedFunction(){
        return 
    }
}

console.log(returnsANamedFunction());

//Take no arguments, return an anonymous function

function returnsAnAnonymousFunction(){
    return function(){
        return "blah"
    }
}

console.log(returnsAnAnonymousFunction())