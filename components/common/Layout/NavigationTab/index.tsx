import Link from "next/link";
import Tab from "./Tab";
import { NavigationTabContainer, Tabs, TabTitle } from "./styles";
import { BiCalculator, BiCalendar, BiCog, BiGridAlt, BiListUl, BiLocationPlus, BiMapAlt } from "react-icons/bi";

function Navigation() {
  return (
    <NavigationTabContainer>
      <TabTitle>
        <Link href="/">Home</Link>
      </TabTitle>

      <Tabs>
        <TabTitle>
          <Link href="/workout/map">Workout</Link>
        </TabTitle>
        <Tab text={"지도"} path="/workout/map" icon={<BiMapAlt />} />
        <Tab text={"리스트"} path="/workout/list" icon={<BiGridAlt />} />
        <Tab text={"운동시설추가"} path="/workout/add-location" icon={<BiLocationPlus />} />
      </Tabs>
      <Tabs>
        <TabTitle>
          <Link href="/manage/calendar">Manage</Link>
        </TabTitle>
        <Tab text={"캘린더"} path="/manage/calendar" icon={<BiCalendar />} />
        <Tab text={"월별 내역"} path="/manage/list" icon={<BiListUl />} />
        <Tab text={"예산 설정"} path="/manage/budget" icon={<BiCalculator />} />
      </Tabs>
      <Tabs>
        <TabTitle>
          <Link href="/setting">Setting</Link>
        </TabTitle>
        <Tab text={"설정"} path="/setting" icon={<BiCog />} />
      </Tabs>
      {/* <div className="menu-icon">
        <i></i>
      </div> */}
    </NavigationTabContainer>
  );
}

export default Navigation;
