import { useEffect, useState } from "react";

const { kakao } = window;

const HospitalMap = () => {
  const [placeName, setPlaceName] = useState(['한양여자대학교']);

  useEffect(() => {
    setPlaceName(placeName);

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
      
      kakao.maps.event.addListener(marker,'click',function(){
        const position = this.getPosition();
        const url = 'https://map.kakao.com/link/map/' + place.id;
        window.open(url, '_blank');
        console.log(position)
 
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

export default HospitalMap;
