import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import $ from "jquery";
//로그인/아웃 처리하기 위해
import {} from "jquery.cookie";
//통신할 때 node.js 서버와 통신하기 위해 localhost 번호를 맞춰주기 위해
axios.defualts.withCredentials = true;
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
            //서버 주소를 호출해서 send_param을 넘겨주고 정상수행/에러 상황에 어떻게 할지
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
}

// function Login() {
//     return <div></div>;
// }

export default Login;
