import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Updatenews = () => {
const navigate=useNavigate();
    const [isOpen, setIsOpen] = useState(true);

    const [postData, setPostData] = useState({
        id:"",
        postTitle:"",
        postDescription:"",
        date:""
    })
    
    
    
    useEffect(() => {
    setPostData({
        id:sessionStorage.getItem("id"),
        name:sessionStorage.getItem("name"),
        postTitle:sessionStorage.getItem("postTitle"),
        postDescription:sessionStorage.getItem("postDescription"),
        date:sessionStorage.getItem("date")
    
    })
    
    
    }, [])

      
function handleUpdate(e){
e.preventDefault();
    axios.put(`http://localhost:4000/news/updatenews/${postData.id}`,postData).then((res=>{
        console.log(res);
        console.log(postData.id);
        if(res.data.status == 200)
        {
            toast.success("News update successfully...")
            navigate("/home");
            
  
          
        }else{
            toast.error("Something went wrong...")
        }
    })).catch((err)=>{
        console.log(err);
     
    })

  }

function changeHandler(event){

  const {name,value}=event.target;
  setPostData({
      ...postData,
      [name]:value
  })
};

  return (
   <>
   <div className="flex justify-center mt-8">
   {isOpen && (
     <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
       <div className="bg-white p-6 rounded-lg shadow-md">
         <h2 className="text-lg font-semibold mb-4">Update News</h2>
         <form >
           <div className="mb-4">
             <label htmlFor="postTitle" className="block text-gray-700 font-bold mb-2">Post Title</label>
             <input
               type="text"
               id="postTitle"
               name="postTitle"
               value={postData.postTitle}
               onChange={changeHandler}
               className="w-full px-3 py-2 border rounded-md"
               required
             />
           </div>

           <div className="mb-4">
             <label htmlFor="postDescription" className="block text-gray-700 font-bold mb-2">Post Description</label>
             <textarea
               id="postDescription"
               name="postDescription"
               value={postData.postDescription}
               onChange={changeHandler}
               className="w-full px-3 py-2 border rounded-md"
               rows="4"
               required
             ></textarea>
           </div>
       
           <div className="flex justify-end">
             <button
             onClick={handleUpdate}
               type="submit"
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
           >
            Update
             </button>
         <Link to="/home" >
         <button
         type="button"
         className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
         onClick={() => setIsOpen(false)}
       >
         Cancel
       </button>
         </Link>
           </div>
         </form>
       </div>
     </div>
   )}
 </div>
   </>
   );
  };