// Aplicação 01 - Singleton
console.log("Aplicação 01 - Singleton");
class Config {
    constructor() {
      if (Config.instance) {
        return Config.instance;
      }
      
      this.settings = {};
      Config.instance = this;
    }
  
    static getInstance() {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }
  
    setConfig(key, value) {
      this.settings[key] = value;
    }
  
    getConfig(key) {
      return this.settings[key];
    }
  }
  
  const c1 = new Config();
  c1.setConfig("lang", "pt-BR");
  
  const c2 = new Config();
  console.log(c2.getConfig("lang"));
  
  const c3 = Config.getInstance();
  console.log(c3.getConfig("lang"));

  if (c1 === c2 && c1 === c3 && c2 === c3) {
    console.log(
        'Singleton funcionou, pois as variáveis estão usando a mesma instância.'
    );
  } else {
    console.log('Singleton falhou, pois as variáveis não estão usando a mesma instância.');
  }