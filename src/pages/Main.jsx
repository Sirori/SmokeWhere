import React, { useState } from "react";
import Header from "../components/Header";
import GlobalStyle from "../components/GlobalStyle";
import ReportModal from "../components/modal/ReportModal";
import Map from "../components/Map";
import styles from "./Main.module.scss";
import AreaList from "../components/main/AreaList";
import CommonButton from "../components/common/CommonButton";

function Main() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false); // 모달창 상태 관리

  const toggleReportModal = () => {
    setIsReportModalOpen(!isReportModalOpen);
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
        <CommonButton
          onClick={toggleReportModal}
          className={styles.reportButton}
        >
          + 흡연구역 제보하기
        </CommonButton>
        {isReportModalOpen && <ReportModal onClose={toggleReportModal} />}
        <AreaList />
      </div>
    </>
  );
}

export default Main;
