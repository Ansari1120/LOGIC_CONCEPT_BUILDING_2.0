const arr = [1,4,5,6,3,2,6,7,3,2,5,6,3,6,3,4,6,7,8,6,4,3];


function filtration(){
    let final = []; //1,4
    
    for (let i=0;i<arr.length;i++){ 
       
    let isDuplicate = false; //false
       for(let j = 1;j<final.length;j++){ //2
            if(arr[i] === final[j]){ //5 === 5
                isDuplicate=true;
                break;
        }
 

       }
 if(!isDuplicate){
                 final.push(arr[i]);

 }
    }
    return final
}

console.log(filtration())
