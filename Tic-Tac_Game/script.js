var fullbody = document.getElementById("main");
fullbody.style.display = "flex";
fullbody.style.justifyContent = "center";
fullbody.style.alignItems = "center";
fullbody.style.height = "100vh";
var currentplayer = "X";
var board = document.createElement("div");
board.style.height = "306px";
board.style.width = "306px";
board.style.display = "flex";
board.style.flexWrap = "wrap";
for (let index = 1; index <= 9; index++) {
  var box = document.createElement("div");
  box.style.height = "100px";
  box.style.width = "100px";
  box.style.backgroundColor = "wheat";
  box.style.border = "1px solid grey";
  // box.style.display="flex";
  // box.style.justifyContent="center";
  // box.style.alignItems="center";
  box.style.textAlign = "center";
  box.style.verticalAlign = "middle";
  box.style.lineHeight = "100px";
  box.style.fontSize = "25px";
  box.style.cursor = "pointer";
  box.style.borderRadius = "2%";
  box.onmouseenter = function () {
    this.style.backgroundColor = "pink";
  };
  box.onmouseleave = function () {
    this.style.backgroundColor = "wheat";
  };
  box.addEventListener("click", function () {
    if (this.innerText.length == 0) {
      if (currentplayer == "X") {
        this.innerText = currentplayer;
        currentplayer = "O";
      } else {
        this.innerText = currentplayer;
        currentplayer = "X";
      }
    }
  });
  box.setAttribute("id", "box" + index);
  board.appendChild(box);
}
document.body.appendChild(board);
