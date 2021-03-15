function clearword(){
  document.getElementById("list").value = ''
  document.getElementById("k_value").value = ''
  document.getElementById("result").placeholder = "Result"
  document.getElementById("result2").innerHTML = ""
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Everything is Clearrrr!',
    showConfirmButton: false,
    timer: 1500
  })
}
function checker(){
  document.getElementById("result").placeholder = "Result"
  document.getElementById("result2").innerHTML = ""
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
            rem_num1 = rem_num1.concat(parseInt(num_list[i]))
            rem_num2 = rem_num2.concat(parseInt(num_list[j]))
          }
        }
      }
    }
    if (isvalue){
      document.getElementById("result").placeholder = `Success! You have ${rem_num2.length} results!`
      for(k=0; k < rem_num2.length; k++){
        document.getElementById("result2").innerHTML += `${rem_num1[k]} + ${rem_num2[k]} = ${k_value}<br>` 
      }
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Great! I got your result!!!',
        showConfirmButton: false,
        timer: 1500
      }) 

    }else{
      document.getElementById("result").placeholder = "No solution found, try different k value! "
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'No solution found, try different k value >.< !!!',
        showConfirmButton: false,
        timer: 1200
      })
    }
  }else if (k_value == '') {

    document.getElementById("result").placeholder = "K value is empty"
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'K value is empty >.< !!!',
      showConfirmButton: false,
      timer: 1200
    })
  }else{
    document.getElementById("result").placeholder = "You may enter something different than a number!"
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'You may enter something different than a number >.< !!!',
      showConfirmButton: false,
      timer: 1200
    })
  }
   
}
function advance(){
  clearword();
  let random_number = Math.floor(Math.random() * 1000),
      random_k = Math.floor(Math.random() * 2000),
      my_array = "";
  for (i=0; i < random_number; i++){
    my_array = my_array + "," + Math.floor(Math.random() * 1000).toString()
  }
  my_array = my_array.split(",").slice(1,my_array.length);
  document.getElementById("list").value = my_array
  document.getElementById("k_value").value = random_k
  checker();
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Great! I got your result!!!',
    showConfirmButton: false,
    timer: 1500
  })  
}