import Center from "./Center/center";
import District from "./District/district";
import Nest from "./Nest/nest";
import Province from "./Province/province";
import Room from "./Room/room";
import Station from "./Station/station";


const Report = [
  {path: '/report/nest', component: Nest,label: 'TỔ'},
  {path: '/report/district',component: District,label: 'HUYỆN'},
  {path: '/report/province',component: Province,label: 'THÀNH PHỐ'},
  {path: '/report/room',component: Room,label: 'PHÒNG'},
  {path: '/report/station',component: Station,label: 'TRẠM'},
  {path: '/report/center',component: Center,label: 'TRUNG TÂM'}
]

export default Report;
