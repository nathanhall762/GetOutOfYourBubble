// import axios from 'axios';
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
    // const countries = [
    //   'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch',
    //   'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr',
    //   'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr',
    //   'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz',
    //   'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg',
    //   'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'
    // ];
    // const newsDict = {};
    // newsApi(newsDict, countries[Math.floor(Math.random() * 10)]); // should return dict of key, value pairs {imageUrl: linkUrl}
    // console.log(newsDict);
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
    for (let i = 0; i < 20; i++) {
      boredApi(boredDict, i, types[Math.floor(Math.random() * 9)]);
    }
    console.log(boredDict);
    randomKeyValuePair(boredDict, boredDict);

    // async function newsApi (myDict, countries) {
    //   const response = await fetch('https://newsapi.org/v2/top-headlines', {
    //     method: 'GET',
    //     headers: {
    //       country: countries,
    //       apiKey: '779b745ff8aa4d5a960d37036412c454',
    //       pageSize: 9,
    //       page: 1
    //     }
    //   });
    //   const obj = (await response.json()).articles;
    //   const objArray = Object.values(obj);
    //   for (let i = 0; i < 9; i++) {
    //     const valueArray = Object.values(objArray[i]);
    //     if (valueArray[5] != null) {
    //       myDict = addKeyValuePair(myDict, valueArray[4], valueArray[5]);
    //     }
    //   }
    //   return myDict;
    // }

    // $('.master-grid').append("<div class='bubble' id='" + i + "'><div>");
    // $('#' + i).append('<p class="bubble-content">' + objArray[0] + '</p>');
  }
  // }
  );
  // }
  function addKeyValuePair (myDict, key, value) {
    myDict[key] = value;
    return myDict;
  }

  async function boredApi (boredDict, i, types) {
    const response = await fetch(`http://www.boredapi.com/api/activity?type=${types}`);
    const objArray = Object.values(await response.json());
    boredDict = addKeyValuePair(boredDict, objArray[0], objArray[1]);
    return boredDict;
  }

  function randomKeyValuePair (dict1, dict2) {
    console.log(dict1);
    console.log(dict2);
    // Determine which dictionary to select a key, value pair from
    const selectedDict = Math.random() < 0.5 ? dict1 : dict2;
    console.log(selectedDict);

    // Get the keys of the selected dictionary as an array
    const keys = Object.keys(selectedDict);
    console.log(keys);

    // Select a random key from the array
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    // Get the value for the selected key
    const value = selectedDict[randomKey];

    // Print the key, value pair to the console
    console.log(randomKey, value);
  }
});
// });
