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
  const [activeItem, setActiveItem] = useState(items[0]);

  const handleTabChange = (e) => {
    console.log("Tab clicked:", e.value); // Log the selected tab label
    setActiveItem(e.value);
  };

  const renderComponent = () => {
    const ActiveComponent = activeItem.component;
    switch (activeItem.label) {
      case 'Năm':
        return <YearComponent />;
      case 'Quý':
        return <QuarterComponent />;
      case 'Tháng':
        return <MonthComponent />;
      case 'Tuần':
        return <WeekComponent />;
      case 'Ngày':
        return <DayComponent />;
      case 'Ngày đến ngày':
        return <DateRangeComponent />;
      default:
        return null; // Render nothing if no component is matched
    }
  };

  return (
    <div>
      <h3 className="pl-4">BÁO CÁO VẬN HÀNH KHAI THÁC THEO {label}</h3>
      <div className="card pl-3">
        <TabMenu model={items} activeItem={activeItem} onTabChange={handleTabChange} />
      </div>
      {renderComponent()}
    </div>
  );
};

export default ReportComponent;
