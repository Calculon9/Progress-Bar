let fraction = 0;
        
let incrementVal = parseFloat((Math.random() * (0.3) + 0.05).toFixed(3));
    


function increment () {
    
    if (fraction >= 0.99) {
        fraction = 1;
        clearInterval(animate);
    } 
    else {
        fraction += incrementVal;
        console.log(fraction);
    }

}

let animate = setInterval(increment, 1000);