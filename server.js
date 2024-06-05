import chalk from "chalk";
import app from "./src/app.js";
import http from "http";

const server = http.createServer(app);
const PORT = 8080

server.listen(PORT, () => {
    console.log(chalk.blue(`Server is running on port ${PORT}`));
})