let n = 1
const genkiFunction = function() {
        if(n % 3 === 0 || n.toString().includes(3)){
            console.log(`${n}!!!!!!!`)
        }else{
            console.log(n)
        }
        n ++
    }
        setInterval(genkiFunction,1000)
    

