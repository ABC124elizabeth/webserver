require('dotenv').config();
const express =require('express');
const mongoose =require('mongoose');
const cors = require('cors');
const recipesRouter = require('./controllers/recipes');

const app = express();
const PORT =process.env.PORT// 3000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('Connected to mongoDB'))
.catch(err =>console.error('mongoDB connection error:',err)
);

app.use(cors());
app.use(express.json());

app.use('/api/recipes,' recipesRouter);
app.listen(PORT, () =>{
  conasole.log('server running on port ${PORT'}
);