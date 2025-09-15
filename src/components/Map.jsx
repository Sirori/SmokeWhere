import React, { useEffect, useRef } from "react";
import useGeolocation from "../hooks/useGeolocation";
import {
  getDatabase,
  ref,
  query,
  orderByChild,
  equalTo,
  limitToFirst,
  get,
} from "firebase/database";
import styles from "./map.module.scss";

function Map() {
  const mapRef = useRef(null);
  const { naver } = window;
  const { currentMyLocation } = useGeolocation();
  const markerContent = `<div class="marker-content" style="width: 16px;"><img src="/assets/marker.svg" alt="marker" /></div>`;

  useEffect(() => {
    if (currentMyLocation.lat !== 0 && currentMyLocation.lng !== 0) {
      // 네이버 지도 옵션 선택
      const mapOptions = {
        // 지도의 초기 중심 좌표
        center: new naver.maps.LatLng(
          currentMyLocation.lat,
          currentMyLocation.lng
        ),
        logoControl: false, // 네이버 로고 표시 X
        mapDataControl: false, // 지도 데이터 저작권 컨트롤 표시 X
        scaleControl: true, // 지도 축척 컨트롤의 표시 여부
        tileDuration: 200, // 지도 타일을 전환할 때 페이드 인 효과의 지속 시간(밀리초)
        zoom: 16, // 지도의 초기 줌 레벨
        zoomControl: true, // 줌 컨트롤 표시
        zoomControlOptions: { position: naver.maps.Position.RIGHT_CENTER }, // 줌 컨트롤 우하단에 배치
      };
      mapRef.current = new naver.maps.Map("map", mapOptions);

      // 현재 내 위치 마커 표시
      new naver.maps.Marker({
        // 생성될 마커의 위치
        position: new naver.maps.LatLng(
          currentMyLocation.lat,
          currentMyLocation.lng
        ),
        // 마커를 표시할 Map 객체
        map: mapRef.current,
        icon: {
          content: markerContent,
        },
      });
    }
  }, [currentMyLocation]);

  return (
    <>
      <div id="map" className={styles.mapDiv} />
    </>
  );
}

export default Map;
