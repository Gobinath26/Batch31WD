setInterval(function () {
  document.body.innerHTML = "";
  for (var i = 1; i <= 1000; i++) {
    var box = document.createElement("div");
    var randHeight = Math.floor(Math.random() * 30);
    box.style.height = randHeight + "px";
    var randWidth = Math.floor(Math.random() * 30);
    box.style.width = randWidth + "px";
    box.style.position = "absolute";
    box.style.left = Math.floor(Math.random() * screen.width) + "px";
    box.style.top = Math.floor(Math.random() * screen.height) + "px";
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    box.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    box.style.borderRadius = "50%";
    document.body.appendChild(box);
  }
}, 1000);
