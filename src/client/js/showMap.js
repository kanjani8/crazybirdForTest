const container = document.getElementById('map');
const containerBig = document.getElementById('map__whole');
const markerImg ="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

//let school = {lat: 37.5915464, lng: 127.02127};
let school;

if(container){
	try{
		school = JSON.parse(container.dataset.school);
		console.log(school);
	}catch(error){
		console.log(error);
	}
	const location = new kakao.maps.LatLng(school.lat, school.lng);
	const options = {
		center: location,
		level: 5
    };
	const map = new kakao.maps.Map(container, options);
	const iwContent = "<div class='map__sign'>공부할 장소 추천</div>", 
	iwPosition = location,
	iwRemoveable = false;

	var infowindow = new kakao.maps.InfoWindow({
		map: map,
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable,
	});
}
else if(containerBig){
	try{
		school = JSON.parse(containerBig.dataset.school);
	}catch(error){
		console.log(error);
	}
	const options = {
		center: new kakao.maps.LatLng(school.lat, school.lng),
		level: 5
	};
	const map = new kakao.maps.Map(containerBig, options);
	try{
		const markers_text = map__whole.dataset.locations;
		const markers = JSON.parse(markers_text);
		for(let i = 0; i < markers.length; i++){
			const location = new kakao.maps.LatLng(markers[i].lat, markers[i].lng);
			const imageSize = new kakao.maps.Size(24, 35);
			const markerImage = new kakao.maps.MarkerImage(markerImg, imageSize);
			const marker = new kakao.maps.Marker({
				map: map,
				position:location,
				title : markers[i].name, 
				image : markerImage
			});
			console.log(marker, "marker");
			var iwContent = `<div style='padding: 5px;'>${markers[i].name}</div>`, 
    		iwPosition = location,
    		iwRemoveable = true;

			var infowindow = new kakao.maps.InfoWindow({
				map: map, // 인포윈도우가 표시될 지도
				position : iwPosition, 
				content : iwContent,
				removable : iwRemoveable
			});
		}
	}catch(error){
		console.log(error);
	}
}
