import Header from "@/components/Header";
import React from "react";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
  InfoWindow,
} from "react-naver-maps";
import GlobalStyle from "@/components/GlobalStyle";
import ReportModal from "@/components/modal/ReportModal";
import Map from "./../components/Map";

import {
  getDatabase,
  ref,
  query,
  orderByChild,
  equalTo,
  limitToFirst,
  get,
} from "firebase/database";

import db from "@/firebase.js";

const MainTopContainer = styled.div`
  width: 100%;
  padding: 2% 5%;

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const MainBottomContainer = styled.div`
  position: relative;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  @media (max-width: 480px) {
    display: none;
  }
`;

const ListWrap = styled.ul`
  padding: 0 25px 0 25px;
  margin-bottom: 15rem;
`;

const MainList = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 3px black solid;
  padding-bottom: 3px;
  font-weight: 900;
  font-size: 1.2rem;
`;

const ItemList = styled.li`
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  border-bottom: 2px gray solid;
  padding-top: 1rem;
  padding-bottom: 1rem;

  font-weight: 600;
  font-size: 1.1rem;
`;

const ListSpan = styled.span`
  flex: 1;
  text-align: center;
`;

const AroundArea = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 900;

  padding: 1rem 1rem 1rem 1rem;
`;

const ReportButton = styled.button`
  position: absolute;
  top: 0;
  right: 1rem;
  background-color: #ff9700;
  border: 0;
  border-radius: 10px;
  color: white;
  padding: 7px 7px 7px 7px;
  font-size: 1.1rem;
  cursor: pointer;
`;

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달창 상태 관리

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // async function getDocuments() {
  //   const db = getDatabase(); // Realtime Database 인스턴스를 가져옵니다.
  //   const dbRef = ref(db, "aroundArea"); // 'AroundArea' 경로에 대한 참조를 생성합니다.

  //   try {
  //     const snapshot = await get(dbRef); // 해당 경로의 데이터 스냅샷을 가져옵니다.
  //     if (snapshot.exists()) {
  //       const allData = []; // 모든 문서의 데이터를 담을 배열을 초기화합니다.
  //       snapshot.forEach((childSnapshot) => {
  //         // 각 자식 노드에 대해 반복
  //         const data = childSnapshot.val(); // 자식 노드의 데이터를 가져옵니다.
  //         allData.push(data); // 가져온 데이터를 allData 배열에 추가합니다.
  //       });
  //       console.log(allData); // 모든 문서의 데이터를 담은 배열을 출력합니다.
  //     } else {
  //       console.log("No data available");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async function getDocuments() {
    const db = getDatabase(); // Realtime Database 인스턴스를 가져옵니다.
    const dbRef = ref(db, "aroundArea"); // 'aroundArea' 경로에 대한 참조를 생성합니다.

    try {
      // 'gu' 필드가 '중원구'이고, 처음 10개의 데이터만 가져오는 쿼리를 생성합니다.
      const filteredQuery = query(
        dbRef,
        orderByChild("gu"),
        equalTo("서초구"),
        limitToFirst(10)
      );
      const snapshot = await get(filteredQuery); // 쿼리 결과의 데이터 스냅샷을 가져옵니다.

      if (snapshot.exists()) {
        const allData = []; // 조건에 맞는 문서의 데이터를 담을 배열을 초기화합니다.
        snapshot.forEach((childSnapshot) => {
          // 각 자식 노드에 대해 반복
          const data = childSnapshot.val(); // 자식 노드의 데이터를 가져옵니다.
          allData.push(data); // 가져온 데이터를 allData 배열에 추가합니다.
        });
        console.log(allData); // 조건에 맞는 모든 문서의 데이터를 담은 배열을 출력합니다.
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error(error);
    }
  }

  // 최초 마운트 시에 getTest import
  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <MainTopContainer>
        <Map />
      </MainTopContainer>
      <MainBottomContainer>
        <AroundArea>내 주변 흡연구역</AroundArea>
        <ReportButton onClick={toggleModal}>+ 흡연구역 제보하기</ReportButton>
        {isModalOpen && <ReportModal onClose={toggleModal} />}{" "}
        <ListWrap>
          <MainList>
            <ListSpan>위치</ListSpan>
            <ListSpan>형태</ListSpan>
            <ListSpan>주소</ListSpan>
          </MainList>
          <ItemList>
            <ListSpan>왕십리광장 (북측)</ListSpan>
            <ListSpan>개방형</ListSpan>
            <ListSpan>서울 성동구 행당동 192-3</ListSpan>
          </ItemList>
          <ItemList>
            <ListSpan>왕십리민자역사 후면(6번 출구)</ListSpan>
            <ListSpan>개방형</ListSpan>
            <ListSpan>서울 성동구 행당동 1-137</ListSpan>
          </ItemList>
          <ItemList>
            <ListSpan>성수역 2번 출구 후면</ListSpan>
            <ListSpan>개방형</ListSpan>
            <ListSpan>서울 성동구 성수동 2가</ListSpan>
          </ItemList>
        </ListWrap>
      </MainBottomContainer>
    </>
  );
}

export default Main;
