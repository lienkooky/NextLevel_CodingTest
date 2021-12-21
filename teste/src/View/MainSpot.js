import React from 'react'
import styled from "styled-components"

const MainSpotContainer = styled.div`
width: 100%;
color: #fff;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
box-sizing: border-box;

.main__face{
    width: 80px;
    height: 80px;
    margin-top: 73px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 200px;
}
.main__name{
    width: 121px;
    margin-top: 12px;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
}
.main__tag{
    list-style: none;
    display: flex;  
    flex-direction: row;
    justify-content: center;
    align-items:center;
    padding-left: 0;
    font-weight: 500;
    margin-top: 8px;
    margin-bottom: 0;
}
.tag1 {  
    width: 84px;
    height: 23px;
    margin-right: 16px;
    padding-left: 0px;
    margin-top: 0;
}
.tag2 {
    width: 84px;
    height: 23px;
    margin-top: 0;
}
.main__explan{
    width: 680px;
    height: 20px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
}
.main__view{
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-top: 8px;
    margin-bottom: 30px;
}
.main__view li{
    border: 1px solid #fff;
    width: 79px;
    height: 18px;
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    &:first-child{
        color: #fff;
    }
    > strong {
        margin-left: 6px;
        color: #fff;
    }
}
`;

const MainSpot = () => {
    return (
        <MainSpotContainer>
            <div className='main__face'></div>
            <div className='main__name'>Nickname</div>
            <ul className='main__tag'>
                <li className='main__tag tag1'>#User Tag1</li>
                <li className='main__tag tag2'>#User Tag2</li>
            </ul>
            <div className='main__explan'>설명이 들어갑니다.</div>
            <ul  className='main__view'>
                <li>이메일</li>
                <li>찜 <strong>숫자</strong></li>
                <li>뷰 <strong>숫자</strong></li>
                <li>콘텐츠 <strong>숫자</strong></li>
            </ul>
        </MainSpotContainer>
    )
}

export default MainSpot
