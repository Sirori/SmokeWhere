import { useEffect, useRef } from "react";
import styles from "./map.module.scss";

function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    const naverMapClientId = "ohhshbpf1r";

    // 네이버 지도 스크립트 로드
    if (!document.querySelector("#naver-map-script")) {
      const script = document.createElement("script");
      script.id = "naver-map-script";
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${naverMapClientId}`;
      script.async = true;
      script.onload = () => {
        // 지도 초기화
        if (window.naver && mapRef.current) {
          const map = new window.naver.maps.Map(mapRef.current, {
            center: new window.naver.maps.LatLng(37.5666103, 126.9783882),
            zoom: 15,
          });

          // 마커 추가
          new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(37.5666103, 126.9783882),
            map: map,
          });
        }
      };
      script.onerror = () => {
        console.error("Naver Map SDK 로드 실패 ❌");
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      <div ref={mapRef} className={styles.mapDiv} />
    </>
  );
}

export default Map;
