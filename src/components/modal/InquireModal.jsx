import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 50%;
  height: 90%;
`;

const ModalHeader = styled.div`
  position: relative;
  background-color: #ff9700;
  padding: 15px 15px 15px 15px;
  color: white;
  font-size: larger;
  font-weight: bold;
`;

const CloseButton = styled.button`
  position: absolute;
  /* top: 1; */
  right: 0;

  margin-right: 15px;
  font-size: x-large;
  color: white;
  background-color: #ff9700;
  border: 0;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 0;
  border-bottom: 2px solid black;
`;

const TextArea = styled.textarea`
  margin: 20px 0;
  padding: 10px;
  width: 100%;
  height: 20rem;
`;

const SubmitButton = styled.button`
  /* margin-top: 20px; */
  /* margin-bottom: 50px; */
  margin-bottom: 100px;
  padding: 7px 25px;
  cursor: pointer;

  background-color: #ff9700;
  /* font-weight: bolder; */
  border: 0;
  color: white;
  border-radius: 5px;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const InputLabel = styled.label`
  width: 100%;
  text-align: left;
  /* margin-left: 4.5rem; */
  font-size: large;
  font-weight: bold;
  margin-top: 1.5rem;
`;

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
    <ModalOverlay onClick={onClose}>
      <ModalContainer
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 100, opacity: 0 }} // 초기 위치와 투명도 설정
        animate={{ y: 0, opacity: 1 }} // 최종 위치와 투명도 설정
        transition={{ duration: 0.3 }}
      >
        <ModalHeader>
          <span>문의사항을 남겨주세요 :D</span>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <InputWrap>
            <InputLabel htmlFor="title">제목</InputLabel>
            <Input
              type="text"
              id="title"
              placeholder="제목을 입력하세요"
              required
            />
          </InputWrap>

          <InputWrap>
            <InputLabel htmlFor="inquire">문의사항</InputLabel>
            <TextArea
              placeholder="문의사항을 적어주세요"
              id="inquire"
              required
            />
          </InputWrap>
          <SubmitButton type="submit">제출하기</SubmitButton>
        </Form>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default InquireModal;
