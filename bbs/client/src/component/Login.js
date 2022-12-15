import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
// import { loadReCaptcha, ReCaptcha } from "react-recaptcha-v3";
import axios from "axios";
import $ from "jquery";
//로그인/아웃 처리하기 위해
import {} from "js-cookie";
//통신할 때 node.js 서버와 통신하기 위해 localhost 번호를 맞춰주기 위해
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Login extends Component {
    state = {
        login_email: "",
    };

    join = () => {
        const send_param = {
            headers, //동일기원 통신을 위해
            email: this.joinEmail.value, //key값: value값
            name: this.joinName.value,
            password: this.joinPW.value,
        };
        axios
            //서버 주소를 호출해서 send_param을 넘겨주고 서버쪽에 비동기통신 요청. 정상수행/에러 상황에 어떻게 할지
            .post("http://localhost:8080/member/join", send_param)
            //정상 수행
            .then((returnData) => {
                //data안에 message가 있다면
                if (returnData.data.message) {
                    alert(returnData.data.message);
                } else {
                    alert("회원가입 실패");
                }
            })
            //에러
            .catch((err) => {
                console.log(err);
            });
    };
    login = () => {
        const send_param = {
            headers,
            email: this.loginEmail.value,
            password: this.loginPw.value,
        };
        axios
            //서버 주소를 호출해서 send_param을 넘겨주고 정상수행/에러 상황에 어떻게 할지
            .post("http://localhost:8080/member/login", send_param)
            //정상 수행
            .then((returnData) => {
                if (returnData.data.message) {
                    // console.log("login_id:" + returnData.data._id); 프로젝트 완성쯤에는 정보가 노출될 수 있기 때문에 지워주는 것이 좋음
                    $.cookie("login_id", returnData.data._id);
                    // this.setState({
                    //     login_email: returnData.data.name
                    // });
                    alert(returnData.data.message);
                    window.location.reload();
                } else {
                    alert("로그인 실패");
                }
            })
            //에러
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        //일반적인 best css입히는 방법
        const formStyle = {
            margin: 50,
        };
        const buttonStyle = {
            marginTop: 5,
        };

        return (
            //Form이라는 component를 react-bootstrap에서 가져다가 사용
            <Form style={formStyle}>
                <Form.Group controlId="joinForm">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        maxLength="100"
                        ref={(ref) => (this.joinEmail = ref)}   //id값을 부여하는 방식, {} 안은 외우는게 좋음
                        placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    <Form.Label>name</Form.Label>
                    <Form.Control type="text" maxLength="20" ref={(ref) => (this.joinName = ref)} placeholder="name" />
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        maxLength="64"
                        ref={(ref) => (this.joinPw = ref)}
                        placeholder="Password"
                    />
                    <Button style={buttonStyle} onClick={this.join} variant="primary" type="button" block>
                        회원가입
                    </Button>
                </Form.Group>

                <Form.Group controlId="loginForm">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        maxLength="100"
                        ref={(ref) => (this.loginEmail = ref)}
                        placeholder="Enter email"
                    />
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        maxLength="20"
                        ref={(ref) => (this.loginPw = ref)}
                        placeholder="Password"
                    />
                    {/* <ReCaptcha
                        sitekey="6LfGieAUAAAAAJSOoqXS5VQdT_e5AH8u0n2e1PDb"
                        action="login"
                        verifyCallback={this.verifyCallback}
                    /> */}
                    <Button style={buttonStyle} onClick={this.login} variant="primary" type="button" block>
                        로그인
                    </Button>
                </Form.Group>
            </Form>
        );
    }
}

export default Login;
