import React from 'react';
import styled, { css } from 'styled-components';
import ImageSrc from './logo-small.png';

const Logo = ({ projectName }) => {
  return (
    <Icon isLogin={projectName}>
      <img src={ImageSrc} alt="logo-small" />
    </Icon>
  );
};

const Icon = styled.div`
  display: block;
  width: auto;
  height: 2em;
  max-width: 100%;
  margin: -0.75rem auto;

  ${(props) =>
    props.isLogin &&
    css`
      display: block;
      margin: 0 auto;
      width: 90px;
      height: 90px;
    `}

  img {
    display: block;
    margin: 0 auto;
    height: 100% !important;
    width: auto;
    fill: currentColor;
  }
`;

export default Logo;
