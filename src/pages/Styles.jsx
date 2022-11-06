import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
`;

export const Heading = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 28px;
  margin-bottom: 10px;
`;

export const InputField = styled.input`
  display: flex;
  font-size: 16px;
  padding: 15px 10px;
  width: 30%;
  background-color: transparent;
  margin-bottom: 10px;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Button = styled.button`
  color: white;
  background-color: #0275d8;
  text-transform: uppercase;
  font-size: 14px;
  border: none;
  font-weight: bold;
  padding: 10px;
  width: 32%;
  @media (max-width: 768px) {
    width: 94%;
  }
  cursor: pointer;
  &:hover {
    background-color: #2c528c;
  }
`;

export const Lock = styled.img`
  background-color: #dfdfdf;
  padding: 10px;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
