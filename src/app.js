const express=require('express')
const app=express()
const hbs=require('hbs')
const path=require('path')
const User=require('./models/user')

const port=process.env.PORT || 8000
require('./db/conn')

// Static File-for css too
app.use(express.static(path.join(__dirname,'../public')));

// Directory
const viewpath=path.join(__dirname,'./templates/views')
const parpath=path.join(__dirname,'./templates/partials') 

// Form data
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 

// set view engine
app.set('view engine','hbs')
app.set('views',viewpath)
 
//partials
hbs.registerPartials(parpath)

// Endpoints
app.get('/',(req,res)=>{
    res.render('home')
})

app.post('/contact',async(req,res)=>{
try {
        const userData=new User(req.body)
       const data= await userData.save()
       console.log(data)
       res.status(200).render('home')
} catch (error) {
    res.status(404).send('Some error Occured')
}
})

app.listen(port,()=>{
    console.log('Server Working')
});