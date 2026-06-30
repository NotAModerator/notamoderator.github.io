//handle message board (very halfassed and probably has a crosssite attack but i hope to god sheetdb knows what its doing
var uri = "https://sheetdb.io/api/v1/tuqmi70jkoga6"

function sendMessage() {
	var msg = document.getElementById("textbox").value;
	fetch(uri, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
                'id': "INCREMENT",
                'message': msg
            }
        ]
    })
})
}

function addEntry(v) {
	console.log(v)
	var newBullet = document.createElement("li");
	newBullet.innerText = v.message;
	document.getElementById("messageBoard").appendChild(newBullet);
}

document.addEventListener("DOMContentLoaded", function(event) {
	fetch(uri + "?sort_by=id")
	.then((response) => response.json())
	.then((data) => data.forEach(addEntry));

})
