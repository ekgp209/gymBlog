import React from "react";
import { Link } from "react-router-dom";

function Board() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/board/1">
                        <span>공지사항</span>
                    </Link>
                </li>
                <li>
                    <Link to="/board/2">
                        <span>남성방</span>
                    </Link>
                </li>
                <li>
                    <Link to="/board/3">
                        <span>여성방</span>
                    </Link>
                </li>
                <li>
                    <Link to="/board/4">
                        <span>트레이너 꿀tip</span>
                    </Link>
                </li>
                <li>
                    <Link to="/board/5">
                        <span>공유방</span>
                    </Link>
                </li>
                <li>
                    <Link to="/board/6">
                        <span>동기부여방</span>
                    </Link>
                </li>
                <li>
                    <Link to="/board/7">
                        <span>질문방</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Board;
