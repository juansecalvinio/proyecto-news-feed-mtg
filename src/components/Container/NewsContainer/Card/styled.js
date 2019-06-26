import styled from 'styled-components';

export const StyledCard = styled.div`
    box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 40px -14px;
    width: 30%;
    border-radius: 5px;
    background: white;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(237, 237, 240);
    border-image: initial;
    overflow: hidden;
    transition: all 150ms ease 0s;
    display: flex;
    flex-direction: column;
    margin: 1%;

    &:hover, &:focus {
        transform: scale(1.01);
        transition: all ease-in-out .2s;
    }
`;

export const StyledImg = styled.img`
    height: 200px;
    max-width: 100%;
    position: relative;
    overflow: hidden;
`;

export const StyledContent = styled.div`
    color: black;
    padding: 16px 20px;
`;

export const StyledTitle = styled.h3`
    font-size: 20px;
    font-weight: 400;
    min-height: 63px;

    a {
        color: rgb(59, 67, 89);
        text-decoration: none;
        transition: color 150ms ease 0s;
    }

    a:hover {
        color: #1ABC9C;
        transition: color .25s ease-out;
    }
`;

export const StyledSourceWrapper = styled.div`
    margin-top: 10px;
    font-weight: 400;
    font-size: 18px;
    color: rgb(130, 137, 158);
`;

export const StyledTime = styled.span`
    margin-right: 2%;
`;
export const StyledDivider = styled.span`
    margin-right: 2%;
`;
export const StyledSource = styled.span`
    margin-right: 2%;
`;