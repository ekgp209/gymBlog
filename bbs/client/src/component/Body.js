import React, { Component } from "react";
import Login from "./Login";
import BoardForm from "./BoardForm";
import BoardWriteForm from "./BoardWriterForm";
import BoardDetail from "./BoardDetail";
// import MypageForm from "./MypageForm";
import { Route } from "react-router-dom";
import $ from "jquery";
import {} from "js-cookie";

class Body extends Component {
    render() {
        let resultForm;
        function getResultForm() {
            // console.log($.cookie("login_id"));
            if ($.cookie("login_id")) {
                //cookie에 login_id값이 있다면
                resultForm = <Route exact path="/" component={BoardForm}></Route>;
                return resultForm;
            } else {
                resultForm = <Route exact path="/" component={Login}></Route>;
                return resultForm;
            }
        }
        getResultForm();
        return (
            <div>
                {/* <Route path="/mypage" component={MypageForm}></Route> */}
                <Route path="/boardWrite" component={BoardWriteForm}></Route>
                <Route path="/board/detail" component={BoardDetail}></Route>
                {resultForm}
            </div>
        );
    }
}

export default Body;
