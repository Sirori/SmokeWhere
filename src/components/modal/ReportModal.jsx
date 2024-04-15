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
  /* overflow: auto; */

  @media(max-width: 480px){
    width: 85%;
    height: 90%;
  }
`;

const ModalHeader = styled.div`
  position: relative;
  background-color: #ff9700;
  padding: 15px 15px 15px 15px;
  color: white;
  font-size: larger;
  font-weight: bold;
  &::after {
    content: "흡연구역을 제보해주세요:D";
  }

  @media(max-width: 480px){
    font-size: 1.25rem;
    padding: 3% 4%;
    &::after {
      font-weight: medium;
      content: "흡연구역 제보";
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  /* top: 1; */
  right: 0;

  /* transform: translateY(1%); */
  /* width: 2rem;
  height: 2rem; */
  margin-right: 15px;
  font-size: x-large;
  color: white;
  background-color: #ff9700;
  border: 0;
  cursor: pointer;

  @media(max-width: 480px){
    margin-right: 3%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media(max-width: 480px){
    padding: 4%;
  }
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 0;
  border-bottom: 2px solid black;

  @media(max-width: 480px){
    padding: 3%;
    margin: 2% 0 3% 0;
  }
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

  @media(max-width: 480px){
    margin-top: 4%;
    font-size: 1.1rem;
  }
`;

// 라디오 버튼을 위한 스타일 컴포넌트 추가
const RadioWrap = styled.div`

  display: flex;
  margin-top: 2rem;
  margin-bottom: 8rem;
  flex-direction: row;
  justify-content: space-around;
  /* gap: 5rem; */
  /* margin: 20px 0; */

  @media(max-width: 480px){
    margin-top: 3%;
    margin-bottom: 10%;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

// 라디오 버튼 라벨을 위한 스타일 컴포넌트 추가
const RadioLabel = styled.label`
  /* margin-right: 20px; */
  font-size: 1.1rem;
  font-weight: 600;
  /* width: 2rem; */

  @media(max-width: 480px){
    width: 50%;
    margin-top: 1%;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const RadioInput = styled.input`
  /* width: 2rem; */

  @media(max-width: 480px){
    margin: 0;
    margin-right: 4%;
  }
`;

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
		<ModalOverlay onClick={onClose}>
			<ModalContainer
				onClick={(e) => e.stopPropagation()}
				initial={{ y: 100, opacity: 0 }} // 초기 위치와 투명도 설정
				animate={{ y: 0, opacity: 1 }} // 최종 위치와 투명도 설정
				transition={{ duration: 0.3 }}
			>
				<ModalHeader>
					<CloseButton onClick={onClose}>X</CloseButton>
				</ModalHeader>
				<Form onSubmit={handleSubmit}>
					<InputWrap>
						<InputLabel htmlFor="location">위치</InputLabel>
						<Input
							type="text"
							id="location"
							placeholder="위치를 알려주세요"
							required
						/>
					</InputWrap>

					<InputWrap>
						<InputLabel htmlFor="address">주소</InputLabel>
						<Input
							type="text"
							id="address"
							placeholder="주소를 입력하세요"
							required
						/>
					</InputWrap>

					<InputWrap>
						<InputLabel htmlFor="option1">형태</InputLabel>

						<RadioWrap>
							<RadioLabel>
								<RadioInput
									type="radio"
									id="option1"
									name="reportOption"
									value="option1"
									required
								/>
								개방형
							</RadioLabel>
							<RadioLabel>
								<RadioInput
									type="radio"
									id="option2"
									name="reportOption"
									value="option2"
								/>
								폐쇄(밀폐)형
							</RadioLabel>
							<RadioLabel>
								<RadioInput
									type="radio"
									id="option3"
									name="reportOption"
									value="option3"
								/>
								부분개방형
							</RadioLabel>
						</RadioWrap>
					</InputWrap>

					<SubmitButton type="submit">제출하기</SubmitButton>
				</Form>
			</ModalContainer>
		</ModalOverlay>
	);
};

export default ReportModal;
