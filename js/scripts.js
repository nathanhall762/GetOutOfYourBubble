$(document).ready(function () {
  $('.form-container').on('click', function () {
    $('label.form-objects').animate({
      opacity: 1
    }, 5000);
    $('input.form-objects').animate({
      opacity: 1
    }, 6000);
  });
  $('input.form-objects').on('click', function () {
    $('button.form-objects').animate({
      opacity: 1
    }, 7000);
  });
  $('button.form-objects').on('click', function () {
    $('.form-container').remove();
    for (let i = 0; i < 9; i++) {
      newsApi();
    }
  });
});

function newsApi () {
  $.ajax({
    url: 'https://newsapi.org/v2/top-headlines',
    type: 'GET',
    data: {
      country: 'hk',
      apiKey: '779b745ff8aa4d5a960d37036412c454',
      pageSize: 1,
      page: 1
    },
    success: function (response) {
    //   let respObj = JSON.parse(response);
      $('.master-grid').append("<div class='bubble'><div>");
      $('.bubble').append(response.status)
      console.log(response.status)
    }
  });
}
