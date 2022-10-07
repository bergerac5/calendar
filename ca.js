var h2 = document.querySelector(".calendar-picture h2");
var h3 = document.querySelector(".calendar-picture h3");

var monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "september",
    "Octobar",
    "Novembar",
    "December",
];

var dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "wednseday",
    "Thursday",
    "Friday",
    "Saturday",
];

var day31MonthArr = [
    "January",
    "March",
    "May",
    "July",
    "August",
    "Octobar",
    "December",
];

var day30MonthArr =[
    "March",
    "June",
    "september",
    "Octobar",
    "Novembar",
]


var d = new Date();

var obj = getDate();

generateCalender ();

function getDate(){
    var Date = d.getDate();

    var day = d.getDay();
    day = dayArr[day]
    
    var month = d.getMonth();
    month = monthArr[month];
    

    h2.innerHTML = Date + ", " + day;
    h3.innerHTML = month;

   return { dy:day, dt:Date, m:month, yr:d.getFullYear()};
}

function generateCalender () {
    var days;
    if (obj.m ==="February" && obj.yr % 4 !== 0) {
        days = 28;
    } else if (obj.m ==="February" && obj.yr % 4 === 0) {
        days = 29;
    } else if (day31MonthArr.includes(obj.m)) {
        days = 31;
    } else {
        days = 30;
    }

    var localDayArr  = [
        "Monday",
        "Tuesday",
        "wednseday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    
    var startOfMonth = moment().clone().startOf("month").format("dddd");

    var dayIndex= localDayArr.indexOf(startOfMonth);

    for(var j=0;j<dayIndex;j++) {
        var elements = document.createElement("div");
        elements.className = "calendar_number_empty";
        document.getElementById("lc").appendChild(elements);
    }

    for(var k =1; k <days;k++){
        var elements = document.createElement("div");
        obj.gt === k 
        ? (elements.className="calendar_number calendar_number--current")
        : (elements.className = "calendar-number")

        elements.appendChild(document.createTextNode(k));
        document.getElementById("lc").appendChild(elements)
    }
}