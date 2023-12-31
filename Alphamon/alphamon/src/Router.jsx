import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Main from '../src/pages/Main/Main';
import Test from '../src/pages/Test';
import Start from '../src/pages/start/start_z'
import Login from '../src/pages/LoginJoin/login_z'
import Join from '../src/pages/LoginJoin/memjoin_z'
import Cmain from '../src/pages/community/Cmain'
import Post from '../src/pages/community/Post'
import Mypage from '../src/pages/mypage/mypage'
import Starter from '../src/pages/starter_guide'
import Chatbot from '../src/pages/chatbot'
import Model from './pages/Model/Model';
import Modela from './pages/Model/Modela';
import Modelaa from './pages/Model/Modelaa';
import Modelaaa from './pages/Model/Modelaaa';
import Modelb from './pages/Model/Modelb';
import Modelc from './pages/Model/Modelc';
import Modelcc from './pages/Model/Modelcc';
import Modelccc from './pages/Model/Modelccc';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/main" element={<Main />} />  
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/cmain" element={<Cmain />} />
        <Route path="/post/:postId" element={<Post />} /> 
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/starter" element={<Starter/>} />
        <Route path='/chatbot' element={<Chatbot/>} />
        <Route path='/model' element={<Model/>} />
        <Route path='/modela' element={<Modela/>} />
        <Route path='/modelaa' element={<Modelaa/>} />
        <Route path='/modelaaa' element={<Modelaaa/>} />
        <Route path='/modelb' element={<Modelb/>} />
        <Route path='/modelc' element={<Modelc/>} />
        <Route path='/modelcc' element={<Modelcc/>} />
        <Route path='/modelccc' element={<Modelccc/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
