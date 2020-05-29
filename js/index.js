var markers = [];
var map;
var infoWindow;

var mapStyleDark = [
    {
        "elementType": "labels",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#e0e0e0"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
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
        "stylers": [
            {
                "color": "#929e97"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
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
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#989899"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#8d8e8f"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
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
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
];


var mapStyleLight = [
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#505050"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
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
        "stylers": [
            {
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
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#689a74"
            },
            {
                "lightness": "14"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "saturation": 5
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
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
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
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
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#767774"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#484848"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry.fill",
        "stylers": [
            {
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
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
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
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#5f5e64"
            }
        ]
    }
];

var mapStyle = mapStyleLight;
function initMap() {
    //var mumbai = {
    //    lat: 19.07283,
    //    lon: 72.88261
    //};
    infoWindow = new google.maps.InfoWindow();
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
    var foundStores = [];
    console.log("INPUT" + inp);
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
    }
    else {
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
    stores.forEach(function (store, index) {
        var mark = new google.maps.LatLng(
            store.latitude,
            store.longitude);
        var name = store['name'];
        name = name.toLowerCase();
        var address = store['address_formatted_short'];
        address = address.split(',', 4);
        var phone = store['phone'];
        var time = store["schedule_hours"];
        var lat = store.latitude;
        var lon = store.longitude;
        bounds.extend(mark);
        createMarker(mark, name, address, phone, time, lat, lon, index);
    })
    map.fitBounds(bounds);
}

function createMarker(mark, name, address, phone, time, lat, lon, index) {
    var cont = "<div style='font-family: 'Roboto Condensed',sans - serif'> <b style='font-size: 20px; font-weight: 700; text-transform: capitalize'>" + name +
        "</b> <br> <p style='padding-top: 5px; font-size: 15px; font-weight: 500'>" + time +
        '</p> <br> <i class="fas fa-location-arrow" style="padding-right: 5px; color: rgb(113, 113, 204); font-size: 20px"></i>  ' +
        `<a href='https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}' style="padding-top: 20px; font-size: 20px;text-transform: capitalize">` + address[0] +
        address[1] +
        '</a> <br> <br> <i class="fas fa-phone-alt" style="padding-right: 5px; color: rgb(105, 170, 105); font-size: 20px"></i> <span style="padding-top: 10px; font-size: 20px;text-transform: capitalize;color: rgb(105, 170, 105)">  '
        + phone + "</span> </div>";

    var image = "https://i.ibb.co/Kh8y0yM/map-marker-1.png";

    var marker = new google.maps.Marker({
        map: map,
        position: mark,
        icon: image
    });
    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.setContent(cont);
        infoWindow.open(map, marker);
    });
    markers.push(marker);
}

function showMarkerClick() {
    var storeElements = document.querySelectorAll(".store");
    storeElements.forEach(function (elem, index) {
        elem.addEventListener("click", function () {
            google.maps.event.trigger(markers[index], 'click');
        });
    });
};

function displayStores(stores) {
    var storesHtml = "";
    stores.forEach(function (store, index) {

        var name = store['name'];
        var address = store['address_formatted_short'];
        address = address.split(',', 4);
        var addresss = address.filter(function (el) {
            return el != undefined;
        });
        var phone = store['phone'];
        var cus = store['top_ratings'];
        var cuis = store['cuisines'];
        name = name.toLowerCase();
        cuis = cuis.concat(cus);

        storesHtml += `
                <div class="store">
                    <div class="store-name">
                        ${name}
                    </div>
                    <div class="store-cuis">
                       ${cuis}
                    </div>
                    <div class="store-address">
                        ${addresss[0]} ${addresss[1]} <br>
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
    }
    else {
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
