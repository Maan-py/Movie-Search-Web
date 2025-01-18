const header = document.getElementById("header");
const main = document.querySelector("main");

main.addEventListener("scroll", () => {
  if (main.scrollTop > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function handleHashChange() {
  const hash = location.hash;
  console.log(hash);
  if (hash === "#browse") {
    document.querySelector("#browse1").classList.add("clicked");
    document.querySelector("#popular1").classList.remove("clicked");
    document.querySelector("#trending1").classList.remove("clicked");
  }
  if (hash === "#popular") {
    document.querySelector("#popular1").classList.add("clicked");
    document.querySelector("#browse1").classList.remove("clicked");
    document.querySelector("#trending1").classList.remove("clicked");
  }
  if (hash === "#trending") {
    document.querySelector("#trending1").classList.add("clicked");
    document.querySelector("#browse1").classList.remove("clicked");
    document.querySelector("#popular1").classList.remove("clicked");
  }
}

window.addEventListener("hashchange", handleHashChange);

handleHashChange();
