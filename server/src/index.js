const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require("cors");
const authRoute = require('./routes/auth');
const exerciseRoute = require('./routes/exercise');
const adminRoute = require('./routes/admin');

const PORT = 5000;

const app = express();

//connect with database
require("./database");
app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(fileUpload({
    createParentPath: true,
    tempFileDir: "/tmp/",
    useTempFiles: true,
}
));

app.use(express.urlencoded());

app.use((request, response, next)=>{
    console.log(`${request.method}:${request.url}, Body: ${Object.keys(request.body)}`);
    next();
});

//your routes
app.use("/admin", adminRoute); ///admin/user/
app.use("/auth", authRoute);
app.use("/exercises", exerciseRoute);
app.get("/", (req, res) => {
    res.json({ message: "Express test" })
})

// app.post("/",(req, res)=>{
//     console.log(req.files, req.body)
//     const filename = Date.now() + "_" + req.files.pictures.name;
//     const file = req.files.pictures
//     let uploadPath = __dirname+"/uploads/"+filename
//     file.mv(uploadPath, (err)=>{
//          if(err){
//              return res.send(Err)
//         }
//      })
//     res.send(200);
// })

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
