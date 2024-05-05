import React from 'react'
import styled from 'styled-components';

const Background = styled.div`
    background: #F7E8DD;
    width: 100vw;        // 화면 전체 너비
    height: 100vh;       // 화면 전체 높이
    position: fixed;     // 위치 고정
    top: 0;
    left: 0;
`;

function SellerHome() {
  return (
    <Background>
      민재 페이지
    </Background>
  )
}

export default SellerHome
