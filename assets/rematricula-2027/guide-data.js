window.guideData = [
      {
        id: "acesso",
        number: "02",
        title: "Acesso ao Portal GSP",
        color: "#2e7d55",
        summary: "Login, senha, seleção do aluno e bloqueios iniciais no Portal dos Pais.",
        questions: [
          {
            title: "Não lembro o login cadastrado",
            check: ["OBJ: conferir código da pessoa do responsável financeiro no TOTVS.", "Demais escolas: conferir e-mail cadastrado no responsável financeiro.", "Se for alteração de e-mail, ajustar cadastro do RF e orientar novo acesso após 1 hora."],
            answer: "O acesso ao Portal dos Pais utiliza o cadastro no sistema do Colégio. Vamos conferir o responsável financeiro e orientar o acesso correto.",
            escalate: "OBJ sem acesso mesmo com código do RF correto; demais escolas sem acesso mesmo após ajuste do e-mail do RF."
          },
          {
            title: "Esqueci minha senha",
            check: ["Usar a opção Esqueceu a senha no Portal.", "Confirmar se o e-mail cadastrado está correto.", "Orientar verificação de spam ou lixo eletrônico."],
            answer: "No Portal dos Pais, utilize Esqueceu senha. O sistema enviará a redefinição para o e-mail cadastrado.",
            escalate: "Quando o reset não chega mesmo com o e-mail correto."
          },
          {
            title: "Não aparece o nome do aluno",
            check: ["Confirmar se quem acessou é o responsável financeiro.", "Verificar se RF e responsável acadêmico possuem e-mails distintos quando forem pessoas diferentes.", "Conferir cadastro no TOTVS e aguardar sincronização após ajuste."],
            answer: "A Rematrícula fica disponível para o responsável financeiro. Vou conferir se o acesso utilizado está vinculado corretamente.",
            escalate: "Após ajuste cadastral e 1 hora de sincronização, o aluno ainda não aparece."
          },
          {
            title: "Tenho mais de um filho",
            check: ["Verificar quantos alunos estão vinculados ao RF.", "Confirmar se o responsável está selecionando um aluno por vez.", "Conferir se algum filho não aparece ou se há aluno incorreto."],
            answer: "O processo é feito um aluno por vez. Ao finalizar o primeiro, volte em Iniciar Rematrícula e selecione o próximo aluno.",
            escalate: "Algum filho não aparece para seleção ou aparece aluno incorreto."
          },
          {
            title: "Bloqueio ao iniciar matrícula",
            check: ["Solicitar o código do bloqueio informado na tela.", "Códigos mapeados: 0 já processado, 1 inadimplente, 2 retido, 3 vetado, 5 filho colaborador, 8 sem turma, 11 já possui matrícula.", "Direcionar retido/vetado para coordenação e falhas de turma para sala Acadêmico."],
            answer: "Vamos analisar o código de bloqueio apresentado e direcionar o atendimento conforme a regra da unidade.",
            escalate: "Bloqueio não procede, exige inclusão em metadados ou não está mapeado."
          }
        ]
      },
      {
        id: "identificacao",
        number: "03",
        title: "Identificação",
        color: "#e8752f",
        summary: "Validação de dados cadastrais do aluno, responsáveis e pessoas autorizadas.",
        questions: [
          {
            title: "Quero alterar dados cadastrais pelo Portal",
            check: ["Verificar se o campo está branco/editável ou cinza/bloqueado.", "Campos em branco podem ser alterados no Portal.", "Dados sensíveis ou documentais dependem de validação da secretaria."],
            answer: "Campos em branco estão disponíveis para alteração pelo Portal. Campos bloqueados dependem de validação da secretaria.",
            escalate: "Divergência em nome, documento ou filiação."
          },
          {
            title: "Não consigo avançar a etapa de identificação",
            check: ["Conferir se todas as abas foram confirmadas: aluno, filiação, responsáveis e pessoas autorizadas.", "Certificar se a última aba cadastral não está pendente.", "Pedir imagem da tela quando houver erro, sem dados sensíveis."],
            answer: "Todas as abas cadastrais precisam estar confirmadas para avançar a etapa.",
            escalate: "Todas as abas estão confirmadas em verde e o erro persiste."
          },
          {
            title: "Alteração do responsável financeiro",
            check: ["Confirmar se a pessoa em atendimento é o RF.", "Verificar se há inadimplência.", "Consultar o processo próprio em Material de Apoio."],
            answer: "Vamos analisar sua solicitação e direcionar conforme o processo de alteração do responsável financeiro.",
            escalate: "Qualquer dúvida sobre o processo de alteração do RF ou regra financeira."
          },
          {
            title: "Alteração do responsável acadêmico ou pessoas autorizadas",
            check: ["Localizar primeiro pelo CPF da pessoa.", "Incluir ou validar dados cadastrais no Portal.", "Quando houver guarda, incluir mãe ou pai também em pessoas autorizadas conforme regra interna."],
            answer: "É possível alterar diretamente pelo Portal, localizando primeiro pelo CPF da pessoa que deseja incluir.",
            escalate: "Dúvidas no processo de inclusão pelo Portal."
          }
        ]
      },
      {
        id: "precontrato",
        number: "04",
        title: "Pré-contrato",
        color: "#f5b82e",
        summary: "Serviços por escola, turno, bolsas por serviço e descontos exibidos no Portal.",
        questions: [
          {
            title: "Não entendi quais serviços posso contratar",
            check: ["Conferir unidade do aluno.", "Conferir segmento/série.", "Validar serviços disponíveis no Portal e materiais de marketing da escola."],
            answer: "As opções de serviço aparecem conforme unidade e segmento. Vou conferir o que está disponível para garantir a escolha correta.",
            escalate: "Serviço esperado não aparece ou há divergência entre Portal e regra da unidade."
          },
          {
            title: "Quero alterar o turno para o próximo ano letivo",
            check: ["Conferir unidade, segmento e série.", "Confirmar turnos disponíveis.", "Quando houver dois turnos, o RF deve formalizar por e-mail, exceto Santo Anjo."],
            answer: "Finalize a Rematrícula e formalize a solicitação pelo canal oficial. A manutenção depende de disponibilidade de vaga.",
            escalate: "Oferta de serviços por segmento não está completa na visão do RF."
          },
          {
            title: "Desconto aparece em um serviço e não em outro",
            check: ["Consultar planilha oficial de bolsa por serviço.", "Localizar aluno e serviço.", "Comparar o desconto da planilha com o exibido ao RF."],
            answer: "Os descontos são cadastrados por tipo de contratação de cada serviço, por isso podem aparecer em um serviço e não em outro.",
            escalate: "Desconto aprovado não aparece no serviço correto ou precisa ser ajustado após negociação."
          }
        ]
      },
      {
        id: "aulas",
        number: "05",
        title: "Aulas Extras",
        color: "#2457c5",
        summary: "Contratação de aulas extras, planos, valores e ofertas por série.",
        questions: [
          {
            title: "Uma aula extra não aparece para meu filho",
            check: ["Conferir série/segmento.", "Confirmar oferta disponível para aquela série.", "Validar se a aula deveria aparecer para o aluno."],
            answer: "Vamos acionar a equipe responsável para verificar a oferta e orientar a contratação para prosseguir.",
            escalate: "Oferta deveria aparecer e está ausente, ou há divergência de parametrização."
          },
          {
            title: "Marquei contratar, mas o valor não apareceu",
            check: ["Confirmar se marcou Contratar.", "Confirmar se selecionou a opção/plano de 2027.", "Verificar se o valor apareceu após a seleção do plano."],
            answer: "Além de marcar Contratar, é necessário selecionar a opção ou plano de 2027. O valor aparece após essa seleção.",
            escalate: "Plano selecionado e valor ausente, valor divergente ou modalidade esperada ausente."
          },
          {
            title: "Por que a mesma aula tem valores diferentes?",
            check: ["Conferir modalidade escolhida.", "Validar se há plano com ou sem almoço.", "Conferir quantidade de vezes por semana."],
            answer: "Algumas aulas possuem planos diferentes, como com ou sem almoço ou quantidade de vezes na semana.",
            escalate: "Falta modalidade, valor incoerente ou erro ao avançar com tudo selecionado."
          },
          {
            title: "Posso contratar aula extra depois?",
            check: ["Confirmar se a Rematrícula foi finalizada no painel ou TOTVS.", "Após conclusão, contratação pode ocorrer no Portal em Rematrícula > Aulas Extras.", "Em janeiro, revisar planos por causa de horários e almoço."],
            answer: "Sim, é possível contratar aulas extras após a conclusão da Rematrícula diretamente no Portal.",
            escalate: "Falta modalidade no Portal para a série específica."
          }
        ]
      },
      {
        id: "contratados",
        number: "06",
        title: "Serviços Contratados",
        color: "#6c3bc4",
        summary: "Minuta, cálculos, descontos, assinatura eletrônica e contratos.",
        questions: [
          {
            title: "Minuta contratual com dados incorretos",
            check: ["Identificar qual contrato está com erro.", "Confirmar se é minuta ou contrato assinado.", "Levantar quais dados estão incorretos, sem replicar documentos sensíveis."],
            answer: "Vamos acionar a equipe responsável para verificar e retornar com a orientação para prosseguir.",
            escalate: "Qualquer dado cadastral ou cláusula incorreta exige acionamento imediato do setor responsável."
          },
          {
            title: "Dúvidas sobre cláusulas do contrato",
            check: ["Acolher a família e ler a cláusula em conjunto.", "Entender a dúvida e o argumento.", "Dúvidas específicas após avaliação da diretoria seguem para Jurídico."],
            answer: "Vamos analisar a dúvida sobre a cláusula e direcionar para a equipe responsável quando exigir validação específica.",
            escalate: "Demanda que exija análise jurídica específica."
          },
          {
            title: "Como fazer assinatura eletrônica?",
            check: ["Localizar o botão antes do modo de pagamento.", "Botão: Assine o contrato e siga para o pagamento.", "Após clicar, a visão de formas de pagamento é liberada."],
            answer: "Clique em Assine o contrato e siga para o pagamento. A assinatura ocorre automaticamente e libera as formas de pagamento.",
            escalate: "Dúvidas ou erro no processo de assinatura."
          }
        ]
      },
      {
        id: "pagamento",
        number: "07",
        title: "Formas de Pagamento",
        color: "#c94836",
        summary: "Condição anual ou mensal, boleto, cartão, PIX, primeira parcela e finalização.",
        questions: [
          {
            title: "Não aparece a forma de pagamento",
            check: ["Confirmar se a assinatura eletrônica foi feita.", "Conferir se selecionou mensal ou à vista.", "Só depois aparecem os meios de pagamento."],
            answer: "A forma de pagamento aparece após a assinatura eletrônica e seleção da condição de pagamento do ano letivo.",
            escalate: "Regra financeira da unidade divergente do apresentado ao responsável no Portal."
          },
          {
            title: "Mensal: o que pagar para finalizar?",
            check: ["Confirmar botão Finalizar Matrícula.", "Conferir pagamento da primeira parcela.", "Conferir pagamento do material didático quando aplicável."],
            answer: "A efetivação ocorre com a confirmação do pagamento da primeira parcela. Também é importante concluir o material didático quando aplicável.",
            escalate: "Cobrança divergente ou necessidade de prorrogação de boleto da primeira parcela."
          },
          {
            title: "Botão Finalizar está cinza",
            check: ["Contrato assinado.", "Forma e meio de pagamento selecionados.", "Flags e declarações obrigatórias marcadas."],
            answer: "Quando Finalizar Matrícula está desabilitado, normalmente falta alguma confirmação obrigatória ou seleção da etapa.",
            escalate: "Tudo marcado e botão bloqueado, erro não mapeado ou pagamento feito sem avanço da etapa."
          },
          {
            title: "Quero pagar à vista",
            check: ["Conferir aluno, série e segmento.", "Consultar planilha de bolsa da unidade.", "Bolsa de anuidade não contempla material didático."],
            answer: "A bolsa de anuidade contempla os serviços contratados, exceto material didático. A regra da unidade precisa ser validada.",
            escalate: "Percentual ou cálculo divergente da regra financeira da unidade."
          },
          {
            title: "Família Fundadora acumula descontos?",
            check: ["Verificar porcentagem e serviços contratados.", "A bolsa entra no cálculo em cascata quando há pagamento anual.", "Não se aplica a Santo Anjo conforme guia."],
            answer: "É possível acrescentar apenas o desconto referente ao pagamento anual da anuidade quando essa modalidade for selecionada.",
            escalate: "Regra comercial ausente ou valor fora da regra da bolsa Família Fundadora."
          },
          {
            title: "Dúvidas sobre cartão, PIX ou boleto",
            check: ["Identificar meio de pagamento selecionado.", "PIX/cartão não geram lançamento no TOTVS até finalizar ou trocar para boleto.", "Boleto gera lançamento e pode ser pago pelo boleto registrado."],
            answer: "A forma selecionada no Portal determina como a Rematrícula será concluída. Para PIX ou cartão, finalize pelo Portal; para boleto, use o boleto registrado.",
            escalate: "Pagamento pendente, erro no Portal, troca de meio com divergência ou análise financeira."
          }
        ]
      },
      {
        id: "painel",
        number: "08",
        title: "Painel Administrativo",
        color: "#007c89",
        summary: "Consulta interna de matrícula/rematrícula, status, sincronizador e pagamento.",
        questions: [
          {
            title: "Como confirmar se a Rematrícula foi finalizada?",
            check: ["Consultar painel administrativo interno.", "Localizar aluno e status do processo.", "Verificar financeiro, detalhes pela engrenagem, pagamento da primeira parcela e material."],
            answer: "Vou consultar o status e, se ainda não tiver passado por todo o processo, orientar o que falta para concluir.",
            escalate: "Falha no status ou dúvida nos status deve ser direcionada à TI."
          },
          {
            title: "Como identificar os status no painel?",
            check: ["Matrícula: Em curso, Aguardando, Ag. Pagamento, Processado.", "Financeiro: Pendente ou Falha.", "Sync: Sincronizado, Processado ou Falha."],
            answer: "Use os status do painel para acompanhar diariamente o andamento e identificar falhas que precisam de atuação.",
            escalate: "Qualquer status Falha deve acionar a TI imediatamente."
          }
        ]
      }
    ];
