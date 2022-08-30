import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 105px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding:0 80px;

  background: red;
`;