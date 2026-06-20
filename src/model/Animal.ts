type Especie = "cachorro" | "gato" | "passaro" | "reptil";
type Porte = "pequeno" | "medio" | "grande";

export class Animal {
  private nome: string;
  private idade: number;
  private peso: number;
  private especie: Especie;
  private porte: Porte;
  private nomeDono: string;
  private telefoneDono: string;
  private cpfDono: string;
  private raca: string;
  private pelagem: string;

  constructor(
    nome: string,
    idade: number,
    peso: number,
    especie: Especie,
    porte: Porte,
    nomeDono: string,
    telefoneDono: string,
    cpfDono: string,
    raca: string,
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

  public getNome(): string {
    return this.nome;
  }

  public getIdade(): number {
    return this.idade;
  }

  public getPeso(): number {
    return this.peso;
  }

  public getEspecie(): Especie {
    return this.especie;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public setIdade(idade: number): void {
    if (idade >= 0) {
      this.idade = idade;
    }
  }

  public setPeso(peso: number): void {
    if (peso > 0) {
      this.peso = peso;
    }
  }

  public getNomeDono(): string {
    return this.nomeDono;
  }

  public getCategoriaVacina(): string {
    if (this.especie === "cachorro") {
      if (this.porte === "pequeno") return "V8-pequeno";
      if (this.porte === "medio") return "V8-medio";
      return "V10-grande";
    }

    if (this.especie === "gato") return "V4-felino";
    if (this.especie === "passaro") return "Vacina para aves";
    if (this.especie === "reptil") return "Vacina para répteis";

    return "Categoria não definida";
  }

  public imprimirFicha(): void {
    console.log("========== FICHA DO ANIMAL ==========");
    console.log("Nome   :", this.nome);
    console.log("Espécie:", this.especie);
    console.log("Porte  :", this.porte);
    console.log("Peso   :", this.peso, "kg");
    console.log("Idade  :", this.idade, "anos");
    console.log("Raça   :", this.raca);
    console.log("Pelagem:", this.pelagem);
    console.log("Vacina :", this.getCategoriaVacina());
    console.log("=====================================");
  }
}
