import Linechart from './pages/Linechart'
import Navbar from './pages/navbar'
import Doughnutchart1 from './pages/Doughnutchart1';
import Doughnutchart2 from './pages/Doughnutchart2';
import Buttons from './pages/Buttons';


export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='flex gap-7 p-3 overflow-hidden'>
        <Linechart/>
        <Doughnutchart1/>
        <Doughnutchart2/>
      </div>
      <Buttons/>
    </div>
  );
}