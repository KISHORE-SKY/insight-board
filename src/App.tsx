import { Outlet } from "react-router-dom"


function App() {
  

  return (
    <>
      <section className="flex flex-col items-center">
        <Outlet />
      </section>
    </>
  )
}

export default App
