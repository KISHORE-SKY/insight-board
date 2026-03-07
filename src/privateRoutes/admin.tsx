import Navbar from './components/navbar';
import UseFetchHook from '../privateRoutes/apis/useFetch'


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
            </section>
        </>
    );
}


export default AdminDashboard;