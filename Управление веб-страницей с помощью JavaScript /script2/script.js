let secret = document.getElementByID("elem");

for (let i = 0; i < secret.length; i++) {
  console.log(secret[i].nodeName.toLowerCase());
}
