const express=require('express')
const cors=require('cors')
const app=express()
const orderRoute=require('./routes/orderRoute')

app.use(express.json())
app.use(cors({
    origin:'*'
}))
const port=5000

app.use('/api',orderRoute)
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

