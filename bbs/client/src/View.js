import React from "react";
import Navigation from "./component/Navigation";
import RouteLink from "./routes/RouteLink";
import styled from "styled-components";
import MainSrc from "./img/main.png";
import { Link } from "react-router-dom";

function View() {
    return (
        <>
            <Header>
                <div>
                    <Title>Our Gym</Title>
                    <div className="sign" style={{ position: "absolute", top: "15px", right: "50px", height: "20px" }}>
                        <Link to="/login">
                            <Login>
                                로그인 <p>|</p> <p>회원가입</p>
                            </Login>
                        </Link>
                    </div>
                </div>
            </Header>
            <ContainerBox>
                <Sidebar>
                    <Navigation />
                </Sidebar>
                <Content>
                    <RouteLink />
                </Content>
            </ContainerBox>
        </>
    );
}

export default View;

const Header = styled.div`
    display: block;
    background-image: url(${MainSrc});
    background-position: center 35%;
    background-size: cover;
    width: 100%;
    height: 200px;
    text-align: center;
`;

const Title = styled.h1`
    color: #000;
    font-size: 60px;
    font-weight: 700;
    text-align: center;
    padding: 50px 0;
`;

const ContainerBox = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 20px auto;
    min-height: 600px;
`;

const Sidebar = styled.div`
    display: inline-block;
    width: 220px;
    /* margin-top: 40px; */
`;

const Content = styled.div`
    display: inline-block;
    margin: 0;
    margin-left: 10px;
    padding: 40px 20px;
    width: 1000px;
`;

const Login = styled.a`
    display: inline-block;
    display: flex;
    gap: 7px;
    line-height: 13px;
    padding: 0 12px;
    border-right: 1px solid #ddd;
    color: #666;
`;
