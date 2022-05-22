// const ages = [12,90,91,100]
//
// const older = ages.filter(age => age > 90)
//
// console.log(older)


export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "G G", age: 23},
    {name: "H H", age: 25}
]

const transform = (man: ManType)=>({
        stack: ["css","html","react", "js"],
        firstName: man.name.split(" ")[0],
        secondName: man.name.split(" ")[1],
    })

const dev = [
    {
        stack: ["css","html","react", "js"],
        firstName: "G", lastName: "G"
    },
    {
        stack: ["css","html","react", "js"],
        firstName: "H", lastName: "H"
    }
]

const dev2 = [
    transform(people[0]),
    transform(people[1]),
]


//map- для преобразования елементов массива сколько было столько и останется, но измененные преобразование в массив строк в єтом случае
const dev3 = people.map(transform)

const dev4 = people.map((man)=>({
    stack: ["css","html","react", "js"],
    firstName: man.name.split(" ")[0],
    secondName: man.name.split(" ")[1],
}))

const messages = people.map( man =>`Hello ${man.name.split(" ")[0]}. Welcome home` ) // поделить строку по пробелу и вывести имя