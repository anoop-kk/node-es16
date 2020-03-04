import { Router } from 'express';
const userRouter = Router();

userRouter.get('/user-check', (request, response) => {
    response.status(200).json({
        status: 200,
        message: "User route connected"
    })
})

export default userRouter;