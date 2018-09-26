module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o)最大值 = ${sequence.maxium()}
o)元素数量 = ${sequence.number()}
o)平均值 = ${sequence.average()}
`);
};

class Sequence {
  constructor(input) {
  sequence = input;  
  }

  minimum() {
    sequence.sort();
    return sequence[0];
  }
  
  maxium(){
    sequence.sort();
    return sequence[sequence.length - 1];
  }
 
  number(){
    return arguments.length;

  }

 average(){
   var sum = 0;
   for(var i of sequence){
      sum += sum; 
    }
   return sum / arguments.length ;
   }
} 
