const title = document.querySelector(".title h1");

title.addEventListener("onselectstrat", () => {
  return false;
});

function handleClickEvent() {
  const currentColor = title.style.color;
  let newColor;

  if (currentColor !== "red") {
    newColor = "red";
    title.style.color = newColor;
  } else {
    newColor = "green";
    title.style.color = newColor;
  }
}

title.addEventListener("click", handleClickEvent);
