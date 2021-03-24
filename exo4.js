document.getElementById("run").addEventListener("click", () => {
    var n = document.getElementById("numbers").value;
    // console.log(n);
    n = n.split(",");
    n = n.sort(function (a, b) { return a - b });
    alert(n);

});