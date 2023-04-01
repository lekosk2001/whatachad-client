import styled from "styled-components"

export const Form = styled.form`
    background: #333333;
    color: #fff;
    border: 2px solid #666666;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 20px;
    margin-bottom: 5px;
`

export const FormTitle = styled.h4`
    gap: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 400;
`

export const RadioButtonBox = styled.div`
    display: flex;
    gap: 10px;    
    width: 100%;
    margin-bottom: 10px;
`

export const RadioItem = styled.span<{radio:string}>`
    cursor: pointer;
    height: 40px;  
    border: 1px solid #666666;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    width: 100%;
    transition: 0.2s all ease;    
    color: ${props=>props.radio===props.id?"#fff":"#666666"};  
    background: ${props=>props.radio===props.id?"#666666":""};
    :hover{
        background: #666666;
        color: #fff;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 50px;    
    font-size: 15px;
    padding: 15px;
    border-radius: 5px;
    background: #000000;
    border: 0px;    
    outline: none;
    color: #fff;
    ::placeholder{
        color: #666666;
    }
    ::-webkit-inner-spin-button {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
}
`

export const AmountInput = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    font-size: 15px;
`

export const ButtonBox = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    margin-top: 10px;
`

export const BackButton = styled.button`
    cursor: pointer;
    background: inherit;
    color: #fff;
    border: 1px solid #666666;
    border-radius: 5px;
    width: 100%;
    max-width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    transition: 0.2s all ease;
    :hover{
        background: #666666;
    }
`

export const Button = styled.button`
    cursor: pointer;
    background: #FFB02E;
    border: 0px;
    border-radius: 5px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    transition: 0.2s all ease;
    :hover{
        opacity: 0.6;
    }
`