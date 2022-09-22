btn = document.querySelector("#square");


btn.onclick = () => {
    btn.style.width = '90px';
    btn.style.height = '90px';
    console.log(btn.style.width);
    console.log(btn.style.height);
}