const express = require ("express");

const users = require("./MOCK_DATA .json");

const app = express();

app.use(express.json());
const authorise = (permission) => {
    return (req, res, next) => {
      const originalSendFunc = res.send.bind(res);
      res.send = function (body) {
        body.api_requested_by = "Krushna Katore";
        // console.log(body); // do whatever here
        return originalSendFunc(body);
      };
      next();
    };
  };

  const logger = (req,res,next) =>{
    //   console.log(users);
       
        req.name = {api_requested_by:"Krushna Katore"}
        // console.log(req)
        // console.log({name,users})
        // res.send({name,users});
      next();
    }
  app.get("/books/:id",logger ,(req,res)=>{
    // const newUsers = req.params.id;
    let b = req.name
    const newUsers = users.map(user=>{
        if(Number(req.params.id) === Number(user.id)){
            newUsers1 = user;
            
        }
        return user;
    });
    res.send({b,newUsers1});
 
})
