/*CSS CONFIGURATION*/
let lamp = document.querySelector('.lamp')
let bulb = document.querySelector('.bulb')
let light_lamp = document.querySelector('.light_lamp')
let light_on = 0;

//LMC
let num1_lmc = document.querySelector('#num1_lmc')
let num2_lmc = document.querySelector('#num2_lmc')
let res_lmc = document.querySelector('#res_lmc')

//fraction operatiion
let num1_numerator = document.querySelector('#fraction_num1')
let num2_denominator  = document.querySelector('#fraction_num2')
let num3_numerator  = document.querySelector('#fraction_num3')
let num4_denominator  = document.querySelector('#fraction_num4')
let operation_frac  = document.querySelector('#operator_fraction')
let res_operation_of_fractions  = document.querySelector('#res_fraction')

//Exponent calculator
let num1_exponent_c = document.querySelector('#num1_exponent_c')
let num2_exponent_c = document.querySelector('#num2_exponent_c')
let res_exponent = document.querySelector('#res_exponent')

//Calculate_num_with_exponent
let exp_1 = document.querySelector('#exp_num1')
let num_ele_1 = document.querySelector('#num_elevate_1')
let operator_ele = document.querySelector('#operator_ele')
let exp_2 = document.querySelector('#exp_num2')
let num_ele_2 = document.querySelector('#num_elevate_2')
let result_of_exp = document.querySelector('#res_exp_num')

let Global_lmc = 1;
// is the value of lmc that is scoped globally
//it was scoped that way so it can be used in other functions

bulb.addEventListener('click', function change_background(){
    if (light_on == 0){
        //Dark mode
        light_on = 1;
        document.body.style.backgroundColor = "#324B4D";
        bulb.style.backgroundColor = '#919090';
        bulb.style.boxShadow = '0px 0px 0px';
        light_lamp.style.opacity = 0;
        document.querySelectorAll('.quadrado').forEach(el =>{
            el.style.backgroundColor = '#758e8f';
        })
        return;
    }
    document.body.style.backgroundColor = "";
    bulb.style.backgroundColor = '';
    bulb.style.boxShadow = '';
    light_lamp.style.opacity = '';
    document.querySelectorAll('.quadrado').forEach(el =>{
        el.style.backgroundColor = '';
    })
    light_on = 0;
});


function lmc(x, y, input_lmc){
    res_lmc.innerHTML = ' ';
    //get html clean
    let lmc_found = false;
    let list_of_num_already_divided = [];
    let total_sum_of_list = 1
    let num_prim = 2;
    let input2;
    let input1;
    input1 = Number(num1_lmc.value)
    input2 = Number(num2_lmc.value)
    if (input_lmc == 1){
        input1 = x
        input2 = y
    }else{
        input_lmc = 0;
    };
    while(lmc_found == false){
        if (input1 == 1 && input2 == 1){
            for (let pos = 0; pos < list_of_num_already_divided.length; pos++){
                total_sum_of_list = total_sum_of_list*list_of_num_already_divided[pos]
            };
            Global_lmc = total_sum_of_list;
            if (input_lmc != 1){
                res_lmc.innerHTML = Global_lmc
                lmc_found = true;
                return;
            }
            lmc_found = true
            }

        if (num_prim != 2 && num_prim % 2 == 0 && num_prim % 3 == 0){
            num_prim ++
            continue
        }

        if(num_prim > input1 && num_prim > input2){
            num_prim = 2;
        };
        
        if (input1 != 1 || input2 != 1){
            
            if (input1 == num_prim || input2==num_prim){
                if (input1 == num_prim && input2 == num_prim){
                    list_of_num_already_divided.push(num_prim);
                    break
                }
                if ( input1 == num_prim){
                    list_of_num_already_divided.push(num_prim);
                    Object.freeze(input1=1);
                    continue
                }
                if(input2 == num_prim){
                    list_of_num_already_divided.push(num_prim);
                    Object.freeze(input2=1);
                    continue
                }
            }

            else if (input1 != 1 && input1 != 1){
                input1 /= num_prim;
                input2 /= num_prim;

                if (Number.isInteger(input1) == false && Number.isInteger(input2) == false){
                    input1 *= num_prim; 
                    input2 *= num_prim;
                    num_prim ++;
                    continue
                }
                if(Number.isInteger(input1) && Number.isInteger(input2)){
                    list_of_num_already_divided.push(num_prim);
                    continue
                }
                if(Number.isInteger(input1)){
                    list_of_num_already_divided.push(num_prim);
                    input2 *= num_prim;
                    continue
                }
                if(Number.isInteger(input2)){
                    list_of_num_already_divided.push(num_prim) ;
                    input1 *= num_prim;
                    continue
                } 
        }

            //check if only the first value is different than 1
            if (input1 != 1){
                input1 /= num_prim;
                
                if(Number.isInteger(input1) == true){
                    //in case the 1st value of them can be divided 
                    list_of_num_already_divided.push(num_prim);
                    continue
                }
                input1 *= num_prim;
                num_prim++;
            }

            //in case only the 2nd value is different than 1
            if (input2 != 1){
                input2 /= num_prim;

                if(Number.isInteger(input2) == true){
                    list_of_num_already_divided.push(num_prim);
                    continue
                }
                input2 *= num_prim;
                num_prim++;
            }
        }
    }
};


function fraction_Operation(){
    let final_numerator = 0;
    let final_denominator = 0;
    res_exponent.innerHTML = operation_frac.innerHTML;

    if (num2_denominator.value !==  num4_denominator.value && operation_frac.value == '+' || 
    num2_denominator.value !==  num4_denominator.value && operation_frac.value == '-'){
        //in case denominators are not the same number
        //calculate the lmc

        lmc(Number(num2_denominator.value) , Number(num4_denominator.value),true);
        
        if (operation_frac.value == '+'){
            //in case the operation is sum
            final_numerator = num1_numerator.value + num3_numerator.value;
            final_denominator = Global_lmc;
            res_operation_of_fractions.innerHTML = `${final_numerator}` + '/' + `${final_denominator}`
        }
        else if (operation_frac.value == '-'){
            //if operation is minus
            if (Number(num1_numerator.value) < Number(num3_numerator.value)){
                final_numerator = -(Number(num3_numerator.value) - Number(num1_numerator.value))
            }
            else{
                final_numerator = Number(num1_numerator.value) - Number(num3_numerator.value)
            }
            final_denominator = Global_lmc;
            res_operation_of_fractions.innerHTML = `${final_numerator}` + '/' + `${final_denominator}`
        }
        
    }

    else{
        //if denominators are the same
        if (operation_frac.value == '+'){
            //in case the operation is sum
            final_numerator = num1_numerator + num3_numerator;
            final_denominator = num2_denominator;
            res_operation_of_fractions.innerHTML = `${final_numerator}` + '/' + `${final_denominator}`
        }

        else if (operation_frac.value == '-'){
            //if operation is minus
            if (Number(num1_numerator.value) < Number(num3_numerator.value)){
                final_numerator = -(Number(num3_numerator.value) - Number(num1_numerator.value))
            }
            else{
                final_numerator = Number(num1_numerator.value) - Number(num3_numerator.value)
            }
            
            res_operation_of_fractions.innerHTML = `${final_numerator}` + '/' + `${final_denominator}`
        }

        else if (operation_frac.value == '*' || operation_frac.value == 'x' || operation_frac.value == 'X'){
            //in case the operation is multiplying
            final_numerator = num1_numerator * num3_numerator;
            final_denominator = num2_denominator * num4_denominator;
            res_operation_of_fractions.innerHTML = `${final_numerator}` + '/' + `${final_denominator}`
        }
        else if (operation_frac.value == '/'){
            //in case the operation is diving 
            final_numerator = num1_numerator * num4_denominator;
            final_denominator = num3_numerator * num2_denominator;
            res_operation_of_fractions.innerHTML = `${final_numerator}` + '/' + `${final_denominator}`
        }
    }
};


function exponent_Calculator(x, y, input_exponent){
    let num1;
    let num2;

    if (input_exponent !== 1){
        num1 = num1_exponent_c.value
        num2 = num2_exponent_c.value
    }
    else{
        num1 = x;
        num2 = y;
    }

    res_exponent.innerHTML = '';
    let result = 1;
    const exp_negative = num2;

    if (Number(num2 < 0)){
        num2 *= -1;
    };
    
    for(let count=0;count < num2; count++){
        result *= Number(num1)
    };
    
    if (result > 1 && exp_negative > 0){
        if (input_exponent !== 1){
            res_exponent.innerHTML = `${result}`
        }
        return result;
    };
    if (exp_negative < 0){
        if (input_exponent !== 1){
            res_exponent.innerHTML = `1/${result}`
        }
        return  '/' + result
    }
        
};

function calculate_numbers_with_exponent(){
    
    if (num_ele_1.value == num_ele_2.value){
       if(operator_ele.value == '-'){
        minus_exp = (exponent_Calculator(num_ele_1.value,exp_1.value, 1)) - (exponent_Calculator(num_ele_2.value, exp_2.value, 1))
        result_of_exp.innerHTML = minus_exp;
        return;
       } 
       if (operator_ele.value == '+'){
        sum_exp = (exponent_Calculator(num_ele_1.value, exp_1.value, 1)) + (exponent_Calculator(num_ele_2.value, exp_2.value, 1))
        result_of_exp.innerHTML = sum_exp;
        return;
       }

       if (operator_ele.value == '*' || operator_ele.value =='x' || operator_ele.value == 'X'){
        multiple_exp_base = num_ele_1.value;
        multiple_exp_exponent = Number(exp_1.value) + Number(exp_2.value);
        result_of_exp.innerHTML = `${multiple_exp_base} ^ ${multiple_exp_exponent}`
        return;
        }

       if (operator_ele.value == '/'){
        division_exp_base = num_ele_1.value;
        division_exp_exponent = Number(exp_1.value) - Number(exp_2.value);
        result_of_exp.innerHTML = `${division_exp_base} ^ ${division_exp_exponent}`
        return;
       }
    }

    //in case the bases imputed are different
    let diff_base1 = exponent_Calculator(num_ele_1.value, exp_1.value, 1)
    let diff_base2 = exponent_Calculator(num_ele_2.value, exp_2.value, 1)
    if (operator_ele.value == '+'){
        result_of_exp.innerHTML = Number(diff_base1) + Number(diff_base2)
        return;
    }
    if (operator_ele.value == '-'){
        result_of_exp.innerHTML = Number(diff_base1) - Number(diff_base2)
        return;
    }
    if (operator_ele.value == '*' || operator_ele.value == 'x' || operator_ele.value == 'X'){
        result_of_exp.innerHTML = Number(diff_base1) * Number(diff_base2)
        return;
    }
    if (operation_ele.value == '/'){
        result_of_exp.innerHTML = Number(diff_base1) / Number(diff_base2)
        return;
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

function area_of_trapeze(big_base = Number, small_base = Number, height = Number){
    return ((big_base+small_base)*height)/2;
}

function area_of_diamond(big_diagonal = Number, small_diagonal = Number){
    return (big_diagonal * small_diagonal)/2;
}

function area_of_circle(radius){
    return parseFloat(radius*3.14);
}

