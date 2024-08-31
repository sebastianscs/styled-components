import styled from "styled-components";

const MoviesList =styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    padding-top: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
    gap:25px;   
    
    h1{
        font-size:1.3rem;
        font-weight:700;
    }
`;

const ItemMovie = styled.article`
    text-align: center;
    padding: 7px;
    padding-bottom: 0;
    box-sizing: border-box;
    background-color: #e9e9e9;
    border-radius:4px;
    .poster-img {
        width: 85%;
        height: 80%;
        margin-bottom: 15px;
        cursor: pointer;
        border-radius:4px;
    }
`;

const Title = styled.h2`
    font-size: 2.2rem;
    font-weight:700;
    padding:10px;
`;
export {
    MoviesList,
    ItemMovie,
    Title
}