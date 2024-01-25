// Classe abstrata
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    som() {
        console.log("Fazendo um som genérico!");
    }
}

// Classes herdeiras
class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }

    som() {
        console.log("Latindo: Woof! Woof!");
    }
}

class Gato extends Animal {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }

    som() {
        console.log("Miando: Meow! Meow!");
    }
}

// Criando instâncias de objetos
const animalGenerico = new Animal("Animal Genérico");
const cachorro1 = new Cachorro("Buddy", "Labrador");
const gato1 = new Gato("Whiskers", "Cinza");

// Chamando métodos
animalGenerico.som();
cachorro1.som();
gato1.som();
