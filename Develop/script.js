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

  // dynamically create hour row with jQuery
  function createHour(hour) {
    var row = $("<div>").addClass("hour-row");
    var hourLabel = $("<div>").addClass("hour-label").text(formatHour(hour));
    var hourInput = $("<input>")
      .addClass("hour-input")
      .attr("id", "hour-" + hour)
      .attr("type", "text");
    var saveBtn = $("<button>")
      .addClass("save-btn")
      .attr("id", "save-btn-" + hour);
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
  $(".save-btn").on("click", function () {
    console.log(this);

    var hour = $(this).attr("id");
    var index = hour.replace(/\D/g, "");
    var id = "#hour-" + index;
    var id2 = "hour-" + index;
    var entry = $(id).val();
    localStorage.setItem(id2, entry);
  });
});

//TODO create for loop to determine past and present and future hours by current hour

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
