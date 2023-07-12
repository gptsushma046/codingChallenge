import express from "express";
import {router} from './router/router';

const app = express();

app.use(express.json());
app.use('/api/getPayload', router);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server listening at the ${PORT}`);
});
export default app
