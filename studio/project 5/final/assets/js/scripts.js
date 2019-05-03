get();
function get() {
    var url = 'https://api.kanye.rest'
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        document.getElementById("quote").innerHTML = data.quote;
    });
}
