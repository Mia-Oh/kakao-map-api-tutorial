import { useEffect } from "react";

const { kakao } = window;

function Map() {

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      levle:3
    };
    const map = new kakao.maps.Map(container, options);
    console.log(map)
  }, [])


  return (
    <div id="map" style={{width:'500px', height:'500px'}}>
    </div>
  );
}

export default Map;