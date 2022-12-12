//주소를 바꿔주는 기능

import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../component/Main";
import ArticleList from "../component/ArticleList";
import Article from "../component/Article";
import Post from "../component/Post";
// import Control from '../component/Control'

function RouteLink() {
    return (
        <></>
        // <div>
        //     {/* <Routes>
        //         {/* /article/articleId(숫자) 일 경우 게시글 내용 페이지로 이동하고
        //             /insert 혹은 update/articleId 일 경우 해당 게시글 id를 가진 게시글을 수정하는 페이지로 이동 */}
        //         <Route path="/" exact element={Main} />
        //         {/* /article/:articleId 는 :뒤로 숫자가 들어올 것인데 이는 parameter로 articleId 라는 키의 값으로 parameter 숫자를 받는다는 것 */}
        //         <Route path="/board/:boardId" exact element={<ArticleList />} />
        //         <Route path="/article/:articleId" exact element={<Article />} />
        //         <Route path="/insert" exact element={<Post />} />
        //         <Route path="/update/:articleId" exact element={<Post />} />
        //         {/* <Route path={"/control"} exact component={<Control />} /> */}
        //         <Route path={"*"} component={<Main />} />
        //     </Routes> */}
        // </div>
    );
}

export default RouteLink;
