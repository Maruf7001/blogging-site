import express from 'express';
import 'dotenv/config';
import cors from 'cors'


const app = express();


//Middleware setup

app.use(express.json());
app.use(cors());


//Routes

app.get('/', (req, res) => res.send('API is working') )


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => 

    console.log("Server is running on PORT:" + PORT)
    
);