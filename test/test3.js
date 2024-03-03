// Qestion 2

var selectedRow = null;
function onFormSubmit(event) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  }
}

function readFormData() {
  var formData = {};
  formData["product"] = document.getElementById("product").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("storelist")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(0);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.product;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = `<button onClick="onDelete(this)">Delete</button>`;

  selectedRow = null;
}

function onDelete(td) {
  var row = td.parentNode.parentNode;
  document.getElementById("storelist").deleteRow(row.rowIndex);
}
resetForm();

function resetForm() {
  document.getElementById("product").value = "";
}





// Question 1

// function mergeIntervals(intervals) {
//   if (intervals.length <= 1) {
//     return intervals;
//   }
//   intervals.sort((a, b) => a.start - b.start);
//   const merged = [intervals[0]];
//   for (const currentInterval of intervals) {
//     const lastMergedInterval = merged[merged.length - 1];
//     if (currentInterval.start <= lastMergedInterval.end) {
//       lastMergedInterval.end = Math.max(
//         lastMergedInterval.end,
//         currentInterval.end
//       );
//     } else {
//       merged.push(currentInterval);
//     }
//   }
//   return merged;
// }
// const inputIntervals = [
//   { start: 1, end: 3 },
//   { start: 2, end: 6 },
//   { start: 8, end: 10 },
//   { start: 15, end: 18 },
// ];

// const mergedIntervals = mergeIntervals(inputIntervals);
// console.log(mergedIntervals);
