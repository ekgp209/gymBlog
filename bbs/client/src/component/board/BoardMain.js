import React from "react";
import styled from "styled-components";
import BoardList from "./BoardList";

const BoardMain = (props) => {
    return (
        <>
            <Title>여성 게시판</Title>
            <BoardList />
        </>
    );
};

export default BoardMain;

const Title = styled.h2`
font-size: 26px;
    color: #333333;
    font-weight: 600;
    text-align: center;
    margin: 25px 0 60px 0;
}
`;
