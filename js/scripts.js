$(document).ready(function(){
  const itemsArray = [];
  $("form").submit(function(event)  {
    event.preventDefault();
    itemsArray.push($("#item").val());
    console.log(itemsArray);
  });
  $("button#showList").click(function()  {
    $("ol").empty();
    itemsArray.sort();
    itemsArray.forEach(function(item) {
      $("ol").append("<li>" + item.toUpperCase() + "</li>");
    })
  })
})