import calculatorRouter from "./calculatorRoutes.js";

const mountRoutes = (app) => {
    app.use("/api/v1/calculator", calculatorRouter);
}

export default mountRoutes;