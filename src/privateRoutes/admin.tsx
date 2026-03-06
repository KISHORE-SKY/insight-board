import Navbar from './components/navbar';
import GroupAvatars from './components/notifyavatars'



function AdminDashboard() {
    
    return(
        <>
            <section className='grid grid-cols-1 w-full'>
                <header className='w-full'>
                    <Navbar />
                </header>
            </section>
        </>
    );
}


export default AdminDashboard;