var express=require("express");
var app=express();
var body_parser=require("body-parser");
app.use(body_parser.urlencoded({extended:false}));

var displayform=function(req,resp){
resp.sendFile("login.html",{root:__dirname});

}
var Authenticate=function(req,resp){
resp.end(req.body.uname+"------->"+req.body.pass);


}
app.get("/login",Authenticate);
app.get("/",displayform);
app.listen(3002,function(){
console.log("server started at 3000");
});
