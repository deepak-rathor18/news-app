import { Navigate, Route, Routes } from 'react-router-dom';
import  {Navbar} from './Components/Navbar';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';
import { Profile } from './Pages/Profile';
import { useEffect, useState } from 'react';
import { Privateroute } from './Components/Privateroute';
import { About } from './Pages/About';
import { ContactUs } from './Pages/ContactUs';
import CreatePost from './Components/CreatePost';
import { PrivateroutePost } from './Components/PrivateroutePost';
import { Updatenews } from './Components/Updatenews';
import { PrivaterouteUpdate } from './Components/PrivaterouteUpdate';
import { PrivaterouteHome } from './Components/PrivaterouteHome';
import { Privateroutecontact } from './Components/Privateroutecontact';
import { PrivaterouteAbout } from './Components/PrivaterouteAbout';




function App(props) {

  const [isLoggedIn, setIsLoggedIn] = useState("token")
  


  useEffect(()=>{
let token =localStorage.getItem("token")

setIsLoggedIn(token)
  },[])

  const [childData, setChildData] = useState('');

  const handleChildData = (data) => {
    setChildData(data);
  };
  return (
    <div className='w-full h-fullflex flex-col'>
    <div className='bg-emerald-900'>
    <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />
    </div>
      <Routes>
  
      <Route path='/' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} sendDataToParent={handleChildData}/>}/>
    

      
   <Route path='/home' element={
    
    <PrivaterouteHome isLoggedIn={isLoggedIn}>
    
   <Home/>
  
    </PrivaterouteHome>

       
  }/>

  <Route path='/about' element={
    
    <PrivaterouteAbout isLoggedIn={isLoggedIn}>
   
   <About/>
  
    </PrivaterouteAbout>

       
  }/>

  <Route path='/contactus' element={
    
    <Privateroutecontact isLoggedIn={isLoggedIn}>
    
  
   <ContactUs/>
    </Privateroutecontact>

       
  }/>
 
   <Route path='/profile' element={
    
   <Privateroute isLoggedIn={isLoggedIn}>
   
   <Profile />
   </Privateroute>

   
  }/>







 
   <Route path='/createPost' element={
    
    <PrivateroutePost isLoggedIn={isLoggedIn}>
    <CreatePost/>
    
  
    </PrivateroutePost>
 
    
   }/>


      <Route path='/update' element={
    
    <PrivaterouteUpdate isLoggedIn={isLoggedIn}>
   
    <Updatenews/>
  
    </PrivaterouteUpdate>
 
    
   }/>
 
 
 
       </Routes>
     
    </div>
  );
}

export default App;
