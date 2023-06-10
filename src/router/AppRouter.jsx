import { Route, Routes } from "react-router-dom"
import { DevuConfPage, DevuHomePage } from "../pages"


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route index element={<DevuHomePage />} />
        <Route path="home" element={<DevuHomePage></DevuHomePage>} ></Route>
        <Route path="conf" element={<DevuConfPage></DevuConfPage>} ></Route>
      </Routes>
    </>
  )
}
