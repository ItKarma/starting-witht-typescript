import App from './app';
import connect from './config/database';

connect()
const app = new App;
app.start();