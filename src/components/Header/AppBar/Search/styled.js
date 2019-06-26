import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    padding: 0px 20px;
`;

const url_img = './../../../../img/search.svg';

export const StyledInputWrapper = styled.div`
    max-width: 240px;
    margin: 0px auto;
    padding: 16px 0px;

    &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0px;
        width: 20px;
        height: 20px;
        transform: translateY(-50%);
        url(${url_img}) center center / contain no-repeat;
    }
`;

export const StyledInput = styled.input`
    // border: none;
    // border-bottom: 1px solid #757575;
    // display: block;   
    // font-size: 18px;
    // padding: 10px 10px 10px 5px;
    // max-width: 240px;

    width: 100%;
    border: 0;
    font-family: inherit;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 2px solid #C8CCD4;
    background: none;
    border-radius: 0;
    color: #223254;
    transition: all .15s ease;

    &:hover {
      background: rgba(#223254,.03); 
    }

    &:not(:placeholder-shown) + span {
        color #5A667F;
        transform: translateY(-26px) scale(.75);
    }

    &:focus {
        background: none;
        outline: none;
    }
    + span {
        color #0077FF;
        transform: translateY(-26px) scale(.75);
    } + .border {
            transform: scaleX(1);
        }
`;

export const StyledBar = styled.span`
    box-sizing: border-box;
    display: block;
    position: relative;
    width: 300px;

    &:before {
        left: 50%;
    }

    .bar:after {
        right: 50%;
    }

    &:before, &:after {
        content: '';
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: #5264AE;
        transition: 0.2s ease all;
    }
`;