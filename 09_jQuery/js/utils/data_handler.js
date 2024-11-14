// Utility function to load data from a Json file
// The fileName param is the prefix (ex: teams, drivers) of the .json file
function loadData(fileName) {
  return new Promise((resolve, reject) => {
    $.getJSON(`data/${fileName}.json`, (data) => {
      // Send the data back to the calling function
      resolve(data);
    }).fail((error) => {
      reject(error);
    });
  });
}
