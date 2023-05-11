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
            res.json({ result: 'SUCCESS', token:'wardenwarden', id:data[0].id});
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
            res.json({ result: 'SUCCESS', token:'studentstudent', id: data[0].id});
        } else {
            res.json({ result: 'ERROR', message: "User id or password is not correct!" });
        }
    });
})
app.post('/student-register',async (req,res)=>{
    const user = {
        name:req.body.name,
        dob:req.body.dob,
        gender:req.body.gender,
        email:req.body.email,
        mobile:req.body.mobile,
        bloodgroup:req.body.bloodgroup,
        clgname:req.body.clgname,
        rollno:req.body.rollno,
        degree:req.body.degree,
        year:req.body.year,
        semester:req.body.semester,
        joindate:req.body.joindate,
        country:req.body.country,
        city:req.body.city,
        address:req.body.address,
        pcode:req.body.pcode,
        fname:req.body.fname,
        fphone:req.body.fphone,
        foccupation:req.body.foccupation,
        mname:req.body.mname,
        mphone:req.body.mphone,
        moccupation:req.body.moccupation,
        password:req.body.password
    }
    db.query("insert into student (name,dob,gender,email,mobile,bloodgroup,college,rno,deg,year,sem,doj,country,city,address,pin,father,fathermobile,fatherocc,mother,mothermobile,motherocc,password,approved) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,0)", [user.name,user.dob,user.gender,user.email,user.mobile,user.bloodgroup,user.clgname,user.rollno,user.degree,user.year,user.semester,user.joindate,user.country,user.city,user.address,user.pcode,user.fname,user.fphone,user.foccupation,user.mname,user.mphone,user.moccupation,user.password],(err,data)=>{
        if(err) console.log(err);
        console.log(user);
        res.send({message:"SUCCESS"})
    })
})
app.get('/admin/approval',async (req,res)=>{
    db.query("select * from warden where approved=0", (err, data) => {
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
    db.query("update warden set approved=1 where id=?",[user.id], (err, data) => {
        db.query("insert into wardenauth (username,password) values (?,?)",[user.uname,user.pwd], (err, data) => {});
    });
    
})
app.get('/warden/approval/:id',async (req,res)=>{
    db.query("select * from student where approved=0", (err, data) => {
        if (data.length > 0) {
            res.json(data);
        } else {
            res.json({message:"Nothing"})
        }
    });
})
app.post('/warden/approval/:id',async(req,res)=>{
    const user = {
        id:req.body.id,
        uname: req.body.uname,
        pwd: req.body.pwd
    }
    db.query("update student set approved=1 where id=?",[user.id], (err, data) => {
        db.query("insert into studentauth (username,password) values (?,?)",[user.uname,user.pwd], (err, data) => {});
    });
    
})
app.get('/admin/room-enable',async(req,res)=>{
    db.query("select value from roomenable where id=1",(err,data)=>{
        if(data[0].value == 1){
            res.json({message: "enabled"})
        }else{
            res.json({message:"disabled"})
        }
    })
})
app.post('/admin/room-enable',async(req,res)=>{
    db.query("update roomenable set value=? where id=1",[req.body.value],(err,data)=>{
        res.json("SUCCESS");
    })
})
app.get('/student/room/:id',async(req,res)=>{
    db.query("select roomid from hostelstudent where studentid=?",[req.params.id],(err,data)=>{
        if(data.length > 0){
            db.query("select * from hostelvacancy where id=?",[data[0].roomid],(err,data)=>{
                res.json(data[0]);
            })
        }else{
            res.json({message: "NA"})
        }
    })
})
app.post('/student/room/:id',async(req,res)=>{
    const hostel = req.body.hostel;
    const room = req.body.room;
    const id = req.params.id;
    db.query("select id,vacancy from hostelvacancy where hostel=? and room=?",[hostel,room],(err,data)=>{
        const roomid = data[0].id;
        if(data[0].vacancy > 0 ){
            db.query("update hostelvacancy set vacancy=vacancy-1 where hostel=? and room=?",[hostel,room],(err,data)=>{
                db.query("insert into hostelstudent (roomid,studentid) values (?,?)",[roomid,id],(err,data)=>{
                    res.json({message:"SUCCESS"})
                })
            })
        }else{
            res.json({message:"NA"});
        }
    })
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