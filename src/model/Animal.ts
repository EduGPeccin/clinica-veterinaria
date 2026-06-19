type Especie = "cachorro" | "gato" | "passaro" | "reptil";
type Porte = "pequeno" | "medio" | "grande";

export class Animal {
  nome: string;
  idade: number;
  peso: number;
  especie: Especie;
  porte: Porte;
  nomeDono: string;
  telefoneDono: string;
  cpfDono: string;
  raca:string;
  pelagem: string;

  constructor(
    nome: string,
    idade: number,
    peso: number,
    especie: Especie,
    porte: Porte,
    nomeDono: string,
    telefoneDono: string,
    cpfDono: string,
    raca:string,
    pelagem: string,
  ) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.especie = especie;
    this.porte = porte;
    this.nomeDono = nomeDono;
    this.telefoneDono = telefoneDono;
    this.cpfDono = cpfDono;
    this.raca = raca;
    this.pelagem = pelagem;
  }

 getCategoriaVacina(): string {
  if (this.especie === "cachorro") {
    if (this.porte === "pequeno") return "V8-pequeno";
    if (this.porte === "medio") return "V8-medio";
    return "V10-grande";
  }

  if (this.especie === "gato") {
    return "V4-felino";
  }

  if (this.especie === "passaro") {
    return "Vacina para aves";
  }

  if (this.especie === "reptil") {
    return "Vacina para répteis";
  }

  return "Categoria não definida";
}

  imprimirFicha(): void {
    console.log("========== FICHA DO ANIMAL ==========");
    console.log("Nome   : " + this.nome);
    console.log("Espécie: " + this.especie);
    console.log("Porte  : " + this.porte);
    console.log("Peso   : " + this.peso + " kg");
    console.log("Idade  : " + this.idade + " anos");
    console.log("Raça   : " + this.raca);
    console.log("Pelagem: " + this.pelagem);
    console.log(
      "Dono   : " +
        this.nomeDono +
        " | CPF: " +
        this.cpfDono +
        " | Tel: " +
        this.telefoneDono
    );
    console.log("=====================================");
  }
}
