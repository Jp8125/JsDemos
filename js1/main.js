function add(){
  const num=[];
  var max,sum=0;
  for(var i=0;i<3;i++){
      num[i]=parseInt(prompt("enter a number"))
  }
  max=num[0]
  for(i=0;i<3;i++){
      if(max<num[i])
      {
          max=num[i];
      }
  }
  alert("max is"+" :"+max);
  for (let index = 0; index < num.length; index++) {
      if(num[index]>40)
      sum = sum+num[index];
      
  }
  alert("sum is"+" :"+sum);

}