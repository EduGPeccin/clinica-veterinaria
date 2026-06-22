import { ClinicaService } from "./service/ClinicaService";
import { Veterinario } from "./model/Veterinario";
import { Prontuario } from "./model/Prontuario";
import { Estoque } from "./model/Estoque";
import { Animal } from "./model/Animal";
import { Pessoa } from "./model/Pessoa";

class Main {
  static main(): void {
    const clinica = new ClinicaService();

    // ---- Cadastro de veterinários ----------------------------------------
    const v1 = new Veterinario(
      "Dr. Carlos",
      "12345678901",
      "51999990001",
      "carlos@clinica.com",
      "CRMV-1234",
      "clinico",
    );
    const v2 = new Veterinario(
      "Dra. Ana",
      "98765432100",
      "51999990002",
      "ana@clinica.com",
      "CRMV-5678",
      "cirurgiao",
    );

    const c1 = new Pessoa(
      "João Silva",
      "11122233344",
      "51988880001",
      "joao@dominio.com"
    );

    const c2 = new Pessoa(
      "Maria Souza",
      "55566677788",
      "51988880002",
      "maria@dominio.com"
    );

    clinica.getVeterinarios().push(v1);
    clinica.getVeterinarios().push(v2);

    // ---- Cadastro de animais ---------------------------------------------
    const dog = new Animal(
      "Rex",
      5,
      20.0,
      "cachorro",
      "grande",
      c1,
      "Labrador",
      "curta",
    );

    const cat = new Animal(
      "Mimi",
      3,
      4.5,
      "gato",
      "pequeno",
      c2,
      "Siamês",
      "longa",
    );

    clinica.getAnimais().push(dog);
    clinica.getAnimais().push(cat);

    // ---- Agendamento -----------------------------------------------------
    const co1 = clinica.agendarConsulta("Rex", "Dr. Carlos", new Date());
    const co2 = clinica.agendarConsulta("Mimi", "Dra. Ana", new Date());

    // ---- Pagamento -------------------------------------------------------
    co1.registrarPagamento("pix");

    try {
      co2.registrarPagamento("Cartao");
    } catch (e) {
      console.log("Erro no pagamento: " + (e as Error).message);
    }

    // ---- Desconto --------------------------------------------------------
    const desconto = clinica.calcularDesconto(co1);
    console.log("Desconto para Rex: R$" + desconto);

    // ---- Prontuário ------------------------------------------------------
    const p = new Prontuario(1, dog);
    p.setDiagnostico("Otite leve");
    p.setPrescricao("Antifúngico tópico");
    p.adicionarObservacao("Animal agitado durante consulta");
    p.enviarEmail();

    // ---- Estoque ---------------------------------------------------------
    const estoque = new Estoque();
    const med = new Estoque.Medicamento(
      "Amoxicilina",
      "antibiotico",
      25.0,
      4,
      "2025-12-01",
    );
    estoque.adicionar(med);

    estoque.alertarEstoqueBaixo();

    estoque.getItens().splice(0);
    console.log("Itens após clear externo: " + estoque.itens.length);

    // ---- Relatórios ------------------------------------------------------
    clinica.gerarRelatorioConsultas();
    clinica.gerarRelatorioAnimais();

    // ---- Cancelamento -------------------------------
    clinica.cancelarConsulta(999, "ID inexistente");
  }
}

Main.main();
