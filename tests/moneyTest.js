import { formatCurrency } from "../scripts/utils/money.js";

console.log('test suite: format currency')

console.log('converting cents to dollars')
if (formatCurrency(0)==='0.00') {
    console.log('passed')
} else {
    console.log('failed')
}

console.log('if the code works with 0')
if (formatCurrency(2000.5)==='20.01') {
    console.log('passed')
} else {
    console.log('failed')
}

console.log('rounds up to the nearest cent')
if (formatCurrency(0)==='0.00') {
    console.log('passed')
} else {
    console.log('failed')
}
