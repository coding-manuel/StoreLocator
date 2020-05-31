var markers = [];
var map;
var infoWindow;
var n = 0;
var foundStores = [];
var moreInfoBox = document.querySelector('#more-info-box');
let sliderImages = document.querySelectorAll('.slide'),
    arrowRight = document.querySelector('#arrow-right'),
    arrowLeft = document.querySelector('#arrow-left'),
    current = 0;
var name1;
var address1;
var phone1;
var cuis1;
var rate1;
var web1;
var col1;
var lat1;
var lon1;

var mapStyleDark = [{
    "elementType": "labels",
    "stylers": [{
        "color": "#ffffff"
    }]
},
{
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "on"
    }]
},
{
    "featureType": "administrative",
    "elementType": "labels",
    "stylers": [{
        "visibility": "simplified"
    }]
},
{
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#e0e0e0"
    }]
},
{
    "featureType": "landscape",
    "stylers": [{
        "color": "#f2f2f2"
    }]
},
{
    "featureType": "landscape",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#687078"
    },
    {
        "saturation": -50
    }
    ]
},
{
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#929e97"
    }]
},
{
    "featureType": "poi",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "road",
    "stylers": [{
        "saturation": -50
    },
    {
        "lightness": -50
    }
    ]
},
{
    "featureType": "road",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#989899"
    }]
},
{
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "road.highway",
    "stylers": [{
        "visibility": "simplified"
    }]
},
{
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#8d8e8f"
    }]
},
{
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "transit",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "transit.line",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "transit.station",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "transit.station.airport",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "transit.station.bus",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "transit.station.rail",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "water",
    "stylers": [{
        "color": "#6c8b98"
    },
    {
        "lightness": -40
    },
    {
        "visibility": "on"
    }
    ]
},
{
    "featureType": "water",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
}
];


var mapStyleLight = [{
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#505050"
    }]
},
{
    "featureType": "administrative.land_parcel",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "administrative.neighborhood",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "landscape",
    "stylers": [{
        "visibility": "simplified"
    }]
},
{
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#dfd1aa"
    },
    {
        "saturation": -60
    },
    {
        "lightness": 10
    }
    ]
},
{
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#8aab89"
    },
    {
        "lightness": "11"
    }
    ]
},
{
    "featureType": "landscape.natural",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#000000"
    }]
},
{
    "featureType": "landscape.natural.terrain",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#689a74"
    },
    {
        "lightness": "14"
    }
    ]
},
{
    "featureType": "poi",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "road",
    "stylers": [{
        "saturation": 5
    }]
},
{
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#ffffff"
    },
    {
        "visibility": "on"
    }
    ]
},
{
    "featureType": "road",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "road.highway",
    "stylers": [{
        "color": "#ebd76f"
    },
    {
        "visibility": "simplified"
    }
    ]
},
{
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "transit",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "transit",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#767774"
    }]
},
{
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#484848"
    }]
},
{
    "featureType": "transit.station.airport",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#969488"
    },
    {
        "visibility": "on"
    }
    ]
},
{
    "featureType": "transit.station.airport",
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "on"
    }]
},
{
    "featureType": "transit.station.airport",
    "elementType": "labels.text",
    "stylers": [{
        "color": "#ffffff"
    },
    {
        "visibility": "simplified"
    }
    ]
},
{
    "featureType": "water",
    "stylers": [{
        "visibility": "on"
    }]
},
{
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#b8e4f4"
    },
    {
        "saturation": -40
    },
    {
        "lightness": -20
    }
    ]
},
{
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#5f5e64"
    }]
}
];

var mapStyle = mapStyleLight;

function initMap() {
    //var mumbai = {
    //    lat: 19.07283,
    //    lon: 72.88261
    //};
    infoWindow = new google.maps.InfoWindow({
        maxWidth: 400,
    });
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        styles: mapStyle,
        mapTypeId: 'roadmap',
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        }
    });
    searchStores();
}

function searchStores() {
    var inp = document.getElementById("inp").value;
    foundStores = [];
    if (inp) {
        stores.forEach(function (store) {
            var cus = store['top_ratings'];
            var cuis = store['cuisines'];
            var add = store['address'];
            cuis = cuis.concat(cus);
            var nam = store.name;
            if ((nam.toUpperCase()).includes((inp.toUpperCase())) || (cuis.toUpperCase()).includes((inp.toUpperCase())) || (add.toUpperCase()).includes((inp.toUpperCase()))) {
                foundStores.push(store);
            }
        })
    } else {
        foundStores = stores;
    }

    clearLocations()
    displayStores(foundStores)
    markMap(foundStores)
    showMarkerClick()
}

function clearLocations() {
    infoWindow.close();
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers.length = 0;
}

function markMap(stores) {
    var bounds = new google.maps.LatLngBounds();

    moreInfoClose();

    stores.forEach(function (store, index) {

        var mark = new google.maps.LatLng(
            store.latitude,
            store.longitude);

        var name = store['name'];
        var address = store['address_formatted_short'];
        var lat = store.latitude;
        var lon = store.longitude;
        var phone = store['phone'];
        var time = store["schedule_hours"];
        var pic = store["main_big_photo"];
        var cus = store['top_ratings'];
        var cuis = store['cuisines'];
        var rate = store["price_score"];
        var web = store["website"];

        name = name.toLowerCase();
        address = address.split(',', 4);
        cuis = cuis.concat(cus);

        bounds.extend(mark);

        createMarker(mark, name, address, phone, time, lat, lon, index, pic, cuis, rate, web);
    })
    map.fitBounds(bounds);
}

function createMarker(mark, name, address, phone, time, lat, lon, index, pic, cuis, rate, web) {

    if (rate === 1 || rate === 0) {
        var image = "https://i.ibb.co/Kh8y0yM/map-marker-1.png";
        var col = "#C56161";
    } else if (rate === 2) {
        var image = "https://i.ibb.co/X5QsYg8/2.png";
        var col = "#C58B61";
    } else if (rate === 3) {
        var image = "https://i.ibb.co/BNh80bZ/3.png";
        var col = "#C5AF61";
    } else if (rate === 4) {
        var image = "https://i.ibb.co/Vp4ghWq/4.png";
        var col = "#B7C561";
    } else {
        var image = "https://i.ibb.co/fvGRBMw/5.png";
        var col = "#75C561";
    }

    var cont = `<div style='font-family: 'Roboto Condensed',sans - serif'> <div style=''>` +
        "<p style='font-size: 20px; font-weight: 700; text-transform: capitalize'>" + name +
        "</p> <br> <i class='fas fa-clock' style='padding-right: 10px; color: rgb(80, 80, 80); font-size: 20px'></i>  <span style='padding-top: 10px; font-size: 15px; font-weight: 500'>" +
        time +
        '</span> <br> <br><div style="display: flex; align-items: center; justify-content:center"><i class="fas fa-location-arrow" style="padding-right: 10px; color: rgb(113, 113, 204); font-size: 20px"></i>  ' +
        `<a href='https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}' style=" font-size: 20px;text-transform: capitalize">  ` + address[0] +
        address[1] +
        '</a> </div> <br> <i class="fas fa-phone-alt" style="padding-right: 10px;color: rgb(105, 170, 105); font-size: 20px"></i> <span style="padding-top: 10px; font-size: 20px;text-transform: capitalize;color: rgb(105, 170, 105)">' +
        phone + "</span> <br> <br> <i class='fas fa-arrow-right' style='padding-right: 10px;color: rgb(80, 80, 80); font-size: 20px'></i>  <span style=' font-weight:700; font-size: 20px; cursor:pointer' onclick='ninc()'>More Info</span></div>";

    var cont2 = `<div style="font-family: 'Roboto Condensed',sans - serif; font-size: 20px; font-weight:700; text-transform: capitalize">
                        ${name}
                    </div>
                    <div style="font-family: 'Roboto Condensed',sans - serif; font-size: 20px; text-transform: capitalize">
                    ${cuis}
                    </div>
                    <div style="font-family: 'Roboto Condensed',sans - serif; font-size: 20px; text-transform: capitalize; font-weight:700; color:${col}">
                    Rating: ${rate}
                    </div>`

    var marker = new google.maps.Marker({
        map: map,
        position: mark,
        icon: image,
    });
    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.setContent(cont);
        name1 = name;
        address1 = address;
        phone1 = phone;
        cuis1 = cuis;
        rate1 = rate;
        web1 = web;
        col1 = col;
        lat1 = lat;
        lon1 = lon;
        infoWindow.open(map, marker);
        moreInfoClose();
    });
    google.maps.event.addListener(marker, 'mouseover', function () {
        infoWindow.setContent(cont2);
        infoWindow.open(map, marker);
    });
    markers.push(marker);
};

function ninc() {
    createMoreInfo(name1, address1, phone1, cuis1, rate1, web1, col1, lat1, lon1);
}

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

function createMoreInfo(name1, address1, phone1, cuis1, rate1, web1, col1, lat1, lon1) {

    var content = `<div> <div class="wrap">
                <div id="arrow-left" class="arrow"></div>
                <div id="arrow-right" class="arrow"></div>
                <div id="slider">
                    <div class="slide slide1">
                        <div class="slide-content">
                            <img src="https://source.unsplash.com/random/600x600?food" alt=""> </div>
                    </div>
                    <div class="slide slide2">
                        <div class="slide-content">
                            <img src="https://source.unsplash.com/random/600x600?food2" alt=""> </div>
                    </div>
                    <div class="slide slide3">
                        <div class="slide-content">
                            <img src="https://source.unsplash.com/random/600x600?food3" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <i class = "fas fa-times cross"> </i>
            <div class="store-section">
                <div class="store-name-info">
            ${name1}
            </div>
                <div class="background-rate" style="background-color:${col1}"></div>
                <div class="store-rate-info">
                    ${rate1}
                </div>
                <div class="store-cuisines-info">
                    ${cuis1}
                </div>
            </div>
            <a href = "https://www.google.com/maps/dir/?api=1&destination=${lat1},${lon1}" >
                <div class="store-address-info">
                    <i class="fas fa-map"></i> <span>${address1}</span>
                </div>
            </a>
                <div class="store-phone-info">
                    <i class="fas fa-phone-alt"></i> <span class='phonein'>${phone1}</span>
                </div>
            <a href="${web1}">
                <div class="store-web-info">
                    <i class="fas fa-globe-asia"></i> <span>${web1}
                    </span>
                </div>
            </a></div>`;

    document.querySelector('.more-info-box').innerHTML = content;
    sliderImages = document.querySelectorAll('.slide');
    cross = document.querySelector('.cross');
    arrowRight = document.querySelector('#arrow-right');
    arrowLeft = document.querySelector('#arrow-left');
    current = 0;

    moreInfo();
}

function moreInfo() {
    moreInfoBox.style.display = 'block';
    setTimeout(function () {
        moreInfoBox.style.transform = 'translateX(550px)';
    }, 500);
    infoWindow.close();
    startSlide();
    arrowLeft.addEventListener('click', function () {
        if (current === 0) {
            current = sliderImages.length;
        }
        slideLeft();
    });

    arrowRight.addEventListener('click', function () {
        if (current === sliderImages.length - 1) {
            current = -1;
        }
        slideRight();
    });

    cross.addEventListener('click', function () {
        moreInfoClose();
    });

}

function moreInfoClose() {
    moreInfoBox.style.transform = 'translateX(0px)';
    setTimeout(function () {
        moreInfoBox.style.display = 'none';
    }, 1000);
}

function showMarkerClick() {
    var storeElements = document.querySelectorAll(".store");
    storeElements.forEach(function (elem, index) {
        elem.addEventListener("click", function () {
            google.maps.event.trigger(markers[index], 'click');
            moreInfoClose();
        });
    });
};

function displayStores(stores) {
    var storesHtml = "";
    stores.forEach(function (store, index) {

        var name = store['name'];
        var address = store['address_formatted_short'];
        var phone = store['phone'];
        var cus = store['top_ratings'];
        var cuis = store['cuisines'];
        var rate = store["price_score"];
        var web = store["website"];

        name = name.toLowerCase();
        address = address.split(',', 4);

        if (cus !== undefined) {
            cuis = cuis.concat(cus);
        }

        storesHtml += `
                <div class="store">
                    <div class="store-name">
                        ${name}
                    </div>
                    <div class="store-cuis">
                       ${cuis}
                    </div>
                    <div class="store-address">
                        ${address[0]} ${address[1]} <br>
                    </div>
                    <div class="store-phone">
                        ${phone}
                    </div>
                    <div class="num">
                        ${index + 1}
                    </div>
                    <div class="divider"></div>
                </div>
        `
    });
    document.querySelector('.store-list').innerHTML = storesHtml;
}

var swi = document.querySelector(".dark-switch");
var day = document.querySelector(".day");
var night = document.querySelector(".night");
var tog = document.querySelector(".toggle");
var root = document.documentElement;
var c = 1;

swi.addEventListener('click', function () {
    if (c === 1) {
        c = 2;
        night.classList.toggle("vis");
        day.classList.toggle("vis");
        tog.classList.toggle("switch");
        root.style.setProperty("--main-p-color", "rgb(255, 255, 255)");
        root.style.setProperty("--main-s-color", "rgb(80, 80, 80)");
        mapStyle = mapStyleDark;
        initMap();
    } else {
        c = 1;
        day.classList.toggle("vis");
        night.classList.toggle("vis");
        tog.classList.toggle("switch");
        root.style.setProperty("--main-s-color", "rgb(255, 255, 255)");
        root.style.setProperty("--main-p-color", "rgb(80, 80, 80)");
        mapStyle = mapStyleLight;
        initMap();
    }
});