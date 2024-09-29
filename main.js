

// let arr =[3, 2,5, 6, 7, 8]

// const SortFunction = (a) => { 

//  return a.sort((v, i) => v - i)

// }


// console.log(SortFunction(arr));

// const Abduvohid = (a, b) => {
//   return a + b
// }
// console.log(abduvohid(5,10))
// let arr = ['green', 'red', 'yellow', 'blue', 'grey']

// let wrapper = document.querySelector('.wrapper')

// let input = document.querySelector('input')

// let button = document.querySelector('button')

// const getRandomColor = () => {
//     return arr(Math.Floor(Math.random() * arr.length));
// }

// const AddNameFunction = () => {
//     let p = document.createElement('p')
//     p.innerText = input.value
//     wrapper.appendChild(p)
//     input.value = ''
//     p.style.fontFamily = 'Roboto'
//     p.style.color = getRandomColor()
//     }


// button.addEventListener('click', ()=> {
//     AddNameFunction()
// }) 

let body = document.querySelector('body')

body.style.background = 'blue'
body.style.display = 'flex'
body.style.alignItems = 'center'
body.style.justifyContent = 'center'
body.style.height = '100vh'
body.style.padding = '0'
body.style.margin = '0'


let p = document.querySelector('p')

let num = prompt('Ismingizni Kiriting!')


p.textContent = num

p.style.fontSize = '56px'
p.style.color = 'red'
p.style.fontfamily = 'Roboto'
p.style.fontWeight = '600'


