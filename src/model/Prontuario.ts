import { Animal } from "./Animal";

interface Registravel {
  registrar(): void;
  atualizar(): void;
  deletar(): void;
  imprimir(): void;
  exportarCSV(): void;
  enviarEmail(): void;
}

export class Prontuario implements Registravel {
  private id: number;
  private animal: Animal;
  private observacoes: string[] = [];
  private dataCriacao: Date;
  private diagnostico?: string;
  private prescricao?: string;

  constructor(id: number, animal: Animal) {
    this.id = id;
    this.animal = animal;
    this.dataCriacao = new Date();
  }

  registrar(): void {
    console.log("Prontuário #" + this.id + " registrado.");
  }

  atualizar(): void {
    console.log("Prontuário atualizado.");
  }

  deletar(): void {
    console.log("Prontuário removido.");
  }

  exportarCSV(): void {
    console.log("Exportando prontuário para CSV.");
  }

  imprimir(): void {
    console.log(
      "Prontuário #" +
        this.id +
        " | Animal: " +
        this.animal.getNome() +
        " | Diagnóstico: " +
        (this.diagnostico ?? "Não informado") +
        " | Prescrição: " +
        (this.prescricao ?? "Não informada") +
        " | Observações: " +
        this.observacoes.join(", ") +
        " | Data de Criação: " +
        this.dataCriacao.toLocaleDateString(),
    );
  }

  enviarEmail(): void {
    console.log(
      "Enviando prontuário por email para " + this.animal.getNomeDono(),
    );
  }

  adicionarObservacao(obs: string): void {
    this.observacoes.push(obs);
  }

  getId(): number {
    return this.id;
  }

  getDiagnostico(): string | undefined {
    return this.diagnostico;
  }

  setDiagnostico(diagnostico: string): void {
    this.diagnostico = diagnostico;
  }

  setPrescricao(prescricao: string): void {
    this.prescricao = prescricao;
  }
}
