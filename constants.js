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
      "Desenvolve expertise em desenvolvimento mobile, sendo iOS, Android ou Híbrido",
    milestones: [
      {
        summary:
          "Trabalha bem com arquiteturas iOS, Android ou Híbrido bem estabelecidas, seguindos as boas práticas",
        signals: [
          "Entrega funcionalidades que requerem modificações locais simples",
          "Adiciona ações simples que chamam serviços do servidor",
          "Re-utiliza componentes existentes de forma apropriada",
        ],
        examples: [
          "Adicionou botão em tela diferente no iOS",
          "Adicionou botão de seguir publicações no Android",
          "Integrou e construiu layout utilizando serviço e componentes já existentes",
        ],
      },
      {
        summary:
          "Desenvolve novas instâncias de arquitetura existente ou cria pequenas melhorias na mesma",
        signals: [
          "Define novos objetos proto-gerados úteis e apropriados",
          "Cria novas Activities simples no Android",
          "Migra código de padrões antigos para novos padrões",
        ],
        examples: [
          "Fez o upgrade de SDWebImage para a nova versão",
          "Adicionou suporte para renderizar um novo tipo de serviço",
          "Prototipou nova funcionalidade simples rapidamente",
        ],
      },
      {
        summary:
          "Planeja features grandes e demonstra profundo conhecimento dos limites da plataforma mobile",
        signals: [
          "Traz feedbacks úteis para o design e sugere alternativas plausíveis",
          "Trabalha bem com o framework de programação reativa do Android",
          "Adiciona suporte para novas funcionalidades iOS depois de grandes atualizações iOS",
        ],
        examples: [
          "Projetou estratégia de cacheamento no iOS para funcionamento offline",
          "Construiu nova feature grande no Android",
          "Informou o time sobre novas boas práticas e depreciações",
        ],
      },
      {
        summary:
          "Constrói arquiteturas complexas e reutilizáveis que trazem boas práticas e permite com que os outros engenheiros trabalhem de forma mais efetiva",
        signals: [
          "É pioneiro ao trazer novas estratégias de migração de arquitetura que reduzem a carga de outros engenheiros",
          "Conserta problemas de gerenciamento de memória",
          "Implementa interações prazerosas",
        ],
        examples: [
          "Criou projeto com arquitetura MVVM seguindo as diretrizes do DDD e Clean Architecture",
          "Projetou arquitetura para buscar e renderizar items de uma stream",
          "Migrou camada de persistência do Android para programação reativa",
        ],
      },
      {
        summary:
          "É um expert em tecnologias mobile e cria estratégias para direcionar o time de engenharia",
        signals: [
          "Define visão de longo termo para tecnologias web e garante que os projetos estão em conformidade",
          "Projeta e implementa interações de UI de ponta",
          "Cria novas técnicas para inovar e superar os limites do Android",
        ],
        examples: [
          "Definiu and guiou plano para migração completa para Swift ou Kotlin",
          "Implementou Android recycler views antes de ser suportado pela plataforma",
          "Foi pioneiro em abstrações a nível de aplicação para ambientes multi-app",
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
          "Trabalha bem com arquiteturas já pré-estabelecidas, seguindo as boas práticas",
        signals: [
          "Faz modificações pequenas em telas já existentes",
          "Faz pequenas tasks simples de design de código",
          "Consegue usar CSS seguindo um style guide",
        ],
        examples: [
          "Implementou um componente de footer na Home",
          "Fez uma action para interromper uma requisição",
          "Fez uma página com componentes previamente feitos",
        ],
      },
      {
        summary:
          "Desenvolve novas instâncias de uma arquitetura existente, ou pequenas melhorias nesta arquitetura",
        signals: [
          "Faz abstrações baseadas em templates ou padrões de código",
          "Especifica e constrói componentes interativos de forma independente",
          "Consegue propotipar novas funcionalidades simples rapidamente",
        ],
        examples: [
          "Construiu componente de input para cartões de crédito",
          "Criou template de botões compartilhados",
          "Construiu sistema de modais",
        ],
      },
      {
        summary:
          "Consegue criar funcionalidades grandes e demonstrar profundo conhecimento dos limites do navegador",
        signals: [
          "Traz feedbacks úteis para o design e sugere alternativas plausíveis",
          "Faz tarefas para diminuir significativamente o tamanho do projeto e otimizá-lo",
          "Zela por todo código front-end produzido",
        ],
        examples: [
          "Fez estratégia de SSG para checkout da Flix",
          "Pesquisou e apresentou ao time sobre a utilidade dos service workers",
          "Desenhou e implementou tela de distribuições da Troflo",
        ],
      },
      {
        summary:
          "Constrói arquiteturas complexas e reutilizáveis que trazem boas práticas e permite com que os outros engenheiros trabalhem de forma mais efetiva",
        signals: [
          "Migrou a arquitetura do projeto de client-side para server-side",
          "Implementou transição de tela super prazerosa",
          "Toma atitudes arquiteturais que evitam múltiplos bugs",
        ],
        examples: [
          "Criou template CRA para projetos client-side",
          "Criou biblioteca de design system da T10",
          "Ajudou na migração de cliente graphQL para Relay seguindo os padrões adequados",
        ],
      },
      {
        summary:
          "É um expert em tecnologias web e cria estratégias para direcionar o time de engenharia",
        signals: [
          "Cria novas técnicas para inovar e superar os limites do navegador",
          "Identifica e soluciona problemas sistêmicas da arquitetura atual",
          "Define visão de longo termo para tecnologias web e garante que os projetos estão em conformidade",
        ],
        examples: [
          "Pesquisou, avaliou o ROI e impacto e implantou a adoção de ReScript",
          "Planejou e implementou processos de deploy e infraestrutura de aplicações front-end SPA e SSR para toda a T10 ",
          "Fez contribuições chave para o React",
        ],
      },
    ],
  },

  FOUNDATIONS: {
    displayName: "Fundamentos",
    category: "A",
    description:
      "Exibe expertise em sistemas e princípios fundamentais da computação, como deployments, pipelines, base de dados, linguagens e lógicas de programação",
    milestones: [
      {
        summary:
          "Trabalha de forma efetiva com paradigmas, linguagens e sistemas existentes",
        signals: [
          "Escreveu postmortems criteriosos para falhas em serviços",
          "Faz pequenas mudanças de configurações em serviços",
          "Faz backfills de forma segura e efetiva",
        ],
        examples: [
          "Realiza alterações em um pipeline de CI/CD existente",
          "Implementou um novo pipeline ETL em um framework e definições já existentes",
          "Entende os trade-offs sobre o uso de determinadas estruturas de dados em JavaScript",
        ],
      },
      {
        summary:
          "Conhecimento intermediário em uma linguagem e sobre o comportamento de sistemas existentes",
        signals: [
          "Fez pequenas atualizações em tecnologias",
          "Construiu jobs de machine learning dentro do framework ML",
          "Faz triagem de problemas corretamente",
        ],
        examples: [
          "Identificou e definiu padrões e anti-padrões comuns durante o processo de modelagem de dados",
          "Contribui de forma efetiva para bibliotecas suporte com utilitários usados em vários projetos na T10",
          "Apoia na manutenção de scripts para configuração e uso de ambiente AWS através da CLI",
        ],
      },
      {
        summary:
          "Conhecimento avançado em uma ou mais linguagens, é capaz de realizar melhorias sobre sistemas, modelos e paradigmas atuais	",
        signals: [
          "Entende e sabe usar eficientemente o modelo de concorrência implementado no CPython",
          "Implementou um pipeline CI/CD genérico que pode ser usado para todos os projetos que usam ETL com AWS Lambda",
          "Desenhou esquema de padronização de configurações de serviços multi-cloud para a T10: AWS, GCP, Azure",
        ],
        examples: [
          "Projetou o pipeline de dados da Troflo",
          "Construiu pipeline de status em tempo real",
          "Projetou framework flexível para escrever jobs de machine learning",
        ],
      },
      {
        summary:
          "Conhecimento amplo em mais de uma linguagem e domínio de fundamentos de sistemas, direcionados a melhorias críticas e estrutrurais a processos existentes",
        signals: [
          "Desenhou projetos complexos que englobam multiplos sistemas e tecnologias",
          "Demonstra conhecimento profundo de sistemas computacionais",
          "Introduz novas bases de dados e tecnologias que cumprem necessidades",
        ],
        examples: [
          "Introduziu o uso do RabbitMQ e definiu o plano de implantação e uso nos projetos da T10",
          "Desenhou um framework de ETL multi-cloud",
          "Construiu e implementou a stack e a padronização da observabilidade dos sistemas da T10",
        ],
      },
      {
        summary:
          "Expert em fundamentos computacionais, com domínio reconhecido de alguma área (linguagem, compilador, sistema operacional, base de dados) e aplica este conhecimento de forma a trazer vantagem competitiva na T10",
        signals: [
          "Desenha projetos transformacionais em prol dos objetivos de longo prazo",
          "Define a estratégia e visão para o trabalho com sistemas",
          "Inventa técnicas para resolver problemas complexos",
        ],
        examples: [
          "Desenhou e implantou a infraestrutura e sua disponibilidade para um produto usado por milhões de usuário",
          "Planejou e implementou de migração de infraestrura para um framework agnóstico a cloud",
          "Fez contribuições chave para simplificar o modelo de concorrência do Rust",
        ],
      },
    ],
  },

  SERVERS: {
    displayName: "Servidores",
    category: "A",
    description:
      "Expertise na implementação de funcionalidades relacionadas ao servidor",
    milestones: [
      {
        summary:
          "Contribui de forma efetiva com práticas e frameworks já estabelecidos, seguindo melhores práticas",
        signals: [
          "Adiciona rotas simples em um sistema com Python usando o framework Starlette e Ariadne",
          "Escreve consultas SQL simples",
          "Segue todos os passos necessários para realizar uma migração simples",
        ],
        examples: [
          "É capaz de configurar um worker Lambda para envio de emails usando o serviço AWS SNS.",
          "Entende os conceitos e pontos chave da arquitetura atual",
          "Escreve testes unitários simples",
        ],
      },
      {
        summary:
          "Contribui ativamente para melhorias de arquiteturas existentes, seja por novas features ou melhorias",
        signals: [
          "É capaz de levantar pontos relevantes nas revisões de código dos pares",
          "Identifica e usa alguns de padrões e anti-padrões relevantes a linguagem em uso",
          "É capaz de mapear novos domínios baseados em necessidades do negócio",
        ],
        examples: [
          "Identifica a necessidade de um index em uma tabela",
          "Implementou uma integração simples, com uma API de pagamentos superficial, sem testes",
          "É capaz de desenhar e implementar modelos relacionais evitando erros comuns",
        ],
      },
      {
        summary:
          "Desenha e arquiteta sistemas de complexidade moderada do zero, ou grandes funcionalidades em sistemas existentes",
        signals: [
          "Age como mantenedor principal de sistemas críticos",
          "Pontua trade-offs e diferentes abordagens na resolução de problemas críticos",
          "Escreve playbooks para rotinas comuns de manutenção, migração e atualização de serviços",
        ],
        examples: [
          "Implementou do zero um sistema suficientemente genérico de autorização de usuários",
          "Integrou de forma eficiente um serviço terceiro complexo, com cobertura de testes em todas as camadas",
          "Levanta, desenha e implementa e de forma eficiente regras de negócio críticas e complexas",
        ],
      },
      {
        summary:
          "Constroi arquiteturas complexas, reusáveis e que surtem e ganhos positivos efeitos em vários projetos, definindo melhores práticas para outros engenheiros",
        signals: [
          "Implementou as alterações para migrar uma arquitetura serverful para uma arquitetura serverless",
          "Evita erros e caminhos comuns no desenho e implementação de arquiteturas",
          "Experiência em refatorar, otimizar e trabalhar com diferentes tipos de arquiteturas e sistemas de grande porte",
        ],
        examples: [
          "Implantou práticas de desenvolvimento como TDD e metodologias de modelagem como DDD",
          "Introduziu o uso de uma arquitetura de sistemas orientadas a eventos, e seus padrões como CQRS e Event Sourcing",
          "Desenhou o framework para aplicações backend base para os projetos da T10",
        ],
      },
      {
        summary:
          "É referência na área, participou no desenho e na implementação de sucesso de vários sistemas críticos que apoiam produtos usados por milhões de pessoas",
        signals: [
          "É peça chave para identificar e determinar o planejamento estratégico de serviços da T10",
          "Toma decisões que impactam todo a equipe de engenharia a fim de colher frutos a médio e longo prazo",
          "É responsável por identificar e garantir a qualidede técnica da infraestrutura e tecnologia usados pelos serviços",
        ],
        examples: [
          "Pesquisou, avaliou o ROI e impacto e implantou a adoção de Java e Golang",
          "Planejou e implementou de migração de tecnologia de infraestrura para estar agnóstico a provedores cloud",
          "Desenhou e implementou serviços e sistemas que deram vantagem competitiva a T10",
        ],
      },
    ],
  },

  PROJECT_MANAGEMENT: {
    displayName: "Gestão de projetos",
    category: "B",
    description:
      "Entrega projetos com escopo bem definidos que cumprem seus objetivos no tempo certo, no budget certo e em harmonia com a organização",
    milestones: [
      {
        summary: "Efetivamente entrega tarefas individuais",
        signals: [
          "Estima tarefas pequenas com precisão",
          "Entrega projetos de escopo pequeno efetivamente",
          "Escreve especificações ténicas trazendo abordagem",
        ],
        examples: [
          "Escreveu o README do projeto efetivamente",
          "Entregou tela de editar o perfil do usuário",
          "Entregou dashboard do parceiro",
        ],
      },
      {
        summary: "Efetivamente entrega pequenos projetos pessoais",
        signals: [
          "Realiza pesquisa e considera abordagens alternativas",
          "Balanceia pragmatismo e polimento apropriadamente",
          "Define e atinge milestones intermediários",
        ],
        examples: [
          "Entregou pesquisa sobre concorrentes",
          "Entregou novo website para skills da engenharia",
          "Entregou o report executivo do mês",
        ],
      },
      {
        summary: "Entrega efetivamente projetos com um time pequeno",
        signals: [
          "Consegue delegar tarefas para outros",
          "Consegue trazer as necessidades do negócio para o planejamento do projeto",
          "Escolhe a estratégia de gestão de projetos baseada no contexto",
        ],
        examples: [
          "Realizou retrospectiva do projeto para encontrar melhorias e oportunidades",
          "Completou o checklist para lançamento de novo projeto",
          "Facilitou reunião de kickoff de novo projeto com o time",
        ],
      },
      {
        summary:
          "Efetivamente entrega projetos com um time grande ou com múltiplos stakeholders ou com alta complexidade",
        signals: [
          "Prioriza o backlog e encontra formas de entregar o escopo requisitado de forma mais rápida",
          "Gerencia dependências de outros projetos e times",
          "Aproveita o reconhecimento de padrões de projetos conhecidos",
        ],
        examples: [
          "Supervisionou a entrega técnica do Tribanco",
          "Gerenciou migração de infraestrutura para AWS",
          "Envolveu múltiplas áreas como Jurídico, Financeiro e Talentos para começar um projeto",
        ],
      },
      {
        summary:
          "Gerencia mudanças signiticativas na empresa e promove entregas por múltiplos times",
        signals: [
          "Considera limites externos e objetivos de negócio no planejamento",
          "Lidera times de times e coordena efetivamente colaborações entre funções",
          "É dono de um OKR de toda a organização",
        ],
        examples: [
          "Estruturou e padronizou projetos de toda a empresa no Linear",
          "Lidera migração de formularização contratual de todas os colaboradores",
          "Entregou um produto com planejamento de múltiplos meses em tempo",
        ],
      },
    ],
  },

  COMMUNICATION: {
    displayName: "Comunicação",
    category: "B",
    description:
      "Compartilha o tanto de informação suficiente para as pessoas certas, no momento certo e sabe ouvir",
    milestones: [
      {
        summary:
          "Comunica de forma efetiva com stakeholders próximos quando chamado e incorpora feedbacks construtivos",
        signals: [
          "Comunica status do projeto com clareza e efitividade",
          "Colabora com empatia com colegas",
          "Pede ajuda no Asks for help at the appropriate juncture",
        ],
        examples: [
          "Fez o update do Linear antes de começar seu dia",
          "Fez o update do projeto no Basecamp de forma efetiva",
          "Fez comentários na daily bem pensados",
        ],
      },
      {
        summary:
          "Comunica com a maioria do time de forma apropriada focando nas oportunidades e boa qualidade de conversas",
        signals: [
          "Pratica ativamente o ato de ouvir",
          "Garante que stakeholders têm ciência dos bloqueios atuais",
          "Escolhe as ferramentas apropriedadas para comunicação precisa e oportuna",
        ],
        examples: [
          "Recebeu e integrou feedback crítico positivamente",
          "Criou canal entre times para trabalho especifico",
          "Conversou com pessoas que entendem do assunto antes de escrever especificação",
        ],
      },
      {
        summary:
          "Proativamente compartilha informação, ativamente solicita feedback e facilita comunicação para múltiplos stakeholders",
        signals: [
          "Resolve dificuldades de comunicação entre outros",
          "Antecipa e compartilha desvios em agenda antecipadamente",
          "Gerencia expectativa de stakeholders efetivamente",
        ],
        examples: [
          "Direcionou a resposta do time efetivamente durante quedas de sistema",
          "Fez apresentação importante ao time sobre uma tecnologia",
          "Notificou o time sobre novo trabalho significativo em um projeto",
        ],
      },
      {
        summary:
          "Comunica ideias complexas com habilidade e estabelece alinhamento com o resto da organização",
        signals: [
          "Comunica risco de projeto e tradeoffs com habilidade",
          "Contextualiza e clarifica estratégia e direção ambigua para outros",
          "Negocia recursos comprometedores com outros times",
        ],
        examples: [
          "Liderou workshop sobre entrevistas",
          "Criou novo padrão para visão e retrospectiva de todos os projetos",
          "Alinhou com toda a organização sobre Decision Logs",
        ],
      },
      {
        summary:
          "Influencia resultados no nível mais alto e constrói boas práticas para o resto",
        signals: [
          "Define processos para comunicação clara entre todo o time",
          "Compartilha a quantidade certa de informação para as pessoas corretas no tempo certo",
          "Desenvolve e entrega planos para executivos, board e investidores externos",
        ],
        examples: [
          "Organizou o primeiro meet-up presencial da empresa",
          "Criou plano de comunicação para grandes mudanças na organização",
          "Apresentou para o board OKRs e projetos de toda a empresa",
        ],
      },
    ],
  },

  CRAFT: {
    displayName: "Qualidade",
    category: "B",
    description:
      "Incorpora e promove práticas para garantir excelente qualidade de produtos e serviços",
    milestones: [
      {
        summary: "Entrega trabalho com boa qualidade de forma consistente",
        signals: [
          "Testa código novo com criticidade localmente e em produção",
          "Escreve testes para toda nova funcionalidade e bug fix",
          "Escreve comentários claros e boas documentações",
        ],
        examples: [
          "Cria testes unitários simples",
          "Executa testes manuais de acordo com o plano de testes",
          "Escreveu testes E2E para os casos de uso felizes e tristes",
        ],
      },
      {
        summary:
          "Aumenta a robustez e confiança de codebases e investe seu tempo para polir e melhorar produtos e sistemas",
        signals: [
          "Refatorou condigo existente para torná-lo mais testável",
          "Adicionou testes em partes sem cobertura",
          "É capaz de mapear novos casos de teste baseados em necessidades do negócio",
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
          "Desenha e arquiteta planos de teste de complexidade moderada do zero, ou grandes modificações em planos existentes",
          "Levanta, desenha e garante a implementação correta de forma eficiente regras de negócio críticas e complexas",
          "Escreve playbooks para rotinas comuns de manutenção e atualização de testes",
        ],
        examples: [
          "Fez com que testes independentes rodassem em paralelo, aumentando a velocidade de testes",
          "Construiu testes para integração com terceiro",
          "Implementou do zero um plano de teste num novo projeto relativamente simples",
        ],
      },
      {
        summary:
          "Melhora o padrão de qualidade com ações proativas e ataca problemas difíceis e sutis de sistemas",
        signals: [
          "Constrói sistemas para eliminar erros de programas",
          "Foca o time em qualidade com lembranças periódicas",
          "Coordena novas mudanças de padrões de código com o time",
        ],
        examples: [
          "Introduziu o uso de testes mobile, construindo um guia de boas práticas para toda a equipe",
          "Definiu e implementou os planos de testes padrões para cada tipo de projeto",
          "Definiu e supervisionou plano para acabar uma vulnerabilidade de sistema",
        ],
      },
      {
        summary:
          "Encoraja toda a organização à tornar a qualidade como parte central do processo de desenvolvimento",
        signals: [
          "Define políticas para o time de engenharia que encoraja trabalho de qualidade",
          "Identifica e elimina pontos de falha entre a organização",
          "Negocia tempo e recurso com o time de executivos para garantir boa qualidade",
        ],
        examples: [
          "Desenhou e implementou processos de qualidade que deram vantagem competitiva a T10",
          "Planejou e implementou o uso de ferramentas para colhimento de métricas de usuários nas aplicações da T10",
          "Responsável pela pesquisa, avaliação de impacto e plano de adoção do Taiko e Puppeteer",
        ],
      },
    ],
  },

  INITIATIVE: {
    displayName: "Iniciativa",
    category: "B",
    description:
      "Desafia o status quo e afeta positivamente com mudanças na organização fora do trabalho obrigatório",
    milestones: [
      {
        summary:
          "Identifica oportunidades para mudanças na organização ou melhorias nos produtos",
        signals: [
          "Sugere mudanças positivas em outras áreas",
          "Traz assuntos importantes em reuniões de All Hands",
          "Faz provocações para a liderança",
        ],
        examples: [
          "Trouxe sugestões para o processo de onboarding",
          "Trouxe a necessidade de compartilhar dados financeiros para o resto da empresa no All Hands",
          "Trouxe um feedback importante sobre uma postura do seu líder",
        ],
      },
      {
        summary:
          "Causa mudanças que impactam positivamente alguns indivíduos ou pequenas melhorias em produtos e serviços",
        signals: [
          "Resolve alguns bugs do backlog proativamente quando bloqueado em outra tarefa",
          "Implementa novas melhorias de forma espontânea",
          "Resolve outras tasks menores proativamente quando bloqueado em outra tarefa",
        ],
        examples: [
          "Fez revisão do design e sugeriu novas mudanças",
          "Implementou tipagem em um projeto proativamente",
          "Auditou website com Lightroom e fez um PR com melhorias",
        ],
      },
      {
        summary:
          "Causa mudanças que impactam positivamente um time inteiro ou pequenas features em produtos e serviços",
        signals: [
          "Demonstra conceitos proativamente com protótipos e POCs",
          "Resolve bugs complicados fora de seu domínio regular",
          "Tem senso de responsabilidade com sistemas que ninguém quer ou é dono",
        ],
        examples: [
          "Define um style guide para resolver problemas de ambiguidade de estilização",
          "Propôs e implementou protótipo para pequena feature",
          "Implementou nova funcionalidade independentemente, sem ser requisitado",
        ],
      },
      {
        summary:
          "Causa mudança significativa que impacta todo o time de Engenharia ou produto e serviço como um todo",
        signals: [
          "Evangeliza novas tecnologias que resolvem múltiplos problemas",
          "Tem determinação em frente de problemas persistentes",
          "Instiga grandes funcionalidades, serviços ou arquiteturas",
        ],
        examples: [
          "Criou o teste de arquitetura para recrutamento",
          "Implementou e faz manutenção em biblioteca interna utilizada em múltiplos projetos",
          "Migrou repositório principal do projeto para um mono repo",
        ],
      },
      {
        summary: "Causa mudanças positivas que impactam toda a empresa",
        signals: [
          "Criou nova função para resolver problemas sistêmicos",
          "Galvanizes the entire company and garners buy in for a new strategy",
          "Muda processos complexos de toda a organização",
        ],
        examples: [
          "Migrou toda a organização para Basecamp",
          "Criou nova identidade visual da empresa",
          "Convenceu a liderança da empresa a investir em um novo website",
        ],
      },
    ],
  },

  CAREER_DEVELOPMENT: {
    displayName: "Carreira",
    category: "C",
    description:
      "Ajuda estratégica para ajudar engenheiros a construir a carreira desejada",
    milestones: [
      {
        summary:
          "Traz insights sobre oportunidades e ajuda a identificar forças e fraquezas individuais",
        signals: [
          "Defende um membro do grupo",
          "Compartilha oportunidades para melhoria e reconhece conquistas",
          "Explica caminhos de carreira disponíveis da industría",
        ],
        examples: [
          "Dá e recebe feedback",
          "Discute posições de carreira e áreas de interesse informalmente",
          "Iniciou um grupo de estudos sobre algum assunto específico",
        ],
      },
      {
        summary:
          "Defende e ajuda formalmente uma pessoa com ferramentas para ajudar no seu crescimento de carreira",
        signals: [
          "Garante que um membro do grupo tem um papel apropriado na equipe",
          "Oferece conselhos de carreira para membros do grupo",
          "Cria espaço para pessoas compartilharem desafios",
        ],
        examples: [
          "Mantém reuniões de 1:1 regulares e construtivas",
          "Ofereceu conselho sobre como se portar em reunião com um cliente",
          "Ensinou o modelo GROW aos membros do grupo",
        ],
      },
      {
        summary:
          "Inspira e retém um pequeno grupo de pessoas provocando-as ativamente a crescer",
        signals: [
          "Discute caminhos e cria planos de carreiras para crescimento pessoal",
          "Defende pessoas para que estejam cumprindo o devido papel na organização",
          "Trabalha com líderes de equipes para criar novos líderes",
        ],
        examples: [
          "Revisa progresso individual de membros do grupo a cada 6 semanas",
          "Sugere determinada pessoa do grupo como Tech Lead",
          "Conseguiu uma mudança de carreira para determinado membro do grupo",
        ],
      },
      {
        summary:
          "Gerencia interações e processos entre grupos, promovendo boas práticas com exemplo",
        signals: [
          "Gerencia transições de times de forma respeitosa e leve, tanto para o time quanto para o indivíduo",
          "Cria boas práticas para resolução de conflitos",
          "Garante que todos os postos de carreira entre os membros da equipe estão em conformidade com suas carreiras individuais",
        ],
        examples: [
          "Completou treinamento em liderança",
          "Criou plano que vai de encontro com os objetivos da empresa, do time e do indivíduo",
          "Preveniu situação de atrito com uma reunião direcionada",
        ],
      },
      {
        summary:
          "Ajuda no desenvolvimento de parte significante da Engenharia e é visto como conselheiro",
        signals: [
          "Ajuda no desenvolvimento de líderes seniores",
          "Identifica oportunidades de treinamento da liderança sênior",
          "Estimula com empatia todos a serem o melhor que podem",
        ],
        examples: [
          "Fez mentoria com Tech Leads",
          "Dividiu plano de carreira baseado em múltiplos caminhos para Tech Leads",
          "Defendeu o investimento em programas para desenvolvimento de carreira entre os executivos",
        ],
      },
    ],
  },

  ORG_DESIGN: {
    displayName: "Organização",
    category: "C",
    description:
      "Define processos e estruturas que possibilitam o crescimento e execução de um time diverso de Engenharia",
    milestones: [
      {
        summary:
          "Respeita e participa de processos, trazendo feedbacks significativos para crescimento da empresa",
        signals: [
          "Reflete sobre reuniões inspiradoras ou frustrantes",
          "Ensina outros sobre processos existentes",
          "Participa ativamente e faz contribuição a processos da empresa",
        ],
        examples: [
          "Facilitou reunião estratégica com empatia",
          "Explicou formato de reunião estratégica para novo talento",
          "Deu feedback valioso sobre a reunião de planejamento da sprint",
        ],
      },
      {
        summary:
          "Identifica oportunidades para melhorar processos existentes e faz mudanças que afetam o seu time",
        signals: [
          "Define estrutura de reunião e cadência de reuniões que o time precisa",
          "Engaja em pensamentos de organização de sistemas",
          "Defende diversidade e inclusão, além de propor novas ideias para ajudar",
        ],
        examples: [
          "Define nova reunião para o seu time",
          "Melhorou processo de reuniões semanais com cliente",
          "Definiu novo padrão de canais de comunicação do time",
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
          "Desenvolve templates de times básicos",
          "Criou programa de rotação de bugs para melhorar problemas de qualidade",
          "Definiu gráfico e manifesto de squads",
        ],
      },
      {
        summary:
          "Pensa sobre problemas organizacionais e identifica dinâmicas que possam contribuir com esses problemas",
        signals: [
          "Avalia incentivos estruturais e seus efeitos na execução",
          "Analisa sistemas atuais que possam ser enviesados",
          "Conecta conceitos abstratos a ações e normativas concretas da organização",
        ],
        examples: [
          "Conectou problema em recrutamento mobile a dificuldade de focar em excelência",
          "Mostrou o nível de discrepância entre níveis da liderança",
          "Analisou testes anteriores para possíveis falsos negativos",
        ],
      },
      {
        summary:
          "Lidera iniciativas que resolvem problemas derivados de dinâmicas e normativas da empresa",
        signals: [
          "Criou programa para treinamento da liderança em habilidade desejada",
          "Cria novas estruturas que promovem crescimentos específicos",
          "Lidera planejamento e comunicação para reorganizações",
        ],
        examples: [
          "Lidera esforços para aumentar o número de engenheiros mobile",
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
      "Ajuda no bem-estar emocional de um grupo durante tempos difíceis e comemora suas conquistas",
    milestones: [
      {
        summary:
          "Usa ferramentas e processos para garantir que colegas estão saudáveis e felizes",
        signals: [
          "Mantém assuntos em confidência a não ser que é moralmente ou legalmente obrigado a fazer o contrário",
          "Aplica o principio da razoabilidade com outros",
          "Evita botar a culpa em alguém e tenta focar em mudanças positivas",
        ],
        examples: [
          "Garante que as pessoas do grupo estão tirando férias suficientes",
          "Se coloca na posição para entender a perspectiva do outro",
          "Checou colega com sinais de burnout para saber se estava bem",
        ],
      },
      {
        summary: "Cria um ambiente positivo e engajador para membros do grupo",
        signals: [
          "Elogia experiência dos pares para criar empatia e compaixão",
          "Valida trabalho em andamento e sustenta motivação",
          "Propõe soluções quando times estão atolados de tarefas e perdem timming",
        ],
        examples: [
          "Coordena uma pequena celebração de lançamento do projeto",
          "Conecta tarefa entendiosa com objetivos gerais da empresa",
          "Notou um time sem vitórias recentes e sugeriu pequenas vitórias mais fáceis de serem alcançadas",
        ],
      },
      {
        summary:
          "Gerencia expectativas entre pares, líderes e promove ambiente mais calmo",
        signals: [
          "Treina membros do grupo para separarem incentivo de resposta",
          "Mantém a moral do grupo",
          "Ajuda membros do grupo a abordar problemas com curiosidade",
        ],
        examples: [
          "Completed training on transference and counter transference",
          "Completou treinamento em técnicas de negociação e compromisso",
          "Quando apropriado, reformula problema como um desafio, em vez de barreira",
        ],
      },
      {
        summary:
          "Defende as necessidades dos membros do grupo e trabalha proativamente para acalmar a organização",
        signals: [
          "Proativamente garante que o ambiente do grupo é saudável e inclusivo",
          "Ajuda proativamente na ansiedade de membros do grupo",
          "Está atento à retenção do time e propõe soluções para melhorar isso",
        ],
        examples: [
          "Aliviou tensão na organização através de direcionamento e contexto do produto",
          "Encorajou membros do grupo a focarem no que está no seu alcance",
          "Guiou pessoas durante mudança organizacional complexa",
        ],
      },
      {
        summary:
          "Protege todo o time canalizando negatividade em inspiração e motivação",
        signals: [
          "Reconhece e traz narrativas quando apropriado",
          "Trabalha para reformular narrativas de vitimização para senso de responsabilidade",
          "Melhora a segurança psicológica para todo o time",
        ],
        examples: [
          "Converteu membros do grupo de apontadores de problemas para solucionadores",
          "Desafiou narrativa negativa e a redirecionou para compaixão e empatia",
          "Cultivou cultura de empatia entre todo o time",
        ],
      },
    ],
  },

  ACCOMPLISHMENT: {
    displayName: "Conquistas",
    category: "C",
    description:
      "Inspira excelência no dia-a-dia, maximizando potencial e resolvendo problemas de performance com compaixão",
    milestones: [
      {
        summary:
          "Ajuda indivíduos a identificar problemas e soluções para os mesmos",
        signals: [
          "Percebe quando alguém está estagnado e oferece ajuda",
          "Ajuda outros a quebrar problemas em passos mais tangíveis e alcançáveis",
          "Conversa sobre problemas sem julgar",
        ],
        examples: [
          "Completou treinamento sobre diagnostico de problemas",
          "Tirou membro do grupo da inércia",
          "Reforça feedback positivo",
        ],
      },
      {
        summary:
          "Ajuda indivíduos a resolver problemas complexos de performance com insights, compaixão e habilidade",
        signals: [
          "Constrói contexto fora do problema",
          "Reconhece problemas do ambiente e sugere mudanças",
          "Trabalha para encorajar o senso de responsabilidade",
        ],
        examples: [
          "Completou treinamento sobre tomada de decisão",
          "Convenceu membros do grupo a resolver problema, ao invés de resolver para eles",
          "Deu feedback sobre performance ruim, com compaixão",
        ],
      },
      {
        summary:
          "Intervém em problemas de longa data de performance com resolução concreta de mudança",
        signals: [
          "Agrega sinais de performance ruim e cria processo para desenvolvimento",
          "Investiga motivação e atitudes para sinais de performance ruim",
          "Cria plano de melhora de performance",
        ],
        examples: [
          "Trabalha com membros do grupo para melhorar problemas de comunicação",
          "Sugeriu mudança de time, resultando em melhora de performance",
          "Gerenciou membros do grupo de perto para garantir sucesso no plano de performance",
        ],
      },
      {
        summary:
          "Media situações conflitosas, empodera times que não estão performando bem e resolve conflitos",
        signals: [
          "Reconhece interações tóxicas ou agressivas",
          "Quando apropriado, se insere em conflito para acalmar e mediar",
          "Encoraja diálogo aberto e cria confiança entre pares durante conflito",
        ],
        examples: [
          "Empoderou o time a seguir em frente apesar das incertezas",
          "Protegeu time de problemas externos para que possam focar nos objetivos",
          "Mediou situação entre membros do time para aliviar tensão",
        ],
      },
      {
        summary:
          "Resolve problemas complexos da organização ou conflitos persistentes entre seniores",
        signals: [
          "Assume times não performáticos e não funcionais, organizando o caos",
          "Repara dinâmicas do time e traz harmonia",
          "Preside sobre situação de time de times",
        ],
        examples: [
          "Reverteu performance de time problemático",
          "Aliviou tensão entre times",
          "Reconstruiu confiança entre líderes de times",
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
          "Informalmente mentora indivíduos de forma ad-hoc, ajuda novos talentos e transmite conhecimento da organização",
        signals: [
          "Se mostra aberto para dar ajuda e conselhos informais",
          "Age como pilar para pares e talentos mais juniores",
          "Dá bons conselhos quando requisitado",
        ],
        examples: [
          "Trabalha como onbuddy",
          "Fez pair-programming com colega para ajudar em um área não dominada pelo par",
          "Ajudou colega a entender seus sentimentos",
        ],
      },
      {
        summary:
          "Mentora pessoas proativamente e as guia para realizações ao invés de dar as respostas",
        signals: [
          "Tira tempo para explicar conceitos e boas práticas",
          "Faz perguntas para ajudar a clarear conceitos, ao invés de simplesmente apresentá-los",
          "Permite outros liderarem esforços quando isso irá ajudar no seu desenvolvimento",
        ],
        examples: [
          "Compartilhou artigo interessante para membro do grupo com intuito de ajudar no seu crescimento",
          "Ofereceu feedback com empatia para ajudar no crescimento",
          "Lidera por trás para ajudar alguém novo num cargo de liderança",
        ],
      },
      {
        summary:
          "Ensina pequeno grupo a contribuir para base de conhecimento da empresa",
        signals: [
          "Evita segurar informação que pode ser compartilhada com todos",
          "Trabalha para melhorar sistemas",
          "Encontra ferramentas que funcionam melhor com personalidade de membros do time",
        ],
        examples: [
          "Fez apresentação informal sobre determinado assunto",
          "Escreveu guia de como evitar problemas de sistema",
          "Trouxe nova ferramenta que encaixou e engajou mais o time",
        ],
      },
      {
        summary:
          "Encoraja pessoas a mentorarem umas as outras e cria formas disso acontecer",
        signals: [
          "Define um curriculo para uma determinada disciplina",
          "Atrai atenção para bons comportamentos de ensinamento e mentoria",
          "Cria série de apresentações informais e organiza palestrantes",
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
          "É modelo para relações produtivas e saudáveis de mentoria",
        ],
        examples: [
          "Instituiu o budget educacional para engenheiros",
          "Mentora mentores",
          "Começou o programa de conselhos da engenharia e trouxe mentores externos",
        ],
      },
    ],
  },

  EVANGELISM: {
    displayName: "Evangelização",
    category: "D",
    description:
      "Promove a empresa para o mundo externo como um ambiente atrativo e saudável de se trabalhar",
    milestones: [
      {
        summary:
          "Representa bem a empresa externamente e influencia indivíduos positivamente",
        signals: [
          "Compartilha sucessos pessoais e organizacionais com sua rede",
          "Participa de eventos e conversa com convidados",
          "Comunica de forma genuina e honesta a empolgação de seu trabalho para o mundo externo",
        ],
        examples: [
          "Compartilhou post de lançamento do produto",
          "Atuou como guia da empresa para pessoa desconhecida explicando sobre a empresa",
          "Ajuda nas postagens com argumentos ou fotos",
        ],
      },
      {
        summary:
          "Participa de pequenos eventos e faz ações simples para influenciar positivamente grupos de pessoas",
        signals: [
          "Faz esforço para introduzir a empresa às pessoas",
          "Entrou em grupo público e representou bem a empresa",
          "Organiza eventos pequenos que trazem pessoas para a empresa",
        ],
        examples: [
          "Voluntário em evento de programação local",
          "Organizou apresentação da empresa para estudantes da faculdade",
          "Palestrou em evento da empresa",
        ],
      },
      {
        summary:
          "Se esforça para influenciar positivamente grandes grupos de pessoas sobre sua visão da empresa",
        signals: [
          "Mentora ou participa em organização externa com alta visibilidade",
          "Constrói parcerias com organizações externas",
          "Escreve blog posts sobre a empresa que recebem tráfego moderado",
        ],
        examples: [
          "Representou a empresa em painel de conferência de experts da indústria",
          "Administra comunidade de desenvolvedores",
          "Construiu relação durável e de longo prazo com Developer Circles",
        ],
      },
      {
        summary:
          "Estabelece a empresa como um ambiente ótimo e inovador de se trabalhar para toda a indústria",
        signals: [
          "Se estabelece como um líder da indústria que atrai talentos",
          "Publica material de inovações organizacionais ou técnicas da empresa",
          "Tira vantagem da quantidade de pessoas que influencia para evangelizar a empresa",
        ],
        examples: [
          "Publicou um artigo sobre tecnologia utilizada na empresa",
          "Participou do lançamento de novo produto da empresa",
          "Fez uma publicação no blog de engenharia da empresa",
        ],
      },
      {
        summary:
          "Introduz a empresa de uma forma positiva e leve para um número maior de pessoas fora da indústria",
        signals: [
          "Entrega mensagens chave para audiência geral",
          "Influencia pessoas com muita audiência a falar positivamente da empresa",
          "Guia reconhecimento e adoção da empresa com números significantes",
        ],
        examples: [
          "Publicou artigo ou fez entrevista para jornal comum",
          "Fez apresentação em conferência com atenção nacional",
          "Representou a empresa em canal nacional de notícias",
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
          "Fez sessão casual para praticar perguntas",
          "Indicou pessoas apropriadas para posições abertas",
        ],
      },
      {
        summary:
          "Entrevista regularmente, ajuda o time a fazer decisões de contratação e ajuda a criar um pipeline diverso",
        signals: [
          "Usa guia de entrevistas para dar feedback claro e objetivo aos candidatos",
          "Entrevista candidatos com empatia e respeito",
          "Pesquisa sobre como abordar candidatos e aumentar a diversidade",
        ],
        examples: [
          "Adicionou evidência sobre entrevista",
          "Começou um evento mensal para candidatos conhecerem colaboradores da empresa",
          "Testou novo serviço para mais qualidade e diversidade de candidatos",
        ],
      },
      {
        summary:
          "Fortalece e mantém a integridade do processo atual, além de trazer regularmente fortes candidatos",
        signals: [
          "Ensina novos entrevistadores como fazer a entrevista com empatia",
          "Ajuda a modelar uma boa entrevista e dá bom feedback quando participa como ouvinte",
          "Leva novos entrevistadores como ouvintes e ajuda no feedback",
        ],
        examples: [
          "Escreveu nova pergunta para entrevista que vai de encontro com os critérios de qualidade de perguntas",
          "Trouxe novos candidatos para o pipeline proativamente, com um alto índice de conversão",
          "Propôs melhorias tangíveis e úteis para o processo de entrevista",
        ],
      },
      {
        summary:
          "Lidera e contribui ativamente com as decisões de recrutamento, além de se esforçar para trazer bons candidatos",
        signals: [
          "Documenta comentários sutis de entrevistas que indicam alinhamento de valores",
          "Toma decisões de contratamento, resolvendo discrepâncias e conflitos entre reports",
          "Categoriza candidatos por nota e anota caracteristicas de comportamento",
        ],
        examples: [
          "Planejou treinamento para entrevista com o time de Engenharia",
          "Criou template para comentários pós-entrevista",
          "Organizou programa para estágio em engenharia",
        ],
      },
      {
        summary:
          "Recruta em escala, investe em relações de longo prazo para posições críticas e define estratégia de recrutamento",
        signals: [
          "Define o tom, política e objetivos na construção de um time de alta qualidade e diverso",
          "Identifica aquisições promissoras",
          "Observa atividade da indústria, identificando oportunidades para posições críticas",
        ],
        examples: [
          "Conversou com um candidato senior muitos meses para preencher uma posição crítica",
          "Organizou esforços para convencer engenheiros a ficar",
          "Alinha objetivos e acompanha métricas demográficas do time regularmente",
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
          "É presente e disponível para seus times, além de contribuir positivamente para a cultura da empresa",
        signals: [
          "Participa em atividades do time",
          "Trata colegas e clientes com respeito",
          "Entra em grupos e comitês fora de suas tarefas formais",
        ],
        examples: [
          "Entrou e participou ativamente do comitê de front-end",
          "Trouxe um pequeno presente de férias para o time",
          "Escreveu um message board divertido e informativo sobre a processo de desenvolvimento",
        ],
      },
      {
        summary:
          "Toma frente e tem atitudes para promover uma cultura inclusiva",
        signals: [
          "Cria espaço para outros participarem",
          "Colabora com outros engenheiros fora das responsabilidades diretas",
          "Encontra formas de engajar novos talentos rapidamente",
        ],
        examples: [
          "Criou nova metodologia de onboarding",
          "Trouxe pessoas tímidas e introvertidas para uma conversa",
          "Voluntariou para tocar as dailies",
        ],
      },
      {
        summary:
          "Contribui para melhorar o relacionamente entre o time e ajuda a criar uma cultura de ajuda ao próximo",
        signals: [
          "Cobre um colega durante as férias em outro projeto",
          "Ajuda os outros do time com as deadlines, sem perder suas próprias",
          "Usa sua posição para trazer assuntos delicados em nome de outra pessoa",
        ],
        examples: [
          "Lidera novas iniciativas com pouca ajuda enquanto continua fazendo suas tarefas",
          "Criou e mantém engajamento em pequeno grupo dentro da empresa",
          "Manteve a positividade e aumentou a moral do time durante período de saídas",
        ],
      },
      {
        summary:
          "Deixa todos para cima e é exemplo de altruísmo para o time sem comprometer suas responsabilidades",
        signals: [
          "Se esforça muito pelo time",
          "Implementa programas para aumentar significativamente a inclusão no time",
          "Pega o trabalho tedioso do time sem ser requisitado",
        ],
        examples: [
          "Gastou grande quantidade de tempo para ajudar os colegas fora da responsabilidade direta",
          "Refatorou parte mais trabalhosa do código",
          "Atuou como único mantenedor de ferramenta interna por anos",
        ],
      },
      {
        summary:
          "É o guardião da cultura, vive os valores da empresa e define políticas que ajudam no relacionamento entre os times",
        signals: [
          "Cria relacionamentos entre times",
          "Relaciona valores da empresa aos indivíduos, times e liderança",
          "Define políticas e objetivos para manter a inclusão na empresa",
        ],
        examples: [
          "Organizou evento fora do trabalho para todo o time",
          "Criou pesquisa de felicidade do time de engenharia e atuou em cima das métricas encontradas",
          "Corrigiu comportamento e políticas que vão contra a inclusão",
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
