import { useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import styles from "./ReportModal.module.scss";

const ReportModal = ({ onClose }) => {
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
          <span>흡연구역을 제보해주세요 :D</span>
          <button className={styles.closeButton} onClick={onClose}>
            X
          </button>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputWrap}>
            <label className={styles.inputLabel} htmlFor="location">
              위치
            </label>
            <input
              className={styles.input}
              type="text"
              id="location"
              placeholder="알기 쉽게 위치를 설명해주세요. (ex. 건물 뒤 편 주차장)"
              required
            />
          </div>

          <div className={styles.inputWrap}>
            <label className={styles.inputLabel} htmlFor="address">
              주소
            </label>
            <input
              className={styles.input}
              type="text"
              id="address"
              placeholder="주소를 입력하세요"
              required
            />
          </div>

          <div className={styles.inputWrap}>
            <label className={styles.inputLabel} htmlFor="option1">
              형태
            </label>

            <div className={styles.radioWrap}>
              <label className={styles.radioLabel}>
                <input
                  className={styles.radioInput}
                  type="radio"
                  id="option1"
                  name="reportOption"
                  value="option1"
                  required
                />
                개방형
              </label>
              <label className={styles.radioLabel}>
                <input
                  className={styles.radioInput}
                  type="radio"
                  id="option2"
                  name="reportOption"
                  value="option2"
                />
                폐쇄(밀폐)형
              </label>
              <label className={styles.radioLabel}>
                <input
                  className={styles.radioInput}
                  type="radio"
                  id="option3"
                  name="reportOption"
                  value="option3"
                />
                부분개방형
              </label>
            </div>
          </div>

          <button className={styles.submitButton} type="submit">
            제출하기
          </button>
        </form>
      </motion.div>
    </div>
  );
};

ReportModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ReportModal;
