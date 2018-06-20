var random = [2,3,6,1,40];
function max(){
  var maxval = random[1];
  for(i=0; i<random.length; i++){
    if(maxval <= random[i]){
      maxval = random[i];
    }
  }
  console.log(maxval)
}
max();

function min(){
  var minval = random[1];
  for(i=0; i<= random.length; i++){
    if(minval >= random[i] ){
      minval = random[i];
    }
  }
  console.log(minval);
}
min();
