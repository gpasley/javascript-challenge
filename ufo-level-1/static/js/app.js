// from data.js
var tableData = data;
console.table(tableData)
// YOUR CODE HERE!

var button = d3.select("#filter-btn");

function loadTable(tableData) {
  var alienData = ''

  for (var i = 0; i < tableData.length; i++) {
    alienData +=
      "<tr>" +
        "<td>" + tableData[i].datetime + "</td>" +
        "<td>" + tableData[i].city + "</td>" +
        "<td>" + tableData[i].state + "</td>" +
        "<td>" + tableData[i].country + "</td>" +
        "<td>" + tableData[i].shape + "</td>" +
        "<td>" + tableData[i].duration + "</td>" +
        "<td>" + tableData[i].comments + "</td>" +
      "</tr>"
  }
  d3.select("tbody").html(alienData);
};

function filterData(datetime) {
  var filteredData = tableData.filter(tableData => tableData.datetime === datetime);
  loadTable(filteredData);
}

button.on("click", function() {
  filterData(d3.select("#datetime").property("value"));
});

window.onload = loadTable(tableData);