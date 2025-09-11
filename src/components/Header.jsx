import { useState } from "react";
import InquireModal from "./modal/InquireModal";
import InfoModal from "./modal/InfoModal";
import styles from "./Header.module.scss";

function Header() {
  const [isInquireModalOpen, setIsInquireModalOpen] = useState(false); // 모달창 상태 관리
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false); // 모달창 상태 관리

  const toggleInquireModal = () => {
    setIsInquireModalOpen(!isInquireModalOpen);
  };

  const toggleInfoModal = () => {
    setIsInfoModalOpen(!isInfoModalOpen);
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
        {/* <button
          className={styles.infoButton}
          
        ></button> */}
        <button className={styles.refreshButton}></button>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.headerBox}>
          <input className={styles.searchInput} placeholder="장소 검색하기" />
          <button className={styles.searchButton}></button>
        </div>
        <button className={styles.reportButton}></button>
        <button
          className={styles.csButton}
          onClick={toggleInquireModal}
        ></button>
      </div>
      {isInquireModalOpen && <InquireModal onClose={toggleInquireModal} />}
      {isInfoModalOpen && <InfoModal onClose={toggleInfoModal} />}
    </div>
  );
}

export default Header;
