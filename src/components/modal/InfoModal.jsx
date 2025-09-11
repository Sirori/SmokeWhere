import { useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import styles from "./InfoModal.module.scss";

const InfoModal = ({ onClose }) => {
  useEffect(() => {
    // 모달창이 열릴 때 body의 overflow를 hidden으로 설정
    document.body.style.overflow = "hidden";

    // 컴포넌트가 언마운트될 때 실행될 클린업 함수
    return () => {
      // 모달창이 닫힐 때 body의 overflow를 원래대로 복원
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <motion.div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.content}>
          <h3>About SmokeWhere</h3>
          <p>흡연구역 정보를 제공하는 서비스입니다.</p>
          <p>주변 흡연구역을 찾아보고</p>
          <p>새로운 흡연구역을 제보할 수 있습니다.</p>
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          확인
        </button>
      </motion.div>
    </div>
  );
};

InfoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default InfoModal;
