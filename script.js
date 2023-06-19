
function createGrid(x) {
    var k=0;
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            var grid = document.createElement("div");
            grid.classList.add("grid");
            grid.setAttribute("id", k);
            
            grid.style.width = 960 / x + "px";
            grid.style.height = 960 / x + "px";
            grid.style.backgroundColor = "black";
            document.getElementById("container").appendChild(grid);
            k++;
        }
    }
}
createGrid(16);
$(".grid").click(function() {
      if($(this).css("background-color") == "rgb(0, 0, 0)") {
        $(this).css("background-color", "rgb(255, 255, 255)");
      }
        else {
          $(this).css("background-color", "rgb(0, 0, 0)");
        }
    });
function conway(){
  //implement conway's game of life
  
}