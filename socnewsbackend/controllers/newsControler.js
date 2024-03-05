const newsModel = require("../models/newsModel")


// addnews
 
const addnews = async(req,res)=>{
    try{
        console.log(req.body)
       
          let news = new newsModel(req.body)
          let isSave = await news.save()

          if(isSave)
          {
           return res.status(200).json({
                mssg:"news added successfully",
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
// getnews

const getnews = async(req,res)=>{
    try{
        console.log(req.body)
       
          let news = await newsModel.find({})

          if(news)
          {
           return res.status(200).json({
                mssg:"news get successfully",
                status:200,
                news
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

//   deletenews


const deletenews = async (req, res) => {
  try {
    let { id } = req.params;
    console.log(id);
    let deletenews = await newsModel.findByIdAndDelete(id);

    if (deletenews) {
      res.status(200).json({
        status: 200,
        mssg: "news deleted successfully",
        deletenews,
      });
    } else {
      res.status(404).json({ // Assuming a 404 status code for "Not Found"
        status: 404,
        mssg: "news not found",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      mssg: "Server error",
      err: err.news, // Sending the error news to the client
    });
  }
};




  //updatenews 

  
  const updatenews= async(req,res)=>{
    try{
        let {id} = req.params
        let updatenews = await newsModel.findByIdAndUpdate(id,req.body)
        if(updatenews)
        {
         res.status(200).json({
           status:200,
           mssg:"news update successfully",
           updatenews
  
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





module.exports = {addnews,getnews,deletenews,updatenews}