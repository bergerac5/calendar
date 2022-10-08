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

    if (obj.m === "February" && obj.yr % 4 !==0) {
        days = 28;
    } else if (obj.m === "February" && obj.yr % 4 ===0) {
        days = 29;
    } else if (day31MonthArr.includes(obj.m)) {
        days = 31;
    } else {
        days = 30;
    }

    var localDayArr = [
        "Monday",
        "Tuesday",
        "wednseday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    var startOfMonth = moment().clone().startOf("month").format("dddd");

    var dayIndex = localDayArr.indexOf(startOfMonth);

    for(var j=0;j<dayIndex;j++){
        var element = document.createElement("div");
        element.className = "Calendar__number_empty";
        document.getElementById("lc").appendChild(element);
    }

    for(var K = 1; K<=days;K++){
        var element = document.createElement("div");
        obj.dt === K 
        ? (element.className="Calendar__number Calendar__number--current")
        : (element.className = "Calendar__number");

        element.appendChild(document.createTextNode(K));
        document.getElementById("lc").appendChild(element);
    }
}
