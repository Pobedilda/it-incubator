// const todoListID_1 = "43ghdf"
// const todoListID_2 = "907865f"
//
// const todoList = [
//     {
//         id: todoListID_1,
//         title: "what to do",
//         filter: "all",
//         // tasks: [
//         //     {id: "45345", title: "js", isDone: true},
//         //     {id: "65645", title: "html", isDone: true},
//         //     {id: "1232", title: "ruby", isDone: true}
//         // ]
//     },
//     {
//         id: todoListID_2,
//         title: "what to read",
//         filter: "all",
//         // tasks: [
//         //     {id: "2343", title: "book1", isDone: true},
//         //     {id: "56745645", title: "book2", isDone: true},
//         //     {id: "78768", title: "book3", isDone: true}
//         // ]
//     }
// ]
//
// const tasks = {
//     [todoListID_1]: [ //"1" віполняемій код для ссылки
//         {id: "45345", title: "js", isDone: true},
//         {id: "65645", title: "HTML", isDone: true},
//         {id: "1232", title: "ruby", isDone: true}
//     ],
//     [todoListID_2]: [ //"2"
//         {id: "2343", title: "book1", isDone: true},
//         {id: "56745645", title: "book2", isDone: true},
//         {id: "78768", title: "book3", isDone: true}
//     ]
// }
// console.log(todoList.map(t => ({...t, description: ""})));
//
// const newTask = tasks[todoListID_1].map(t => ({...t, isDone: false}));
// console.log(newTask.map(t => {
//     if (t.title === "HTML"){
//         return {...t, isDone: true}
//     }
// }));
//
// // const todoListID_1 = "45hd-87lf"
// // const todoListID_2 = "06ha-05lj"
// //
// //
// // const todoLists = [
// //     {
// //         id: todoListID_1,
// //         title: "What to lear",
// //         filter: "all",
// //     },
// //     {
// //         id: todoListID_2,
// //         title: "What to buy",
// //         filter: "all",
// //     }
// // const tasks = {
// //     [todoListID_1]:  [ // "45hd-87lf"
// //         {id:"01hf", title: "HTML", isDone: true},
// //         {id:"02hf", title: "CSS", isDone: true},
// //         {id:"03hf", title: "REACT", isDone: true},
// //     ],
// //     [todoListID_2]: [  // "06ha-05lj"
// //         {id:"01hf", title: "Meat", isDone: true},
// //         {id:"02hf", title: "Milk", isDone: true},
// //         {id:"03hf", title: "Bread", isDone: true},
// //     ]
// // }
// // ap(t => ({...t, description: ""})))
// // console.log(todoLists.filter(t => t.id !== todoListID_1))
// // console.log(tasks[todoListID_1])
// // const newTasks = tasks[todoListID_1].map(t => ({...t, isDone: false}))
// // console.log(newTasks.map(t => t.title === "HTML" ? {...t, isDone: true}: t))
//
//
// //
//
// //reduce => одно значение
//
//
// const nums = [1, 2, 3, 4, 5, 6, 7];
//
// console.log(nums.reduce((acc, el) => acc + el, 0));
//
// // резльтат ретурна передается наслед итерацию
//
// console.log(nums.reduce((max, el) => max > el ? max: el));
//

//
// console.log(students.reduce((sum, el) => sum + el.scores, 0))

const names = ["Bob", "Alex", "Donald", "John", "bob", "ann", 100, "100", "Юра"] // по юникод


console.log(names.sort())


const numbers = [100, 333, 2, 9, 42, 1011] //возростание

// const compareFunc = (a, b) => {
//     if (a < b){ //менять ничего не надо
//         return -1 // любое отрицательное число
//     }else{ //надо менять
//         return 1
//     }
// }

//const compareIncFunc = (a, b) => a - b
//возвращает любое положительное или отрицательное число

// //если нужно не мутировать исходній массив, то сортируем копию:
// console.log(numbers.sort(compareIncFunc) === numbers) // [...numbers]
//
// console.log(numbers.sort(compareIncFunc).reverse())


let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];


console.log(students.sort((a, b) => b.scores - a.scores))
console.log(students.sort((a, b) => a.name <= b.name ? -1 : 1))
console.log(students.sort((a, b) => a.name.toLowerCase() <= b.name.toLowerCase() ? -1 : 1))

//bubble sort(пузырьковая сортировка)
for (let j = 0; j < numbers.length - 1; j++) {
    let isArrauSorted = true
    for (let i = 0; i < numbers.length - 1 - j; i++) {
        if (numbers[i] > numbers[i + 1]) {
            isArrauSorted = false;
            // let temp = numbers[i + 1]
            // numbers[i + 1] = numbers[i]
            // numbers[i] = temp
        [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]]
        }
    }
    if(isArrauSorted)break

}


console.log(numbers)