function handleClick() {
    const button = document.getElementById("target")
    if (button.style.backgroundColor === "blue") {
        button.style.backgroundColor = ""
    } else {
        button.style.backgroundColor = "blue"
    }
}