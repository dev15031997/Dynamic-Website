const mongoose=require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/project',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('successfull connection')
}).catch((err)=>{
    console.log('some error occured', err)
})
