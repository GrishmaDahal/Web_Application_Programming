// Import calculator functions
import {
  add as funcAdd,
  sub as funcSub,
  mul as funcMul,
  div as funcDiv
} from './calculator.js'

const $num1 = $('#num1')
const $num2 = $('#num2')
const $operator = $('#symbol')

const $add = $('#btn_add')
const $sub = $('#btn_sub')
const $mul = $('#btn_mul')
const $div = $('#btn_div')

const $resultBtn = $('#btn_res')
const $displayRes = $('#result')

// Operator buttons
$add.click(() => $operator.val('+'))
$sub.click(() => $operator.val('-'))
$mul.click(() => $operator.val('*'))
$div.click(() => $operator.val('/'))

// Show result
$resultBtn.click(function(){
    let x = parseInt($('#num1').val())
    let y = parseInt($('#num2').val())

    if(!x && x!==0)
    {
        alert("Please enter first number")
        return
    }
    if(!y && y!==0)
    {
        alert("Please enter second number")
        return
    }
    if(!$operator.val())
    {
        alert("Please select operation")
        return
    }

switch($operator.val())
    {
        case '+':
            $displayRes.val(funcAdd(x,y)) 
            break;

        case '-':
            $displayRes.val(funcSub(x,y)) 
            break;

        case '*':
            $displayRes.val(funcMul(x,y)) 
            break;

        case '/':
            $displayRes.val(funcDiv(x,y)) 
            break;
    }
})
