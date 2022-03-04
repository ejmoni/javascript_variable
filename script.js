let unit = [50000,10000,5000,1000,500,100]
function changeCalculate(money){
  for(let i =0;i<unit.length;i++){
    let num = Math.floor(money/unit[i])
    console.log(unit[i]+"X"+num)
    money = money - (unit[i]*num)
  }
}

changeCalculate(12300)


function findSmallestElement(arr){
  if(arr.length==0){
    return 0
  }
  let result = arr[0]
  for(let i = 1;i<arr.length;i++){
    if(result>arr[i]){
      result = arr[i]
    }
  }

  return result
}

console.log(findSmallestElement([100,200,3,0,1,2]))


 