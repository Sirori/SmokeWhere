import styled from "styled-components";
import SmokeWhere from "@/assets/smokeWhere.svg";
import info from "@/assets/info_w.svg";
import cs from "@/assets/cs_w.svg";
import search from "@/assets/search_w.svg";
// import styled from 'styled-components/native';

const HeaderContainer = styled.div`
  background-color: #ff9700;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  min-width: 1024px;
  justify-content: space-between;
  /* width: 100%; */
`;

const HeaderTitle = styled.h1`
  /* width: 200px; */
  /* height: 10px; */ /* 이 줄을 주석 처리하거나 삭제 */
  color: white;
  font-size: 24px;
`;

const HeaderWrap1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
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
`;

const SmokeImg = styled.img`
  background-image: url(${SmokeWhere});
  width: 2rem;
  height: 2rem;
`;

const InfoButton = styled.button`
  background-image: url(${info});
  background-color: #ff9700;
  width: 2rem;
  height: 2rem;
  border: 0px;
  cursor: pointer;
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
  :focus {
    border: 2px solid white;
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
  right: 0.5rem; /* 오른쪽 가장자리로부터 1rem 떨어진 위치 */
  transform: translateY(
    -50%
  ); /* Y축 기준으로 자신의 크기의 -50% 만큼 이동하여 세로 중앙 정렬 */

  cursor: pointer;
`;

function Header() {
  return (
    <HeaderContainer>
      {/* <img src={SmokeWhere} alt="" /> */}
      <HeaderWrap1>
        <SmokeImg></SmokeImg>
        <HeaderTitle>SmokeWhere</HeaderTitle> {/* 텍스트 추가 */}
        <InfoButton></InfoButton>
      </HeaderWrap1>

      <HeaderWrap2>
        <HeaderWrap3>
          <SearchInput placeholder="장소 검색하기" />
          <SearchButton></SearchButton>
        </HeaderWrap3>
        <CsButton></CsButton>
      </HeaderWrap2>
      {/* <input type="text" /> */}
    </HeaderContainer>
  );
}

export default Header;
