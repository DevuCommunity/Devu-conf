import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { DevuConfPage, DevuEventsPage, DevuHomePage } from "../pages";
import { DevuNetworkPage } from "../pages/DevuNetworkPage/DevuNetworkPage";

export const AppRouter = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="home" element={<DevuHomePage/>} ></Route>
          <Route path="conf" element={<DevuConfPage/>} ></Route>
          <Route path="events" element={<DevuEventsPage/>} ></Route>
          <Route path="networks" element={<DevuNetworkPage/>} ></Route>
          <Route path="/*" element={<DevuHomePage/>}></Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}
