function addFigure(parent, w, h, c) {
 let figure = document.createElement("div");
 figure.style.width = w;
 figure.style.height = h;
 figure.style.background = c;
 parent.append(figure);
}
addFigure(document.body, 50, 50, "blue");