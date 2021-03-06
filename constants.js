// @flow
import * as d3 from "d3";

export type TrackId =
  | "MOBILE"
  | "WEB_CLIENT"
  | "FOUNDATIONS"
  | "SERVERS"
  | "PROJECT_MANAGEMENT"
  | "COMMUNICATION"
  | "CRAFT"
  | "INITIATIVE"
  | "CAREER_DEVELOPMENT"
  | "ORG_DESIGN"
  | "WELLBEING"
  | "ACCOMPLISHMENT"
  | "MENTORSHIP"
  | "EVANGELISM"
  | "RECRUITING"
  | "COMMUNITY";
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5;

export type MilestoneMap = {
  MOBILE: Milestone,
  WEB_CLIENT: Milestone,
  FOUNDATIONS: Milestone,
  SERVERS: Milestone,
  PROJECT_MANAGEMENT: Milestone,
  COMMUNICATION: Milestone,
  CRAFT: Milestone,
  INITIATIVE: Milestone,
  CAREER_DEVELOPMENT: Milestone,
  ORG_DESIGN: Milestone,
  WELLBEING: Milestone,
  ACCOMPLISHMENT: Milestone,
  MENTORSHIP: Milestone,
  EVANGELISM: Milestone,
  RECRUITING: Milestone,
  COMMUNITY: Milestone,
};
export const milestones = [0, 1, 2, 3, 4, 5];

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 2:
      return 3;
    case 3:
      return 6;
    case 4:
      return 12;
    case 5:
      return 20;
    default:
      return 0;
  }
};

export const pointsToLevels = {
  "0": "1.1",
  "5": "1.2",
  "11": "1.3",
  "17": "2.1",
  "23": "2.2",
  "29": "2.3",
  "36": "3.1",
  "43": "3.2",
  "50": "3.3",
  "58": "4.1",
  "66": "4.2",
  "74": "4.3",
  "90": "5.1",
  "110": "5.2",
  "135": "5.3",
};

export const maxLevel = 135;

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[],
  }[],
};

type Tracks = {|
  MOBILE: Track,
  WEB_CLIENT: Track,
  FOUNDATIONS: Track,
  SERVERS: Track,
  PROJECT_MANAGEMENT: Track,
  COMMUNICATION: Track,
  CRAFT: Track,
  INITIATIVE: Track,
  CAREER_DEVELOPMENT: Track,
  ORG_DESIGN: Track,
  WELLBEING: Track,
  ACCOMPLISHMENT: Track,
  MENTORSHIP: Track,
  EVANGELISM: Track,
  RECRUITING: Track,
  COMMUNITY: Track,
|};

export const tracks: Tracks = {
  MOBILE: {
    displayName: "Mobile",
    category: "A",
    description:
      "Desenvolve expertise em desenvolvimento mobile, sendo iOS, Android ou H??brido",
    milestones: [
      {
        summary:
          "Trabalha bem com arquiteturas iOS, Android ou H??brido bem estabelecidas, seguindos as boas pr??ticas",
        signals: [
          "Entrega funcionalidades que requerem modifica????es locais simples",
          "Adiciona a????es simples que chamam servi??os do servidor",
          "Re-utiliza componentes existentes de forma apropriada",
        ],
        examples: [
          "Adicionou bot??o em tela diferente no iOS",
          "Adicionou bot??o de seguir publica????es no Android",
          "Integrou e construiu layout utilizando servi??o e componentes j?? existentes",
        ],
      },
      {
        summary:
          "Desenvolve novas inst??ncias de arquitetura existente ou cria pequenas melhorias na mesma",
        signals: [
          "Define novos objetos proto-gerados ??teis e apropriados",
          "Cria novas Activities simples no Android",
          "Migra c??digo de padr??es antigos para novos padr??es",
        ],
        examples: [
          "Fez o upgrade de SDWebImage para a nova vers??o",
          "Adicionou suporte para renderizar um novo tipo de servi??o",
          "Prototipou nova funcionalidade simples rapidamente",
        ],
      },
      {
        summary:
          "Planeja features grandes e demonstra profundo conhecimento dos limites da plataforma mobile",
        signals: [
          "Traz feedbacks ??teis para o design e sugere alternativas plaus??veis",
          "Trabalha bem com o framework de programa????o reativa do Android",
          "Adiciona suporte para novas funcionalidades iOS depois de grandes atualiza????es iOS",
        ],
        examples: [
          "Projetou estrat??gia de cacheamento no iOS para funcionamento offline",
          "Construiu nova feature grande no Android",
          "Informou o time sobre novas boas pr??ticas e deprecia????es",
        ],
      },
      {
        summary:
          "Constr??i arquiteturas complexas e reutiliz??veis que trazem boas pr??ticas e permite com que os outros engenheiros trabalhem de forma mais efetiva",
        signals: [
          "?? pioneiro ao trazer novas estrat??gias de migra????o de arquitetura que reduzem a carga de outros engenheiros",
          "Conserta problemas de gerenciamento de mem??ria",
          "Implementa intera????es prazerosas",
        ],
        examples: [
          "Criou projeto com arquitetura MVVM seguindo as diretrizes do DDD e Clean Architecture",
          "Projetou arquitetura para buscar e renderizar items de uma stream",
          "Migrou camada de persist??ncia do Android para programa????o reativa",
        ],
      },
      {
        summary:
          "?? um expert em tecnologias mobile e cria estrat??gias para direcionar o time de engenharia",
        signals: [
          "Define vis??o de longo termo para tecnologias web e garante que os projetos est??o em conformidade",
          "Projeta e implementa intera????es de UI de ponta",
          "Cria novas t??cnicas para inovar e superar os limites do Android",
        ],
        examples: [
          "Definiu and guiou plano para migra????o completa para Swift ou Kotlin",
          "Implementou Android recycler views antes de ser suportado pela plataforma",
          "Foi pioneiro em abstra????es a n??vel de aplica????o para ambientes multi-app",
        ],
      },
    ],
  },

  WEB_CLIENT: {
    displayName: "Web Client",
    category: "A",
    description:
      "Desenvolve habilidades em tecnologias web, como HTML, CSS e JavaScript",
    milestones: [
      {
        summary:
          "Trabalha bem com arquiteturas j?? pr??-estabelecidas, seguindo as boas pr??ticas",
        signals: [
          "Faz modifica????es pequenas em telas j?? existentes",
          "Faz pequenas tasks simples de design de c??digo",
          "Consegue usar CSS seguindo um style guide",
        ],
        examples: [
          "Implementou um componente de footer na Home",
          "Fez uma action para interromper uma requisi????o",
          "Fez uma p??gina com componentes previamente feitos",
        ],
      },
      {
        summary:
          "Desenvolve novas inst??ncias de uma arquitetura existente, ou pequenas melhorias nesta arquitetura",
        signals: [
          "Faz abstra????es baseadas em templates ou padr??es de c??digo",
          "Especifica e constr??i componentes interativos de forma independente",
          "Consegue propotipar novas funcionalidades simples rapidamente",
        ],
        examples: [
          "Construiu componente de input para cart??es de cr??dito",
          "Criou template de bot??es compartilhados",
          "Construiu sistema de modais",
        ],
      },
      {
        summary:
          "Consegue criar funcionalidades grandes e demonstrar profundo conhecimento dos limites do navegador",
        signals: [
          "Traz feedbacks ??teis para o design e sugere alternativas plaus??veis",
          "Faz tarefas para diminuir significativamente o tamanho do projeto e otimiz??-lo",
          "Zela por todo c??digo front-end produzido",
        ],
        examples: [
          "Fez estrat??gia de SSG para checkout da Flix",
          "Pesquisou e apresentou ao time sobre a utilidade dos service workers",
          "Desenhou e implementou tela de distribui????es da Troflo",
        ],
      },
      {
        summary:
          "Constr??i arquiteturas complexas e reutiliz??veis que trazem boas pr??ticas e permite com que os outros engenheiros trabalhem de forma mais efetiva",
        signals: [
          "Migrou a arquitetura do projeto de client-side para server-side",
          "Implementou transi????o de tela super prazerosa",
          "Toma atitudes arquiteturais que evitam m??ltiplos bugs",
        ],
        examples: [
          "Criou template CRA para projetos client-side",
          "Criou biblioteca de design system da T10",
          "Ajudou na migra????o de cliente graphQL para Relay seguindo os padr??es adequados",
        ],
      },
      {
        summary:
          "?? um expert em tecnologias web e cria estrat??gias para direcionar o time de engenharia",
        signals: [
          "Cria novas t??cnicas para inovar e superar os limites do navegador",
          "Identifica e soluciona problemas sist??micas da arquitetura atual",
          "Define vis??o de longo termo para tecnologias web e garante que os projetos est??o em conformidade",
        ],
        examples: [
          "Pesquisou, avaliou o ROI e impacto e implantou a ado????o de ReScript",
          "Planejou e implementou processos de deploy e infraestrutura de aplica????es front-end SPA e SSR para toda a T10 ",
          "Fez contribui????es chave para o React",
        ],
      },
    ],
  },

  FOUNDATIONS: {
    displayName: "Fundamentos",
    category: "A",
    description:
      "Exibe expertise em sistemas e princ??pios fundamentais da computa????o, como deployments, pipelines, base de dados, linguagens e l??gicas de programa????o",
    milestones: [
      {
        summary:
          "Trabalha de forma efetiva com paradigmas, linguagens e sistemas existentes",
        signals: [
          "Escreveu postmortems criteriosos para falhas em servi??os",
          "Faz pequenas mudan??as de configura????es em servi??os",
          "Faz backfills de forma segura e efetiva",
        ],
        examples: [
          "Realiza altera????es em um pipeline de CI/CD existente",
          "Implementou um novo pipeline ETL em um framework e defini????es j?? existentes",
          "Entende os trade-offs sobre o uso de determinadas estruturas de dados em JavaScript",
        ],
      },
      {
        summary:
          "Conhecimento intermedi??rio em uma linguagem e sobre o comportamento de sistemas existentes",
        signals: [
          "Fez pequenas atualiza????es em tecnologias",
          "Construiu jobs de machine learning dentro do framework ML",
          "Faz triagem de problemas corretamente",
        ],
        examples: [
          "Identificou e definiu padr??es e anti-padr??es comuns durante o processo de modelagem de dados",
          "Contribui de forma efetiva para bibliotecas suporte com utilit??rios usados em v??rios projetos na T10",
          "Apoia na manuten????o de scripts para configura????o e uso de ambiente AWS atrav??s da CLI",
        ],
      },
      {
        summary:
          "Conhecimento avan??ado em uma ou mais linguagens, ?? capaz de realizar melhorias sobre sistemas, modelos e paradigmas atuais	",
        signals: [
          "Entende e sabe usar eficientemente o modelo de concorr??ncia implementado no CPython",
          "Implementou um pipeline CI/CD gen??rico que pode ser usado para todos os projetos que usam ETL com AWS Lambda",
          "Desenhou esquema de padroniza????o de configura????es de servi??os multi-cloud para a T10: AWS, GCP, Azure",
        ],
        examples: [
          "Projetou o pipeline de dados da Troflo",
          "Construiu pipeline de status em tempo real",
          "Projetou framework flex??vel para escrever jobs de machine learning",
        ],
      },
      {
        summary:
          "Conhecimento amplo em mais de uma linguagem e dom??nio de fundamentos de sistemas, direcionados a melhorias cr??ticas e estrutrurais a processos existentes",
        signals: [
          "Desenhou projetos complexos que englobam multiplos sistemas e tecnologias",
          "Demonstra conhecimento profundo de sistemas computacionais",
          "Introduz novas bases de dados e tecnologias que cumprem necessidades",
        ],
        examples: [
          "Introduziu o uso do RabbitMQ e definiu o plano de implanta????o e uso nos projetos da T10",
          "Desenhou um framework de ETL multi-cloud",
          "Construiu e implementou a stack e a padroniza????o da observabilidade dos sistemas da T10",
        ],
      },
      {
        summary:
          "Expert em fundamentos computacionais, com dom??nio reconhecido de alguma ??rea (linguagem, compilador, sistema operacional, base de dados) e aplica este conhecimento de forma a trazer vantagem competitiva na T10",
        signals: [
          "Desenha projetos transformacionais em prol dos objetivos de longo prazo",
          "Define a estrat??gia e vis??o para o trabalho com sistemas",
          "Inventa t??cnicas para resolver problemas complexos",
        ],
        examples: [
          "Desenhou e implantou a infraestrutura e sua disponibilidade para um produto usado por milh??es de usu??rio",
          "Planejou e implementou de migra????o de infraestrura para um framework agn??stico a cloud",
          "Fez contribui????es chave para simplificar o modelo de concorr??ncia do Rust",
        ],
      },
    ],
  },

  SERVERS: {
    displayName: "Servidores",
    category: "A",
    description:
      "Expertise na implementa????o de funcionalidades relacionadas ao servidor",
    milestones: [
      {
        summary:
          "Contribui de forma efetiva com pr??ticas e frameworks j?? estabelecidos, seguindo melhores pr??ticas",
        signals: [
          "Adiciona rotas simples em um sistema com Python usando o framework Starlette e Ariadne",
          "Escreve consultas SQL simples",
          "Segue todos os passos necess??rios para realizar uma migra????o simples",
        ],
        examples: [
          "?? capaz de configurar um worker Lambda para envio de emails usando o servi??o AWS SNS.",
          "Entende os conceitos e pontos chave da arquitetura atual",
          "Escreve testes unit??rios simples",
        ],
      },
      {
        summary:
          "Contribui ativamente para melhorias de arquiteturas existentes, seja por novas features ou melhorias",
        signals: [
          "?? capaz de levantar pontos relevantes nas revis??es de c??digo dos pares",
          "Identifica e usa alguns de padr??es e anti-padr??es relevantes a linguagem em uso",
          "?? capaz de mapear novos dom??nios baseados em necessidades do neg??cio",
        ],
        examples: [
          "Identifica a necessidade de um index em uma tabela",
          "Implementou uma integra????o simples, com uma API de pagamentos superficial, sem testes",
          "?? capaz de desenhar e implementar modelos relacionais evitando erros comuns",
        ],
      },
      {
        summary:
          "Desenha e arquiteta sistemas de complexidade moderada do zero, ou grandes funcionalidades em sistemas existentes",
        signals: [
          "Age como mantenedor principal de sistemas cr??ticos",
          "Pontua trade-offs e diferentes abordagens na resolu????o de problemas cr??ticos",
          "Escreve playbooks para rotinas comuns de manuten????o, migra????o e atualiza????o de servi??os",
        ],
        examples: [
          "Implementou do zero um sistema suficientemente gen??rico de autoriza????o de usu??rios",
          "Integrou de forma eficiente um servi??o terceiro complexo, com cobertura de testes em todas as camadas",
          "Levanta, desenha e implementa e de forma eficiente regras de neg??cio cr??ticas e complexas",
        ],
      },
      {
        summary:
          "Constroi arquiteturas complexas, reus??veis e que surtem e ganhos positivos efeitos em v??rios projetos, definindo melhores pr??ticas para outros engenheiros",
        signals: [
          "Implementou as altera????es para migrar uma arquitetura serverful para uma arquitetura serverless",
          "Evita erros e caminhos comuns no desenho e implementa????o de arquiteturas",
          "Experi??ncia em refatorar, otimizar e trabalhar com diferentes tipos de arquiteturas e sistemas de grande porte",
        ],
        examples: [
          "Implantou pr??ticas de desenvolvimento como TDD e metodologias de modelagem como DDD",
          "Introduziu o uso de uma arquitetura de sistemas orientadas a eventos, e seus padr??es como CQRS e Event Sourcing",
          "Desenhou o framework para aplica????es backend base para os projetos da T10",
        ],
      },
      {
        summary:
          "?? refer??ncia na ??rea, participou no desenho e na implementa????o de sucesso de v??rios sistemas cr??ticos que apoiam produtos usados por milh??es de pessoas",
        signals: [
          "?? pe??a chave para identificar e determinar o planejamento estrat??gico de servi??os da T10",
          "Toma decis??es que impactam todo a equipe de engenharia a fim de colher frutos a m??dio e longo prazo",
          "?? respons??vel por identificar e garantir a qualidede t??cnica da infraestrutura e tecnologia usados pelos servi??os",
        ],
        examples: [
          "Pesquisou, avaliou o ROI e impacto e implantou a ado????o de Java e Golang",
          "Planejou e implementou de migra????o de tecnologia de infraestrura para estar agn??stico a provedores cloud",
          "Desenhou e implementou servi??os e sistemas que deram vantagem competitiva a T10",
        ],
      },
    ],
  },

  PROJECT_MANAGEMENT: {
    displayName: "Gest??o de projetos",
    category: "B",
    description:
      "Entrega projetos com escopo bem definidos que cumprem seus objetivos no tempo certo, no budget certo e em harmonia com a organiza????o",
    milestones: [
      {
        summary: "Efetivamente entrega tarefas individuais",
        signals: [
          "Estima tarefas pequenas com precis??o",
          "Entrega projetos de escopo pequeno efetivamente",
          "Escreve especifica????es t??nicas trazendo abordagem",
        ],
        examples: [
          "Escreveu o README do projeto efetivamente",
          "Entregou tela de editar o perfil do usu??rio",
          "Entregou dashboard do parceiro",
        ],
      },
      {
        summary: "Efetivamente entrega pequenos projetos pessoais",
        signals: [
          "Realiza pesquisa e considera abordagens alternativas",
          "Balanceia pragmatismo e polimento apropriadamente",
          "Define e atinge milestones intermedi??rios",
        ],
        examples: [
          "Entregou pesquisa sobre concorrentes",
          "Entregou novo website para skills da engenharia",
          "Entregou o report executivo do m??s",
        ],
      },
      {
        summary: "Entrega efetivamente projetos com um time pequeno",
        signals: [
          "Consegue delegar tarefas para outros",
          "Consegue trazer as necessidades do neg??cio para o planejamento do projeto",
          "Escolhe a estrat??gia de gest??o de projetos baseada no contexto",
        ],
        examples: [
          "Realizou retrospectiva do projeto para encontrar melhorias e oportunidades",
          "Completou o checklist para lan??amento de novo projeto",
          "Facilitou reuni??o de kickoff de novo projeto com o time",
        ],
      },
      {
        summary:
          "Efetivamente entrega projetos com um time grande ou com m??ltiplos stakeholders ou com alta complexidade",
        signals: [
          "Prioriza o backlog e encontra formas de entregar o escopo requisitado de forma mais r??pida",
          "Gerencia depend??ncias de outros projetos e times",
          "Aproveita o reconhecimento de padr??es de projetos conhecidos",
        ],
        examples: [
          "Supervisionou a entrega t??cnica do Tribanco",
          "Gerenciou migra????o de infraestrutura para AWS",
          "Envolveu m??ltiplas ??reas como Jur??dico, Financeiro e Talentos para come??ar um projeto",
        ],
      },
      {
        summary:
          "Gerencia mudan??as signiticativas na empresa e promove entregas por m??ltiplos times",
        signals: [
          "Considera limites externos e objetivos de neg??cio no planejamento",
          "Lidera times de times e coordena efetivamente colabora????es entre fun????es",
          "?? dono de um OKR de toda a organiza????o",
        ],
        examples: [
          "Estruturou e padronizou projetos de toda a empresa no Linear",
          "Lidera migra????o de formulariza????o contratual de todas os colaboradores",
          "Entregou um produto com planejamento de m??ltiplos meses em tempo",
        ],
      },
    ],
  },

  COMMUNICATION: {
    displayName: "Comunica????o",
    category: "B",
    description:
      "Compartilha o tanto de informa????o suficiente para as pessoas certas, no momento certo e sabe ouvir",
    milestones: [
      {
        summary:
          "Comunica de forma efetiva com stakeholders pr??ximos quando chamado e incorpora feedbacks construtivos",
        signals: [
          "Comunica status do projeto com clareza e efitividade",
          "Colabora com empatia com colegas",
          "Pede ajuda de maneira apropriada",
        ],
        examples: [
          "Fez o update do Linear antes de come??ar seu dia",
          "Fez o update do projeto no Basecamp de forma efetiva",
          "Fez coment??rios na daily bem pensados",
        ],
      },
      {
        summary:
          "Comunica com a maioria do time de forma apropriada focando nas oportunidades e boa qualidade de conversas",
        signals: [
          "Pratica ativamente o ato de ouvir",
          "Garante que stakeholders t??m ci??ncia dos bloqueios atuais",
          "Escolhe as ferramentas apropriedadas para comunica????o precisa e oportuna",
        ],
        examples: [
          "Recebeu e integrou feedback cr??tico positivamente",
          "Criou canal entre times para trabalho especifico",
          "Conversou com pessoas que entendem do assunto antes de escrever especifica????o",
        ],
      },
      {
        summary:
          "Proativamente compartilha informa????o, ativamente solicita feedback e facilita comunica????o para m??ltiplos stakeholders",
        signals: [
          "Resolve dificuldades de comunica????o entre outros",
          "Antecipa e compartilha desvios em agenda antecipadamente",
          "Gerencia expectativa de stakeholders efetivamente",
        ],
        examples: [
          "Direcionou a resposta do time efetivamente durante quedas de sistema",
          "Fez apresenta????o importante ao time sobre uma tecnologia",
          "Notificou o time sobre novo trabalho significativo em um projeto",
        ],
      },
      {
        summary:
          "Comunica ideias complexas com habilidade e estabelece alinhamento com o resto da organiza????o",
        signals: [
          "Comunica risco de projeto e tradeoffs com habilidade",
          "Contextualiza e clarifica estrat??gia e dire????o ambigua para outros",
          "Negocia recursos comprometedores com outros times",
        ],
        examples: [
          "Liderou workshop sobre entrevistas",
          "Criou novo padr??o para vis??o e retrospectiva de todos os projetos",
          "Alinhou com toda a organiza????o sobre Decision Logs",
        ],
      },
      {
        summary:
          "Influencia resultados no n??vel mais alto e constr??i boas pr??ticas para o resto",
        signals: [
          "Define processos para comunica????o clara entre todo o time",
          "Compartilha a quantidade certa de informa????o para as pessoas corretas no tempo certo",
          "Desenvolve e entrega planos para executivos, board e investidores externos",
        ],
        examples: [
          "Organizou o primeiro meet-up presencial da empresa",
          "Criou plano de comunica????o para grandes mudan??as na organiza????o",
          "Apresentou para o board OKRs e projetos de toda a empresa",
        ],
      },
    ],
  },

  CRAFT: {
    displayName: "Qualidade",
    category: "B",
    description:
      "Incorpora e promove pr??ticas para garantir excelente qualidade de produtos e servi??os",
    milestones: [
      {
        summary: "Entrega trabalho com boa qualidade de forma consistente",
        signals: [
          "Testa c??digo novo com criticidade localmente e em produ????o",
          "Escreve testes para toda nova funcionalidade e bug fix",
          "Escreve coment??rios claros e boas documenta????es",
        ],
        examples: [
          "Cria testes unit??rios simples",
          "Executa testes manuais de acordo com o plano de testes",
          "Escreveu testes E2E para os casos de uso felizes e tristes",
        ],
      },
      {
        summary:
          "Aumenta a robustez e confian??a de codebases e investe seu tempo para polir e melhorar produtos e sistemas",
        signals: [
          "Refatorou condigo existente para torn??-lo mais test??vel",
          "Adicionou testes em partes sem cobertura",
          "?? capaz de mapear novos casos de teste baseados em necessidades do neg??cio",
        ],
        examples: [
          "Identifica a necessidade de um novo caso de teste",
          "Implementa testes de API",
          "Refatorou teste E2E antigo colocando seletores corretos no DOM e garantindo longevidade do teste",
        ],
      },
      {
        summary:
          "Aumenta a habilidade de outros entregarem produtos de boa qualidade",
        signals: [
          "Desenha e arquiteta planos de teste de complexidade moderada do zero, ou grandes modifica????es em planos existentes",
          "Levanta, desenha e garante a implementa????o correta de forma eficiente regras de neg??cio cr??ticas e complexas",
          "Escreve playbooks para rotinas comuns de manuten????o e atualiza????o de testes",
        ],
        examples: [
          "Fez com que testes independentes rodassem em paralelo, aumentando a velocidade de testes",
          "Construiu testes para integra????o com terceiro",
          "Implementou do zero um plano de teste num novo projeto relativamente simples",
        ],
      },
      {
        summary:
          "Melhora o padr??o de qualidade com a????es proativas e ataca problemas dif??ceis e sutis de sistemas",
        signals: [
          "Constr??i sistemas para eliminar erros de programas",
          "Foca o time em qualidade com lembran??as peri??dicas",
          "Coordena novas mudan??as de padr??es de c??digo com o time",
        ],
        examples: [
          "Introduziu o uso de testes mobile, construindo um guia de boas pr??ticas para toda a equipe",
          "Definiu e implementou os planos de testes padr??es para cada tipo de projeto",
          "Definiu e supervisionou plano para acabar uma vulnerabilidade de sistema",
        ],
      },
      {
        summary:
          "Encoraja toda a organiza????o ?? tornar a qualidade como parte central do processo de desenvolvimento",
        signals: [
          "Define pol??ticas para o time de engenharia que encoraja trabalho de qualidade",
          "Identifica e elimina pontos de falha entre a organiza????o",
          "Negocia tempo e recurso com o time de executivos para garantir boa qualidade",
        ],
        examples: [
          "Desenhou e implementou processos de qualidade que deram vantagem competitiva a T10",
          "Planejou e implementou o uso de ferramentas para colhimento de m??tricas de usu??rios nas aplica????es da T10",
          "Respons??vel pela pesquisa, avalia????o de impacto e plano de ado????o do Taiko e Puppeteer",
        ],
      },
    ],
  },

  INITIATIVE: {
    displayName: "Iniciativa",
    category: "B",
    description:
      "Desafia o status quo e afeta positivamente com mudan??as na organiza????o fora do trabalho obrigat??rio",
    milestones: [
      {
        summary:
          "Identifica oportunidades para mudan??as na organiza????o ou melhorias nos produtos",
        signals: [
          "Sugere mudan??as positivas em outras ??reas",
          "Traz assuntos importantes em reuni??es de All Hands",
          "Faz provoca????es para a lideran??a",
        ],
        examples: [
          "Trouxe sugest??es para o processo de onboarding",
          "Trouxe a necessidade de compartilhar dados financeiros para o resto da empresa no All Hands",
          "Trouxe um feedback importante sobre uma postura do seu l??der",
        ],
      },
      {
        summary:
          "Causa mudan??as que impactam positivamente alguns indiv??duos ou pequenas melhorias em produtos e servi??os",
        signals: [
          "Resolve alguns bugs do backlog proativamente quando bloqueado em outra tarefa",
          "Implementa novas melhorias de forma espont??nea",
          "Resolve outras tasks menores proativamente quando bloqueado em outra tarefa",
        ],
        examples: [
          "Fez revis??o do design e sugeriu novas mudan??as",
          "Implementou tipagem em um projeto proativamente",
          "Auditou website com Lightroom e fez um PR com melhorias",
        ],
      },
      {
        summary:
          "Causa mudan??as que impactam positivamente um time inteiro ou pequenas features em produtos e servi??os",
        signals: [
          "Demonstra conceitos proativamente com prot??tipos e POCs",
          "Resolve bugs complicados fora de seu dom??nio regular",
          "Tem senso de responsabilidade com sistemas que ningu??m quer ou ?? dono",
        ],
        examples: [
          "Define um style guide para resolver problemas de ambiguidade de estiliza????o",
          "Prop??s e implementou prot??tipo para pequena feature",
          "Implementou nova funcionalidade independentemente, sem ser requisitado",
        ],
      },
      {
        summary:
          "Causa mudan??a significativa que impacta todo o time de Engenharia ou produto e servi??o como um todo",
        signals: [
          "Evangeliza novas tecnologias que resolvem m??ltiplos problemas",
          "Tem determina????o em frente de problemas persistentes",
          "Instiga grandes funcionalidades, servi??os ou arquiteturas",
        ],
        examples: [
          "Criou o teste de arquitetura para recrutamento",
          "Implementou e faz manuten????o em biblioteca interna utilizada em m??ltiplos projetos",
          "Migrou reposit??rio principal do projeto para um mono repo",
        ],
      },
      {
        summary: "Causa mudan??as positivas que impactam toda a empresa",
        signals: [
          "Criou nova fun????o para resolver problemas sist??micos",
          "Galvanizes the entire company and garners buy in for a new strategy",
          "Muda processos complexos de toda a organiza????o",
        ],
        examples: [
          "Migrou toda a organiza????o para Basecamp",
          "Criou nova identidade visual da empresa",
          "Convenceu a lideran??a da empresa a investir em um novo website",
        ],
      },
    ],
  },

  CAREER_DEVELOPMENT: {
    displayName: "Carreira",
    category: "C",
    description:
      "Ajuda estrat??gica para ajudar engenheiros a construir a carreira desejada",
    milestones: [
      {
        summary:
          "Traz insights sobre oportunidades e ajuda a identificar for??as e fraquezas individuais",
        signals: [
          "Defende um membro do grupo",
          "Compartilha oportunidades para melhoria e reconhece conquistas",
          "Explica caminhos de carreira dispon??veis da industr??a",
        ],
        examples: [
          "D?? e recebe feedback",
          "Discute posi????es de carreira e ??reas de interesse informalmente",
          "Iniciou um grupo de estudos sobre algum assunto espec??fico",
        ],
      },
      {
        summary:
          "Defende e ajuda formalmente uma pessoa com ferramentas para ajudar no seu crescimento de carreira",
        signals: [
          "Garante que um membro do grupo tem um papel apropriado na equipe",
          "Oferece conselhos de carreira para membros do grupo",
          "Cria espa??o para pessoas compartilharem desafios",
        ],
        examples: [
          "Mant??m reuni??es de 1:1 regulares e construtivas",
          "Ofereceu conselho sobre como se portar em reuni??o com um cliente",
          "Ensinou o modelo GROW aos membros do grupo",
        ],
      },
      {
        summary:
          "Inspira e ret??m um pequeno grupo de pessoas provocando-as ativamente a crescer",
        signals: [
          "Discute caminhos e cria planos de carreiras para crescimento pessoal",
          "Defende pessoas para que estejam cumprindo o devido papel na organiza????o",
          "Trabalha com l??deres de equipes para criar novos l??deres",
        ],
        examples: [
          "Revisa progresso individual de membros do grupo a cada 6 semanas",
          "Sugere determinada pessoa do grupo como Tech Lead",
          "Conseguiu uma mudan??a de carreira para determinado membro do grupo",
        ],
      },
      {
        summary:
          "Gerencia intera????es e processos entre grupos, promovendo boas pr??ticas com exemplo",
        signals: [
          "Gerencia transi????es de times de forma respeitosa e leve, tanto para o time quanto para o indiv??duo",
          "Cria boas pr??ticas para resolu????o de conflitos",
          "Garante que todos os postos de carreira entre os membros da equipe est??o em conformidade com suas carreiras individuais",
        ],
        examples: [
          "Completou treinamento em lideran??a",
          "Criou plano que vai de encontro com os objetivos da empresa, do time e do indiv??duo",
          "Preveniu situa????o de atrito com uma reuni??o direcionada",
        ],
      },
      {
        summary:
          "Ajuda no desenvolvimento de parte significante da Engenharia e ?? visto como conselheiro",
        signals: [
          "Ajuda no desenvolvimento de l??deres seniores",
          "Identifica oportunidades de treinamento da lideran??a s??nior",
          "Estimula com empatia todos a serem o melhor que podem",
        ],
        examples: [
          "Fez mentoria com Tech Leads",
          "Dividiu plano de carreira baseado em m??ltiplos caminhos para Tech Leads",
          "Defendeu o investimento em programas para desenvolvimento de carreira entre os executivos",
        ],
      },
    ],
  },

  ORG_DESIGN: {
    displayName: "Organiza????o",
    category: "C",
    description:
      "Define processos e estruturas que possibilitam o crescimento e execu????o de um time diverso de Engenharia",
    milestones: [
      {
        summary:
          "Respeita e participa de processos, trazendo feedbacks significativos para crescimento da empresa",
        signals: [
          "Reflete sobre reuni??es inspiradoras ou frustrantes",
          "Ensina outros sobre processos existentes",
          "Participa ativamente e faz contribui????o a processos da empresa",
        ],
        examples: [
          "Facilitou reuni??o estrat??gica com empatia",
          "Explicou formato de reuni??o estrat??gica para novo talento",
          "Deu feedback valioso sobre a reuni??o de planejamento da sprint",
        ],
      },
      {
        summary:
          "Identifica oportunidades para melhorar processos existentes e faz mudan??as que afetam o seu time",
        signals: [
          "Define estrutura de reuni??o e cad??ncia de reuni??es que o time precisa",
          "Engaja em pensamentos de organiza????o de sistemas",
          "Defende diversidade e inclus??o, al??m de propor novas ideias para ajudar",
        ],
        examples: [
          "Define nova reuni??o para o seu time",
          "Melhorou processo de reuni??es semanais com cliente",
          "Definiu novo padr??o de canais de comunica????o do time",
        ],
      },
      {
        summary:
          "Desenvolve processos para resolver problemas organizacionais existentes",
        signals: [
          "Cria programa que melhora significativamente a diversidade da empresa",
          "Resolve problemas de longa data da empresa",
          "Realoca recursos para cumprir objetivos da empresa",
        ],
        examples: [
          "Desenvolve templates de times b??sicos",
          "Criou programa de rota????o de bugs para melhorar problemas de qualidade",
          "Definiu gr??fico e manifesto de squads",
        ],
      },
      {
        summary:
          "Pensa sobre problemas organizacionais e identifica din??micas que possam contribuir com esses problemas",
        signals: [
          "Avalia incentivos estruturais e seus efeitos na execu????o",
          "Analisa sistemas atuais que possam ser enviesados",
          "Conecta conceitos abstratos a a????es e normativas concretas da organiza????o",
        ],
        examples: [
          "Conectou problema em recrutamento mobile a dificuldade de focar em excel??ncia",
          "Mostrou o n??vel de discrep??ncia entre n??veis da lideran??a",
          "Analisou testes anteriores para poss??veis falsos negativos",
        ],
      },
      {
        summary:
          "Lidera iniciativas que resolvem problemas derivados de din??micas e normativas da empresa",
        signals: [
          "Criou programa para treinamento da lideran??a em habilidade desejada",
          "Cria novas estruturas que promovem crescimentos espec??ficos",
          "Lidera planejamento e comunica????o para reorganiza????es",
        ],
        examples: [
          "Lidera esfor??os para aumentar o n??mero de engenheiros mobile",
          "Direciona recusos para aumentar significativamente a diversidade",
          "Construiu o processo de onboarding",
        ],
      },
    ],
  },

  WELLBEING: {
    displayName: "Bem-Estar",
    category: "C",
    description:
      "Ajuda no bem-estar emocional de um grupo durante tempos dif??ceis e comemora suas conquistas",
    milestones: [
      {
        summary:
          "Usa ferramentas e processos para garantir que colegas est??o saud??veis e felizes",
        signals: [
          "Mant??m assuntos em confid??ncia a n??o ser que ?? moralmente ou legalmente obrigado a fazer o contr??rio",
          "Aplica o principio da razoabilidade com outros",
          "Evita botar a culpa em algu??m e tenta focar em mudan??as positivas",
        ],
        examples: [
          "Garante que as pessoas do grupo est??o tirando f??rias suficientes",
          "Se coloca na posi????o para entender a perspectiva do outro",
          "Checou colega com sinais de burnout para saber se estava bem",
        ],
      },
      {
        summary: "Cria um ambiente positivo e engajador para membros do grupo",
        signals: [
          "Elogia experi??ncia dos pares para criar empatia e compaix??o",
          "Valida trabalho em andamento e sustenta motiva????o",
          "Prop??e solu????es quando times est??o atolados de tarefas e perdem timming",
        ],
        examples: [
          "Coordena uma pequena celebra????o de lan??amento do projeto",
          "Conecta tarefa entendiosa com objetivos gerais da empresa",
          "Notou um time sem vit??rias recentes e sugeriu pequenas vit??rias mais f??ceis de serem alcan??adas",
        ],
      },
      {
        summary:
          "Gerencia expectativas entre pares, l??deres e promove ambiente mais calmo",
        signals: [
          "Treina membros do grupo para separarem incentivo de resposta",
          "Mant??m a moral do grupo",
          "Ajuda membros do grupo a abordar problemas com curiosidade",
        ],
        examples: [
          "Completed training on transference and counter transference",
          "Completou treinamento em t??cnicas de negocia????o e compromisso",
          "Quando apropriado, reformula problema como um desafio, em vez de barreira",
        ],
      },
      {
        summary:
          "Defende as necessidades dos membros do grupo e trabalha proativamente para acalmar a organiza????o",
        signals: [
          "Proativamente garante que o ambiente do grupo ?? saud??vel e inclusivo",
          "Ajuda proativamente na ansiedade de membros do grupo",
          "Est?? atento ?? reten????o do time e prop??e solu????es para melhorar isso",
        ],
        examples: [
          "Aliviou tens??o na organiza????o atrav??s de direcionamento e contexto do produto",
          "Encorajou membros do grupo a focarem no que est?? no seu alcance",
          "Guiou pessoas durante mudan??a organizacional complexa",
        ],
      },
      {
        summary:
          "Protege todo o time canalizando negatividade em inspira????o e motiva????o",
        signals: [
          "Reconhece e traz narrativas quando apropriado",
          "Trabalha para reformular narrativas de vitimiza????o para senso de responsabilidade",
          "Melhora a seguran??a psicol??gica para todo o time",
        ],
        examples: [
          "Converteu membros do grupo de apontadores de problemas para solucionadores",
          "Desafiou narrativa negativa e a redirecionou para compaix??o e empatia",
          "Cultivou cultura de empatia entre todo o time",
        ],
      },
    ],
  },

  ACCOMPLISHMENT: {
    displayName: "Conquistas",
    category: "C",
    description:
      "Inspira excel??ncia no dia-a-dia, maximizando potencial e resolvendo problemas de performance com compaix??o",
    milestones: [
      {
        summary:
          "Ajuda indiv??duos a identificar problemas e solu????es para os mesmos",
        signals: [
          "Percebe quando algu??m est?? estagnado e oferece ajuda",
          "Ajuda outros a quebrar problemas em passos mais tang??veis e alcan????veis",
          "Conversa sobre problemas sem julgar",
        ],
        examples: [
          "Completou treinamento sobre diagnostico de problemas",
          "Tirou membro do grupo da in??rcia",
          "Refor??a feedback positivo",
        ],
      },
      {
        summary:
          "Ajuda indiv??duos a resolver problemas complexos de performance com insights, compaix??o e habilidade",
        signals: [
          "Constr??i contexto fora do problema",
          "Reconhece problemas do ambiente e sugere mudan??as",
          "Trabalha para encorajar o senso de responsabilidade",
        ],
        examples: [
          "Completou treinamento sobre tomada de decis??o",
          "Convenceu membros do grupo a resolver problema, ao inv??s de resolver para eles",
          "Deu feedback sobre performance ruim, com compaix??o",
        ],
      },
      {
        summary:
          "Interv??m em problemas de longa data de performance com resolu????o concreta de mudan??a",
        signals: [
          "Agrega sinais de performance ruim e cria processo para desenvolvimento",
          "Investiga motiva????o e atitudes para sinais de performance ruim",
          "Cria plano de melhora de performance",
        ],
        examples: [
          "Trabalha com membros do grupo para melhorar problemas de comunica????o",
          "Sugeriu mudan??a de time, resultando em melhora de performance",
          "Gerenciou membros do grupo de perto para garantir sucesso no plano de performance",
        ],
      },
      {
        summary:
          "Media situa????es conflitosas, empodera times que n??o est??o performando bem e resolve conflitos",
        signals: [
          "Reconhece intera????es t??xicas ou agressivas",
          "Quando apropriado, se insere em conflito para acalmar e mediar",
          "Encoraja di??logo aberto e cria confian??a entre pares durante conflito",
        ],
        examples: [
          "Empoderou o time a seguir em frente apesar das incertezas",
          "Protegeu time de problemas externos para que possam focar nos objetivos",
          "Mediou situa????o entre membros do time para aliviar tens??o",
        ],
      },
      {
        summary:
          "Resolve problemas complexos da organiza????o ou conflitos persistentes entre seniores",
        signals: [
          "Assume times n??o perform??ticos e n??o funcionais, organizando o caos",
          "Repara din??micas do time e traz harmonia",
          "Preside sobre situa????o de time de times",
        ],
        examples: [
          "Reverteu performance de time problem??tico",
          "Aliviou tens??o entre times",
          "Reconstruiu confian??a entre l??deres de times",
        ],
      },
    ],
  },

  MENTORSHIP: {
    displayName: "Mentorias",
    category: "D",
    description:
      "Ajuda colegas, compartilha conhecimento e desenvolve time fora do trabalho formal",
    milestones: [
      {
        summary:
          "Informalmente mentora indiv??duos de forma ad-hoc, ajuda novos talentos e transmite conhecimento da organiza????o",
        signals: [
          "Se mostra aberto para dar ajuda e conselhos informais",
          "Age como pilar para pares e talentos mais juniores",
          "D?? bons conselhos quando requisitado",
        ],
        examples: [
          "Trabalha como onbuddy",
          "Fez pair-programming com colega para ajudar em um ??rea n??o dominada pelo par",
          "Ajudou colega a entender seus sentimentos",
        ],
      },
      {
        summary:
          "Mentora pessoas proativamente e as guia para realiza????es ao inv??s de dar as respostas",
        signals: [
          "Tira tempo para explicar conceitos e boas pr??ticas",
          "Faz perguntas para ajudar a clarear conceitos, ao inv??s de simplesmente apresent??-los",
          "Permite outros liderarem esfor??os quando isso ir?? ajudar no seu desenvolvimento",
        ],
        examples: [
          "Compartilhou artigo interessante para membro do grupo com intuito de ajudar no seu crescimento",
          "Ofereceu feedback com empatia para ajudar no crescimento",
          "Lidera por tr??s para ajudar algu??m novo num cargo de lideran??a",
        ],
      },
      {
        summary:
          "Ensina pequeno grupo a contribuir para base de conhecimento da empresa",
        signals: [
          "Evita segurar informa????o que pode ser compartilhada com todos",
          "Trabalha para melhorar sistemas",
          "Encontra ferramentas que funcionam melhor com personalidade de membros do time",
        ],
        examples: [
          "Fez apresenta????o informal sobre determinado assunto",
          "Escreveu guia de como evitar problemas de sistema",
          "Trouxe nova ferramenta que encaixou e engajou mais o time",
        ],
      },
      {
        summary:
          "Encoraja pessoas a mentorarem umas as outras e cria formas disso acontecer",
        signals: [
          "Define um curriculo para uma determinada disciplina",
          "Atrai aten????o para bons comportamentos de ensinamento e mentoria",
          "Cria s??rie de apresenta????es informais e organiza palestrantes",
        ],
        examples: [
          "Criou e liderou grupo de mulheres na tecnologia",
          "Organizou All Hands com palestrante de fora",
          "Criou e ensinou curriculo de cliente web",
        ],
      },
      {
        summary:
          "Instiga e promove a cultura do aprendizado e desenvolvimento entre o time",
        signals: [
          "Criou incentivos para reconhecer e recompensar mentorias",
          "Empodera membros do time para o aprendizado e desenvolvimento",
          "?? modelo para rela????es produtivas e saud??veis de mentoria",
        ],
        examples: [
          "Instituiu o budget educacional para engenheiros",
          "Mentora mentores",
          "Come??ou o programa de conselhos da engenharia e trouxe mentores externos",
        ],
      },
    ],
  },

  EVANGELISM: {
    displayName: "Evangeliza????o",
    category: "D",
    description:
      "Promove a empresa para o mundo externo como um ambiente atrativo e saud??vel de se trabalhar",
    milestones: [
      {
        summary:
          "Representa bem a empresa externamente e influencia indiv??duos positivamente",
        signals: [
          "Compartilha sucessos pessoais e organizacionais com sua rede",
          "Participa de eventos e conversa com convidados",
          "Comunica de forma genuina e honesta a empolga????o de seu trabalho para o mundo externo",
        ],
        examples: [
          "Compartilhou post de lan??amento do produto",
          "Atuou como guia da empresa para pessoa desconhecida explicando sobre a empresa",
          "Ajuda nas postagens com argumentos ou fotos",
        ],
      },
      {
        summary:
          "Participa de pequenos eventos e faz a????es simples para influenciar positivamente grupos de pessoas",
        signals: [
          "Faz esfor??o para introduzir a empresa ??s pessoas",
          "Entrou em grupo p??blico e representou bem a empresa",
          "Organiza eventos pequenos que trazem pessoas para a empresa",
        ],
        examples: [
          "Volunt??rio em evento de programa????o local",
          "Organizou apresenta????o da empresa para estudantes da faculdade",
          "Palestrou em evento da empresa",
        ],
      },
      {
        summary:
          "Se esfor??a para influenciar positivamente grandes grupos de pessoas sobre sua vis??o da empresa",
        signals: [
          "Mentora ou participa em organiza????o externa com alta visibilidade",
          "Constr??i parcerias com organiza????es externas",
          "Escreve blog posts sobre a empresa que recebem tr??fego moderado",
        ],
        examples: [
          "Representou a empresa em painel de confer??ncia de experts da ind??stria",
          "Administra comunidade de desenvolvedores",
          "Construiu rela????o dur??vel e de longo prazo com Developer Circles",
        ],
      },
      {
        summary:
          "Estabelece a empresa como um ambiente ??timo e inovador de se trabalhar para toda a ind??stria",
        signals: [
          "Se estabelece como um l??der da ind??stria que atrai talentos",
          "Publica material de inova????es organizacionais ou t??cnicas da empresa",
          "Tira vantagem da quantidade de pessoas que influencia para evangelizar a empresa",
        ],
        examples: [
          "Publicou um artigo sobre tecnologia utilizada na empresa",
          "Participou do lan??amento de novo produto da empresa",
          "Fez uma publica????o no blog de engenharia da empresa",
        ],
      },
      {
        summary:
          "Introduz a empresa de uma forma positiva e leve para um n??mero maior de pessoas fora da ind??stria",
        signals: [
          "Entrega mensagens chave para audi??ncia geral",
          "Influencia pessoas com muita audi??ncia a falar positivamente da empresa",
          "Guia reconhecimento e ado????o da empresa com n??meros significantes",
        ],
        examples: [
          "Publicou artigo ou fez entrevista para jornal comum",
          "Fez apresenta????o em confer??ncia com aten????o nacional",
          "Representou a empresa em canal nacional de not??cias",
        ],
      },
    ],
  },

  RECRUITING: {
    displayName: "Recrutamento",
    category: "D",
    description:
      "Fortalece o time da empresa trazendo excelente membros seniores",
    milestones: [
      {
        summary:
          "Traz novos candidatos ao pipeline e entende como avaliar candidatos",
        signals: [
          "Revisa trabalho de potenciais talentos regularmente",
          "Participa de entrevistas para ganhar familiaridade com o processo",
          "Revisa posts de vagas regularmente",
        ],
        examples: [
          "Completou treinamento de entrevistas",
          "Fez sess??o casual para praticar perguntas",
          "Indicou pessoas apropriadas para posi????es abertas",
        ],
      },
      {
        summary:
          "Entrevista regularmente, ajuda o time a fazer decis??es de contrata????o e ajuda a criar um pipeline diverso",
        signals: [
          "Usa guia de entrevistas para dar feedback claro e objetivo aos candidatos",
          "Entrevista candidatos com empatia e respeito",
          "Pesquisa sobre como abordar candidatos e aumentar a diversidade",
        ],
        examples: [
          "Adicionou evid??ncia sobre entrevista",
          "Come??ou um evento mensal para candidatos conhecerem colaboradores da empresa",
          "Testou novo servi??o para mais qualidade e diversidade de candidatos",
        ],
      },
      {
        summary:
          "Fortalece e mant??m a integridade do processo atual, al??m de trazer regularmente fortes candidatos",
        signals: [
          "Ensina novos entrevistadores como fazer a entrevista com empatia",
          "Ajuda a modelar uma boa entrevista e d?? bom feedback quando participa como ouvinte",
          "Leva novos entrevistadores como ouvintes e ajuda no feedback",
        ],
        examples: [
          "Escreveu nova pergunta para entrevista que vai de encontro com os crit??rios de qualidade de perguntas",
          "Trouxe novos candidatos para o pipeline proativamente, com um alto ??ndice de convers??o",
          "Prop??s melhorias tang??veis e ??teis para o processo de entrevista",
        ],
      },
      {
        summary:
          "Lidera e contribui ativamente com as decis??es de recrutamento, al??m de se esfor??ar para trazer bons candidatos",
        signals: [
          "Documenta coment??rios sutis de entrevistas que indicam alinhamento de valores",
          "Toma decis??es de contratamento, resolvendo discrep??ncias e conflitos entre reports",
          "Categoriza candidatos por nota e anota caracteristicas de comportamento",
        ],
        examples: [
          "Planejou treinamento para entrevista com o time de Engenharia",
          "Criou template para coment??rios p??s-entrevista",
          "Organizou programa para est??gio em engenharia",
        ],
      },
      {
        summary:
          "Recruta em escala, investe em rela????es de longo prazo para posi????es cr??ticas e define estrat??gia de recrutamento",
        signals: [
          "Define o tom, pol??tica e objetivos na constru????o de um time de alta qualidade e diverso",
          "Identifica aquisi????es promissoras",
          "Observa atividade da ind??stria, identificando oportunidades para posi????es cr??ticas",
        ],
        examples: [
          "Conversou com um candidato senior muitos meses para preencher uma posi????o cr??tica",
          "Organizou esfor??os para convencer engenheiros a ficar",
          "Alinha objetivos e acompanha m??tricas demogr??ficas do time regularmente",
        ],
      },
    ],
  },

  COMMUNITY: {
    displayName: "Comunidade",
    category: "D",
    description:
      "Representa e exalta os valores da empresa construindo comunidades internamente",
    milestones: [
      {
        summary:
          "?? presente e dispon??vel para seus times, al??m de contribuir positivamente para a cultura da empresa",
        signals: [
          "Participa em atividades do time",
          "Trata colegas e clientes com respeito",
          "Entra em grupos e comit??s fora de suas tarefas formais",
        ],
        examples: [
          "Entrou e participou ativamente do comit?? de front-end",
          "Trouxe um pequeno presente de f??rias para o time",
          "Escreveu um message board divertido e informativo sobre a processo de desenvolvimento",
        ],
      },
      {
        summary:
          "Toma frente e tem atitudes para promover uma cultura inclusiva",
        signals: [
          "Cria espa??o para outros participarem",
          "Colabora com outros engenheiros fora das responsabilidades diretas",
          "Encontra formas de engajar novos talentos rapidamente",
        ],
        examples: [
          "Criou nova metodologia de onboarding",
          "Trouxe pessoas t??midas e introvertidas para uma conversa",
          "Voluntariou para tocar as dailies",
        ],
      },
      {
        summary:
          "Contribui para melhorar o relacionamente entre o time e ajuda a criar uma cultura de ajuda ao pr??ximo",
        signals: [
          "Cobre um colega durante as f??rias em outro projeto",
          "Ajuda os outros do time com as deadlines, sem perder suas pr??prias",
          "Usa sua posi????o para trazer assuntos delicados em nome de outra pessoa",
        ],
        examples: [
          "Lidera novas iniciativas com pouca ajuda enquanto continua fazendo suas tarefas",
          "Criou e mant??m engajamento em pequeno grupo dentro da empresa",
          "Manteve a positividade e aumentou a moral do time durante per??odo de sa??das",
        ],
      },
      {
        summary:
          "Deixa todos para cima e ?? exemplo de altru??smo para o time sem comprometer suas responsabilidades",
        signals: [
          "Se esfor??a muito pelo time",
          "Implementa programas para aumentar significativamente a inclus??o no time",
          "Pega o trabalho tedioso do time sem ser requisitado",
        ],
        examples: [
          "Gastou grande quantidade de tempo para ajudar os colegas fora da responsabilidade direta",
          "Refatorou parte mais trabalhosa do c??digo",
          "Atuou como ??nico mantenedor de ferramenta interna por anos",
        ],
      },
      {
        summary:
          "?? o guardi??o da cultura, vive os valores da empresa e define pol??ticas que ajudam no relacionamento entre os times",
        signals: [
          "Cria relacionamentos entre times",
          "Relaciona valores da empresa aos indiv??duos, times e lideran??a",
          "Define pol??ticas e objetivos para manter a inclus??o na empresa",
        ],
        examples: [
          "Organizou evento fora do trabalho para todo o time",
          "Criou pesquisa de felicidade do time de engenharia e atuou em cima das m??tricas encontradas",
          "Corrigiu comportamento e pol??ticas que v??o contra a inclus??o",
        ],
      },
    ],
  },
};

export const trackIds: TrackId[] = Object.keys(tracks);

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category);
  return set;
}, new Set());

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map();
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId];
    const categoryId = tracks[trackId].category;
    let currentPoints = pointsByCategory.get(categoryId) || 0;
    pointsByCategory.set(
      categoryId,
      currentPoints + milestoneToPoints(milestone)
    );
  });
  return Array.from(categoryIds.values()).map((categoryId) => {
    const points = pointsByCategory.get(categoryId);
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 };
  });
};

export const totalPointsFromMilestoneMap = (
  milestoneMap: MilestoneMap
): number =>
  trackIds
    .map((trackId) => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => sum + addend, 0);

export const categoryColorScale = d3
  .scaleOrdinal()
  .domain(categoryIds)
  .range(["#3AB54A", "#733AD0", "#2841C3", "#FF5B79"]);

export const titles = [
  { label: "Junior Software Engineer", minPoints: 0, maxPoints: 16 },
  { label: "Software Engineer", minPoints: 17, maxPoints: 35 },
  { label: "Senior Software Engineer", minPoints: 36, maxPoints: 57 },
  { label: "Tech Lead", minPoints: 36, maxPoints: 57 },
  { label: "Staff Engineer", minPoints: 58, maxPoints: 89 },
  { label: "Senior Tech Lead", minPoints: 58, maxPoints: 89 },
  { label: "Principal Engineer", minPoints: 90 },
  { label: "CTO", minPoints: 90 },
];

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap);

  return titles
    .filter(
      (title) =>
        (title.minPoints === undefined || totalPoints >= title.minPoints) &&
        (title.maxPoints === undefined || totalPoints <= title.maxPoints)
    )
    .map((title) => title.label);
};
