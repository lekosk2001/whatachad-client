import React, { useState } from 'react'
import * as S from './ScheduleUI_style'
import { MdAccountBalanceWallet } from "react-icons/md";
import { RiTodoFill } from "react-icons/ri";
import AddAccountForm from '../ManageAddForm/AddAccountForm';
import AddDayWorkForm from '../ManageAddForm/AddDayWorkForm';
import { ScheduleType } from './ScheduleUI_type';
import DayWorkUI from './DayWorkUI';
import AccountUI from './AccountUI';
import { BsFillCalendar2CheckFill, BsFillCalendarXFill, BsFillCheckCircleFill } from 'react-icons/bs';
import { HiBadgeCheck, HiOutlineBadgeCheck } from 'react-icons/hi';

const allAccountsData = [ // 비동기 통신 결과 예시
    {
        "accountId": "1",
        "scheduleId": "1",
        "userId": "1",
        "title": "식료품 구매",
        "category": "식비",
        "cost": 10000,
        "type": "spend",
        "year": "2023",
        "month": "03",
        "day": "23",
        "time": "22:20"
    },
    {
        "accountId": "2",
        "scheduleId": "1",
        "userId": 1,
        "title": "세뱃돈",
        "category": "용돈",
        "cost": 1000,
        "type": "income",
        "year": "2023",
        "month": "03",
        "day": "23",
        "time": "06:21"
    },
]

const alldayworksData = [ // 비동기 통신 결과 예시 
    {
        "dayWorkId": "1",
        "scheduleId": "1",
        "userId": "1",
        "title": "런닝 3km",
        "status": true,
        "color": "red",
        "year": "2023",
        "month": "03",
        "day": "23",
    },
    {
        "dayWorkId": "2",
        "scheduleId": "1",
        "userId": "1",
        "title": "장보기",
        "status": false,
        "color": "green",
        "year": "2023",
        "month": "03",
        "day": "23",
    },
    {
        "dayWorkId": "3",
        "scheduleId": "1",
        "userId": "1",
        "title": "세차",
        "status": false,
        "color": "yellow",
        "year": "2023",
        "month": "03",
        "day": "23",
    },
]

const ScheduleUI = ({ Schedule }: ScheduleType) => {
    const [addAccountIsOpen, setAddAccountIsOpen] = useState(false);
    const [addDayWorkIsOpen, setAddDayWorkIsOpen] = useState(false);

    const onchangeCheckbox = () => {
    }

    return (
        <S.ScheduleBox key={Schedule.scheduleId}>
            <S.ScheduleHeader>
                <S.ScheduleDateBox>
                    <S.ScheduleSubText>{`${Schedule.year}. ${Schedule.month}`}</S.ScheduleSubText>
                    <S.ScheduleDate>{Schedule.day}일</S.ScheduleDate>
                </S.ScheduleDateBox>
                <S.ScheduleAccountBox>
                    <div>
                        <S.ScheduleSubText>총 지출</S.ScheduleSubText>
                        <S.ScheduleAccountText>{Schedule.totalSpend.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</S.ScheduleAccountText>
                    </div>
                    <div>
                        <S.ScheduleSubText>예산 초과</S.ScheduleSubText>
                        <S.ScheduleAccountText>{Schedule.totalSpend.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</S.ScheduleAccountText>
                    </div>{/* 
                <p>오늘 지출(예산-총지출)</p>
                <p>{(Schedule.totalIncome - Schedule.totalSpend).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p> */}

                </S.ScheduleAccountBox>
                <S.ScheduleStatus>
                    <S.ScheduleSubText>목표 달성</S.ScheduleSubText>
                    {Schedule.status ? <HiBadgeCheck /> : <HiOutlineBadgeCheck style={{ color: "#555555" }} />}</S.ScheduleStatus>
            </S.ScheduleHeader>

            <S.AccountSection>
                {!addAccountIsOpen && <S.ListAddButton
                    onClick={() => {
                        setAddAccountIsOpen(prev => !prev)
                    }}><MdAccountBalanceWallet /> 가계부 추가</S.ListAddButton>}
                {addAccountIsOpen && <AddAccountForm
                    setAddAccountIsOpen={setAddAccountIsOpen}
                />}
                {allAccountsData.map(account =>
                    <AccountUI key={account.accountId} data={account} />
                )}
            </S.AccountSection>

            <S.DayWorkSection>
                {!addDayWorkIsOpen && <S.ListAddButton
                    onClick={() => {
                        setAddDayWorkIsOpen(prev => !prev)
                    }}><RiTodoFill /> 할 일 추가</S.ListAddButton>}
                {addDayWorkIsOpen && <AddDayWorkForm
                    setAddDayWorkIsOpen={setAddDayWorkIsOpen}
                />}
                {alldayworksData.map(dayWork =>
                    <DayWorkUI key={dayWork.dayWorkId} data={dayWork} />
                )}
            </S.DayWorkSection>
        </S.ScheduleBox>
    )
}

export default ScheduleUI