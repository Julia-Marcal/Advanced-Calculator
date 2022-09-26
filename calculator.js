function mmc(n1, n2){
    mmc_tf = false
    //while the two number aren't 1 mmc_tf continue false
    let list_p = []
    //list of interger that are being used to divide the numbers
    while(mmc_tf == false){
        let num_prim = 2
        let x = n1/num_prim
        let x2 = n2/num_prim
        if (Number.isInteger(x) == false && Number.isInteger(x2) == false){
            let x = n1 
            let x2 = n2
            //reset value of the variables because none of the numbers could be divided
            console.log('Falso')
            return
            num_prim ++
        }
        else if(Number.isInteger(x) == true || Number.isInteger(x2) == true){
            // see if one of them can be divided
            if(Number.isInteger(x) && Number.isInteger(x2)){
                //in case the two of them can be 
                list_p.push(num_prim)
                //add the number that was used to divide on the list 
                //pass
            }
            else if(Number.isInteger(x)){
                //in case the 1st value of them can be divided 
                list_p.push(num_prim)
                x2 = n2 
                //reset value of the one who can't be divided

            }
            else{
                //in case the 2nd value of them can be divided
                list_p.push(num_prim) 
                x = n1
                //reset value of the one who can't be divided
            }
            
        }

    }
}

console.log(mmc(9,7))