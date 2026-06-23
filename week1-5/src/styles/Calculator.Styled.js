import styled from "styled-components";

export const Page = styled.main`
    min-height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 3rem 1.5rem;

    background-color: #7a2727;
`;
export const CalculatorPanel = styled.section`
    width: 100%;
    max-width: 26rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    padding: 1rem;

    background-color: #d4e158;
`;
export const Display = styled.div`
    min-height: 8.5rem;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    padding: 1.5rem;

    font-size: 4rem;

    background-color: #6fe073;
`;
export const ButtonGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.25rem;
    background-color: #53e1de;
`;
export const TemporaryButton = styled.div`
    min-height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.5rem;

    background-color: #839de9;
`;