import { useEffect } from "react";

const { kakao } = window;

const CategoryMap = () => {

  useEffect(() => {

    // 마커를 클릭하면 장소명을 표출할 인포 윈도우
    const infowindow = new kakao.maps.InfoWindow({zIndex:1});
    const mapContainer = document.getElementById('map2'); // 지도를 표시할 div
    const mapOption = {
      center: new kakao.maps.LatLng(37.580088584028154, 126.99324132440597), // 지도의 중심좌표
      level:5
    }
    const map2 = new kakao.maps.Map(mapContainer, mapOption); 
    const ps2 = new kakao.maps.services.Places(map2); 

    ps2.categorySearch('HP8', placesSearchCB, {useMapBounds:true});

    // 키워드 검색 완료 시 호출되는 콜백함수
    function placesSearchCB (data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {

          for (let i=0; i<data.length; i++) {
              displayMarker(data[i]);
          }
      }
    }

  // 지도에 마커를 표시하는 함수
  function displayMarker(place) {
    // 마커를 생성하고 지도에 표시
    const marker = new kakao.maps.Marker({
        map: map2,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map2, marker);
    });
  }

  })

  return (
    <>
      <div id="map2" style={{width:'800px', height:'500px'}}></div>
    </>
  );
}

export default CategoryMap;