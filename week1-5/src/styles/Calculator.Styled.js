import styled from "styled-components";

export const Page = styled.main`
    min-height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 3rem 1.5rem;

    background-color: #f3f3f5;
`;
export const CalculatorPanel = styled.section`
    width: 100%;
    max-width: 26rem;

    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    padding: 0.25rem;

    background-color: #3d3d40;
    border: 1px solid #2d2d30;

    box-shadow: 0 1.5rem 3rem rgba(0,0,0, 0.18);
`;
export const Display = styled.div`
    min-height: 8.5rem;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    padding: 1.5rem;

    background-color: #5c5c60;
    color: #ffffff;

    font-size: 4rem;
    font-weight: 300;
    line-height: 1;
`;
export const ButtonGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.25rem;
`;
export const CalcButton = styled.button`
    min-height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    grid-column: span ${({ $span }) => $span};

    border: 1px solid #444444;

    background-color: ${({ $variant }) => {
        if ($variant === "operator") {
            return "#ff9f0a";
        }
        if ($variant === "action") {
            return '#858589';
        }
        return "#98989c";
    }};

    color: #ffffff;

    font-size: 1.5rem; 

    cursor: pointer;

    transition:
        filter 0.2s ease,
        transform 0.1s ease;
    
    &:hover {
        filter: brightness(1.08);
    }

    &:active {
        transform: scale(0.97);
    }
`;