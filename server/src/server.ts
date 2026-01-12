import app from './app.js'
import testDirectConnection from './config/dbConnection.js';
import  { env } from './config/env.js'

testDirectConnection();

app.listen(env.PORT, () => {
    console.log(`Server is running on port: ${env.PORT} `);
})