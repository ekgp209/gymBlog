import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BoardList from "./board/BoardList";

function Tip() {
    const writeBoard = () => {
        document.location.href("./Board");
    };
    return (
        <>
            <Title>트레이너 꿀tip</Title>
            <Link to="/write">
                <Button onClick={writeBoard}>꿀Tip 주기</Button>
            </Link>
            <BoardList />
        </>
    );
}

export default Tip;

const Title = styled.h2`
    font-size: 28px;
    color: #333333;
    font-weight: 600;
    text-align: center;
    margin: 25px 0 50px 0;
}
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 0 12px 745px;
    padding: 9px 27px;
    font-size: 18px;
    color: white;
    border: none;
    background: indianred;
    border-radius: 6px;
`;
