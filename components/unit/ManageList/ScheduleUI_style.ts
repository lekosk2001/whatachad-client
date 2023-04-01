import styled from "styled-components";

export const ScheduleBox = styled.li`
    background: #333333;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    gap: 20px;
    @media (max-width: 1024px ) {
        flex-direction: column;
    }
`

export const ScheduleHeader = styled.div`
    min-width: 60px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 1024px ) {
        flex-direction: row;
        justify-content: space-between;
    }
`


export const ScheduleDateBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const ScheduleAccountBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    @media (max-width: 1024px ) {
        flex-direction: row;
        gap: 20px;
    }
`

export const ScheduleSubText = styled.p`
    font-size: 11px;
    color: gray;
`

export const ScheduleAccountText = styled.h4`
    font-size: 15px;
`

export const ScheduleDate = styled.h2`

`

export const ScheduleStatus = styled.div`
    svg{
        width: 30px;
        height: 30px;
    }
    @media (max-width: 1024px ) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`


export const AccountSection = styled.section`
    width: 100%;
    display: flex;
    gap: 5px;
    flex-direction: column;
    flex: 2;
`



export const DayWorkSection = styled.section`
    width: 100%;
    display: flex;
    gap: 5px;
    flex-direction: column;
    flex: 1;
`

export const ListAddButton = styled.button`
    cursor: pointer;
    background: inherit;
    color: #fff;
    border: 2px solid #666666;
    border-radius: 10px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    transition: 0.2s all ease;
    margin-bottom: 5px;
    svg{
        width: 15px;
        height: 15px;
    }
    :hover{
        background: #666666;
    }
`

export const InnerList = styled.li<{disabled:boolean}>`
    input,p,div{
        transition: 0.2s all ease;   
        opacity: ${props=>props.disabled?"0.3":"default"};}
    cursor: pointer;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #222222;
    border-radius: 10px;
    padding: 0px 20px;
    justify-content: space-between;  
    overflow: hidden;
    :hover{
        background: #444444;
    }
`

export const CheckBoxArea = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin: 0px -15px;
`


export const CheckBox = styled.input`
    width: 20px;
    min-width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #fff;
    appearance: none;
    cursor: pointer;
    transition: 0.1s all ease;    
    &:checked {
        background: #8fd460;
    }
`

export const ListSide = styled.span`
    display: flex;
    gap: 15px;
    align-items: center;    
`

export const Color = styled.div`
    width: 8px;
    border-radius: 4px;
    height: 24px;
`

export const ListText = styled.p`
    font-size: 15px;
    
`

export const CostText = styled.p`
    font-size: 15px;
    font-weight: 700;
    min-width: 70px;
    text-align: end;
`

export const ListSubText = styled.p`
    font-size: 11px;
    color: gray;
    
`