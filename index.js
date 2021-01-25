const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const Datastore = require("nedb");
const data = require('./menu');

app.use(express.json({ limit: '25mb' }));
app.use(cors());

app.use(express.static(path.join(__dirname,"client","build")));

const db = new Datastore('reginfo.db');
db.loadDatabase();

app.post('/api/register',  (req,res) => {
  const data = req.body;
  db.findOne( { $or: [{emailid: data.emailid}, {empid: data.empid}]}, (err,docs) => {
    if (err) res.send({status: 'FAIL', msg: 'Database Fault'});
    if (docs === null){
      var todayDate = new Date().toISOString().slice(0,10);
      data.date = todayDate;
      db.insert(req.body, (err,newDoc) => {
        if (err) res.send({status: 'FAIL', msg: 'Insert Fault'});
        if (newDoc) res.send({status: 'SUCCESS', msg: newDoc._id});
      });
    }
    else res.send({status: 'FAIL', msg: 'Found user with same Email ID/Employee ID'});
  });
});

app.post('/api/login', (req,res) => {
  const data = req.body;
  db.findOne( { emailid: data.user_email}, (err,docs) => {
    if (err) res.send({status: 'FAIL', msg: 'Database Fault'});
    if (docs !== null) res.send({status: 'SUCCESS', user: docs.fullname, msg: docs.emailid});
    else res.send({status:'FAIL', msg: 'No user with Email Found'});
  });
})

app.post('/api/profile',(req,res) => {
  const data = req.body;
  db.findOne( {emailid: data.emailid}, (err,docs) => {
    if (err) res.send({msg: 'FAIL'});
    else res.send({msg: docs});
  })
})

app.get('/api/menulist',(req,res) => {
  res.send({list: data});
});

app.get('/api/dashboard',(req,res) => {
  db.find({},{photo:0},(err,docs) =>{
    if (err) res.send({msg:'Database Fault'});
    else res.send({msg:docs});
  })
})

app.get('*',(req, res,) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || 5000, () => {
	console.log("server has started on port 5000");
})