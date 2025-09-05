// callback function
function pakhiBhai(callback, patro, patri){
  console.log(callback,patro)
  if(patri){
    console.log(callback)
  }
  else{
    console.log("tor biya hobeni")
  }
}

function callSomeOne(person){
  console.log('calling',person)
}
// callSomeOne('soumen')
pakhiBhai(callSomeOne,'jj','kk')