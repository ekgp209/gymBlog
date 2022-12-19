import React from "react";
import BoardMain from "../component/board/BoardMain";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Question() {
    const writeBoard = () => {
        document.location.href("./Board");
    };
    return (
        <>
            <Title>질문있어요!</Title>
            <Link to="/write">
                <Button onClick={writeBoard}>질문하기</Button>
            </Link>
            <BoardMain />
        </>
    );
}

export default Question;

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
    margin: 0 0 12px 755px;
    padding: 9px 28px;
    font-size: 18px;
    color: white;
    border: none;
    background: indianred;
    border-radius: 6px;
`;
