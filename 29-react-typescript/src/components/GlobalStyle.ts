// 전체적으로 적용
import { createGlobalStyle } from "styled-components";

//html 요소 가 없으면 .ts
export const GlobalStyle = createGlobalStyle`
@font-face {
     font-family: 'DungGeunMo';
     src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}
html{
    /* 기본 폰트 사이즈 */
    font-size: 20px;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DungGeunMo';
}

a{
    text-decoration: none;
}
ul,ol{
    list-style: none;
}
`;
