import React from 'react'
import * as S from './ScheduleUI_style'

type Props = {
    data: any;
}

const AccountUI = (props: Props) => {
    const account = props.data;

    const typeColor = (type: string) => {
        if (type === "income") {
            return <S.ListSide style={{ color: "#3c89e8" }}>
                <S.ListSubText>수입</S.ListSubText>
                <S.CostText>{account.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</S.CostText>
            </S.ListSide>
        }

        if (type === "spend") {
            return <S.ListSide style={{ color: "#e84749" }}>
                <S.ListSubText>지출</S.ListSubText>
                <S.CostText>{account.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</S.CostText>
            </S.ListSide>
        }
    };

    return (
        <S.InnerList disabled={false} key={account.accountId}>
            <S.ListSide>
                <S.ListSubText>
                    {`${account.month}-${account.day} │ ${account.time}`}
                </S.ListSubText>
                <S.ListText>{account.title}</S.ListText>
            </S.ListSide>
            <S.ListSide>
                {typeColor(account.type)}
            </S.ListSide>
        </S.InnerList>
    )
}

export default AccountUI