import {isToday} from "./isToday/index.js"
import {todayIs} from "./todayIs/index.js"

console.log(todayIs())

console.log(isToday('monday'))
console.log(isToday('wednesday'))
console.log(isToday('sdg'))


export {
    isToday,
    todayIs
}