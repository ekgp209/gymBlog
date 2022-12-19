import React from "react";
import BoardMain from "../component/board/BoardMain";
import styled from "styled-components";
import { Link } from "react-router-dom";

function InfoShare() {
    const writeBoard = () => {
        document.location.href("./Board");
    };
    return (
        <>
            <Title>정보공유해요 :)</Title>
            <Link to="/write">
                <Button onClick={writeBoard}>글쓰기</Button>
            </Link>
            <BoardMain />
        </>
    );
}

export default InfoShare;

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
    margin: 0 0 12px 760px;
    padding: 9px 35px;
    font-size: 18px;
    color: white;
    border: none;
    background: indianred;
    border-radius: 6px;
`;
