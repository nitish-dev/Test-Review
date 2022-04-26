const container = document.querySelector("#collections");

//fetch data
function fetchData() {
  fetch("data/data.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      renderHTML(data.collection);
    })
    .catch(err => {
      console.log(err);
    });
}
//render html
function renderHTML(data) {
  const row = document.createElement("div");
  row.classList = "row";

  data.forEach(res => {
    createHtml(res, row);
    container.appendChild(row);
  });
}

//create html
function createHtml(data, target) {
  const box = document.createElement("div");
  box.classList = "collection-box";
  box.innerHTML = "";

  data.articles.forEach(el => {
    const { titles, Imageurl, Intro, Published, Comment } = el;
    box.innerHTML += `
          <div class="data-col">
          <div class="inside-con">
            <a href="">
              <img src="${Imageurl}" alt="" class="hero-img" />
            </a>
            <h2>${titles}</h2>
            <p>
              ${Intro}
            </p>
            <div class="info">
              <span class="time"><i class="fa fa-clock-o"></i> ${Published}</span>
              <span class="comment"><i class="fa fa-comment"></i> ${Comment}</span>
            </div>
            
            </div>
            </div>
          `;

    target.appendChild(box);
  });
}

fetchData();
