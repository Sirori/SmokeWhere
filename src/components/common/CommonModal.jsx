import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import styles from "./CommonModal.module.scss";

const CommonModal = ({ onClose, contentTitle, content }) => {
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
        <div className={styles.modalHeader}>
          <span>{contentTitle}</span>
          <button className={styles.closeButton} onClick={onClose}>
            X
          </button>
        </div>
        <div className={styles.modalContent}>{content}</div>
      </motion.div>
    </div>
  );
};

CommonModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  contentTitle: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default CommonModal;
