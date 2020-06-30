const express =require('express');
const app = express();
const {port} =require('./config');
const PORT =port||5000;

app.get('/',(request,response)=>{
response.send({hi:"Hi"})
})

console.log(`env listening to ${PORT}`);
app.listen(PORT);





