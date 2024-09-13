function resetAllValues() {
    $('.results').find('input:text').val('');
}

function calculateTotal()
{
  let subtotal={}
  var i = 7.48
  
  subtotal.T1 = ($("#Area1").val() * $("#rainfall1").val() * $("#coe1").val() * i) 
  $("#subtotal1").val(subtotal.T1.toFixed(0));
  
  subtotal.T2 = ($("#Area2").val() * $("#rainfall1").val() * $("#coe2").val() * i) 
  $("#subtotal2").val(subtotal.T2.toFixed(0));
  
  subtotal.T3 = ($("#Area3").val() * $("#rainfall1").val() * $("#coe3").val() * i) 
  $("#subtotal3").val(subtotal.T3.toFixed(0));
  
  subtotal.T4 = ($("#Area4").val() * $("#rainfall1").val() * $("#coe4").val() * i) 
  $("#subtotal4").val(subtotal.T4.toFixed(0));

  
  let total = subtotal.T1 + subtotal.T2 + subtotal.T3 + subtotal.T4;
  let ccf = total/748;
 
  $("#grandtotal").val(total.toFixed(0));

  $("#totalccf").val(ccf.toFixed(2));
  
  $("#rainfall1").keyup(function(){
    $("#rainfall2").val(this.value)
    $("#rainfall3").val(this.value)
    $("#rainfall4").val(this.value);
   })
}


 $(function() 
   {
     $(".under").on("change keyup",calculateTotal)
 })

 function copyGrand() {
  /* Get the text field */
  var copyText = document.getElementById("grandtotal");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied your Grand Total: " + copyText.value + " That's a lot of water!");
}

//////////////
StaxP = ($("taxC")/$("SFA"));
AlcST = ($("AlcST") * StaxP)
