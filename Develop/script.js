// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// on page load - run this code
$(document).ready(function () {
  // TO DO add date from day.js here

  // grab calendar from HTML
  var calendar = $("#calendar");
  // defining beginning and ending of business day
  var dayStart = 8;
  var dayEnd = 17;

  // formatting hour display
  function formatHour(hour) {
    var pmTime = hour - 12;
    return hour > 12 ? pmTime + " pm" : hour + " am";
  }

  // define today's date with day.js
  var date = document.getElementById("date");
  date.innerText = dayjs().format("dddd");

  // dynamically create hour row with jQuery
  function createHour(hour) {
    var row = $("<div>").addClass("row time-block");
    var hourLabel = $("<div>")
      .addClass("col-2 col-md-1 hour text-center py-3")
      .text(formatHour(hour));
    var hourInput = $("<input>")
      .addClass("col-8 col-md-10 description")
      .attr("id", "hour-" + hour)
      .attr("type", "text");
    var saveIcon = $("<i>").addClass("fas fa-save");
    var saveBtn = $("<button>")
      .addClass("btn saveBtn col-2 col-md-1")
      .attr("id", "save-btn-" + hour);
    if (dayjs().hour() === i) {
      hourInput.addClass("present");
    } else if (dayjs().hour() >= i) {
      hourInput.addClass("past");
    } else if (dayjs().hour() <= i) {
      hourInput.addClass("future");
    }
    saveBtn.append(saveIcon);
    row.append(hourLabel, hourInput, saveBtn);
    calendar.append(row);
  }

  // run through loop to create hours starting from 8-5
  for (var i = dayStart; i <= dayEnd; i++) {
    createHour(i);
  }

  // load schedule from local storage
  for (var i = dayStart; i <= dayEnd; i++) {
    var savedEntry = localStorage.getItem("hour-" + i);
    if (savedEntry) {
      $("#hour-" + i).val(savedEntry);
    }
  }

  //save entry to local storage on button click
  $(".saveBtn").on("click", function () {
    console.log(this);

    var hour = $(this).attr("id");
    var index = hour.replace(/\D/g, "");
    var id = "#hour-" + index;
    var id2 = "hour-" + index;
    var entry = $(id).val();
    localStorage.setItem(id2, entry);
  });
});
