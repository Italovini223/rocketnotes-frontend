import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: stretch;

`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-top: 84px;
    margin-bottom: 24px;
  }

  > P {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  > a {
    text-decoration: none;
    color: ${({theme}) => theme.COLORS.ORANGE};
    margin-top: 124PX;
  }
`;