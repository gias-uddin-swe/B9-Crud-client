import { Outlet } from "react-router-dom";
import Navber from "../components/header/Navber";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark" : ""} dark:bg-[#0F172A] h-screen`}>
      <Navber setDarkMode={setDarkMode} darkMode={darkMode} />

      <div className="w-full  dark:bg-[#0F172A]">
        <Outlet />
      </div>

      {/* footer */}
      <div>
        <Footer />
      </div>

      <div>
        <Toaster
          toastOptions={{
            duration: 3000,
          }}
        />
      </div>
    </div>
  );
};

export default Root;
