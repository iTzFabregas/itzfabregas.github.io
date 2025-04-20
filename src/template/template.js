const subjTemplates = {
    1: `Oportunidade de Patrocínio – 28ª Semana da Computação da USP`,
    2: `_`,
    3: `_`,
    4: `_`,
}

const bodyTemplates = {
    1: 
`Olá {{nomePessoa}}, espero que esteja bem!

Sou {{nomeSemcomper}}, estudante da Universidade de São Paulo (USP), no campus de São Carlos, e gostaria de convidar {{artigo}} {{nomeEmpresa}} para participar da Semana da Computação (Semcomp), um evento que conecta estudantes, profissionais e empresas do setor de tecnologia.

A Semcomp é um evento anual da USP São Carlos que reúne estudantes, profissionais e empresas do setor de tecnologia. Nossa programação inclui palestras, minicursos, hackathons, feira de recrutamento e muito mais, proporcionando um ambiente ideal para networking, aprendizado e inovação.

Ao patrocinar a Semcomp, {{artigo}} {{nomeEmpresa}} terá a chance de fortalecer sua marca entre estudantes altamente qualificados, se conectar diretamente com futuros talentos da área e compartilhar tecnologias, experiências e vivências da empresa, atraindo novos talentos e criando oportunidades estratégicas.

Em anexo, envio um material com mais detalhes sobre o evento e as modalidades de patrocínio disponíveis. Seria uma honra contar com {{artigo}} {{nomeEmpresa}} como patrocinador da Semcomp!

Estamos à disposição para esclarecer quaisquer dúvidas e ficaremos felizes em agendar uma conversa para explorar as melhores possibilidades de parceria.

Aguardo seu retorno!

Atenciosamente,`,

    2: 
`Olá {{nomePessoa}}, espero que esteja bem!

Escrevo para reforçar nosso convite para a 28ª Semana da Computação (Semcomp)! Sei que a rotina pode ser corrida, então queria verificar se teve a oportunidade de analisar nossa proposta de parceria.

Acredito que essa pode ser uma ótima chance para {{artigo}} {{nomeEmpresa}} fortalecer sua marca e se conectar com estudantes talentosos da área de tecnologia. Caso tenha interesse, fico à disposição para uma conversa rápida e para esclarecer qualquer dúvida.

Aguardo seu retorno!

Atenciosamente,`,

    3: 
`Olá!

Estou na organização da 28ª Semana da Computação (Semcomp) e gostaria de conversar sobre uma possível parceria! A Semcomp conecta estudantes de tecnologia a empresas.
Vamos conversar?
`,

    4: 
`Olá {{nomePessoa}} espero que esteja tudo bem com você!

Há algumas semanas atrás, entrei em contato para discutir a possibilidade de participação d{{artigo}} {{nomeEmpresa}} na SEMCOMP. Você mencionou que iria verificar com sua equipe sobre essa oportunidade.

Gostaria de saber se já houve alguma atualização sobre esse assunto. Caso contrário, ficarei feliz em fornecer qualquer informação adicional que possa ser útil para você e sua equipe na tomada de decisão.

Se, por algum motivo, você não puder tratar diretamente dessa questão, ficaria grato se pudesse nos indicar outro contato n{{artigo}} {{nomeEmpresa}} com quem possamos prosseguir a conversa.

Agradeço antecipadamente pela sua atenção e aguardo ansiosamente sua resposta.

Atenciosamente,`

}


export function preencherTemplateBoby(opcao, dados) {
    return bodyTemplates[opcao].replace(/{{(.*?)}}/g, (_, chave) => {
        return dados[chave.trim()] ?? '';
    });
}

export function preencherTemplateSubj(opcao) {
    return subjTemplates[opcao]
}
