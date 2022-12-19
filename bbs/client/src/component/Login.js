import React from "react";

function Login() {
    const container = { marginTop: "15px", marginLeft: "200px", fontSize: "18px" };
    const formName = {
        marginBottom: 2,
    };
    const inputStyle = {
        marginBottom: 8,
        paddingLeft: 10,
        width: "500px",
        height: "40px",
        fontSize: "16px",
    };
    const buttonStyle = {
        marginTop: "10px",
        marginBottom: " 20px",
        width: "120px",
        height: "42px",
        borderRadius: "5px",
        border: "1px solid #666",
        backgroundColor: "rgb(207, 232, 238)",
    };

    return (
        <div style={container}>
            <form>
                <div style={formName}>이메일</div>
                <input style={inputStyle} type={"email"} />

                <div style={formName}>비밀번호</div>
                <input style={inputStyle} type="password" maxLength="20" />
            </form>
            <button style={buttonStyle}>로그인</button>

            <form style={{ marginTop: "20px" }}>
                <div style={formName}>이메일</div>
                <input style={inputStyle} type={"email"} />

                <div style={formName}>비밀번호</div>
                <input style={inputStyle} type="password" maxLength="20" />

                <div style={formName}>이 름</div>
                <input style={inputStyle} type="text" maxLength="20" />
            </form>
            <button style={buttonStyle}>회원가입</button>
        </div>
    );
}

export default Login;
