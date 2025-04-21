import express from 'express';
import cors from 'cors';
import multer from 'multer';

const upload = multer({dest : '/uploads'});

const app = express()
app.use(cors());

app.get('/',(req,res)=>{
    return res.json({"status" : "All Godd!"})
});

app.post('/upload/pdf', upload.single('pdf'), (req,res)=>{
    return response.json({"status" : "uploaded"});
});

app.listen(8000, ()=>{console.log("App is listening on http://localhost:8000")});