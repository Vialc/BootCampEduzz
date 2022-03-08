import  express, { Request, Response, NextFunction }  from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import authorizationRouter from "./routes/authorization.route";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";
import jwtAuthenticationMiddleware from "./middlewares/jwt-authentication.middleware";

const app = express()

//configurações da aplicação
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//configuração de Rotas
app.use(statusRoute)
app.use(authorizationRouter)

app.use(jwtAuthenticationMiddleware)
app.use(usersRoute)


//Configuração dos Handles de Erro
app.use(errorHandler)

//Inicialização do Servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!')
})