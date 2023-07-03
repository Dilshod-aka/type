import http, {Server} from 'http';
import App from './server';
import router from './router';

const app = new App(router)

const server = http.createServer(app.server)
server.listen(5555, () => console.log('server runing 5555'))

//npm init -y
//npm i express pg
//npm i --save-dev @types/express
//npm i --save-dev @types/pg