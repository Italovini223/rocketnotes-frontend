import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 144px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 124px;

    button {
      background: none;
      border: none;
    }

    svg {
      font-size: 24px;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;

  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  width: 186px;
  height: 186px;

  position: relative;
  margin: -124px auto 32px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    width: 48px;
    height: 48px;

    border-radius: 50%;

    background-color: ${({theme}) => theme.COLORS.ORANGE};

    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;

      color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    }

    input {
      display: none;
    }
  }
`;