import { Router } from 'express';
const adminRouter = Router();
adminRouter.get('/admin-check', (request, response) => {

    response.status(200).json({
        status: 200,
        message: "Admin route connected"
    });
})
export default adminRouter;