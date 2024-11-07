
let fruit1 =['사과','딸기','파인애플','수박','참외','오렌지','자두','망고']
let fruit2 =['수박','사과','참외','오렌지','파인애플','망고']

let same =[]
let diff =[]

for(let fu of fruit1){
     if(fruit2.includes(fu)){
        same.push(fu)
     }else{
        diff.push(fu)
     }
}

console.log(same)
console.log(diff)


//forEach 로 같은것만 출력
fruit1.forEach(function(ni){
   if(fruit2.includes(ni)){
      console.log(ni)
   }
})

//forEach
let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(function (number, index, array) { console.log(number, index, array);
});