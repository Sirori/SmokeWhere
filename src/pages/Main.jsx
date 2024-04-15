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

import { collection, getDocs, addDoc } from "firebase/firestore";
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

  //----------------
  // const [test, setTest] = useState();

  async function getDocuments() {
    const querySnapshot = await getDocs(collection(db, "AroundArea"));
    // console.log(querySnapshot.docs);
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => `, doc.data()); // doc.data()를 별도의 인자로 전달
    // });
    const allData = querySnapshot.docs.map((doc) => doc.data()); // 각 문서의 데이터를 allData 배열에 모음
    console.log(allData); // 모든 문서의 데이터를 담은 배열을 출력
  }

  // async function addDocument() {
  //   try {
  //     const docRef = await addDoc(collection(db, "your_collection_name"), {
  //       your_field: "your_value",
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }

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
