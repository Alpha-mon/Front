import React, { useState } from 'react';
import styled from 'styled-components';

function CTop({ onMenuSelect }) {
    const [selectMenu, setSelectMenu] = useState('홈 화면');

    const handleMenuClick = (menu) => {
        setSelectMenu(menu);
        // 메뉴를 Cmain 컴포넌트로 전달
        onMenuSelect(menu);
    };

    return (
        <Container>
            <Lion onClick={() => handleMenuClick('공격투자형')} isSelected={selectMenu === '공격투자형'}>공격투자형🦁</Lion>
            <Snake onClick={() => handleMenuClick('적극투자형')} isSelected={selectMenu === '적극투자형'}>적극투자형🐍</Snake>
            <Monkey onClick={() => handleMenuClick('위험중립형')} isSelected={selectMenu === '위험중립형'}>위험중립형🐵</Monkey>
            <Sheep onClick={() => handleMenuClick('안정추구형')} isSelected={selectMenu === '안정추구형'}>안정추구형🐏</Sheep>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    width: 386px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 14px;
    background: #F2F2F2;
    font-family: 'Poppins', sans-serif;
    font-size : 10.25px;
    position: absolute;
    top: 126px;
    left: 14px;
    justify-content: space-between;
    align-items: center; 
`;

const Lion = styled.div`
    color: ${props => (props.isSelected ? '#2A64D9' : 'black')};
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left : 20px;
    `;

const Snake = styled.div`
    color: ${props => (props.isSelected ? '#2A64D9' : 'black')};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Monkey = styled.div`
    color: ${props => (props.isSelected ? '#2A64D9' : 'black')};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`;

const Sheep = styled.div`
    color: ${props => (props.isSelected ? '#2A64D9' : 'black')};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`;

export default CTop;