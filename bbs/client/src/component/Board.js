import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "html-react-parser";
import styled from "styled-components";

function Board() {
    const [board, setBoard] = useState({
        title: "",
        content: "",
    });

    const [viewContent, setViewContent] = useState([]);

    const getValue = (e) => {
        const { name, value } = e.target;
        //article의 내용을 복사해서 그 안에 name이라는 이름의 키값을 value로 바꿔 저장한다는 의미, 리액트는 값을 직접수정할 수 없으므로 복사해서 수정하는 방식 이용
        setBoard({
            ...board,
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
                <CKEditor
                    style={{ minHeight: "500px" }}
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setBoard({
                            ...board,
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
                <Textarea placeholder="내용을 입력하세요."></Textarea>
            </FormWrapper>
            <Button
                onClick={() => {
                    setViewContent(viewContent.concat({ ...board }));
                }}
            >
                글쓰기
            </Button>
        </div>
    );
}

export default Board;

const FormWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const Button = styled.button`
    width: 200px;
    height: 50px;
    font-size: 20px;
    padding: 20px;
    border: none;
    background: indianred;
    border-radius: 5px;
`;

const Input = styled.input`
    width: 500px;
    height: 40px;
    margin: 10px;
`;
const Textarea = styled.textarea`
    width: 80%;
    min-height: 300px;
`;
