    const checkprime = (num )=>{
        let isprime = true;
        if(num <=1){
            isprime=false;
        }else{
            for(i=2; i<=num;i++){
            if(num%i===0){
                isprime=false;
                break;
            }
            }
        }
        if(isprime){
            console.log(num + "is prime");
        }else{
            console.log(num + "is not prime");
        }
        }
        checkprime(9)
        
    
