import { useState } from 'react'
import conf from './conf/conf';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login,logout } from './store/authSlice';
import { Footer,Header} from './components/index';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading,setLoading]=useState(false)
  const dispatch= useDispatch()

  useEffect(() => {
  authService.getCurrentUser().then((useData)=>{
    if(useData){
      dispatch(login({useData}))
    }
    else{
      dispatch(logout())
    }
  }).finally(()=>setLoading(false))
  }, [])
  
 
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        
        <Header />
        bk
        <Footer />
      </div>
    </div>
  ) : null
}


export default App
