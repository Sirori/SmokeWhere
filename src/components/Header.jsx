import styled from "styled-components";
import SmokeWhere from "@/assets/smokeWhere.svg";
import info from "@/assets/info_w.svg";
import cs from "@/assets/cs_w.svg";
import search from "@/assets/search_w.svg";

import React, { useState } from "react";
import InquireModal from "./modal/InquireModal";
import ReportModal from "./modal/ReportModal";
import searchB from "@/assets/search.svg";
import report from "@/assets/plus.svg";
import refresh from "@/assets/refresh.svg";
// import styled from 'styled-components/native';

const HeaderContainer = styled.div`
  background-color: #ff9700;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  justify-content: space-between;
  z-index: 10;

  @media (max-width: 1024px) {
    padding-left: 2%;
    padding-right: 2%;
  }

  @media (max-width: 480px) {
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 10vh;
    z-index: 5;
    padding-left: 4%;
    padding-right: 4%;
  }
`;

const HeaderTitle = styled.h1`
  font-family: "Noto Sans KR";
  color: white;
  font-size: 1.5rem;

  @media (max-width: 1024px) {
    font-weight: regular;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    font-weight: regular;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const HeaderWrap1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 1024px) {
    gap: 4%;
  }

  @media (max-width: 480px) {
    width: 30%;
    gap: 0;
    justify-content: space-between;
  }
`;

const HeaderWrap2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 2rem;
`;

const HeaderWrap3 = styled.div`
  width: 15rem;
  position: relative;
  /* height: 2.1rem; */
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    width: 10rem;
  }

  @media (max-width: 480px) {
    position: fixed;
    top: 2%;
    left: 5%;
    width: 90vw;
    height: 7vh;
    background: white;
    justify-content: flex-end;
    border: 2px solid #ccc;
    border-radius: 10px;
  }
`;

const SmokeImg = styled.img`
  background: #fff;
  @media (max-width: 1920px) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const InfoButton = styled.button`
  background: url(${info}) center no-repeat;
  background-color: #ff9700;
  width: 2rem;
  height: 2rem;
  border: 0px;
  cursor: pointer;
`;

const ReportButton = styled.button`
  display: none;
  @media (max-width: 480px) {
    display: block;
    background: url(${report}) center no-repeat;
    width: 2rem;
    height: 2rem;
    border: 0;
    padding: 7px 7px 7px 7px;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

const CsButton = styled.button`
  background-image: url(${cs});
  background-color: #ff9700;

  border: 0;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;

  cursor: pointer;
`;

const SearchInput = styled.input`
  background-color: #ff9700;
  width: 15rem;
  height: 2rem;
  color: white;
  font-size: larger;
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
  border: 0px;
  border-bottom: 2px solid white;
  height: 1.5rem;
  /* padding: 10px; */
  /* padding-top: 3rem; */
  &::placeholder {
    border: 0px;
    color: white;
    padding-left: 4.5rem;
  }
  &:focus {
    outline: 1px solid white;
  }

  @media (max-width: 1024px) {
    font-size: 1.25rem;
    border-bottom: 1.5px solid white;
  }

  @media (max-width: 768px) {
    width: 10rem;
    font-size: 1rem;
    color: black;
    padding-left: 5%;
    &::placeholder {
      padding-left: 0;
    }
    &:focus {
      outline: none;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    background: white;
    font-size: 1.3rem;
    &::placeholder {
      color: #aaa;
      padding-left: 3%;
    }
  }
`;

const SearchButton = styled.button`
  position: absolute;
  background-color: #ff9700;
  background-image: url(${search});
  background-repeat: no-repeat;
  border: 0px;
  width: 1.6rem;
  height: 1.6rem;
  top: 50%; /* 부모 컨테이너의 상단으로부터 50% 위치 */
  right: 0%; /* 오른쪽 가장자리로부터 1rem 떨어진 위치 */
  transform: translateY(
    -50%
  ); /* Y축 기준으로 자신의 크기의 -50% 만큼 이동하여 세로 중앙 정렬 */
  cursor: pointer;

  @media (max-width: 768px) {
    width: 1.4rem;
    height: 1.4rem;
  }

  @media (max-width: 480px) {
    background-color: transparent;
    background-image: url(${searchB});
    right: 3%;
  }
`;

const RefreshButton = styled.button`
  display: none;
  @media (max-width: 480px) {
    display: block;
    background: url(${refresh}) center no-repeat;
    width: 2rem;
    height: 2rem;
    border: none;
    cursor: pointer;
  }
`;

function Header() {
	const [isReportModalOpen, setIsReportModalOpen] = useState(false);
	const [isInquireModalOpen, setIsInquireModalOpen] = useState(false);

	const openReportModal = () => {
		setIsReportModalOpen(true);
	};

	const closeReportModal = () => {
		setIsReportModalOpen(false);
	};

	const openInquireModal = () => {
		setIsInquireModalOpen(true);
	};

	const closeInquireModal = () => {
		setIsInquireModalOpen(false);
	};
	return (
		<HeaderContainer>
			<HeaderWrap1>
				<SmokeImg src={SmokeWhere}></SmokeImg>
				<HeaderTitle>SmokeWhere</HeaderTitle> {/* 텍스트 추가 */}
				<InfoButton></InfoButton>
				<RefreshButton />
			</HeaderWrap1>
			<HeaderWrap2>
				<HeaderWrap3>
					<SearchInput placeholder="장소 검색하기" />
					<SearchButton></SearchButton>
				</HeaderWrap3>
				<ReportButton onClick={openReportModal} />
				<CsButton onClick={openInquireModal}></CsButton>
			</HeaderWrap2>
			{isReportModalOpen && <ReportModal onClose={closeReportModal} />}
			{isInquireModalOpen && <InquireModal onClose={closeInquireModal} />}
		</HeaderContainer>
	);
}

export default Header;
