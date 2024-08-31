import styled from "styled-components";

const LoginSection = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:#494949;
    form {
        width:100%;
        h1{
            display:block;
            margin:3px;
            font-weight:800;
            font-size:1.3rem;
        }
        label {
            display:block;
            padding:7px;
            font-weight:600;
        }
        input{
            padding:7px 10px;
        }
    }
`;
const LoginButton = styled.button`
    display:flex;
    padding:8px 15PX;
    margin:10px auto;
    background-color:#004cfa;
    color:#FFF;
    border:none;
    border-radius:3px;
    &:hover{
        background-color:#3975fe;
    }
`;

export {
    LoginButton,
    LoginSection,
};