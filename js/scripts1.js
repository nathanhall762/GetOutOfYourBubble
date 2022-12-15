$(document).ready(function () {
  // $('.form-container').on('click', function () {
  //   $('label.form-objects').animate({
  //     opacity: 1
  //   }, 5000);
  //   $('input.form-objects').animate({
  //     opacity: 1
  //   }, 6000);
  // });
  // $('input.form-objects').on('click', function () {
  //   $('button.form-objects').animate({
  //     opacity: 1
  //   }, 7000);
  // });
  $('button.form-objects').on('click', function () {
    $('.form-container').remove();
    const countries = [
      'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch',
      'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr',
      'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr',
      'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz',
      'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg',
      'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'
    ];
    let newsDict = {};
    newsApi(newsDict, countries[Math.floor(Math.random() * 10)]); // should return dict of key, value pairs {imageUrl: linkUrl}
    console.log(newsDict);
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
      boredApi(i, types[Math.floor(Math.random() * 10)]);
    }

    function newsApi (myDict, countries) {
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
          const obj = (response.articles);
          const objArray = (Object.values(obj));
          for (let i = 0; i < 9; i++) {
            const valueArray = Object.values(objArray[i]);
            if (valueArray[5] != null) {
                myDict = addKeyValuePair(myDict, valueArray[4], valueArray[5]);
              }
          }
        //   console.log(myDict);
          return myDict;
        //   $('.master-grid').append("<div class='bubble' id='" + i + "'><div>");
        //   $('#' + i).append("<a href='" + objArray[4] + "' target='_blank'><img src='" + objArray[5] + "' alt='incoming bubble...' style='width:20vw;height:20vh;'></a>");
        }
      });
    }

    function addKeyValuePair (myDict, key, value) {
      myDict[key] = value;
      return myDict;
    }

    function boredApi (i, types) {
      $.ajax({
        url: 'http://www.boredapi.com/api/activity?',
        type: 'GET',
        data: {
          type: types
        },
        success: function (response) {
          $('.master-grid').append("<div class='bubble' id='" + i + "'><div>");
          const objArray = (Object.values(response));
          console.log(objArray[1]);
          $('#' + i).append('<p class="bubble-content">' + objArray[0] + '</p>');
        }
      });
    }
  });
});
