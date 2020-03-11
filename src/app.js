import express from 'express';
import cors from 'cors';
import path from 'path';

import adminRoutes from './routes/adminRoutes';
import userRoutes from './routes/userRoutes';
import indexRoutes from './routes/indexRoutes'

const app = express();
const PORT = process.env.PORT | 3000;

app.use(cors());
app.use(express.static(path.join(__diraname, '../pubilc')));
app.use(indexRoutes);
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log(`Application is runnig on port ${PORT}`);
});

export default app