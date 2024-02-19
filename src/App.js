import "./style.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { PageLayout } from "./components/PageLayout.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Rules from "./pages/Rule/Rule.jsx";
import GoGame from "./pages/GoGame/GoGame.jsx";
import Register from "./pages/Register/Register.jsx";
import DowloadLauncher from "./pages/DowloadLauncher/DowloadLauncher.jsx";
import Questions from "./pages/Questions/Questions.jsx";
import TeamProject from "./pages/TeamProject/TeamProject.jsx";
import SettingsAccount from "./pages/SettingsAccount/SettingsAccount.jsx";

function App() {
  return (
    <PageLayout>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/rules" element={<Rules/>} />
          <Route path='/goGame' element={<GoGame/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/downloadLauncher' element={<DowloadLauncher />} />
          <Route path='/questions' element={<Questions />} />
          <Route path='/teamProject' element={<TeamProject/>} />
          <Route path='/settingsAccount' element={<SettingsAccount />} />
        </Routes>
    </PageLayout>
  );
}

export default App;
