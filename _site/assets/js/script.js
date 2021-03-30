function main() {
  let body = document.querySelector("body");
  body.classList.add("loaded");
}

document.fonts.ready.then(() => {
  main();
});