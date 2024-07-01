const express = require('express');
const app = express();
const authRouter = require('./routes/user.routes');
const blogRouter = require('./routes/blogs.routes') 

const {mongoConnection} = require('./configs/mongoConnection')

app.use(express.json());
app.use(express.urlencoded())

app.use('/api/auth', authRouter);
app.use('api/blog', blogRouter);

const port = process.env.PORT;

const runApp = (port) => {
    mongoConnection().then(
        res=>{
            app.listen(port);
            console.log(`App's Server is running on PORT ${port}`)
        }
    ).catch(
        err=>{
            console.log(err)
        }
    )
};
runApp(port)