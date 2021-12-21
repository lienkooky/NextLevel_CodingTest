import React from 'react'
import styled from 'styled-components'

const ItemListContainer = styled.div`
width: 100%;
display: flex;  
flex-direction: column;
justify-content:center;
align-items:center;
color: #fff;
box-sizing: border-box;
height: 1000px;

`;

const ItemWrapper = styled.div`
border: 1px solid rgba(255, 255, 255, 0.3);
display: flex;
flex-direction: row;
width: 570px;
height: 132px;
border-radius: 8px;
box-sizing: border-box;

.item__left {
    width: 254px;
    height: 132px;
    background-color: rgba(255, 255, 255, 0.1);
}
.item__right__top{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing:border-box;
    position: relative;
    > p{
        width: 284px;
        height: 40px;
        line-height: 19.88px;
        font-size: 14px;
        font-weight: 500;
        flex-wrap:wrap;
        padding: 16px 16px 13px 16px;
        margin: 0;
        flex-direction: row;
    }
    > ul{
        list-style: none;
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
        position: absolute;
        top: 68px;
        left: 16px;
        > li:first-child{
            border: 1px solid rgba(255, 255, 255, 0.3);
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 200px;
            width: 16px;
            height: 16px;
        }
        > li:last-child{
            font-size: 10px;
        }
    }
}
.item__right__bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    padding: 8px;
    font-size: 14px;
    font-weight: 500;
    margin-top: 20px;
    >span{
        width: 54px;
        height: 20px;
    }
    >ul{
        list-style: none;
        display: flex;
        flex-direction: row;
        font-size: 10px;
        font-weight: 700;
        padding: 0;
        margin: 0;
        > li{
            width: 36px;
            height: 14px;
            color: rgba(255, 255, 255, 0.5);
        }
    }
}
`;


const ItemList = () => {
    return (
        <ItemListContainer>
            <ItemWrapper>
                <div className='item__left'></div>
                <div className='item__right'>
                    <div className='item__right__top'>
                    <p>content Title: sssssssssssssssssssssssssssssssssssssssssss</p>
                    <ul>
                        <li></li>
                        <li>이름</li>
                    </ul>
                    </div>
                    <div className='item__right__bottom'>
                        <span>포인트</span>
                        <ul>
                            <li>숫자 뷰</li>
                            <li>숫자 찜</li>
                        </ul>
                    </div>
                </div>
            </ItemWrapper>
        </ItemListContainer>
    )
}

export default ItemList
