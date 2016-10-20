var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

var nutritional={"Chocolate":[
    {"ProductName":"SNICKERS & Hazelnut 4 Bar Multipack 196g",
    "Energy":"2047kj/100g",
    "Energy":"489kcal/100g",
    "Fat":"23.9g/100g",
    "Saturates":"9.0g/100g",
    "Carbohydrate":"59.5g/100g",
    "Sugars":"50.4g/100g",
    "Protein":"8.1g/100g",
    "Salt":"0.59/100g"},
]}


    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }

    function onDeviceReady() {
        var output = "Chocolate";
        alert(output);
    }
