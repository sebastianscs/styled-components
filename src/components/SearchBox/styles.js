import styled from "styled-components";

const SearchBoxDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px 10px;
    input {
        width: 600px;
        height: 40px;
        padding: 10px;
        font-size: 16px;
        border: 1px solid rgba(65, 65, 65, 0.5);
        border-radius: 4px;
        
        box-sizing: border-box; /* Para incluir padding y border en el ancho total */
    }
`;
export {
    SearchBoxDiv
}