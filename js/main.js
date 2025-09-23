
  const select = document.getElementById('mySelect');
  select.addEventListener('change', function() {
    const url = this.value;
    if(url && url !== "#") {
      window.location.href = url; // ينقلك للصفحة المحددة
    }
  });
// console.log(data.current.temp_c);
// console.log(data.forecast.forecastday[0].day.avgtemp_c);
// forecast = console.log(data.current)
// forecast = console.log(data.forecast)



searchinputt= document.getElementById('Holds')

//real-time-search




function showWeather() {
  searchinputt.addEventListener("input", function () {
    getcountry(searchinputt.value);
  });
}

showWeather()

let locationName = [];

let forecast = [];


let current = [] ;


getcountry('cairo')

async function getcountry(city) {


    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4bf47be9079f428eb72183009251709&q=${city}&days=3&aqi=no&alerts=no`)

    let data = await response.json()
// console.log(data);

locationName=data.location.name
// console.log(locationName);

current = data.current.temp_c              //.temp_c
// console.log(current);

forecast = data.forecast.forecastday;
console.log(forecast);

displaydata()

// console.log(mydate);


// let test = console.log(data.forecast);


}



function displaydata() {
  let box = "";

  for (let i = 0; i < forecast.length; i++) {
    let mydate = new Date(forecast[i].date);
    let dayname = mydate.toLocaleDateString("en-US", { weekday: "long" });

   let firstcard  = i == 0 ? "today-card" : "normal-card";

   let iconcard = i == 0 ? "width-img" : "";

   let tempcard = i == 0 ? "big-text" : "" ; 

   let oncard = (i == 1 || i == 2)  ? "blue-class" : "" ; 

   let clear = i == 2 ? "color" : "" ; 




    box += `
      <div class="col-md-4 text-white p-3 ${firstcard} ${clear} ">
        <div class="innerhtml">
          <h4>${dayname}</h4>
          <img src="https:${forecast[i].day.condition.icon}" class="${iconcard}" alt="weather icon">
          <h2 class="${tempcard}">${forecast[i].day.avgtemp_c}°C</h2>
          <h5 class="cond ${oncard}">${forecast[i].day.condition.text}</h5>
         
        </div>
      </div>
    `;
  }

// icon-compass@2x.png
let box3 = `

<img src="img/icon-umberella@2x.png" alt="">
<span class="white-text padding">20%</span>

<img src="img/icon-wind@2x.png" alt="">
<span class="white-text padding">18km/h</span>


<img src="img/icon-compass@2x.png"" alt="">
<span class="white-text padding">East</span>
`

document.getElementById('icon').innerHTML=box3

  let box2 = `<h2 class="city-name">${locationName}</h2>`;
document.getElementById("country").innerHTML = box2;



  document.getElementById("myrow").innerHTML = box;
}











// Mycode///////////////////////////////////////////////////////////////////////////////////




// Mycode///////////////////////////////////////////////////////////////////////////////////

// Mobile application

























// ChatGBT Code///////////////////////////////////////////////////////////////////////////////////







   // locationName = data.location.name


    //  console.log(locationName);

  

    // displaycountry ()
// let dayname = mydate.toLocaleDateString("en-US" , {weekday: "long"});





// -------------------------------------------------------------------------------------


// let forecast = [];
// let locationData = {};

// async function getCountry(city = "London") {
//     let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4bf47be9079f428eb72183009251709&q=${city}&days=3&aqi=no&alerts=no`);
//     let data = await response.json();

//     // نخزن البيانات في متغيرات عامة
//     forecast = data.forecast.forecastday;

//     locationData = data.location;

//     // نستدعي الفانكشن التانية لعرض البيانات
//     displayData();
// }

// function displayData() {
//     let box = '';

//     // اسم البلد
//     box += `<h2 class="text-center my-3">${locationData.name}, ${locationData.country}</h2>`;

//     // نعرض الـ 3 أيام
//     for (let i = 0; i < forecast.length; i++) {
//         box += `
//         <div class="col-md-4 bg-light text-center p-3 m-2 rounded shadow">
//             <h4>${forecast[i].date}</h4>
//             <h5>${forecast[i].day.condition.text}</h5>
//             <img src="https:${forecast[i].day.condition.icon}" alt="weather icon">
//             <h3>${forecast[i].day.avgtemp_c} °C</h3>
//         </div>
//         `;
//     }

//     document.getElementById('myrow').innerHTML = box;
// }

// // نستدعي الفانكشن لأول مرة على مدينة افتراضية
// getCountry("London");
// ChatGBT Code///////////////////////////////////////////////////////////////////////////////////