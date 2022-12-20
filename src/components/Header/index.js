import react, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "../Button";

import Title from '../Title';

import { ThemeContext } from "../../context/ThemeContext";

const Title = styled.h1`
  color: #637BF3;
`;

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      {props.children}
    </>
  );
}

Header.PropTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};
