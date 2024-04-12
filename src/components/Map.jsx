import { useEffect, useRef, useState } from "react";
import {
	Container as MapDiv,
	NaverMap,
	Marker,
	useNavermaps,
	InfoWindow,
} from "react-naver-maps";
import S from "./map.module.css";

function Map() {
	return (
		<>
			<MapDiv className={S.mapDiv}>
				<NaverMap>
					<Marker defaultPosition={{ lat: 37.5666103, lng: 126.9783882 }} />
				</NaverMap>
			</MapDiv>
		</>
	);
}

export default Map;
