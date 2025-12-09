var counter = document.getElementById("counter");
var uri = "https://api.sheetbest.com/sheets/7ecc7ab7-b42e-439a-92f8-3202a5ff2ee7"
let total = 0

function getCurrentCount() {
	total = 0
	fetch(uri)
	.then((response) => response.json())
	.then(function(data) {
		data.forEach(function(v) {total += parseInt(v.Count)})
		counter.innerText = total + "/240000"
	});
}

//setInterval(getCurrentCount, 60000);

//getCurrentCount()


