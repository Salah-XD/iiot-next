import Linechart from '@/components/Linechart'
import Navbar from '@/components/Navbar'
import Doughnutchart1 from '@/components/Doughnutchart1';
import Doughnutchart2 from '@/components/Doughnutchart2';
import Buttons from '@/components/switch';
import Sub from '@/components/Sub';


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Sub/>
      <div className='flex justify-center gap-7 p-3 flex-wrap'>
        <Doughnutchart1/>
        <Linechart/>

        <Doughnutchart2/>
      </div>
      
      <Buttons/>
    </div>
  );
}