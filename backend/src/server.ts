import cors from '@fastify/cors';
import fastify from 'fastify';
import { inventoryRoutes } from './routes/inventory';

const app = fastify()

app.register(cors, {
  origin: true,
});

app.register(inventoryRoutes)

app
  .listen({
    port: 5175,
    host: '192.168.15.141',
  })
  .then(() => {
    console.log('HTTP server running on http://192.168.15.141:5175')
  })