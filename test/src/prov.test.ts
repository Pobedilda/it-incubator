export type ManType = {
    name: string
    age: number
}

let people: Array<ManType>;

beforeEach(()=>{
    people = [
        {name: "G G", age: 23},
        {name: "H H", age: 25}
    ]
})

test("gr messages array", ()=>{
    const messages = people.map( man =>`Hello ${man.name.split(" ")[0]}. Welcome home` )

    expect(messages.length).toBe(2);
    expect(messages[0]).toBe("Hello G. Welcome home")
    //expect(messages[0]).toBe("Hello H. Welcome home")
})