import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 24px;
  align-items: center;
  background-color: #000;

  .username {
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 30%;
      height: 32px;
      margin: 0 16px;
      padding: 8px;
      background-color: #fff
  }

  button {
      background-color: #1DA1F2;
      width: 10%;
      padding: 8px 16px;
      border-radius: 4px;
      text-align: center;
      font-weight: bold;
      height: 32px;
      color: #fff;
      

      &:hover {
        background-color: #00B2FF;
          box-shadow: 2px 3px 10px rgb(0, 0, 0, 0.2)
      }
  }

`;

export const WrapperLogoImage = styled.img`
  width: 150px;
  justify-content: flex-end;
  margin-left: 40%;
`;
