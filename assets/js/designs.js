// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height, width, color;
$("#sizePicker").submit(function gettingHandW(e){
  height=$("#inputHeight").val();
  width=$("#inputWeight").val();
  makeGrid(height,width);
// so that the grid stays on the page
  event.preventDefault();
});
function makeGrid(h,w) {
  // so that when if there was a grid previously, this command removes it
  $("tr").remove();
  for(var i=0;i<=h;i++){
    $('table').append("<tr></tr>");
    for(var j=0;j<=w;j++){
      $('tr:last').append("<td></td>");
      }
    }

}
