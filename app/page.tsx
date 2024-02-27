import Linechart from './pages/Linechart'
import Navbar from './pages/navbar'
import Doughnutchart1 from './pages/Doughnutchart1';
import Doughnutchart2 from './pages/Doughnutchart2';


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Linechart/>  
      <Doughnutchart1/>
      <Doughnutchart2/>
    </div>
  );
}
