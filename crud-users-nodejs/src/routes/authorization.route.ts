import { NextFunction, Request, Response, Router } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user.repository";
import JWT from 'jsonwebtoken'
import { StatusCodes } from "http-status-codes";
import basicAuthenticationMiddleware from "../middlewares/basic-authentication.middleware";
import jwtAuthenticationMiddleware from "../middlewares/jwt-authentication.middleware";

const authorizationRoute = Router()

authorizationRoute.post('/token/validate', jwtAuthenticationMiddleware, async(req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.OK)
})

authorizationRoute.post('/token', basicAuthenticationMiddleware, async(req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user

        if (!user) {
            throw new ForbiddenError('Usuário não informado')
        }

        const jwtPayload = { username: user.username }
        const jwtOptions = { subject: user?.uuid }
        const secretkey = 'my_secret_key'

        const jwt = JWT.sign(jwtPayload, secretkey, jwtOptions)

        res.status(StatusCodes.OK).json({ token: jwt })

    } catch (error) {
        next(error)
    }

})
 

export default authorizationRoute