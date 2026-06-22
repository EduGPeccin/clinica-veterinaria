import { Animal } from "./Animal";

type StatusConsulta = "agendada" | "finalizada" | "cancelada";

export class Consulta {
  private id: number;
  private animal: Animal;
  private veterinario: string;
  private dataHora: Date;
  private status: StatusConsulta;
  private motivoCancelamento?: string;
  private valorConsulta: number;
  private formaPagamento?: string;
  private pago: boolean;

  constructor(
    id: number,
    animal: Animal,
    veterinario: string,
    dataHora: Date,
    valorConsulta: number,
  ) {
    if (!animal) {
      throw new Error("Animal inválido");
    }

    if (valorConsulta < 0) {
      throw new Error("Valor da consulta inválido");
    }

    if (!veterinario || veterinario.trim().length === 0) {
      throw new Error("Veterinário inválido");
    }
    this.id = id;
    this.animal = animal;
    this.veterinario = veterinario;
    this.dataHora = dataHora;
    this.valorConsulta = valorConsulta;
    this.status = "agendada";
    this.pago = false;
  }

  public getId(): number {
    return this.id;
  }

  public getStatus(): StatusConsulta {
  return this.status;
}

  public getValorConsulta(): number {
    return this.valorConsulta;
  }

  public getAnimal(): Animal {
    return this.animal;
  }

  public getVeterinario(): string {
    return this.veterinario;
  }

  public getDataHora(): Date {
    return this.dataHora;
  }

  public getFormaPagamento(): string | undefined {
    return this.formaPagamento;
  }

  public isPago(): boolean {
    return this.pago;
  }

  public getMotivoCancelamento(): string | undefined {
    return this.motivoCancelamento;
  }

  public setVeterinario(veterinario: string): void {
    if (veterinario.trim().length > 0) {
      this.veterinario = veterinario;
    }
  }

  public setStatus(status: StatusConsulta): void {
  if (this.status === "finalizada") {
    throw new Error("Consulta finalizada não pode ser alterada");
  }

  this.status = status;
}

  public registrarPagamento(forma: string): void {
    const formasValidas = ["pix", "cartao", "dinheiro"];

    if (!formasValidas.includes(forma)) {
      throw new Error("Forma de pagamento inválida");
    }
    this.formaPagamento = forma;
    this.pago = true;
  }

  public cancelar(motivo: string): void {
    this.setStatus("cancelada");
    this.motivoCancelamento = motivo;
  }

  public imprimirResumo(): void {
    console.log(
      "[Consulta #" +
        this.id +
        "] " +
        this.animal.getNome() +
        " | Vet: " +
        this.veterinario +
        " | Status: " +
        this.status +
        " | Valor: R$" +
        this.valorConsulta +
        " | Pago: " +
        (this.pago ? "Sim" : "Não"),
    );
  }
}
