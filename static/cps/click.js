// document.getElementById("click").onclick = click;
// function click() {
//   alert("sss");    
// }
document.oncontextmenu = function(e) {
    return false;
}

var clicktime = 0;
$(function() {
    $("#click").click(function() {
        //alert("sss");
        if (!ifstart && enableclick) {
            ifstart = true;
        }
        if (enableclick) {
            clicktime += 1;
            document.getElementById("clicktimes").innerHTML = clicktime;
        }
    });
    $("#again").click(function() {
        clicktime = 0;
        time = 0;
        enableclick = true;
        document.getElementById("time").innerHTML = "0.00";
        document.getElementById("cps").innerHTML = "0.0";
        document.getElementById("clicktimes").innerHTML = 0;
        document.getElementById("again").style = "display: none;";
    });
});

var int = self.setInterval("clock()", 10);
var time = 0;
var ifstart = false;
var enableclick = true;

var playtimes = 0;
var cpstime = 0;

function clock() {
    if (ifstart) {
        if (time < 9.99) {
            time += 0.01;
            //alert("sss");
            document.getElementById("time").innerHTML = Math.round(time * 100) / 100;
        } else {
            var cps = clicktime / 10;
            document.getElementById("cps").innerHTML = cps;
            enableclick = false;
            ifstart = false;
            document.getElementById("again").style = "display: inline;";

            cpstime = cps;
            playtimes += 1;
            document.getElementById("playresult").innerHTML += "<tr><th>" + playtimes + "</th><th>" + cpstime + "</th></tr>";
            //alert(ifstart);
        }
    }
}