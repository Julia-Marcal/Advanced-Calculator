//if num_prim == x or x2 stop making it divide


function mmc(n1, n2){
    mmc_tf = false;
    //while the two number aren't 1 mmc_tf continues false
    let list_p = [];
    //list of interger that are being used to divide the numbers
    let num_prim = 2;

    while(mmc_tf == false){
        if (num_prim != 2 && num_prim % 2 == 0 && num_prim % 3 == 0){
            num_prim ++ 
            continue
        };
        console.log(num_prim);
        console.log(list_p);
        let x = n1/num_prim;
        let x2 = n2/num_prim;

        if (x==num_prim){
            list_p.push(num_prim);
            list_p.push(num_prim);
            x = 1
        }
        else if (x2==num_prim){
            list_p.push(num_prim);
            list_p.push(num_prim);
            x2 = 1
        }

        if (Number.isInteger(x) == false && Number.isInteger(x2) == false){
            let x = n1; 
            let x2 = n2;
            //reset value of the variables because none of the numbers could be divided
            console.log('Falso');
            num_prim ++;
            continue
        }

        else if(Number.isInteger(x) == true || Number.isInteger(x2) == true){
            console.log('Um dos dois é verdadeiro')
            // see if one of them can be divided
            if(Number.isInteger(x) && Number.isInteger(x2)){
                //in case the two of them can be 
                list_p.push(num_prim);
                console.log('Os 2 podem ser dividos')
                break
                //add the number that was used to divide on the list 
                continue
            }

            else if(Number.isInteger(x)){
                //in case the 1st value of them can be divided 
                list_p.push(num_prim);
                x2 = n2;
                console.log('primeiro pode ser divido')
                console.log(x)
                break
            }
            else if(Number.isInteger(x2)){
                //in case the 2nd value of them can be divided
                list_p.push(num_prim) ;
                x = n1;
                console.log('segundo pode ser divido')
                break
                //reset value of the one who can't be divided
                continue
            }
            
        }

    }
}

console.log(mmc(9,7));