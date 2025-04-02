export default {
  client: "sqlite3",  // Define o SQLite3 como banco de dados
  connection: {
    filename: "./src/database/database.db", // Caminho do arquivo SQLite
  },
  pool: {
    afterCreate: (connection: any, done: any) => {
      connection.run("PRAGMA foreign_keys = ON"); // Ativa chaves estrangeiras
      done();
    },
  },
  useNullAsDefault: true, // Garante que colunas sem valores padrão recebam NULL
  migrations: {
    extensions: "ts", // Especifica que as migrações são arquivos TypeScript
    directory: "./src/database/migrations", // Diretório das migrações
  },
  seeds: {
    extensions: "ts", // Especifica que os seeds são arquivos TypeScript
    directory: "./src/database/seeds", // Diretório dos seeds
  },
};
