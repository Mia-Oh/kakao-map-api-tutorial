import { useEffect, useState } from "react";

const { kakao } = window;

function SearchMap() {

  const [mapInfo, setMapInfo] = useState({}); // 지도의 위도, 경도
  const [placeName, setPlaceName] = useState('카카오판교오피스')

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      levle:3
    };
    const map = new kakao.maps.Map(container, options);
    console.log(map,setPlaceName) 
    setMapInfo(options.center)
  }, [])
 

  return (
    <>
        <a href={`https://map.kakao.com/link/map/${placeName},${mapInfo.Ma},${mapInfo.La}`}>지도 바로가기</a>
    </>
  );
}

export default SearchMap;