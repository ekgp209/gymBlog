import React from "react";
import styled from "styled-components";

function Login() {
    const container = { marginTop: "15px", marginLeft: "200px", fontSize: "18px" };
    const formName = {
        marginBottom: 5,
    };
    const inputStyle = {
        marginBottom: 15,
        paddingLeft: 10,
        width: "500px",
        height: "40px",
        fontSize: "16px",
    };

    return (
        <div style={container}>
            <form>
                <div style={formName}>이메일</div>
                <input style={inputStyle} type={"email"} />

                <div style={formName}>비밀번호</div>
                <input style={inputStyle} type="password" maxLength="20" />
            </form>
            <Button>로그인</Button>

            <form>
                <div style={formName}>이메일</div>
                <input style={inputStyle} type={"email"} />

                <div style={formName}>비밀번호</div>
                <input style={inputStyle} type="password" maxLength="20" />

                <div style={formName}>이 름</div>
                <input style={inputStyle} type="text" maxLength="20" />
            </form>
            <Button>회원가입</Button>
        </div>
    );
}

export default Login;

const Button = styled.button`
    padding: 5 10;
    text-align: center;
    border-radius: 1px solid black;
    border: 5;
`;
