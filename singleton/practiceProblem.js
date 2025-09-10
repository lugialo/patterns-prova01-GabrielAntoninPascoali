// Classe Database
class Database {
  constructor(connectionString) {
    this.connectionString = connectionString;
    this.id = Math.random();
    console.log(`🔌 Nova conexão criada: ${this.id}`);
  }

  query(sql) {
    console.log(`Executando query [${sql}] na conexão ${this.id}`);
  }
}

// Cliente cria várias conexões (mesmo que não precise)
const db1 = new Database("db://meu-banco");
db1.query("SELECT * FROM users");

const db2 = new Database("db://meu-banco");
db2.query("SELECT * FROM products");

if (db1 === db2) {
  console.log(
      'Singleton funcionou, pois as variáveis estão utilizando a mesma instância.'
  );
} else {
  console.log('Singleton falhou, pois as variáveis não estão usando a mesma instância.');
}
