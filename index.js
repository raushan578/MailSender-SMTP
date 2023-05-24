const  express = require('express');
const appRoute = require('./Route/route');
 const app = express();
  const PORT = 4000;
  app.use(express.json());
  app.use('/api',appRoute)
 app.listen(PORT,()=>{
    console.log('Server is running on http://localhost:'+PORT);
 })