console.log("ok")
const input = document.getElementById("input")
const confirm = document.getElementById("confirm")
const h1 = document.getElementById("h1")
const inputValue = localStorage.getItem("inputValue")
h1.innerText = inputValue ;
const button  = () => {
    const object = {
        name: "hakim",
        roll: 43
    }
    localStorage.setItem("hakim" , `${JSON.stringify(object)}`)
    // const inputValue = localStorage.getItem("inputValue")
    // h1.innerText = inputValue ;
    // localStorage.removeItem("inputValue")
}


