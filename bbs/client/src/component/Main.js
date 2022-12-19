import React from "react";
import styled from "styled-components";

//게시판 메인 페이지 컴포넌트(PostMain)
function Main() {
    return (
        <div>
            <h3
                style={{
                    marginTop: "20px",
                    marginBottom: "60px",
                    fontSize: "28px",
                    color: "#333333",
                    fontWeight: 600,
                    textAlign: "center",
                }}
            >
                이용수칙 (이것만은 지켜주세요!)
            </h3>
            <div style={{ marginLeft: "50px" }}>
                <Text>
                    하나. 이 곳은 여러 사람이 모여 소통하고 정보를 공유하는 공간입니다. 서로에 대한 비방은 금지🚫
                </Text>
                <Text>둘. 반말보다는 존댓말로 소통해주세요♥️</Text>
                <Text>셋. 나에게 어마어마한 꿀팁이 있다면 "정보공유해요 :)" 방에 스을-쩍 공유🙈 </Text>
                <Text>넷. 타인을 존중하는 마음으로 댓글을 달아주세요.😊</Text>
            </div>
        </div>
    );
}

export default Main;

const Text = styled.p`
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 22px;
`;
