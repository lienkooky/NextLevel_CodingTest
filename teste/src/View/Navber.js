import React from 'react'
import styled from "styled-components"
import logo from "./Logo/symbol_logo.png"

const NavBarContainer = styled.div`
width: 100%;
height: 60px;
background-color: #121212;
.wrap{
    display: flex;
    flex-direction: row;
    align-items:center;
    color: #fff;
}
.wrap__logo {
    width: 24px;
    height: 26.77px;
    padding: 8px 8px 8px 40px;
}
.wrap__name {
    width: 100px;
    height: 28px;
    padding: 8px 0 8px 8px;
    line-height: 28px;
}
`;

const Navber = () => {
    return (
        <NavBarContainer>
            <div className='wrap'>
                <img src={logo} alt="logo" className='wrap__logo'></img>
              <div className='wrap__name'>Nickname</div>
            </div>
        </NavBarContainer>
    )
}

export default Navber
