console.log('cccc')

let arr = []
for(let i=1; i<=100;i++){
    arr.push(i)
}
console.log(arr[1])

let sum1 = 0
for(let i=0; i<arr.length; i++){
    sum1 =sum1+arr[i]
}
console.log(sum1)


let sum2=0
for(let num of arr){
    sum2 +=num
}
console.log(sum2)

let sum3 = 0
arr.forEach(function(nu){
    sum3+=nu
})
console.log(sum3)


//222222222222



//333333333333

let now = Date()
if(now.getDay===0 || now.getDay===6 ){  //get으로 바꾸기
    console.log('주말')
}else{
    console.log('평일')
}



//444444444444
console.log('난수:',Math.floor(Math.random()*11))