import React from "react";
import styled from "styled-components";
import BoardList from "./board/BoardList";

function Notice() {
    return (
        <div>
            <Content>
                <PageTitle>
                    <Container>
                        <h3
                            style={{
                                margin: 0,
                                fontSize: "26px",
                                color: "#333333",
                                fontWeight: 600,
                                textAlign: "center",
                            }}
                        >
                            공지사항
                        </h3>
                    </Container>
                </PageTitle>

                {/* 게시글 검색 영역 */}
                <Container>
                    <SearchWindow>
                        <form>
                            <SearchWrap>
                                <label for="search" style={{ paddingRight: "12px" }}>
                                    공지사항 검색
                                </label>
                                <Input id="search" type="search" placeholder="검색어를 입력해주세요." />
                                <Button type="submit">검색</Button>
                            </SearchWrap>
                        </form>
                    </SearchWindow>
                </Container>
                <BoardList />
            </Content>
        </div>
    );
}

export default Notice;

const Content = styled.div`
    margin: 0;
    width: 1000px;
`;

const PageTitle = styled.div`
    margin: 20px 0;
`;

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
`;
const SearchWindow = styled.div`
    padding: 25px 0 20px 0;
`;

const SearchWrap = styled.div`
    position: relative;
    margin: 0 auto;
    width: 80%;
    max-width: 550px;
`;

const Input = styled.input`
    width: 350px;
    padding: 4px;
`;

const Button = styled.button`
    background-color: black;
    color: white;
    padding: 4px 14px;
    border-radius: 3px;
`;
