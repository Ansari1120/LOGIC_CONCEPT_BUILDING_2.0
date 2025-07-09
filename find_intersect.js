const arr1=["a","b","c","d","e","e",'f',"g"];
const arr2=["a","b","c","d"];


const findIntersect = ()=>{
    const firstArr = new Set(arr1);
    return [... new Set(arr2)].filter((item)=>firstArr.has(item));
}

console.log(findIntersect())
