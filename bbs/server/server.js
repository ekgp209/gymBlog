const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const connect = require("./schemas");

connect(); //index.js 실행

const corsOptions = {
    origin: true,
    credentials: true,
};

app.use(
    //session을 아래같이 설정했을 때 정상적으로 사용이 가능함. 자세한건 정확히 모름
    session({
        resave: false,
        saveUnintialized: true,
        secret: "ekgp209", //내 이름으로 변경해도 됨
        cookie: {
            httpOnly: true,
            secure: false,
        },
    }),
);

app.use(cors(corsOptions));

app.use(express.json()); //json data를 주고받기 위해
app.use(express.urlencoded({ extended: true })); //배열이나 데이터 속성을 가져오기위해 수정을 해주어야 한다

app.use("/member", require("./routes/memberRouter"));
app.use("/board", require("./routes/boardRouter"));


app.listen(8080, () => {
    console.log("listen umm..umm..um...");
});
