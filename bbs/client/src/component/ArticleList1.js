import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import {} from "js-cookie";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class ArticleRow extends Component {
  render() {
    return (
      <tr>
        <td>
          <NavLink
            to={{ pathname: "/article/detail", query: { _id: this.props._id } }}
          >
            {this.props.createdAt.substring(0, 10)}
          </NavLink>
        </td>
        <td>
          <NavLink
            to={{ pathname: "/article/detail", query: { _id: this.props._id } }}
          >
            {this.props.title}
          </NavLink>
        </td>
      </tr>
    );
  }
}

class ArticleList1 extends Component {
  state = {
    articleList: []
  };

  componentDidMount() {
    this.getArticleList();
  }

  getArticleList = () => {
    const send_param = {
      headers,
      _id: $.cookie("login_id")
    };
    axios
      .post("http://localhost:8080/article/getArticleList", send_param)
      .then(returnData => {
        let articleList;
        if (returnData.data.list.length > 0) {
          const articles = returnData.data.list;
          articleList = articles.map(item => (
            <ArticleRow
              key={Date.now() + Math.random() * 500}
              _id={item._id}
              createdAt={item.createdAt}
              title={item.title}
            ></ArticleRow>
          ));
          // console.log(boardList);
          this.setState({
            articleList: articleList
          });
        } else {
          articleList = (
            <tr>
              <td colSpan="2">작성한 게시글이 존재하지 않습니다.</td>
            </tr>
          );
          this.setState({
            articleList: articleList
          });
          // window.location.reload();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const divStyle = {
      margin: 50
    };

    return (
      <div>
        <div style={divStyle}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>날짜</th>
                <th>글 제목</th>
              </tr>
            </thead>
            <tbody>{this.state.articleList}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

// function ArticleList() {
//     return <div>게시판 목록</div>;
// }


export default ArticleList1;