const data = [
    {
    name:"FAIZ",
    age:32,
    city:"Karachi"
},
    {
    name:"Sabir",
    age:22,
    city:"Lahore"
},
    {
    name:"Taha",
    age:10,
    city:"Karachi"
},
]

function grouping (property){
    return data.reduce((acc,item)=>{
        console.log(acc[item[property]])
        if(!acc[item[property]]){
            acc[item[property]]=[];
        }
        acc[item[property]].push(item)
        return acc;
    },{})
}
console.log(grouping("city"))
