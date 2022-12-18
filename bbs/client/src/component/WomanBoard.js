import React from "react";
import BoardMain from "../component/board/BoardMain";
import styled from "styled-components";

function WomanBoard() {
    return (
        <>
            <Title>여성 게시판</Title>
            <BoardMain />
        </>
    );
}

export default WomanBoard;

const Title = styled.h2`
font-size: 26px;
    color: #333333;
    font-weight: 600;
    text-align: center;
    margin: 25px 0 60px 0;
}
`;
