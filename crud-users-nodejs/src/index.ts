import  express, { Request, Response, NextFunction }  from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express()

//configurações da aplicação
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//configuração de Rotas
app.use(usersRoute)
app.use(statusRoute)

//Configuração dos Handles de Erro
app.use(errorHandler)

//Inicialização do Servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!')
})