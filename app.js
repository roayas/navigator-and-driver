let x = 'ABCDCBA';


function palindrome (a){
    let lastone=a.length-1;
    for(let i =0; i<a.length/2; ++i){
       fristone = a[i]
      let y= a[lastone-i]
    if(fristone === y){
        document.getElementById('task1').innerHTML= true
       return true;
    } else{
        document.getElementById('task1').innerHTML= false
        return false
    }
   
} 
}
console.log(palindrome(x));



let y =[8,3,5,9,3,2];

function sort(arry){ 
    
    for(i=0; i<arry.length;++i){
        for(z=1;z<arry.length;i++){  //nasted loop to comper every elemnt to the rest of arry stared with second one
    if (arry[i]>arry[z]){
        min=arry[z];
        arry[z]=arry[i]   //swap the min numder to the index 0
        arry[i]=min      //store 
    }
}
}
document.getElementById('task2').innerHTML= arry
    return arry
} 
    
console.log(sort(y));
  
    






