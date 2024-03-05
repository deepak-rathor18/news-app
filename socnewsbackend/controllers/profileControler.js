const profileModel = require("../models/ProfileModel")


// addprofile
 
const addprofile = async(req,res)=>{
    try{
        console.log(req.body)
       
          let profile = new profileModel(req.body)
          let isSave = await profile.save()

          if(isSave)
          {
           return res.status(200).json({
                mssg:"profile added successfully",
                status:200,
                isSave
            })
          }
        
       
    }
    catch(err)
    {
        console.log(err)
        return res.status(500).json({
            mssg:"server error",
            status:500,
            err:JSON.stringify(err)

        })
    }

}
// getprofile

const getprofile = async(req,res)=>{
    try{
        console.log(req.body)
       
          let profile = await profileModel.find({})

          if(profile)
          {
           return res.status(200).json({
                mssg:"profile get successfully",
                status:200,
                profile
            })
          }
        
       
    }
    catch(err)
    {
        console.log(err)
        return res.status(500).json({
            mssg:"server error",
            status:500,
            err:JSON.stringify(err)

        })
    }

}

//   deleteprofile


const deleteprofile = async (req, res) => {
  try {
    let { id } = req.params;
    console.log(id);
    let deleteprofile = await profileModel.findByIdAndDelete(id);

    if (deleteprofile) {
      res.status(200).json({
        status: 200,
        mssg: "profile deleted successfully",
        deleteprofile,
      });
    } else {
      res.status(404).json({ // Assuming a 404 status code for "Not Found"
        status: 404,
        mssg: "profile not found",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      mssg: "Server error",
      err: err.profile, // Sending the error profile to the client
    });
  }
};




  //updateprofile 

  
  const updateprofile= async(req,res)=>{
    try{
        let {id} = req.params
        let updateprofile = await profileModel.findByIdAndUpdate(id,req.body)
        if(updateprofile)
        {
         res.status(200).json({
           status:200,
           mssg:"profile update successfully",
           updateprofile
  
         })
        }
    }
    catch(err)
    {
     console.log(err)
     res.status(500).json({
       status:500,
       mssg:"domething is wrong in current function",
       err
  
     })
    }
  }





module.exports = {addprofile,getprofile,deleteprofile,updateprofile}