import React from 'react';

// ./src/Auth.js를 생성하고 아래 코드를 입력합니다. 코드 내용은 Redirect 주소로 전달받은 code 값을 추출하여 보여주는 코드입니다.
// https://vlee.kr/4896 참고 블로그

const REST_API_KEY = "[본인 REST API KEY 값]";
const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const Auth = () => {
    const code = new URL(window.location.href).searchParams.get("code");
    return (
        <div>
            { code }
        </div>
    );
};

export default Auth;
