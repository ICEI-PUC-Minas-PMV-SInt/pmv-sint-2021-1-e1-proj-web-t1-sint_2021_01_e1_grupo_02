# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas a seguir:

<table>
 <tr>
  <th>Foto</th>
  <th>Nome</th>
  <th>Descrição</th>
  <th>Motivações</th>
  <th>Frustrações</th>
  <th>Hobbies, Histórias</th>
 </tr>
 <tr>
  <td><img width="600px" height="auto" src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2021-1-e1-proj-web-t1-sint_2021_01_e1_grupo_02/blob/main/docs/img/persona01.jpg"></td>
  <td>Carlos</td>
  <td>
    <ul>
       <li>35 Anos.</li>
       <li>Médico clínico geral de São Carlos - SP.</li>
    </ul>
  </td>
  <td>
   <ul>
       <li>Ajudar pessoas.</li>
       <li>Fazer a diferença no mundo.</li>
    </ul>
  </td>
  <td>
   <ul>
       <li>Desigualdade social.</li>
       <li>Poluição.</li>
    </ul>
  </td>
  <td>
   É solteiro, adora viajar hospedando-se pelo aplicativo airbnb e apaixonado por tecnologias, sempre que possível está escutando podcast no Spotify. Recentemente automatizou   toda sua casa a deixando "inteligente", sempre que possível está buscando inovações.</td>
 </tr>
 <tr>
  <td><img width="600px" height="auto" src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2021-1-e1-proj-web-t1-sint_2021_01_e1_grupo_02/blob/main/docs/img/persona.jpg"></td>
  <td>Gabi</td>
  <td>
   <ul>
    <li>40 Anos.</li>
    <li>Professora universitária na UFOP, Ouro Preto - MG.</li>
   </ul>
  </td>
  <td>
  <ul>
    <li>Inovações.</li>
    <li>Transformar o mundo.</li>
   </ul>
  </td>
  <td>
  <ul>
    <li>Desigualdade digital.</li>
   </ul>
  </td>
  <td>É casada, entusiasta por tecnologia. Em suas aulas de IA (inteligência artificial) sempre busca inspirar seus alunos com conteúdos inovadores. Sempre antenada em novidades, vive com o aplicativo do LinkedIn aberto lendo artigo ali publicados e fazendo networking. Recentemente ajudou a montar o novo laboratório de IA na universidade.</td>
 </tr>
 <tr>
  <td><img width="600px" height="auto" src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2021-1-e1-proj-web-t1-sint_2021_01_e1_grupo_02/blob/main/docs/img/persona03.jpg"></td>
  <td>Pedro Paulo</td>
  <td> 
    <ul>
       <li>45 Anos.</li>
      <li>Arquiteto renomado em Belo Horizonte - MG.</li>
   </ul>
  </td>
  <td>
   <ul>
       <li>Sustentabilidade.</li>
      <li>Torna o mundo melhor.</li>
   </ul>
  </td>
  <td>
  <ul>
      <li>Desmatamento.</li>
      <li>Queimada.</li>
     <li>Poluição.</li>
   </ul>
  </td>
  <td>É casado e sua esposa está esperando o primeiro filho do casal. Sempre busca criar seus projetos de forma sustentável, deixa claro sua preocupação com o meio ambiente. Recentemente comprou uma casa em um condomínio fechado muito conhecido na região por sua reserva ambiental.
Utiliza muito os aplicativos Strava e Relieve para registrar suas aventuras em trilhas.</td>
 </tr>
 
</table>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Administrador       | Registrar logoff do sistema        | Garantir a integridade da conta de administrador|
|Usuário do sistema  | Calcular a autonomia do veículo elétrico| Analisar o desempenho e o custo de energia|

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-006|O sistema deve funcionar em todos os principais navegadores (Chrome, mozila e Edge) |  MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
