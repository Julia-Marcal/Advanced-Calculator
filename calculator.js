let Global_lmc = 1;
// is the value of lmc that is scoped globaly
//it was scoped that way so it can be used in other functions

function lmc(number1, number2){
    lmc_tf = false;
    //while the two number aren't 1 lmc_tf continues false
    let list_p = [];
    let total_p = 1
    //list of integer that are being used to divide the numbers
    let num_prim = 2;
    // num prim
    let input1 = number1 
    let input2 = number2

    while(lmc_tf == false){
        if (input1 == 1 && input2 == 1){
            console.log();
            for (let pos = 0; pos < list_p.length; pos++){
                total_p = total_p*list_p[pos]
            };
            console.log('The division ended');
            console.log(`Numbers used to calculate the lmc are: ${list_p}`);
            Global_lmc = total_p;
            lmc_tf = true;
            return 'The lmc is: ' + Global_lmc
        }

        else if (num_prim != 2 && num_prim % 2 == 0 && num_prim % 3 == 0){
            //check if num_prim is a prime number
            //if is not a prime number it will add and jump to the next input number
            num_prim ++
            continue
        }

        else if(num_prim > input1 && num_prim > input2){
            //if num_prim greater than both of the numbers that are being divided
            //reset num_prim so the numbers can be dived
            num_prim = 2;
        };
        
        if (input1 != 1 || input2 != 1){
            //if input1 OR input2 are different then 1   
            if (input1 == num_prim || input2==num_prim){
                //if input1 OR input2 are EQUAL to the prime number
                if (input1 == num_prim && input2 == num_prim){
                    //if the 2 inputs are EQUAL
                    list_p.push(num_prim);
                    break
                }
                else if ( input1 == num_prim){
                    //if only the input1 is EQUAL  
                    //Freeze the number that was already divided to 1
                    list_p.push(num_prim);
                    input1 = 1; 
                    Object.freeze(input1);
                    continue
                }
                else if (input2 ==num_prim){
                    //if only the input2 is EQUAL 
                    //Freeze the number that was already divided to 1
                    list_p.push(num_prim);
                    input2 = 1;
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
                    //change to the next prime number
                    num_prim ++;
                    continue
                }
                else{
                    console.log('At least one of them can be divided')
                    //check if both of them can be divided
                    if(Number.isInteger(input1) && Number.isInteger(input2)){
                        //add the number that was used to divide on the list 
                        list_p.push(num_prim);
                        continue
                    }
                    else if(Number.isInteger(input1)){
                        //in case the 1st value can be divided 
                        list_p.push(num_prim);
                        input2 = input2*num_prim;
                        //reset the other input
                        continue
                    }
                    else if(Number.isInteger(input2)){
                        //in case the 2nd value of them can be divided
                        list_p.push(num_prim) ;
                        input1 = input1*num_prim;
                        //reset value of the one who can't be divided
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
                    continue
                }
                //in case it can't be divided
                else{
                    //reset the value and change to the next prime number
                    input1 = input1*num_prim;
                    num_prim++;

                }
            }

            //in case only the 2nd value is different than 1
            else if (input2 != 1){
                input2 = input2/num_prim;

                if(Number.isInteger(input2) == true){
                    //in case the 2nd value of them can be divided 
                    list_p.push(num_prim);
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
};


function fraction_Operation(numerador, denominador, numerador, denominador, operation){
    let final_numerator = 0;
    let final_denominator = 0;

    if (denominador !=  denominador && operation =='+' || operation=='-'){
        //in case denominators are not the same number
        //calculate the lmc
        lmc(denominador,denominador);
        denominador = Global_lmc;
        denominador = Global_lmc;
        
        if (operation=='+'){
            //in case the operation is sum
            console.log(`Soma de frações entre: ${numerador}/${denominador} + ${numerador}/${denominador}`);
            final_numerator = numerador + numerador;
            final_denominator = denominador;
            return final_numerator + '/' + inal_denominator;
        }
        else if (operation=='-'){
            //if operation is minus
            console.log(`Diferença de frações entre ${numerador}/${denominador} - ${numerador}/${denominador}`);
            final_numerator = numerador - numerador;
            final_denominator = denominador;
            return final_numerator + '/' + final_denominator
        }
        
    }

    else{
        //if denominators are the same
        if (operation=='+'){
            //in case the operation is sum
            console.log(`Soma de frações entre: ${numerador}/${denominador} + ${numerador}/${denominador}`);
            final_numerator = numerador + numerador;
            final_denominator = denominador;
            return final_numerator + '/' + final_denominator;
        }

        else if (operation=='-'){
            //if operation is minus
            console.log(`Diferença de frações entre: ${numerador}/${denominador} - ${numerador}/${denominador}`);
            final_numerator = numerador - numerador;
            final_denominator = denominador;
            return final_numerator + '/' + final_denominator
        }

        else if (operation== '*' || operation=='x' || operation =='X'){
            //in case the operation is multiplying
            console.log(`Multiplicação de frações entre: ${numerador}/${denominador} X ${numerador}/${denominador}`);
            final_numerator = numerador * numerador;
            final_denominator = denominador * denominador;
            return final_numerator + '/' + final_denominator;
        }
        else if (operation=='/'){
            //in case the operation is diving 
            console.log(`Divisão de fração entre: ${numerador}/${denominador} X ${numerador}/${denominador}`);
            final_numerator = numerador * denominador;
            final_denominator = numerador * denominador;
            return final_numerator + '/' + final_denominator; 
        }
    }
};


function exponent_Calculator(base, exponent){
    result = 1
    let exp_is_negative = false 
    //result will be multiplying with base 
    if (exponent < 0){
        exp_is_negative = true
        exponent *= -1;
    };

    for(let count=0;count < exponent; count++){
        //if the exponent is not equal to count 
        //result will continue to multiple with base (multiple itself)
        result *= base
    };

    if (exp_is_negative=true){return 1 + '/' + result;}
    else{return result;};
};


function calculate_numbers_with_exponent(base, exponent, base, exponent, operation){
    
    if (base == base){
        //if bases are equal the count will be focused on the exponents
       if (operation == '-'){
        minus_exp = (exponent_Calculator(base,exponent)) - (exponent_Calculator(base,exponent))
        return minus_exp;
       } 
       else if (operation == '+'){
        sum_exp = (exponent_Calculator(base,exponent)) + (exponent_Calculator(base,exponent))
        return sum_exp;
       }

       else if (operation == '*' || operation =='x' || operation =='X'){
        multiple_exp = [base, (exponent+exponent)]
        return 'base: ' + multiple_exp[0] + '\nexpoente: ' + multiple_exp[1];
       }
       else{
        division_exp = [base, (exponent-exponent)]
        return 'base: ' + division_exp[0] + '\nexpoente: ' + division_exp[1] ;
       }
    }

    else{
        //in case the bases imputed are different
        diff_base1 = exponent_Calculator(base, exponent)
        diff_base2 = exponent_Calculator(base, exponent)
        if (operation == '+'){
            return diff_base1 + diff_base2;
        }
        else if (operation == '-'){
            return diff_base1 - diff_base2;
        }
        else if (operation == '*' || operation == 'x' || operation == 'X'){
            return parseInt(diff_base1 * diff_base2)
        }
        else{
            return parseInt(diff_base1 / diff_base2 )
        }
    }
};


function calculate_fraction_with_exponents(numerator, denominator, exponent){
    //if exponent is negative, make it positive and fix is_negative to true
    let is_negative = false;
    if (exponent < 0){
        is_negative = true;
        exponent *= -1;
    }
    //power the numbers
    power_numerator = exponent_Calculator(numerator,exponent);
    power_denominator = exponent_Calculator(denominator, exponent);

    //if exponent is negative change the numbers order on the fraction
    if (is_negative == true){
        return `${power_denominator}` + '/' + `${power_numerator}`;
    }
    else{
        return `${power_numerator}` + '/' + `${power_denominator}`;
    }
};

function area_of_square(sqr_area = Number){
    return sqr_area**2;
}


function area_of_rectangle_and_parallelogram(base = Number, height = Number){
    return base*height;
}

function area_of_triangle(base = Number, height = Number){
    return (base*height)/2;
}


