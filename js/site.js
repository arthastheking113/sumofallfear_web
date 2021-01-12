function clearword(){
  document.getElementById("list").value = ''
  document.getElementById("k_value").value = ''
  document.getElementById("result").placeholder = "Result"
}
function checker(){
  let num_list = document.getElementById("list").value.split(","),
      num_len =  document.getElementById("list").value.split(",").length,
      k_value = document.getElementById("k_value").value,
      isvalue = false,
      rem_num1 = [],
      rem_num2 = [];
  if (!num_list.some(isNaN) && k_value != ''){
    for (i=0; i <= num_len-1; i++){
      for (j=0; j <= num_len-1; j++){
        if (i != j){
          if (parseInt(num_list[i]) + parseInt(num_list[j]) == k_value){
            isvalue = true;
            rem_num1 = rem_num1 + [num_list[i]]
            rem_num2 = rem_num2 + [num_list[j]]
          }
        }
      }
    }
    if (isvalue){
      document.getElementById("result").placeholder = "Success!"
      for(k=0; k < rem_num2.length; k++){
        document.getElementById("result2").innerHTML += `${rem_num1[k]} + ${rem_num2[k]} = ${k_value}<br>` 
      }

    }else{
      document.getElementById("result").placeholder = "No solution found, try different k value! "
    }
  }else if (k_value == '') {
    document.getElementById("result").placeholder = "K value is empty"
  }else{
    document.getElementById("result").placeholder = "You may enter something different than a number!"
  }
  
}