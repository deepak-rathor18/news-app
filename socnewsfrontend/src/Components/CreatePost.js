import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

function CreatePost() {

  const{userLoginData,setUserLoginData}=useContext(AppContext);
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    postId:userLoginData.id,
    postId:userLoginData.id,
    firstName:userLoginData.firstName,
    lastName:userLoginData.lastName,
    email:userLoginData.email,
    postTitle: '',
    name:'',
    postDescription: '',
    date: new Date().toDateString()
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., save data to backend
    console.log(formData);
    // Close the popup after submitting
    setIsOpen(false);
  };
  const navigate=useNavigate();

const createPost= (()=>{

    axios.post("http://localhost:4000/news/addnews",formData).then((res=>{
        if(res.data.status == 200)
        {
            toast.success("News added successfully...")
            navigate("/home")
            
    setFormData({
        postTitle: '',
        postDescription: '',
        date: '',
        postId:userLoginData.id,
        firstName:userLoginData.firstName,
        lastName:userLoginData.lastName,
        email:userLoginData.email
    })
          
        }else{
            toast.error("Something went wrong...")
        }
    })).catch((err)=>{
        console.log(err);
     
    })
    
    
})




  return (
    <div className="flex justify-center mt-8 ">

      
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Create New Post</h2>
            <form onSubmit={handleSubmit}>

              <div className="mb-4">
                <label htmlFor="postTitle" className="block text-gray-700 font-bold mb-2">Post Title</label>
                <input
                  type="text"
                  id="postTitle"
                  name="postTitle"
                  value={formData.postTitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="postDescription" className="block text-gray-700 font-bold mb-2">Post Description</label>
                <textarea
                  id="postDescription"
                  name="postDescription"
                  value={formData.postDescription}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
                <input
                  type="text"
                
                  value={formData.date}
                
                  className="w-full px-3 py-2 border rounded-md"
                  readOnly
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={createPost}    >
                  Create
                </button>
              <Link to="/home">
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
  );
}

export default CreatePost;
