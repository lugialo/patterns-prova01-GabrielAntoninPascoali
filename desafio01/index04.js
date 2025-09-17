// Aplicação 04 - Factory

class Transport {
    move() {
      throw new Error("move method must be implemented");
    }
  }
  
  class Bicicleta extends Transport {
    move() {
      return "Pedalando a bicicleta no pátio da UNISATC";
    }
  }
  
  class Patinete extends Transport {
    move() {
      return "Andando de patinete pelo estacionamento da UNISATC";
    }
  }
  
  class Onibus extends Transport {
    move() {
      return "Andando de ônibus e chegando na UNISATC";
    }
  }
  
  class TransportFactory {
    static createTransport(tipo) {
      switch(tipo.toLowerCase()) {
        case "bicicleta":
          return new Bicicleta();
        case "patinete":
          return new Patinete();
        case "onibus":
          return new Onibus();
        default:
          throw new Error(`Tipo de transporte '${tipo}' não suportado`);
      }
    }
  }
  
  const tipo = "onibus";
  const transporte = TransportFactory.createTransport(tipo);
  
  console.log(transporte.move());