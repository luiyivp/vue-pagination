import express from 'express';
import cors from 'cors';

const app = express();

import './database';
import articleRoutes from './routes/index';

app.use(cors());

app.use('/api', articleRoutes);

app.listen(3000, () => {
    console.log('Server on port 3000');
});
