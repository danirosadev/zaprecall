import styled from "styled-components";

const StartButton = styled.button`
    width: 246px;
    height: 54px;
    background-color: #ffffff;
    border: 1px solid #d70900;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #D70900;
    cursor: pointer;
`
const BigLogo = styled.img`
    width: 136px;
    height: 161px;
`
const BigName = styled.p`
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-top: 23px;
`
const Container = styled.div`
    width: 100%;
    height: 667px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export  {StartButton, BigLogo , BigName, Container}