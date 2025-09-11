import Header from "@/components/Header";
import { useState } from "react";
import GlobalStyle from "@/components/GlobalStyle";
import ReportModal from "@/components/modal/ReportModal";
import Map from "./../components/Map";
import styles from "./Main.module.scss";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달창 상태 관리

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <div className={styles.mainTopContainer}>
        <Map />
      </div>
      <div className={styles.mainBottomContainer}>
        <h2 className={styles.aroundArea}>내 주변 흡연구역</h2>
        <button className={styles.reportButton} onClick={toggleModal}>
          + 흡연구역 제보하기
        </button>
        {isModalOpen && <ReportModal onClose={toggleModal} />}{" "}
        <ul className={styles.listWrap}>
          <li className={styles.mainList}>
            <span className={styles.listSpan}>위치</span>
            <span className={styles.listSpan}>형태</span>
            <span className={styles.listSpan}>주소</span>
          </li>
          <li className={styles.itemList}>
            <span className={styles.listSpan}>왕십리광장 (북측)</span>
            <span className={styles.listSpan}>개방형</span>
            <span className={styles.listSpan}>서울 성동구 행당동 192-3</span>
          </li>
          <li className={styles.itemList}>
            <span className={styles.listSpan}>
              왕십리민자역사 후면(6번 출구)
            </span>
            <span className={styles.listSpan}>개방형</span>
            <span className={styles.listSpan}>서울 성동구 행당동 1-137</span>
          </li>
          <li className={styles.itemList}>
            <span className={styles.listSpan}>성수역 2번 출구 후면</span>
            <span className={styles.listSpan}>개방형</span>
            <span className={styles.listSpan}>서울 성동구 성수동 2가</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Main;
