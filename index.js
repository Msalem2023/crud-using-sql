const mysql=require("mysql2")
const cors=require("cors")
const express=require("express")
const app=express()
const port=5000;

const connection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'salem'
})
app.use(express.json())
app.use(cors())

app.get('/users',(req,res,next)=>{
    const query="SELECT * FROM users"
    connection.query=(query,(err,result,fields)=>{
        if(err){
            return res.json({message:('excute error',err)})
        }return res.json({message:"done",result})
    })
})
app.get('/users',(req,res,next)=>{
    const query="SELECT * FROM users"
    connection.query=(query,(err,result,fields)=>{
        if(err){
            return res.json({message:('excute error',err)})
        }return res.json({message:"done",result})
    })
})
app.post('/users/update',(req,res,next)=>{
    const{name,email}=req.body
    const query=`SELECT * FROM users where email= '${email}'`
    connection.query=(query,(err,result,fields)=>{
        if(err){
            return res.json({message:('quary error',err)})
        }if(result.length){

        
            return res.json({message:"email exists",result})
            }
        const query =`INSET INTO users (name,email) values ('${name}','${email}')`
        connection.execute(query,(err,result)=>{
            if(err){
                return res.json({message:('quary error',err) })
        
        
    }return res.json({message:"done"})
})
    })
})
app.delete('/product/:id',(req,res,next)=>{
    const{id}=req.params
    const query=`DELETE FROM product WHERE id=${id}`
    connection.execute(query,(err,result)=>{
        if (err) {
            return res.json({message:"sorry"})
            
        }else{
            res.json({message:"done"})
        }
    })
})
app.get('/product',(req,res,next)=>{
    const query=`SELECT * FROM product  `
    connection.execute(query,(err,result)=>{
        if (err) {
            return res.json({message:"failed"})
            
        }else{
            return res.json({message:"done",result})
        }
    })
})
app.delete('/product/:id',(req,res,next)=>{
    const{id}=req.params
    const query=`DELETE FROM product WHERE id=${id}`
    connection.execute(query,(err,result)=>{
        if (err) {
            return res.json({message:"sorry"})
            
        }else{
            res.json({message:"done"})
        }
    })
})
app.get('/product/:id',(req,res,next)=>{
    const query=`SELECT * FROM product where id=${req.params.id}`
    connection.execute(query,(err,result)=>{
        if (err) {
            return res.json({message:"failed"})
            
        }else{
            return res.json({message:"done",product:result[0]})
        }
    })
})
app.put("/product/:id",(req,res,next)=>{
    const{name,price,description}=req.body
    const query=`Update product set name='${name}', price=${price} ,description='${description}' where id=${req.params.id}`
    connection.execute(query,(err,result)=>{
        if (err) {
            return res.json({message:"error",err})
        }else{
            return res.json ({message:"done"})
        }
    })
})
app.listen(port,()=>{
    console.log("it is working")
})