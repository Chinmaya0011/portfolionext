function comp(array1, array2){
    let result=false;
    for(let i=0;i<array1.length;i++){
      for(let j=0;j<array2.length;j++){
        if(array1[i]*array1[i]===array2[j]){
          result=true
        }
      }
    }
    return result
  }
  const a = [121, 144, 19, 161, 19, 144, 19, 11]  
  const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]