import Navbar from './components/navbar';
import UseFetchHook from '../privateRoutes/apis/useFetch'
import LabelsAboveBars from './components/graphs/barChartYear'
import AreaBaseline from "./components/graphs/lineBarmothContribution"
import MostLanguagesUsed from "./components/graphs/mostLanguage"

function AdminDashboard() {
    
    return(
        <>
            <section className='grid grid-cols-1 w-full bg-main-bg'>
                <header className='w-full'>
                    <Navbar />
                </header>
                <div className='pt-5 p-3'>
                    <UseFetchHook />
                </div>
                <div className='flex flex-col items-center py-5 px-2'>
                    <LabelsAboveBars />
                </div>
                <div className='flex flex-col items-center'>
                    <AreaBaseline />
                </div>
                <div>
                    <MostLanguagesUsed />
                </div>
            </section>
        </>
    );
}


export default AdminDashboard;