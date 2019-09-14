// from data.js
let JSON_Data = data;

// YOUR CODE HERE!

//Button Click
let buttonclick = d3.select("#filter-btn");

let tbody = d3.select("#ufo-table > tbody");
JSON_Data.forEach(function(sighting) {
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});


buttonclick.on("click", function() {
  let inputElement = d3.select("#datetime");
  let inputValue = inputElement.property("value");

  if (inputValue.length == 0) {
    d3.selectAll("#ufo-table > tbody > tr").remove();
    let tbody = d3.select("#ufo-table > tbody");
    JSON_Data.forEach(function(sighting) {
      let row = tbody.append("tr");
      Object.entries(sighting).forEach(function([key, value]) {
        let cell = row.append("td");
        cell.text(value);
      });
    });
  }

  else
    d3.selectAll("#ufo-table > tbody > tr").remove();
    let filteredData = JSON_Data.filter(sighting => sighting.datetime === inputValue);
    let tbody = d3.select("#ufo-table > tbody");
    filteredData.forEach(function(sighting) {
    let row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      let cell = row.append("td");
      cell.text(value);
    });
  });
});