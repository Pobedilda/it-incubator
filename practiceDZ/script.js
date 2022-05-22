// 1. Функция принимает параметром массив чисел и возвращает max значение.
// getMax1([1,4,6,8]) => 8
// 2. Функция принимает параметром массив чисел и возвращает массив с двумя макс значениями
// getMax2([1,4,6,8]) => [8, 6]
// 3. Функция принимает параметром массив чисел и количество max,
// которые надо найти и возвращает массив  max значениями
// getMax3([1,4,6,8], 3) => [8, 6, 4]
// math.max и sort не используем!

const arr = [1,2,3,4,5,6,7,8,9,10,11];
// console.log(Math.max(...arr))

function maxArrayElement(arr){
    let maxEl = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(maxEl < arr[i]){
            maxEl = arr[i]
        }
    }
    return maxEl;
}

console.log(maxArrayElement(arr));

function maxTwoArrayElements(arr){
    let maxEl1 = arr[0]
    let maxEl2 = arr[1]
    for (let i = 0; i < arr.length; i++) {
        if(maxEl1 < arr[i]){
            maxEl1 = arr[i]
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > maxEl2 && arr[i] < maxEl1){
            maxEl2 = arr[i]
        }
    }
    return [maxEl1, maxEl2];
}

console.log(maxTwoArrayElements(arr));

function maxNArrayElements(arr, n){
    return arr.sort((a, b)=>{
        return b - a
    }).slice(0, 5);
}

console.log(maxNArrayElements(arr, 2))