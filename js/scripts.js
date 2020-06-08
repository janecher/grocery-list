$(document).ready(function(){
  const itemsArray = [];
  $("form").submit(function(event)  {
    event.preventDefault();
    let inputItem = $("#item").val();
    if(!inputItem){
      alert("Input an item");
      return false;
    }
    itemsArray.push(inputItem);
    $("form")[0].reset();
  });
  $("button#showList").click(function()  {
    $("ol").empty();
    itemsArray.sort();
    itemsArray.forEach(function(item) {
      $("ol").append("<li>" + item.toUpperCase() + "</li>");
    });
    $(".input-items").hide();
    $("#list").show();
  });
  $("button#back").click(function()  {
    $(".input-items").show();
    $("#list").hide();
  });
});