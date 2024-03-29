import { useEffect, useState } from "react";

const { kakao } = window;

const KeywordMarkMap = () => {
  const [placeName, setPlaceName] = useState(['한양여자대학교']);

  useEffect(() => {
    setPlaceName(placeName);

    // 마커를 클릭하면 장소명을 표출할 인포 윈도우
    const infowindow = new kakao.maps.InfoWindow({zIndex:1});
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.54699, 127.09598),
      levle:3
    };
    const map4 = new kakao.maps.Map(container, options);

    let count = 0;

    const ps = new kakao.maps.services.Places();
    const bounds = new kakao.maps.LatLngBounds();

    const keywordSearch = async (keyword) => {
      ps.keywordSearch(keyword,placesSearchCB);
      count = count + 1;
    }
  
    if(placeName !== null){
      keywordSearch(placeName); 
    } 

    // 키워드 검색 완료 시 호출되는 콜백 함수
    function placesSearchCB(data,status,pagination){
      if(status === kakao.maps.services.Status.OK){
        displayMarker(data[0]);

        bounds.extend(new kakao.maps.LatLng(data[0].y, data[0].x));

        if(count !== placeName.length ){
          keywordSearch(placeName);
        } else if(count === placeName.length) {
          setBounds();
        }
      }
    }

    // 검색 후 첫번째 값의 장소 마크하는 함수
    function displayMarker(place){
      var marker = new kakao.maps.Marker({
        map:map4,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
      
    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출
      infowindow.setContent(`<div style="padding:5px;font-size:12px;">${place.place_name}
      <a href=https://map.kakao.com/link/search/${placeName}>길찾기 바로가기</a>
      </div>`);
      infowindow.open(map4, marker);
  });
    }

    // 범위를 재설정 하는 함수
    function setBounds(){
      map4.setBounds(bounds,90,30,10,30);
    }

  },[placeName])

  return (
    <div id="map4" style={{width:'500px', height:'500px'}}>
    </div>
  );

};

export default KeywordMarkMap;
