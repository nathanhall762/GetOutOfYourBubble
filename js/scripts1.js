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
  $('button.form-objects').on('click', function () {
    $('.form-container').remove();
    $('.master-grid').css('grid-template-rows', 'repeat(3, 1fr)')
      const countries = [
      'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch',
      'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr',
      'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr',
      'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz',
      'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg',
      'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'
    ];
    newsApi(countries[Math.floor(Math.random() * 10)]);
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
    const boredDict = {};
    for (let i = 10; i < 13; i++) {
      boredApi(boredDict, i, types[Math.floor(Math.random() * 9)]);
    }

    function newsApi (country) {
      $.ajax({
        url: 'https://newsapi.org/v2/top-headlines',
        type: 'GET',
        data: {
          country: country,
          apiKey: '779b745ff8aa4d5a960d37036412c454',
          pageSize: 9,
          page: 1
        },
        success: function (response) {
          console.log(country);
          for (let i = 0; i < 6; i++) {
            const obj = (response.articles[i]);
            const objArray = (Object.values(obj));
            // const valueArray = Object.values(objArray[i]);
            console.log(objArray);
            if (objArray[5] != null) {
              console.log(objArray[4]);
              console.log(objArray[5]);
              console.log(objArray[2])
              // myDict = addKeyValuePair(myDict, valueArray[4], valueArray[5]);
              $('.master-grid').append("<div class='bubble' id='" + i + "'><div>");
              $('#' + i).append('<p class="bubble-content">' + objArray[2] + "</p>");
              $('#' + i).append("<a href='" + objArray[4] + "' target='_blank'><img src='" + objArray[5] + "' alt='incoming bubble...' style='width:20vw;height:20vh;'></a>");
            }
          }
        }
      });
    }

    function addKeyValuePair (myDict, key, value) {
      myDict[key] = value;
      return myDict;
    }

    function boredApi (boredDict, i, types) {
      $.ajax({
        url: 'https://www.boredapi.com/api/activity?',
        type: 'GET',
        data: {
          type: types
        },
        success: function (response) {
          const objArray = (Object.values(response));
          boredDict = addKeyValuePair(boredDict, objArray[0], objArray[1]);
          $('.master-grid').append("<div class='bubble' id='" + i + "'><div>");
          $('#' + i).append('<p class="bubble-content">' + objArray[0] + '</p>');
        }
      });
    }
  });
});
