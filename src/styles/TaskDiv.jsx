import styled from "styled-components";

export const TaskDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 35px auto 35px auto;
    box-shadow: 1px 0px 2px 0px rgb(0 0 0 / 51%);
    padding: 20px;
    background-color: #f2f2f2;

    @media (max-width: 760px) {
        flex-direction: column;
        gap: 20px;
        width: 90%;
    }
`