import styled from "styled-components";

export const Nav = styled.nav`
  background: #000;
  margin-top: 160px;
  padding: 16px;
  border-radius: 4pc;

  a {
    color: #fff;
    text-decoration: nome;
    display: inline-block;

    & + a {
      margin-left: 16px;
    }
  }
`;
