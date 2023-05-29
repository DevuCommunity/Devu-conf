import { Route, Routes } from "react-router-dom"
import { DevuConfPage, DevuEventsPage, DevuHomePage } from "../pages"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="home" element={<DevuHomePage/>} ></Route>
            <Route path="conf" element={<DevuConfPage/>} ></Route>
            <Route path="events" element={<DevuEventsPage/>} ></Route>
            <Route path="/*" element={<DevuEventsPage/>}></Route>

        </Routes>
    </>
  )
}
