import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../Context/AppContext';

export function LatestNews({showspinner,setShowspinner}) {
const navigate=useNavigate();

    const{userLoginData,setUserLoginData}=useContext(AppContext)   //userdata
const  [news, setNews] = useState([])
    const apiCall = () => {
       
        axios.get("http://localhost:4000/news/getnews").then((res) => {
            console.log(res.data.news);
            setNews(res.data.news)
            // apiCall()
          
           
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        apiCall()
    
    }, [])


    function deleteHandler(id){
        axios.delete(`http://localhost:4000/news/deletenews/${id}`).then((res)=>{
            // console.log(res);
            toast.success("News delete successfully");
         
            apiCall()
        }).catch((err)=>{
            throw console.error(err);
             toast.error(err);
        })
      }
      
      
      const updateHandelr = (id,name,postTitle,postDescription,date)=>{
      console.log("click");
        sessionStorage.setItem("id",id);
        sessionStorage.setItem("name",name);
        sessionStorage.setItem("postTitle",postTitle);
        sessionStorage.setItem("postDescription",postDescription);
        sessionStorage.setItem("date",date);
      
      navigate("/update")
      
      
      }
    //   console.log(news.postId);   //postid
    //   console.log(userLoginData.id);   
 
  return (
    news.length===0 ? 
    (<h1 className='flex justify-center mt-[200px]'>No News Found</h1>)
    :
    news.map((news)=>(   
    <div>
  {  news.postId===userLoginData.id ?  
    
    <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
     <div className="md:flex flex-col">
       <div className="p-8">
 
 
 <div className=" tracking-wide text-sm text-gray-700 font-semibold mt-2">UserName : <span className='text-indigo-500 uppercase'>{news.firstName}  {news.lastName}</span>
    </div> 
    <div className="tracking-wide text-sm text-gray-700 font-semibold mt-2">Email : <span className='text-indigo-500'>{news.email} </span>
      </div>
   
 
 
      <div className="block mt-1 text-lg leading-tight  text-gray-700">Title : <span className='text-pink-600 font-semibold '>{news.postTitle}</span></div>
         <p className="mt-2 text-gray-600"><span className='text-gray-700'>Description : </span> {news.postDescription}</p>
         <div className="mt-4 flex justify-between items-center">
           <div className="text-sm text-gray-500">{news.date}</div>
         </div>
       </div>
       <div className='flex justify-center  gap-2 mb-5'>
       
 <button 
 onClick={()=>updateHandelr(
   news._id,
   news.name,
   news.postTitle,
   news.postDescription,
   news.date
 )}
 
 type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
 <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
 </svg>
 
 <span class="sr-only">Icon description</span>
 <span className='ml-2'>Edit</span>
 </button>
 
 
 
 
 <button class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
 onClick={()=>deleteHandler(news._id)}
 
 >
 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path  stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
 </svg>
 
 Delete
 </button>
       </div>
     </div>
   </div>   :
   
   
   <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
   <div className="md:flex flex-col">
   
   <div className="p-8">
 
 
   <div className=" tracking-wide text-sm text-gray-700 font-semibold mt-2">UserName : <span className='text-indigo-500 uppercase'>{news.firstName}  {news.lastName}</span>
    </div> 
    <div className="tracking-wide text-sm  text-gray-700 font-semibold mt-2">Email : <span className='text-indigo-500'>{news.email} </span>
    </div>
   
   
   
   
           <div className="block mt-1 text-lg leading-tight  text-gray-700">Title : <span className='text-pink-600 font-semibold'>{news.postTitle}</span></div>
        
        
        
           <p className="mt-2 text-gray-600">{news.postDescription} </p>
           <div className="mt-4 flex justify-between items-center">
             <div className="text-sm text-gray-500">{news.date}</div>
           </div>
         </div>

         </div>       </div>




}
   </div>
 
 
   
    ))
  );
}

