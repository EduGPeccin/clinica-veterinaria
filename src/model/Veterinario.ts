import { Pessoa } from "./Pessoa";
import { Consulta } from "./Consulta";

export class Veterinario extends Pessoa {
  private crmv: string;
  private especialidade: string;
  private historicoConsultas: Consulta[] = [];
  private disponivel: boolean = true;

  constructor(
    nome: string,
    cpf: string,
    telefone: string,
    email: string,
    crmv: string,
    especialidade: string
  ) {
    super(nome, cpf, telefone, email);
    this.crmv = crmv;
    this.especialidade = especialidade;
  }

  calcularValorConsulta(tipoConsulta: string): number {
    if (this.especialidade === "clinico") {
      if (tipoConsulta === "rotina") return 150.0;
      if (tipoConsulta === "emergencia") return 300.0;
    } else if (this.especialidade === "cirurgiao") {
      if (tipoConsulta === "rotina") return 250.0;
      if (tipoConsulta === "emergencia") return 500.0;
    }

    return 0.0;
  }

  finalizarConsulta(c: Consulta): void {
    c.setStatus("finalizada");
    this.historicoConsultas.push(c);
    this.disponivel = true;
  }

  public getCrmv(): string {
    return this.crmv;
  }

  public getEspecialidade(): string {
    return this.especialidade;
  }

  public getHistoricoConsultas(): Consulta[] {
    return this.historicoConsultas;
  }

  public getDisponivel(): boolean {
    return this.disponivel;
  }

  public setDisponivel(disponivel: boolean): void {
    this.disponivel = disponivel;
  }
}
