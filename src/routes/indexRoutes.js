import { Router } from 'express';
import apiList from '../libs/apiList';
const indexRouter = Router();

indexRouter.get('/', (request, response) => {
    response.status(200).json({
        ...apiList
    });
});

export default indexRouter;