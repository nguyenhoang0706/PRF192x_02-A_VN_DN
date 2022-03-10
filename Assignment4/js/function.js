$(document).ready(function () {
  //link get top news
  const getTopNewsUrl =
    "https://gnews.io/api/v4/top-headlines?token=79481241aafb2e26734e276f53721e82";

  // get top news
  $.get(getTopNewsUrl, function (data) {
    console.log(data);

    let content = "";
    const length = data.articles.length;
    for (let i = 0; i < length; i++) {
      content +=
        '<div class="article">' +
        '<img src="' +
        data.articles[i].image +
        '"/>' +
        '<div class="article-content">' +
        "<h2><a href='" +
        data.articles[i].url +
        "' target='_blank'>" +
        data.articles[i].title +
        "</a></h2>" +
        "<p>" +
        data.articles[i].publishedAt +
        "</p>" +
        "<h6>" +
        data.articles[i].description +
        "</h6>" +
        "</div></div>";
    }
    $("#demo").append(content);
  });

  //search
  $("#searchBtn").click(function () {
    //search string
    const searchTxt = $("#searchTxt").val();

    //link get news contain search string
    const getSearchNewsUrl =
      "https://gnews.io/api/v4/search?q=" +
      searchTxt +
      "&token=79481241aafb2e26734e276f53721e82";

    //clear top news
    $("#demo").html("");

    //get search news
    $.get(getSearchNewsUrl, function (data) {
      console.log(data);
      var st = JSON.stringify(data);
      console.log(st);
      let content = "";
      const length = data.articles.length;
      for (let i = 0; i < length; i++) {
        content +=
          '<div class="article">' +
          '<img src="' +
          data.articles[i].image +
          '"/>' +
          '<div class="article-content">' +
          "<h2><a href='" +
          data.articles[i].url +
          "' target='_blank'>" +
          data.articles[i].title +
          "</a></h2>" +
          "<p>" +
          data.articles[i].publishedAt +
          "</p>" +
          "<h6>" +
          data.articles[i].description +
          "</h6>" +
          "</div></div>";
      }
      $("#demo").append(content);
    });
  });
});
