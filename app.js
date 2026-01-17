function TotalPrice(){
  let cost1 =parseFloat(document.getElementById("cost1").value|| 0);
  let cost2 =parseFloat(document.getElementById("cost2").value || 0);
  let cost3 =parseFloat(document.getElementById("cost3").value || 0);
  let totalPrice = cost1+cost2+cost3;

  document.getElementById("totalPrice").innerText = totalPrice;

}
