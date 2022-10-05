//change num_prim if it is bigger then the inputs

let Global_lmc = 1;

function lmc(n1, n2){
    lmc_tf = false;
    //while the two number aren't 1 lmc_tf continues false
    let list_p = [];
    let total_p = 1
    //list of interger that are being used to divide the numbers
    let num_prim = 2;
    // num prim
    let input1 = n1 
    let input2 = n2

    while(lmc_tf == false){
        if (input1 == 1 && input2 == 1){
            console.log();
            for (let pos = 0; pos < list_p.length; pos++){
                total_p = total_p*list_p[pos]
            };
            console.log('The division ended');
            console.log(`Numbers use to calculate the lmc are: ${list_p}`);
            console.log(`The lmc is: ${total_p}`);
            Global_lmc = total_p;
            return Global_lmc
        }

        else if (num_prim != 2 && num_prim % 2 == 0 && num_prim % 3 == 0){
            //check if num_prim is a prime number
            //if is not a prime number it will add and jump to the neinput1t number
            console.log(`${num_prim} is not a prime number`);
            num_prim ++
            continue
        }

        else if(num_prim > input1 && num_prim > input2){
            num_prim = 2;
            //if num_prim greater than both of the numbers that are being divided
            //reset num_prim so the numbers can be dived
        };

        console.log();
        console.log(`The prime number is: ${num_prim}`);
        console.log(`Numbers already used to divide were: ${list_p}`);
        console.log(`Numbers that are going to be divided are: ${input1} and ${input2}`);
        
        if (input1 != 1 || input2 != 1){
            //if input1 OR input2 are different then 2   
            if(input1==num_prim || input2==num_prim){
                //if input1 OR input2 are EQUAL to the prime number
                if (input1 == num_prim && input2 == num_prim){
                    //if the 2 inputs are EQUAL
                    list_p.push(num_prim);
                    console.log('lmc ended');
                    break
                }
                else if ( input1== num_prim){
                    //if only the input1 is EQUAL  
                    list_p.push(num_prim);
                    console.log(`${input1} is equal to ${num_prim}`);
                    input1 = 1; 
                    //Freeze the number that is already dived to 1
                    Object.freeze(input1);
                    continue
                }
                else if (input2==num_prim){
                    //if only the input2 is EQUAL 
                    list_p.push(num_prim);
                    console.log(`${input2} is equal to ${num_prim}`);
                    input2 = 1;
                    //Freeze the number that is already dived to 1
                    Object.freeze(input2);
                    continue
                }}

            //if the 2 inputs are different then 1
            //and if they are not equal to the prime num
            else if (input1 != 1 && input1 != 1){
                input1 = input1/num_prim;
                input2 = input2/num_prim;

                if (Number.isInteger(input1) == false && Number.isInteger(input2) == false){
                    //if the 2 of them can't be divided by the prime num without having a rest 
                    input1 = input1*num_prim; 
                    input2 = input2*num_prim;
                    //reset value of the variables because none of the numbers could be divided
                    console.log(`Can't be dived by ${num_prim}`);
                    //change to the next prime number
                    num_prim ++;
                    continue
                }
                else{
                    console.log('At least one of them can be divided')
                    //check if both of them can be divided
                    if(Number.isInteger(input1) && Number.isInteger(input2)){
                        console.log('Both can be dived');
                        //add the number that was used to divide on the list 
                        list_p.push(num_prim);
                        continue
                    }
                    else if(Number.isInteger(input1)){
                        //in case the 1st value can be divided 
                        list_p.push(num_prim);
                        input2 = input2*num_prim;
                        //reset the other input
                        console.log(`${input1*num_prim} can be divided`);
                        continue
                    }
                    else if(Number.isInteger(input2)){
                        //in case the 2nd value of them can be divided
                        list_p.push(num_prim) ;
                        input1 = input1*num_prim;
                        //reset value of the one who can't be divided
                        console.log(`${input2*num_prim} can be divided`);
                        continue
                    } 
                }    
            }

            //check if only the first value is different than 1
            else if (input1 != 1){
                input1 = input1/num_prim;
                
                if(Number.isInteger(input1) == true){
                    //in case the 1st value of them can be divided 
                    list_p.push(num_prim);
                    console.log(`The first value can be divided`);
                    console.log(input1);
                    continue
                }
                //in case i can't be divided
                else{
                    input1 = input1*num_prim;
                    //reset the value and change to the next prime number
                    num_prim++;

                }
            }

            //in case only the 2nd value is different than 1
            else if (input2 != 1){
                input2 = input2/num_prim;

                if(Number.isInteger(input2) == true){
                    //in case the 2nd value of them can be divided 
                    list_p.push(num_prim);
                    console.log(`${input1} can be divided`);
                    console.log(input2);
                    continue
                }
                else{
                    //in case the 2nd value can not be divided
                    input2 = input2*num_prim;
                    num_prim++;
                }
            }
        }
    }
}


function Fraction_Operation(numerador1, denominador1, numerador2, denominador2, operation){
    let final_numerator = 0;
    let final_denominator = 0;
    if (denominador1 !=  denominador2 && operation =='+' || operation=='-'){
        //in case denominators are not the same number
        //calculate the lmc
        lmc(denominador1,denominador2);
        denominador1 = Global_lmc;
        denominador2 = Global_lmc;
        
        if (operation=='+'){
            //in case the operation is sum
            console.log(`Soma de frações entre: ${numerador1}/${denominador1} + ${numerador2}/${denominador2}`)
            final_numerator = numerador1 + numerador2;
            final_denominator = denominador1
            console.log(final_numerator, '/',final_denominator)
        }
        else if (operation=='-'){
            //if operation is minus
            console.log(`Diferença de frações entre ${numerador1}/${denominador1} - ${numerador2}/${denominador2}`)
            final_numerator = numerador1 - numerador2
            final_denominator = denominador1
            console.log(final_numerator, '/', final_denominator)
        }
        
    }

    else{
        //if denominators are the same
        if (operation=='+'){
            //in case the operation is sum
            console.log(`Soma de frações entre: ${numerador1}/${denominador1} + ${numerador2}/${denominador2}`)
            final_numerator = numerador1 + numerador2;
            final_denominator = denominador1
            console.log(final_numerator, '/',final_denominator)
        }

        else if (operation=='-'){
            //if operation is minus
            console.log(`Diferença de frações entre: ${numerador1}/${denominador1} - ${numerador2}/${denominador2}`)
            final_numerator = numerador1 - numerador2
            final_denominator = denominador1
            console.log(final_numerator, '/', final_denominator)
        }

        else if (operation== '*' || operation=='x' || operation =='X'){
            //in case the operation is multiplying
            console.log(`Multiplicação de frações entre: ${numerador1}/${denominador1} X ${numerador2}/${denominador2}`)
            final_numerator = numerador1 * numerador2
            final_denominator = denominador1 * denominador2
            console.log(final_numerator, '/' ,final_denominator )
        }
        else if (operation=='/'){
            //in case the operation is diving 
            console.log(`Divisão de fração entre: ${numerador1}/${denominador1} X ${numerador2}/${denominador2}`)
            final_numerator = numerador1 * denominador2
            final_denominator = numerador2 * denominador1
            console.log(final_numerator, '/' ,final_denominator )
        }
    }
}
//console.log(Fraction_Operation(3,4,3,2,'/'))


function Exponent_Calculator(base, exponent){
    console.log(`The base is ${base} and the exponent is ${exponent}`)
    result = 1
    //result will be multiplying with base 

    for(let count=0;count < exponent; count++){
        //if the exponent is not equal to count 
        //result will continue to multiple with base (multiple itself)
        result *= base
    }

    console.log(`The result will be ${result}`)
}
console.log(Exponent_Calculator(12,4))