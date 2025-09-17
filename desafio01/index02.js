// Aplicação 02 - Builder
class Lanche {
    constructor({nome = '', pao = false, carne = false, queijo = false, salada = false, molho = false } = {}) {
      this.nome = nome;
      this.pao = pao;
      this.carne = carne;
      this.queijo = queijo;
      this.salada = salada;
      this.molho = molho;
    }
  
    show() {
      console.log('Lanche ' + this.nome + ':', {
        pao: this.pao,
        carne: this.carne,
        queijo: this.queijo,
        salada: this.salada,
        molho: this.molho,
      });
    }
  }
  
  class LancheBuilder {
    constructor() {
      this.reset();
    }
  
    reset() {
      this.lanche = {
        nome: '',
        pao: false,
        carne: false,
        queijo: false,
        salada: false,
        molho: false
      };
      return this;
    }

    comNome(nome) {
      this.lanche.nome = nome;
      return this;
    }
  
    comPao() {
      this.lanche.pao = true;
      return this;
    }
  
    comCarne() {
      this.lanche.carne = true;
      return this;
    }
  
    comQueijo() {
      this.lanche.queijo = true;
      return this;
    }
  
    comSalada() {
      this.lanche.salada = true;
      return this;
    }
  
    comMolho() {
      this.lanche.molho = true;
      return this;
    }
  
    build() {
      const result = new Lanche(this.lanche);
      this.reset();
      return result;
    }
  }
  
  const builder = new LancheBuilder();
  
  const lancheSimples = builder
    .comNome('X-Burger')
    .comPao()
    .comCarne()
    .build();
  
  const lancheCompleto = builder
    .comNome('X-Salada')
    .comPao()
    .comCarne()
    .comQueijo()
    .comSalada()
    .comMolho()
    .build();
  
  lancheSimples.show();
  lancheCompleto.show();