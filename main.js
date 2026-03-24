function classifyConsumption() {
    var electricityconsumption = Number(document.getElementById("consumption").value);

    if (electricityconsumption <= 100) {
        window.alert("You are using a discounted electricity rate.");
    } else if (electricityconsumption < 200) {
        window.alert("Your electricity consumption is low.");
    } else if (electricityconsumption < 300) {
        window.alert("Your electricity consumption is within normal limits.");
    } else if (electricityconsumption <= 400) {
        window.alert("Your electricity consumption is above average.");
    } else {
        window.alert("Your electricity consumption is very high. Consider reducing your usage NOW!");
    }
}