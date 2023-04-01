import React, { useState } from 'react'
import PageTitle from '@/components/common/Page/PageTitle';
import { PageContainer, PageContentsBox } from '@/components/common/Page/Page';
import ManagePageHeader from '@/components/common/Page/ManagePageHeader';
import * as S from './ManageCalendar_style'
import dayjs from 'dayjs';

type Props = {}

const ManageCalendar = (props: Props) => {
    const [currentYear] = useState(dayjs().year())
    const [month] = useState(dayjs().month())

    const allDays = [];
    const today = dayjs();


    const day = dayjs().year(currentYear).startOf("year").month(month)

    // const onClickDate = (day: Dayjs) => {
    //     router.push(`/${day.format("YYYY")}/${day.format("MM-DD")}`)
    // }

    for (let index = 0; index < day.startOf("month").day(); index++) {
        allDays.push(<S.DayBlockBlank key={day.format() + index} >
        </S.DayBlockBlank>)
    }

    for (let index = 0; index < Number(day.endOf("month").format("DD")); index++) {

        const eachDay = dayjs(`${day.year()}-${day.month() + 1}-${1 + index}`)
        const isToday = today.isSame(eachDay, "date")

        allDays.push(<S.DayBlock
            key={eachDay.format()}
            style={{
                backgroundColor: isToday ? "#555555" : "",
            }}
        // onClick={() => onClickDate(eachDay)}
        >
            <S.DayBlockNumber
                style={{
                    color: eachDay.day() === 0 ? "red" : "",
                }}>
                {eachDay.date()}
            </S.DayBlockNumber>
            <S.DayBlockText completed={false}>장보기</S.DayBlockText>
            <S.DayBlockText completed>운동하기</S.DayBlockText>
        </S.DayBlock>)
    }

    return (<PageContainer>
        <PageTitle title='Manage' location='청주시 흥덕구 복대동' />
        <ManagePageHeader title={"달력"} budget={10000} />
        <PageContentsBox>
            <S.DayBlockContainer>
                <S.DayText>일</S.DayText>
                <S.DayText>월</S.DayText>
                <S.DayText>화</S.DayText>
                <S.DayText>수</S.DayText>
                <S.DayText>목</S.DayText>
                <S.DayText>금</S.DayText>
                <S.DayText>토</S.DayText>
                {allDays}
            </S.DayBlockContainer>
        </PageContentsBox>
    </PageContainer>)
}

export default ManageCalendar