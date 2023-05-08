const dropdown = (el) => {
  console.log("🚀 ~ file: custom.js ~ line 25 ~ dropdown ~ el", el)

  const clearClass = () => {
    el.forEach((element) => {
      element.setAttribute("class", "dropdown__account--item");
    })
  }
  el.forEach(element => {
    element.onclick = () => {

      if (element.className === "dropdown__account--item dropdown__account--active") {
        clearClass();
      } else {
        clearClass();
        element.setAttribute("class", "dropdown__account--item dropdown__account--active");
      }
    }
  })
}