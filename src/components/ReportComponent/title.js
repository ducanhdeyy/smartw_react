import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import YearComponent from '../TabmenuComponent/YearComponent';
import QuarterComponent from '../TabmenuComponent/QuarterComponent';
import MonthComponent from '../TabmenuComponent/MonthComponent';
import WeekComponent from '../TabmenuComponent/WeekComponent';
import DayComponent from '../TabmenuComponent/DayComponent';
import DateRangeComponent from '../TabmenuComponent/DateRangeComponent';

const items = [
  { label: 'Năm', component: YearComponent },
  { label: 'Quý', component: QuarterComponent },
  { label: 'Tháng', component: MonthComponent },
  { label: 'Tuần', component: WeekComponent },
  { label: 'Ngày', component: DayComponent },
  { label: 'Ngày đến ngày', component: DateRangeComponent },
];

const ReportComponent = ({ label }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (e) => {
    setActiveIndex(e.index);
  };

  const ActiveComponent = items[activeIndex].component;
  const activeLabel = items[activeIndex].label;

  return (
    <div>
      <h3 className="pl-4">BÁO CÁO VẬN HÀNH KHAI THÁC THEO {label}</h3>
      <div className="card pl-3">
        <TabMenu model={items.map(item => ({ label: item.label }))} activeIndex={activeIndex} onTabChange={handleTabChange} />
      </div>
      <ActiveComponent activeLabel={activeLabel} />
    </div>
  );
};

export default ReportComponent;
