import React from "react";
import styled from "styled-components";

function Notice() {
    return (
        <div>
            <Content>
                <PageTitle>
                    <Container>
                        <h3 style={{ margin:0, fontSize: "26px", color: "#333333", fontWeight: 600, textAlign: "center" }}>
                            공지사항
                        </h3>
                    </Container>
                </PageTitle>

                {/* 게시글 검색 영역 */}
                    <Container>
                        <SearchWindow>
                            <form>
                                <SearchWrap>
                                    <label for="search" class="blind">
                                        공지사항 내용 검색
                                    </label>
                                    <input
                                        id="search"
                                        type="search"
                                        name=""
                                        placeholder="검색어를 입력해주세요."
                                        value=""
                                    />
                                    <button type="submit" class="btn btn-dark">
                                        검색
                                    </button>
                                </SearchWrap>
                            </form>
                        </SearchWindow>
                    </Container>

                {/* 게시판 목록 영역 */}
                <div id="board-list">
                    <div class="container">
                        <table class="board-table">
                            <thead>
                                <tr>
                                    <th scope="col" class="th-num">
                                        번호
                                    </th>
                                    <th scope="col" class="th-title">
                                        제목
                                    </th>
                                    <th scope="col" class="th-writer">
                                        글쓴이
                                    </th>
                                    <th scope="col" class="th-date">
                                        등록일
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3</td>
                                    <th>
                                        <a href="#!">[공지사항] 개인정보 처리방침 변경안내처리방침</a>
                                    </th>
                                    <td>gym대장</td>
                                    <td>2022.12.02</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <th>
                                        <a href="#!">공지사항 안내입니다. 이용해주셔서 감사합니다</a>
                                    </th>
                                    <td>gym대장</td>
                                    <td>2022.12.05</td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <th>
                                        <a href="#!">공지사항 안내입니다. 이용해주셔서 감사합니다</a>
                                    </th>
                                    <td>gym대장</td>
                                    <td>2022.12.11</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="bt_wrap">
                            <a href="#" class="on">
                                목록
                            </a>
                            <a href="#">수정</a>
                        </div>
                    </div>
                </div>
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
    padding: 20px 0 30px 0;
`;

const SearchWrap = styled.div`
    position: relative;
    margin: 0 auto;
    width: 80%;
    max-width: 450px;
`;
