import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  
`;

export const WrapperProfile = styled.div`
  display: block;
  align-items: flex-start;
  width: 400px;
  h1 {
      font-size: 24px;
      font-weight: bold;
  }

  h4 {
      font-size: 14px;
      font-weight: bold;
  }
`;

export const WrapperProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  /* margin-bottom: -20px; */
`;

export const WrapperProfileInformations = styled.div`
  display: inline-grid;
  grid-template-columns: 80px;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

export const WrapperProfileUsername = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  margin-top: 0px;
  width: 400px;
  /* margin-bottom: -20px; */
`;

export const WrapperUser = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  width: 400px;
  /* margin-bottom: -40px */
`;

export const WrapperCreatedAt = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 12px;
  color: #3D5A80;
`;