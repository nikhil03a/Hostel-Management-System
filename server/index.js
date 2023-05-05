import express from 'express'
import moment from 'moment'
import mysql from 'mysql2'
import bodyParser from 'body-parser'
const app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
})
app.use(express.json());
app.use(bodyParser.json())
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "abcd1234",
    database: "hostel"
})
app.post('/admin/login', async (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    };
    db.query("select id from adminauth where username=? and password=? limit 1", [user.username, user.password], (err, data) => {
        if (data.length > 0) {
            res.json({ result: 'SUCCESS', token:'adminadmin' });
        } else {
            res.json({ result: 'ERROR', message: "User id or password is not correct!" });
        }
    });
})
app.post('/warden/login', async (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    };
    db.query("select id from wardenauth where username=? and password=? limit 1", [user.username, user.password], (err, data) => {
        if (data.length > 0) {
            res.json({ result: 'SUCCESS', token:'wardenwarden' });
        } else {
            res.json({ result: 'ERROR', message: "User id or password is not correct!" });
        }
    });
})
app.post('/student/login', async (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    };
    db.query("select id from studentauth where username=? and password=? limit 1", [user.username, user.password], (err, data) => {
        if (data.length > 0) {
            res.json({ result: 'SUCCESS', token:'studentstudent' });
        } else {
            res.json({ result: 'ERROR', message: "User id or password is not correct!" });
        }
    });
})
app.get('/admin/approval',async (req,res)=>{
    db.query("select * from wardendetails where approved=0", (err, data) => {
        if (data.length > 0) {
            res.json(data);
        } else {
            res.json({message:"Nothing"})
        }
    });
})
app.post('/admin/approval',async(req,res)=>{
    const user = {
        id:req.body.id,
        uname: req.body.uname,
        pwd: req.body.pwd
    }
    db.query("update wardendetails set approved=1 where id=?",[user.id], (err, data) => {
        db.query("insert into wardenauth (username,password) values (?,?)",[user.uname,user.pwd], (err, data) => {});
    });
    
})
app.get("/student", (req, res) => {
    const q = "select * from student";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        else return res.json(moment(data[0].dob).utc().format('DD/MM/YYYY'));
    })
})
app.listen(8800, () => {
    console.log("Connected to Backend");
})