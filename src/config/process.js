import { Command } from 'commander';

const program = new Command();

program
    .option('-d', 'Varaible para debug', false)
    .option('-p <port>', 'Puerto del servidor', 8080)
    .option('--mode <mode>', 'Modo de trabajo', 'dev')
    // .option('-a --auth', 'Autenticado, no requiere permisos para utilizar endpoints')
program.parse()



export default program;