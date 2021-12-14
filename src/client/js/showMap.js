const container = document.getElementById('map');
const options = {
		center: new kakao.maps.LatLng(37.5915464, 127.02127),
		level: 5
    };
const map = new kakao.maps.Map(container, options);