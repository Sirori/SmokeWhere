import { useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import styles from "./InquireModal.module.scss";

const InquireModal = ({ onClose }) => {
  useEffect(() => {
    // 모달창이 열릴 때 body의 overflow를 hidden으로 설정
    document.body.style.overflow = "hidden";

    // 컴포넌트가 언마운트될 때 실행될 클린업 함수
    return () => {
      // 모달창이 닫힐 때 body의 overflow를 원래대로 복원
      document.body.style.overflow = "";
    };
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에서 입력 데이터 처리
    console.log("제출됨");
    onClose(); // 제출 후 모달 닫기
  };

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
          <span>문의사항을 남겨주세요 :D</span>
          <button className={styles.closeButton} onClick={onClose}>
            X
          </button>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputWrap}>
            <label className={styles.inputLabel} htmlFor="title">
              제목
            </label>
            <input
              className={styles.input}
              type="text"
              id="title"
              placeholder="제목을 입력하세요"
              required
            />
          </div>

          <div className={styles.inputWrap}>
            <label className={styles.inputLabel} htmlFor="inquire">
              문의사항
            </label>
            <textarea
              className={styles.textArea}
              placeholder="문의사항을 적어주세요"
              id="inquire"
              required
            />
          </div>
          <button className={styles.submitButton} type="submit">
            제출하기
          </button>
        </form>
      </motion.div>
    </div>
  );
};

InquireModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default InquireModal;
