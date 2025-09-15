import React, { useState } from "react";
import InquireModal from "./modal/InquireModal";
import InfoModal from "./modal/InfoModal";
import ReportModal from "./modal/ReportModal";
import CommonButton from "./common/CommonButton";

import styles from "./Header.module.scss";

function Header() {
  const [isInquireModalOpen, setIsInquireModalOpen] = useState(false); // 모달창 상태 관리
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false); // 모달창 상태 관리
  const [isReportModalOpen, setIsReportModalOpen] = useState(false); // 모달창 상태 관리

  const toggleInquireModal = () => {
    setIsInquireModalOpen(!isInquireModalOpen);
  };

  const toggleInfoModal = () => {
    setIsInfoModalOpen(!isInfoModalOpen);
  };

  const toggleReportModal = () => {
    setIsReportModalOpen(!isReportModalOpen);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <img
          className={styles.smokeImg}
          src="/assets/smokeWhere.svg"
          alt="SmokeWhere"
          onClick={toggleInfoModal}
        />
        <h1 className={styles.headerTitle}>SmokeWhere</h1>
        <CommonButton className={styles.refreshButton}>
          <img src="/assets/refresh.svg" alt="refresh" />
        </CommonButton>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.headerBox}>
          <input
            id="searchInput"
            className={styles.searchInput}
            placeholder="장소 검색하기"
          />
          <CommonButton className={styles.searchButton}>
            <img
              className={styles.searchIconPc}
              src="/assets/search_w.svg"
              alt="search"
            />
            <img
              className={styles.searchIconMob}
              src="/assets/search.svg"
              alt="search"
            />
          </CommonButton>
        </div>
        <CommonButton
          className={styles.reportButton}
          onClick={toggleReportModal}
        >
          <img src="/assets/plus.svg" alt="plus" />
        </CommonButton>
        <CommonButton onClick={toggleInquireModal} className={styles.csButton}>
          <img src="/assets/cs_w.svg" alt="cs" />
        </CommonButton>
      </div>
      {isInquireModalOpen && <InquireModal onClose={toggleInquireModal} />}
      {isInfoModalOpen && <InfoModal onClose={toggleInfoModal} />}
      {isReportModalOpen && <ReportModal onClose={toggleReportModal} />}
    </div>
  );
}

export default Header;
