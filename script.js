document.getElementById("motivationSubmit").addEventListener("click", function(event) {
    event.preventDefault();

    // const value = document.getElementById("motivationInput").value;
    // if (value === "random"){
    //     value = "";
    // }
    // if (value === "love"){
    //     value = "?tags=love";
    // }
    // if (value === "inspiration"){
    //     value = "?tags=inspirational";
    // }
    // if (value === "happiness"){
    //     value = "?tags=happiness";
    // }
    // if (value === "famous-quotes"){
    //     value = "?tags=famous-quotes";
    // }
    // if (value === "history"){
    //     value = "?tags=history";
    // }
    // console.log(value);
    const url = "https://quoteclear.web.app/api/random";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);
        let results = "";
        results += '<h2> \"' + json.text + "\"</h2>";
        results += "<h5> James Clear </h5>"
        document.getElementById("quote").innerHTML = results;
        })       
});
