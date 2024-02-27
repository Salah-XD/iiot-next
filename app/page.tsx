import Linechart from './pages/linechart'
import Doughnut from './pages/doughnut'
import Navbar from './pages/navbar'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Linechart/>  
      <Doughnut/>
    </div>
  );
}
