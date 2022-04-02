const initialTheme = "theme-light";
const body = document.querySelector("body");
body.classList.add("initialTheme");


function toogleTheme(e) {
    const theme = document.body;
    theme.classList.toggle("theme-dark")
}