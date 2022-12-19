$(document).ready(function () {
  $('.form-container').on('mouseover', function () {
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
  // $('button.form-objects').on('click', function () {
  //   $('.form-container').remove();
  //   const countries = [
  //     'fr',
  //     'hk',
  //     'ae',
  //     'ar',
  //     'at',
  //     'be',
  //     'bg',
  //     'kr'
  //   ];
  //   for (let i = 0; i < 9; i++) {
  //     newsApi(i, countries[i]);
  //   }
  $('button.form-objects').on('click', function () {
    $('.form-container').remove();
    const types = [
      'education',
      'recreational',
      'social',
      'diy',
      'charity',
      'cooking',
      'relaxation',
      'music',
      'busywork'
    ];
    for (let i = 0; i < 9; i++) {
      boredApi(i, types[i]);
    }
  });
});

function newsApi (i, countries) {
  $.ajax({
    url: 'https://newsapi.org/v2/top-headlines',
    type: 'GET',
    data: {
      country: countries,
      apiKey: '779b745ff8aa4d5a960d37036412c454',
      pageSize: 9,
      page: 1
    },
    success: function (response) {
    //   let respObj = JSON.parse(response);
      $('.master-grid').append("<div class='bubble' id='" + i + "'><div>");
      const obj = (response.articles[-1 + i]);
      const objArray = (Object.values(obj));
      console.log(objArray[5]);
      $('#' + i).append("<a href='" + objArray[4] + "' target='_blank'><img src='" + objArray[5] + "' alt='incoming bubble...' style='width:20vw;height:20vh;'></a>");
    }
  });
}

function boredApi (i, types) {
  $.ajax({
    url: 'http://www.boredapi.com/api/activity?',
    type: 'GET',
    data: {
      type: types
    },
    success: function (response) {
    //   let respObj = JSON.parse(response);
      $('.master-grid').append("<div class='bubble' id='" + i + "'><div>");
      // const obj = (response.articles[-1 + i]);
      const objArray = (Object.values(response));
      console.log(objArray[0]);
      $('#' + i).append('<p class="bubble-content">' + objArray[0] + '</p>');
    }
  });
}
