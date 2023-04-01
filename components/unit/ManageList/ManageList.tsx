import PageTitle from '@/components/common/Page/PageTitle';
import { ListBox, PageContainer } from '@/components/common/Page/Page';
import ScheduleUI from './ScheduleUI';
import ManageContentsHeader from '@/components/common/Page/ManagePageHeader';
import ManagePageHeader from '@/components/common/Page/ManagePageHeader';

type Props = {
}

const allScheduleData = [ // 비동기 통신 결과 예시
    {
        "scheduleId": 1,
        "userId": 1,
        "totalIncome": 10000,
        "totalSpend": 2000,
        "status": false,
        "year": "2023",
        "month": "03",
        "day": "23"
    },
    {
        "scheduleId": 2,
        "userId": 1,
        "totalIncome": 10000,
        "totalSpend": 2000,
        "status": false,
        "year": "2023",
        "month": "03",
        "day": "22"
    },
    {
        "scheduleId": 3,
        "userId": 1,
        "totalIncome": 10000,
        "totalSpend": 2000,
        "status": true,
        "year": "2023",
        "month": "03",
        "day": "21"
    },
]

const ManageList = (props: Props) => {

    return (<PageContainer>
        <PageTitle title='Manage' location='청주시 흥덕구 복대동' />
        <ManagePageHeader title={"월별 내역"} budget={10000} />

        <ListBox>
            {allScheduleData.map((Schedule) =>
                <ScheduleUI key={Schedule.scheduleId} Schedule={Schedule} />
            )}
        </ListBox>
    </PageContainer>)
}

export default ManageList