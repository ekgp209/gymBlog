import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

class Navigation extends Component {
    render() {
        return (
            <Nav>
                <GlobalStyle />
                <NavList>
                    <NavItem>
                        <Link to="/">🏠 Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/notice">📢 공지사항</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/manBoard">👨🏻 남성 게시판</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/womanBoard">👩🏻 여성 게시판</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/tip">💡 트레이너 꿀tip</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/infoShare">✨ 정보공유해요 :)</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/motivation">🔥 동기부여 으쌰</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/question">🙋🏻 질문있어요!</Link>
                    </NavItem>
                </NavList>
            </Nav>
        );
    }
}

export default Navigation;

const Nav = styled.div`
    width: 220px;
    margin: 40px 0 0 0;
`;

const NavList = styled.ul`
    width: 200px;
    height: 100%;
    padding-left: 10px;
`;

const NavItem = styled.li`
    display: block;
    width: 200px;
    height: 44px;
    font-size: 15px;
    // padding: 12px 3px;
    padding-left: 14px;
    line-height: 42px;
    border-bottom: 1px solid #e5e5e5;
    color: #666;
    font-weight: 600;
`;
