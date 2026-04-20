// ============================================================
// CONFIG — edite este arquivo para adaptar o site a outro médico
// ============================================================

// import heroFoto from './assets/hero.jpg'; // ← Adicione a foto da médica e descomente

export const CONFIG = {
  medico: {
    nome: "Dra. Beatriz Martins",
    especialidade: "Pneumologia",
    crm: "CRM/ES 16629 · RQE 16151",
    anosExperiencia: null, // preencher quando disponível
    pacientesAtendidos: null,
    avaliacao: "4.9",
    foto: "/images/drabeatriz.png",
    fraseHero: "Respirar não precisa ser difícil.",
    subfraseHero: "Pneumologista com abordagem integrativa, individual e humana. Cuido da sua saúde respiratória para que você viva com mais energia e qualidade de vida.",
    sobre: {
      epigrafe: "Minha missão em cada consulta: oferecer uma abordagem integrativa, individual e humana.",
      paragrafos: [
        "Prazer, meu nome é Beatriz! Sou pneumologista formada e especializada em doenças pulmonares obstrutivas pela Universidade de São Paulo (USP). Capixaba da gema, realizei minha formação como médica pela Universidade Federal do Espírito Santo.",
        "Já na faculdade me apaixonei pela pneumologia, pois enxerguei como o cuidado da saúde respiratória consegue proporcionar e devolver coisas muito preciosas — como o prazer de realizar nossas atividades diárias, a energia para fazermos aquilo que gostamos e o fôlego necessário para encararmos os desafios da vida. E, desde então, tornou-se minha missão ajudar as pessoas a respirar melhor.",
        "Fui entendendo que o cuidado com a saúde respiratória vai muito além de exames e medicamentos. Esse cuidado envolve o paciente como um todo, e esse é o meu propósito em cada consulta: oferecer uma abordagem integrativa, individual e humana.",
      ],
      formacao: [
        "UFES — Medicina",
        "Santa Casa de SP — Residência Clínica Médica",
        "USP — Pneumologia",
      ],
    },
  },

  whatsapp: {
    numero: "5527999629365",
    mensagem: "Olá! Gostaria de agendar uma consulta com a Dra. Beatriz.",
  },

  instagram: "https://www.instagram.com/beatrizmartins_pneumo/",

  especialidades: [
    {
      titulo: "Asma",
      descricao: "Diagnóstico e tratamento individualizado da asma, com controle efetivo das crises e melhora da qualidade de vida.",
    },
    {
      titulo: "DPOC",
      descricao: "Manejo da Doença Pulmonar Obstrutiva Crônica com foco na estabilização, reabilitação e prevenção de exacerbações.",
    },
    {
      titulo: "Bronquiectasias",
      descricao: "Avaliação e tratamento das bronquiectasias, reduzindo infecções recorrentes e preservando a função pulmonar.",
    },
    {
      titulo: "Doenças Pulmonares Fibróticas",
      descricao: "Acompanhamento especializado das pneumopatias intersticiais e fibróticas, com protocolos atualizados.",
    },
    {
      titulo: "Apneia do Sono",
      descricao: "Diagnóstico e tratamento da apneia obstrutiva do sono, devolvendo noites reparadoras e energia para o dia a dia.",
    },
    {
      titulo: "Tabagismo",
      descricao: "Programa estruturado para cessação do tabagismo, com suporte médico, farmacológico e comportamental.",
    },
  ],

  autoridade: {
    formacao: [
      "Graduação em Medicina — Universidade Federal do Espírito Santo (UFES) · CRM/ES 16629",
      "Residência em Clínica Médica — Santa Casa de São Paulo",
      "Residência em Pneumologia — Universidade de São Paulo (USP) · RQE 16151",
      "Complementação Especializada em Doenças Pulmonares Obstrutivas — USP",
    ],
    certificacoes: [
      "Especialista em Doenças Pulmonares Obstrutivas — USP",
      "Membro da Sociedade Brasileira de Pneumologia e Tisiologia",
    ],
  },

  depoimentos: [
    {
      nome: "Carla Mendonça",
      texto: "A Dra. Beatriz transformou minha relação com a asma. Pela primeira vez em anos consigo dormir bem e fazer minhas atividades sem crises. Atendimento humano e muito cuidadoso.",
      nota: 5,
    },
    {
      nome: "Roberto Farias",
      texto: "Tratei apneia do sono com a Dra. Beatriz e a diferença foi imediata. Ela explicou tudo com muita paciência e encontrou o tratamento ideal para mim. Recomendo demais.",
      nota: 5,
    },
    {
      nome: "Márcia Oliveira",
      texto: "Profissional excepcional. A abordagem dela vai além do diagnóstico — ela realmente entende o impacto da doença na vida do paciente. Me sinto muito bem acompanhada.",
      nota: 5,
    },
  ],

  faq: [
    {
      pergunta: "Como funciona a primeira consulta?",
      resposta: "Na primeira consulta realizamos uma avaliação completa do seu histórico de saúde respiratória, sintomas e exames anteriores. A partir daí, montamos um plano de tratamento individualizado para o seu caso.",
    },
    {
      pergunta: "Quais convênios são aceitos?",
      resposta: "Atendemos por particular e alguns convênios selecionados. Entre em contato via WhatsApp para verificar se o seu plano está disponível.",
    },
    {
      pergunta: "Preciso de encaminhamento para consultar?",
      resposta: "Não é obrigatório. Você pode agendar diretamente pelo WhatsApp. Se tiver encaminhamento ou exames anteriores, traga — isso enriquece muito a consulta.",
    },
    {
      pergunta: "Que exames devo levar na consulta?",
      resposta: "Se você já tiver espirometria, raio-X ou tomografia de tórax, polissonografia ou outros exames recentes, traga. Mas não se preocupe caso não tenha — solicitaremos o que for necessário na consulta.",
    },
    {
      pergunta: "A apneia do sono é tratada sem cirurgia?",
      resposta: "Na maioria dos casos, sim. Os principais tratamentos são o CPAP, aparelhos intraorais e mudanças de hábito. A indicação depende da gravidade e do perfil de cada paciente.",
    },
    {
      pergunta: "Preciso de agendamento prévio?",
      resposta: "Sim, todas as consultas são realizadas com hora marcada para garantir um atendimento de qualidade e personalizado. Agende pelo WhatsApp.",
    },
  ],

  contato: {
    local: "Clínica MedSono",
    endereco: "R. Prof. Almeida Cousin, 125, sala 1111 — Enseada do Suá, Vitória/ES",
    cep: "29050-565",
    telefone: "(27) 99962-9365",
    email: null,
    horarios: [],
    mapaUrl:
      "https://maps.google.com/maps?q=R.+Prof.+Almeida+Cousin,+125,+Enseada+do+Sua,+Vitoria,+ES&output=embed",
  },
};
