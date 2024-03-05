import React, {useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export const Profile = () => {


  const [profileData, setProfileData] = useState({
    id:'',
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber: '',
    bio: '',
    course: '',
    year: ''
  });
const navigate=useNavigate();


const [saveprofile, setSaveprofile] = useState([])



useEffect(()=>{

  let user = JSON.parse(localStorage.getItem("user"))
  // console.log(user._id)
 setProfileData({
  ...profileData,
  id:user._id,
  firstName:user.firstName,
  lastName:user.lastName,
  email:user.email,
 })
 console.log(profileData.email);

 

 // get data
 
 axios.get("http://localhost:4000/profile/getprofile").then((res=>{
  if(res.data.status == 200)
  {
    console.log(res.data.profile);
   
      setSaveprofile(res.data.profile);
      // navigate("/profile")
      

    
  }else{
      toast.error("Something went wrong...")
  }
})).catch((err)=>{
  console.log(err);

})


},[])
  const handleChange = (event) => {
    setProfileData((preData) => ({
      ...preData,
      [event.target.name]: event.target.value
  }))
    
  };

  function submitHandler(event) {
    event.preventDefault();

  axios.post("http://localhost:4000/profile/addprofile",profileData).then((res=>{
      if(res.data.status == 200)
      {
       
          setProfileData({
            id:profileData.id,
            firstName:profileData.firstName,
            lastName:profileData.lastName,
            email:profileData.email,
            phoneNumber: '',
            bio: '',
            course: '',
            year: ''
          });
          toast.success("data saved successfully...")
          navigate("/profile")
          

        
      }else{
          toast.error("Something went wrong...")
      }
  })).catch((err)=>{
      console.log(err);
   
  })
  

  }
 


  return (
    <div className='md:flex justify-center gap-[50px] '>
{saveprofile.map((profile)=>(

  profile.email === profileData.email ? 

  <div>

 
 <div className=" mt-10 p-6 bg-white rounded-lg shadow-md">
  
 <div className="mb-4">
 <h1 className="block text-gray-500 text-sm font-bold mb-2" htmlFor="name">
 <span className='  text-gray-700'>Name : {profile.id}</span> <span className='uppercase  text-indigo-500'>
 {profile.firstName} {profile.lastName}
 </span>
 </h1>
 
 </div>
 <div className="mb-4">
 <h2 className="block text-gray-700 text-sm font-extrabold mb-2" htmlFor="email">
   Email : <span className= 'text-indigo-500'>{profile.email}</span>
 </h2>
 
 </div>



 <div className="mb-4">
 <h2 className="block text-gray-700 text-sm font-extrabold mb-2" htmlFor="email">
 PhoneNumber : <span className= 'text-indigo-500'>{profile.phoneNumber}</span>
 </h2>
 
 </div>

 <div className="mb-4">
 <h2 className="block text-gray-700 text-sm font-extrabold mb-2" htmlFor="email">
   Bio : <span className= 'text-indigo-500'>{profile.bio}</span>
 </h2>
 
 </div>

 <div className="mb-4">
 <h2 className="block text-gray-700 text-sm font-extrabold mb-2" htmlFor="email">
   Course : <span className= 'text-indigo-500'>{profile.course}</span>
 </h2>
 
 </div>

 <div className="mb-4">
 <h2 className="block text-gray-700 text-sm font-extrabold mb-2" htmlFor="email">
   Year : <span className= 'text-indigo-500'>{profile.year}</span>
 </h2>
 
 </div>

 

 </div>

</div>                  :

<div>
 <div className="mt-10 p-6 bg-white rounded-lg shadow-md">

<form onSubmit={submitHandler}>
<div className="mb-4">
<h1 className="block text-gray-500 text-sm font-bold mb-2" htmlFor="name">
<span className='  text-gray-700'>Name :</span> <span className='uppercase  text-indigo-500'>
{profile.firstName} {profile.lastName}
</span>
</h1>

</div>
<div className="mb-4">
<h2 className="block text-gray-700 text-sm font-extrabold mb-2" htmlFor="email">
Email : <span className= 'text-indigo-500'>{profile.email}</span>
</h2>

</div>
<div className="mb-4">
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
Phone Number
</label>
<input
className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
id="phoneNumber"
required
type="text"
placeholder="Enter your phone number"
name="phoneNumber"
value={profileData.phoneNumber}
onChange={handleChange}
/>
</div>
<div className="mb-4">
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
Bio
</label>
<textarea
className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
id="bio"
placeholder="Enter your bio"
name="bio"
required
value={profileData.bio}
onChange={handleChange}
/>
</div>
<div className="mb-4">
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
Course
</label>
<select
className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
id="course"
name="course"
required
value={profileData.course}
onChange={handleChange}
>
<option value="">Select Course</option>
<option value="MCA">MCA</option>
<option value="BCA">BCA</option>
<option value="IMCA">IMCA</option>
</select>
</div>
{profileData.course && (
<div className="mb-4">
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
 Year
</label>
<select
 className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
 id="year"
 name="year"
 required
 value={profileData.year}
 onChange={handleChange}
>
 <option value="">Select Year</option>
 {profileData.course === "MCA" && (
   <>
     <option value="1st year">1st year</option>
     <option value="2nd year">2nd year</option>
   </>
 )}
 {profileData.course === "BCA" && (
   <>
     <option value="1st year">1st year</option>
     <option value="2nd year">2nd year</option>
     <option value="3rd year">3rd year</option>
   </>
 )}
 {profileData.course === "IMCA" && (
   <>
     <option value="1st year">1st year</option>
     <option value="2nd year">2nd year</option>
     <option value="3rd year">3rd year</option>
     <option value="4th year">4th year</option>
   </>
 )}
</select>
</div>
)}
<button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button ">
Save
</button>

</form>
</div>

</div>

 
 
 
))}

 
</div>
);
};
