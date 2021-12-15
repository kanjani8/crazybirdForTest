const container = document.getElementById('map');
const containerBig = document.getElementById('map__whole');
const markers_text = document.getElementById('markers');
const markerImg ="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";


if(container){
	const location = new kakao.maps.LatLng(37.5915464, 127.02127);
	const options = {
		center: location,
		level: 5
    };
	const map = new kakao.maps.Map(container, options);
	const iwContent = "공부할 장소 추천", 
	iwPosition = location,
	iwRemoveable = true;

	var infowindow = new kakao.maps.InfoWindow({
		map: map,
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
else if(containerBig){
	const options = {
		center: new kakao.maps.LatLng(37.5915464, 127.02127),
		level: 5
	};
	const map = new kakao.maps.Map(containerBig, options);
	try{
		const markers = JSON.parse(markers_text.textContent);
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
			var iwContent = markers[i].name, 
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