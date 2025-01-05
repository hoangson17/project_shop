import { Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@Components/HomePage/HomePage";
import Blog from "@Components/Blog/Blog";
import routers from "@/routers/routers";
import { SideBarProvider } from "@/Context/SideBarProvider";
import SideBar from "@Components/SideBar/SideBar";

function App() {
  return (
    <SideBarProvider>
      <SideBar/>

      <BrowserRouter>
        <Suspense fallback={<div>loading....</div>}>
          <Routes>
            {routers.map((item, index) => (
              <Route
                path={item.path}
                element={<item.components />}
                key={index}
              />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </SideBarProvider>
  );
}

export default App;
