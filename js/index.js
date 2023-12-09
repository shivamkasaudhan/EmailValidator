

submitBTN.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("clicked")
    Results.innerHTML = `<img width="23" src="img/loading.svg" alt="" >`
    let key = "ema_live_kJGCL9PIfyXZqocrEqxQL99ZL4OA4HFVavCSMsSG"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = `<table>`;
    for (const key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
            str += `<tr><td><b>${formattedKey}</b></td><td>${result[key]}</td></tr>`;
        }
    }
    str += `</table>`;

    console.log(str)
    Results.innerHTML = str

})