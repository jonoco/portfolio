function request(href) {
  // Begin tween out
  let body = document.querySelector("body");
  body.classList.remove("loaded");
  location.assign(href);
}

function main() {
  // Begin load tween in
  let body = document.querySelector("body");
  body.classList.add("loaded");

  // Hook all anchor events
  for (var ls = document.links, numLinks = ls.length, i = 0; i < numLinks; i++) {
    let href = ls[i].href;
    ls[i].onclick = (e) => {
      e.preventDefault();
      request(href);
    }
  }
}

document.fonts.ready.then(() => {
  main();
});

