import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "html-react-parser";
import styled from "styled-components";
import Axios from "axios";

function Board() {
    const [content, setContent] = useState({
        title: "",
        nickname: "",
        content: "",
    });

    const [viewContent, setViewContent] = useState([]);

    useEffect(() => {
        Axios.get("/api/get").then((response) => {
            setViewContent(response.data);
        });
    }, [viewContent]);

    const submitContent = () => {
        Axios.post("http://localhost:8080/api/insert", {
            title: content.title,
            nickname: content.nickname,
            content: content.content,
        }).then(() => {
            alert("등록 완료!");
        });
    };

    const getValue = (e) => {
        //이벤트가 발생하면 그 이벤트의 name과 value를 가지고 오는
        const { name, value } = e.target;
        //content의 내용을 복사해서 그 안에 name이라는 이름의 키값을 value로 바꿔 저장한다는 의미, 리액트는 값을 직접수정할 수 없으므로 복사해서 수정하는 방식 이용
        setContent({
            ...content,
            [name]: value,
        });
    };

    return (
        <div>
            {/* 글을 쓰면 업로드 되는 부분 */}
            <div className="board-container">
                {viewContent.map((element) => (
                    <div>
                        <h2>{element.title}</h2>
                        <div>{ReactHtmlParser(element.content)}</div>
                    </div>
                ))}
            </div>

            <FormWrapper>
                <Input type="text" placeholder="제목을 입력하세요." onChange={getValue} name="title" />
                <input
                    style={{
                        width: "600px",
                        height: "42px",
                        margin: "10px",
                        marginLeft: "70px",
                        paddingLeft: "10px",
                    }}
                    type="text"
                    placeholder="닉네임을 입력하세요."
                    onChange={getValue}
                    name="nickname"
                />
                <CKEditor
                    editor={ClassicEditor}
                    data="내용을 입력하세요."
                    onReady={(editor) => {
                        console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setContent({
                            ...content,
                            content: data,
                        });
                    }}
                    onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                    }}
                />
            </FormWrapper>
            {/* 입력 버튼을 눌렀을 때 viewContent라는 배열 안에 movieContent라는 객체를 복사해서 concat 해준다음 그 내용으로 변경 해주는 */}
            <Button onClick={submitContent}>글쓰기</Button>
        </div>
    );
}

export default Board;

const FormWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 45px;
    font-size: 19px;
    color: white;
    padding: 20px;
    border: none;
    background: indianred;
    border-radius: 6px;
    margin: 20px auto;
`;

const Input = styled.input`
    width: 600px;
    height: 42px;
    margin: 20px 70px 0 70px;
    padding-left: 10px;
`;
