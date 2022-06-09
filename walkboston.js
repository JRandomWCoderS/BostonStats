// // MY CODE (works well, but I think I misnamed some stuff for the thing to catch it)

// function getTopSalaries(boston, container) {
//   const people = boston.data;
//   const len = 5; // only want top five
//   var topFiveSalaries = people.sort((a, b) => b[11] - a[11]).slice(0,len);
//   let html = '';

//   // create the list elements
//   html = createHtmlElements(len, html, topFiveSalaries);
//   container.innerHTML += '<ul id = topSalaries">' + html + '</ul>';
// }

// function getTopEarner(boston, container){
//   const people = boston.data;
//   const len = 1;
//   let highEarners = people.filter((a) => a[11] >= 200000);
//   var html = '';

//   // create the list elements
//   html = createHtmlElements(len, html, highEarners);
//   container.innerHTML += '<ul id = topEmployee">' + html + '</ul>';
// }

// function createHtmlElements(len, html, array) {
//   for (i = 0; i < len; i++) {
//     html +=
//       '<li class="top">' + 
//       '<h2>' + 
//       array[i][8] + 
//       '</h2>' + 
//       '<h3>' + 
//       array[i][11] +
//       '</h3>' +
//       '</li>';
//   }

//   return html
// }

// getTopSalaries(boston, document.getElementById('container'));
// getTopEarner(boston,document.getElementById('container'));

function renderPosts(boston, container) {
  var people = boston.data;
  const len = boston.data.length;
  var html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }
  container.innerHTML = '<ul id = "data">' + html + '</ul>';
}

function renderTopSalaries(boston, container) {
  // Step 1 solution
  var people = boston.data;
  var topSalaries = people.sort((a, b) => b[11] - a[11]).slice(0, 5);
  const len = topSalaries.length;
  var html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="top">' +
      '<h2>' +
      topSalaries[i][8] +
      '</h2>' +
      '<h3>' +
      topSalaries[i][11] +
      '</h3>';
  }

  container.innerHTML = '<ul id = "topSalaries">' + html + '</ul>';
}

function renderTopEmployees(boston, container) {
  //step 2 solution
  var people = boston.data;
  var topEmployees = people.filter((a) => a[11] > 200000);
  const len = topEmployees.length;
  var html = '';
  for (let i = 0; i < len; i++) {
    
    html +=
      '<li class="top">' +
      '<h2>' +
      topEmployees[i][8] +
      '</h2>' +
      '<h3>' +
      topEmployees[i][11] +
      '</h3>';
  }

  container.innerHTML += '<ul id = "topEmployees">' + html + '</ul>';
}

renderTopSalaries(boston, document.getElementById('container')); //step 1 solution
renderTopEmployees(boston, document.getElementById('container')); //step 2 solution
