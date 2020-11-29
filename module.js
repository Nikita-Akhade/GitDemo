coursearr=[{coursename:"C language",description:"c basic concept",fees:"3000"},{coursename:"CPP ",description:"cpp programming",fees:"5000"},{coursename:"core java",description:"java concept",fees:"9000"},{coursename:"ds",description:"data structure concepts",fees:"4000"}];

exports.check=function(cname)
{
for(var i=0;i<coursearr.length;i++)
{
if(cname==coursearr[i].coursename)
{

return true;
}



}

return false;
}
