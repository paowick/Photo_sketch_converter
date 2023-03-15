const express = require('express')
const spawn = require("child_process").spawn;
const app = express()
const multer  = require('multer');

app.use(express.urlencoded({extended:true}))

// Configure Multer middleware to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')  // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // Use the original file name for uploaded files
  }
});
const upload = multer({ storage: storage });

app.get('/', async (req, res) => {
    res.sendFile(`./public/index.html`,{ root: __dirname })
})

app.post('/img', upload.single('photo'),(req,res)=>{
    console.log(req.file); 
        
    const pythonProcess = spawn('python',["main.py", `./uploads/${req.file.originalname}`]);
    pythonProcess.stdout.on('data',(data)=>{
        res.sendFile(`./uploads/${req.file.originalname}.png`,{ root: __dirname })
    })

})

app.listen(8000, () => console.log('Application listening on port 8000!'))