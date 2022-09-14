let secret = document.getElementsByClassName("target");

for (let i = secret.length - 1; i > secret.length - 2; i--) {
  console.log(secret[i].nodeName.toLowerCase());
}
