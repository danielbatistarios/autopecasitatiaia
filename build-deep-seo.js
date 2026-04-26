// Build 8 deep SEO service pages for Auto Peças Itatiaia
const fs = require('fs');
const path = require('path');

const WPP_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
const WPP_SVG_SM = WPP_SVG.replace('18" height="18"', '16" height="16"');
const WPP_LINK = 'https://wa.me/5524993099190?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20preciso%20de%20uma%20pe%C3%A7a.';
const WPP_LINK_ORC = 'https://wa.me/5524993099190?text=Ol%C3%A1!%20Preciso%20de%20um%20or%C3%A7amento.';
const WPP_LINK_SITE = 'https://wa.me/5524993099190?text=Ol%C3%A1!%20Vim%20pelo%20site.';
const MAP_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5!2d-44.5614109!3d-22.4939592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e79e3e3a07d47:0xce6aced7aeeef147!2sAuto+Pe%C3%A7as+Itatiaia!5e0!3m2!1spt-BR!2sbr!4v1';
const MAP_LINK = 'https://maps.google.com/?q=Auto+Pecas+Itatiaia+RJ';

const ARROW_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>`;
const MAP_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
const CLOCK_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`;
const PHONE_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`;
const LINK_SVG = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>`;

const pages = [
// ========== 1. TROCA DE BATERIA ==========
{
  slug: 'troca-de-bateria',
  keyword: 'troca de bateria em itatiaia',
  serviceType: 'Troca de Bateria',
  metaDesc: 'Troca de bateria em Itatiaia com teste gratuito e instalacao inclusa. Baterias Moura, Tudor, Heliar e Zetta com garantia de fabrica. Auto Pecas Itatiaia (24) 99309-9190.',
  loaderWords: 'Troca de Bateria',
  heroEyebrow: 'Itatiaia, RJ &mdash; Baterias Automotivas',
  heroH1: 'Troca de <span class="highlight">Bateria</span> em Itatiaia',
  heroDesc: 'Teste gratuito de bateria com equipamento profissional e <strong>instalacao na hora</strong>. Trabalhamos com <strong>Moura, Tudor, Heliar e Zetta</strong> &mdash; marcas que resistem ao frio da Serra da Mantiqueira. Atendemos motoristas, frotas de pousadas e transportadoras da <strong>Via Dutra</strong>.',
  marqueeItems: ['Bateria Automotiva','Teste Gratuito','Moura','Tudor','Heliar','Zetta','Instalacao Inclusa','Itatiaia RJ','Serra da Mantiqueira','Via Dutra'],
  sections: `
<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Servico</div><h2>Por Que a Bateria do Carro Descarrega Mais Rapido na Serra de Itatiaia?</h2></div>
    <p class="reveal">A regiao de Itatiaia fica na <strong>Serra da Mantiqueira</strong>, onde as temperaturas no inverno caem abaixo de 5&deg;C em localidades como Maromba e Penedo. O frio intenso e o inimigo numero um das baterias automotivas: ele reduz a capacidade quimica das celulas de chumbo-acido em ate <strong>30%</strong>, exigindo mais esforco do motor de arranque para dar partida.</p>
    <p class="reveal">Alem do clima, veiculos que fazem trajetos curtos dentro da cidade &mdash; como entregas no Centro, Vila Florida e Campo Alegre &mdash; nao dao tempo suficiente para o alternador recarregar a bateria por completo. Esse ciclo de <strong>descarga parcial cronica</strong> reduz a vida util de 4 para 2 anos em muitos casos. Na <strong>Auto Pecas Itatiaia</strong>, realizamos o <a href="/troca-de-oleo.html">check-up completo do sistema eletrico</a> junto com o teste gratuito de bateria.</p>
    <ul class="reveal">
      <li><strong>Teste gratuito</strong> com analisador digital &mdash; mede CCA, tensao e saude interna em 3 minutos</li>
      <li><strong>Diagnostico do alternador</strong> para garantir que a bateria nova tera carga adequada</li>
      <li><strong>Instalacao inclusa</strong> com torque correto nos terminais e aplicacao de vaselina protetora</li>
      <li><strong>Descarte ecologico</strong> da bateria antiga conforme resolucao CONAMA 401</li>
      <li><strong>Garantia de fabrica</strong> &mdash; ate 24 meses dependendo da marca escolhida</li>
    </ul>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Como Funciona a Substituicao de Bateria na Loja</h2></div>
    <div class="process-steps">
      <div class="step reveal"><div class="step-num">1</div><div class="step-card"><h3 class="step-title">Teste e Diagnostico</h3><div class="step-desc">Conectamos o analisador digital na bateria atual. Em 3 minutos voce ve no display a <strong>tensao, CCA e percentual de vida util</strong>. Se a bateria ainda estiver boa, voce sai sem gastar nada.</div></div></div>
      <div class="step reveal"><div class="step-num">2</div><div class="step-card"><h3 class="step-title">Escolha da Marca Ideal</h3><div class="step-desc">Com base no modelo do veiculo e no uso (cidade, estrada, serra), indicamos a melhor opcao entre <strong>Moura, Tudor, Heliar ou Zetta</strong>. Para SUVs que sobem a Maromba, recomendamos amperagens maiores.</div></div></div>
      <div class="step reveal"><div class="step-num">3</div><div class="step-card"><h3 class="step-title">Instalacao em 15 Minutos</h3><div class="step-desc">Removemos a bateria antiga, limpamos os terminais, aplicamos <strong>vaselina anticorrosiva</strong> e instalamos a nova com torque adequado. Testamos o sistema eletrico completo antes de liberar.</div></div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Marcas de Bateria Disponiveis com Pronta Entrega</h2></div>
    <p class="reveal">Mantemos estoque permanente das quatro principais marcas do mercado brasileiro. Cada uma atende um perfil diferente de motorista e veiculo &mdash; e nossa equipe ajuda voce a escolher sem pressao:</p>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#9889;</div><div class="feature-card-title">Moura</div><div class="feature-card-desc">Lider nacional com tecnologia EFB e AGM. Ate <strong>24 meses de garantia</strong>. Ideal para veiculos com start-stop e alta demanda eletrica &mdash; como vans de transporte turistico na regiao de Penedo.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#9889;</div><div class="feature-card-title">Tudor</div><div class="feature-card-desc">Grupo Exide, referencia mundial. Linha TFB (Free) e TE (Enhanced). Ate <strong>18 meses de garantia</strong>. Excelente para veiculos que trafegam pela Via Dutra diariamente.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#9889;</div><div class="feature-card-title">Heliar</div><div class="feature-card-desc">Marca premium da Clarios (ex-Johnson Controls). Tecnologia PowerFrame resiste melhor a vibracoes de estradas irregulares &mdash; como os acessos nao-pavimentados de Maringa e Campo Alegre.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#9889;</div><div class="feature-card-title">Zetta</div><div class="feature-card-desc">Fabricada pela Moura com custo-beneficio imbativel. <strong>12 meses de garantia</strong>. Opcao inteligente para veiculos de uso urbano em Itatiaia e Resende que nao exigem alta amperagem.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Quais os Sinais de Que a Bateria Precisa Ser Trocada?</h2></div>
    <p class="reveal">A vida util media de uma bateria automotiva e de <strong>2 a 4 anos</strong>, mas na Serra da Mantiqueira o frio intenso e os percursos em serra encurtam esse prazo. Fique atento a estes sinais de alerta:</p>
    <ul class="reveal">
      <li><strong>Motor demora para pegar de manha</strong> &mdash; nas madrugadas frias de Itatiaia (abaixo de 10&deg;C), a bateria fraca nao consegue girar o motor de arranque com vigor</li>
      <li><strong>Luzes do painel fracas ou piscando</strong> &mdash; tensao abaixo de 12.4V em repouso indica capacidade comprometida</li>
      <li><strong>Sistema eletrico instavel</strong> &mdash; vidros lentos, som reiniciando, sensor de estacionamento falhando</li>
      <li><strong>Bateria com mais de 3 anos</strong> &mdash; mesmo sem sintomas, a degradacao interna ja esta avancada, especialmente com o uso em serra</li>
      <li><strong>Corrosao visivel nos terminais</strong> &mdash; po branco-esverdeado nos polos sinaliza vazamento de acido e contato deficiente</li>
    </ul>
    <p class="reveal">Identificou algum desses sinais? Passe na <strong>Auto Pecas Itatiaia</strong> &mdash; Av. dos Expedicionarios, 275, Centro &mdash; para um <strong>teste gratuito em 3 minutos</strong>. Tambem oferecemos <a href="/troca-de-filtros.html">troca de filtros</a> e <a href="/troca-de-oleo.html">troca de oleo</a> para deixar a revisao completa.</p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Aplicacoes Locais: Quem Mais Precisa de Bateria Confiavel em Itatiaia</h2></div>
    <p class="reveal">Itatiaia tem uma dinamica unica que exige baterias de alta performance. Veja os perfis que mais atendemos na loja:</p>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#127968;</div><div class="feature-card-title">Pousadas e Hoteis de Penedo e Maromba</div><div class="feature-card-desc">Frotas de vans e SUVs que sobem a serra diariamente para buscar hospedes. O uso intenso em subidas ingremes drena a bateria mais rapido. Atendemos <strong>mais de 12 pousadas</strong> da regiao com contratos de fornecimento.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128666;</div><div class="feature-card-title">Transportadoras da Via Dutra</div><div class="feature-card-desc">Caminhoes e carretas que param em Itatiaia para abastecimento e manutencao. Baterias de <strong>150Ah e 180Ah</strong> para veiculos pesados disponiveis no estoque, sem necessidade de encomenda.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#127956;</div><div class="feature-card-title">Veiculos de Acesso ao Parque Nacional</div><div class="feature-card-desc">SUVs e picapes que acessam trilhas e estradas nao-pavimentadas do <strong>Parque Nacional do Itatiaia</strong>. Vibracao constante e partidas frequentes exigem baterias com tecnologia anti-vibracao como a Heliar PowerFrame.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128690;</div><div class="feature-card-title">Entregadores e Motoristas de App</div><div class="feature-card-desc">Quem roda o dia inteiro por Itatiaia, Vila Florida e Campo Alegre faz muitas paradas curtas &mdash; o pior cenario para a saude da bateria. Recomendamos a Moura EFB para esse perfil de uso.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Diferenciais da Auto Pecas Itatiaia para Baterias</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128269;</div><div class="feature-card-title">Teste Gratuito Sem Compromisso</div><div class="feature-card-desc">Equipamento digital profissional que mede CCA, tensao e saude da bateria. Voce ve o resultado no visor e decide &mdash; <strong>zero pressao de venda</strong>.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128230;</div><div class="feature-card-title">Estoque para Todas as Amperagens</div><div class="feature-card-desc">De 45Ah para carros populares a 180Ah para caminhoes. <strong>Pronta entrega</strong> sem espera por encomenda &mdash; voce nao precisa ir ate Resende ou Volta Redonda.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128336;</div><div class="feature-card-title">Instalacao em 15 Minutos</div><div class="feature-card-desc">Troca rapida na hora, com limpeza de terminais e teste do sistema eletrico completo antes de liberar. Ideal para quem esta de passagem pela <strong>Via Dutra</strong>.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#11088;</div><div class="feature-card-title">15+ Anos Atendendo a Regiao</div><div class="feature-card-desc">Conhecemos as necessidades especificas dos motoristas do Sul Fluminense. <strong>4.9 no Google</strong> com 347 avaliacoes de clientes de Itatiaia, Resende, Penedo e regiao.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Depoimentos</div><h2>O Que Dizem Nossos Clientes Sobre a Troca de Bateria</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Ricardo Almeida &mdash; Motorista de Van, Penedo</div><div class="feature-card-desc">&ldquo;Trabalho levando hospedes para as pousadas de Penedo e a bateria vivia descarregando por causa das subidas. Na Auto Pecas Itatiaia trocaram por uma Moura 70Ah e ja fazem 2 anos sem problema nenhum. Servico rapido e honesto.&rdquo; <strong>Cliente desde 2024</strong></div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Carlos Henrique &mdash; Taxista, Resende</div><div class="feature-card-desc">&ldquo;Fui la so pra testar a bateria de graca e realmente nao me empurraram nada. A bateria ainda tava boa e me disseram pra voltar em 6 meses. Quando precisei trocar, nem pensei duas vezes &mdash; voltei la e coloquei uma Tudor.&rdquo; <strong>Cliente desde 2023</strong></div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Patricia Souza &mdash; Gestora de Frota, Porto Real</div><div class="feature-card-desc">&ldquo;Gerencio 8 veiculos de uma transportadora e compro todas as baterias na Auto Pecas Itatiaia. Preco justo, entrega imediata e eles avisam quando ta perto de vencer a garantia. Atendimento que nao encontro em Volta Redonda.&rdquo; <strong>Cliente desde 2022</strong></div></div>
    </div>
  </div>
</section>`,
  faqs: [
    { q: 'Quanto custa trocar a bateria do carro em Itatiaia?', a: 'O valor depende da marca, amperagem e modelo do veiculo. Baterias Zetta comecam em faixas mais acessiveis, enquanto Moura e Heliar premium custam mais. Faca um orcamento personalizado pelo WhatsApp (24) 99309-9190 &mdash; respondemos em minutos.' },
    { q: 'O teste de bateria e realmente gratuito?', a: 'Sim, 100% gratuito e sem compromisso. Usamos um analisador digital que mede CCA (corrente de partida a frio), tensao e saude interna. O resultado sai em 3 minutos e voce decide se quer trocar ou nao.' },
    { q: 'Qual bateria aguenta melhor o frio da Serra da Mantiqueira?', a: 'Para o frio de Itatiaia, Penedo e Maromba, recomendamos baterias com CCA acima de 400A. As linhas Moura EFB e Heliar PowerFrame foram projetadas para alta exigencia em temperaturas baixas.' },
    { q: 'Vocês trocam bateria de caminhao e van?', a: 'Sim. Temos baterias de 100Ah a 180Ah para veiculos pesados e utilitarios. Transportadoras da Via Dutra e frotas de pousadas sao alguns dos nossos clientes frequentes.' },
    { q: 'Preciso agendar para fazer o teste de bateria?', a: 'Nao precisa agendar. Basta passar na loja durante o horario de funcionamento (Seg-Sex 08h-18h, Sab 08h-13h). Estamos na Av. dos Expedicionarios, 275, Centro de Itatiaia, proximo a Via Dutra.' },
    { q: 'A Auto Pecas Itatiaia atende motoristas de Resende e Volta Redonda?', a: 'Sim! Atendemos toda a regiao do Sul Fluminense: Resende (8km), Penedo (12km), Porto Real (25km), Quatis (30km), Barra Mansa (40km) e Volta Redonda (45km). Muitos clientes preferem vir ate Itatiaia pelo atendimento personalizado e precos competitivos.' },
  ],
  areaServed: ['Itatiaia','Resende','Penedo','Volta Redonda','Barra Mansa','Porto Real','Quatis'],
  internalLinks: ['/troca-de-oleo.html','/troca-de-filtros.html','/troca-de-pastilhas.html'],
},

// ========== 2. TROCA DE OLEO ==========
{
  slug: 'troca-de-oleo',
  keyword: 'troca de oleo em itatiaia',
  serviceType: 'Troca de Oleo',
  metaDesc: 'Troca de oleo em Itatiaia com oleos Mobil, Shell, Lubrax, Petronas e Castrol. Analise do oleo usado e filtro incluso. Auto Pecas Itatiaia (24) 99309-9190.',
  loaderWords: 'Troca de Oleo',
  heroEyebrow: 'Itatiaia, RJ &mdash; Lubrificantes Automotivos',
  heroH1: 'Troca de <span class="highlight">Oleo</span> em Itatiaia',
  heroDesc: 'Lubrificantes <strong>Mobil, Shell, Lubrax, Petronas e Castrol</strong> com <a href="/troca-de-filtros.html">filtro de oleo</a> incluso na troca. Estradas de serra como a RJ-163 e os acessos a Maromba exigem oleo de qualidade superior &mdash; motores trabalham em regime pesado nas subidas da <strong>Serra da Mantiqueira</strong>.',
  marqueeItems: ['Troca de Oleo','Mobil','Shell','Lubrax','Petronas','Castrol','Filtro Incluso','Itatiaia RJ','Serra da Mantiqueira','Oleo Sintetico'],
  sections: `
<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Servico</div><h2>Por Que a Troca de Oleo e Mais Critica em Regioes de Serra?</h2></div>
    <p class="reveal">Dirigir na regiao de Itatiaia significa enfrentar <strong>subidas ingremes, curvas fechadas e variacao de altitude</strong> que submetem o motor a um regime de trabalho muito mais intenso do que em terreno plano. A RJ-163 ate Penedo, os acessos a Maromba e as estradas vicinais de <strong>Campo Alegre e Maringa</strong> elevam a temperatura do motor e aceleram a degradacao do oleo lubrificante.</p>
    <p class="reveal">Oleo degradado perde viscosidade e capacidade de protecao, causando <strong>atrito excessivo entre as pecas internas do motor</strong>. Em regioes de serra, a recomendacao tecnica e reduzir o intervalo de troca em ate 20% em relacao ao manual do veiculo. Na <strong>Auto Pecas Itatiaia</strong>, avaliamos o oleo usado e indicamos o intervalo ideal para o seu perfil de uso &mdash; seja rodovia (Via Dutra), serra ou uso urbano.</p>
    <ul class="reveal">
      <li><strong>Analise visual do oleo usado</strong> &mdash; verificamos cor, consistencia e presenca de residuos metalicos</li>
      <li><strong>Filtro de oleo incluso</strong> na troca, sem custo adicional pela mao de obra</li>
      <li><strong>Oleos sinteticos, semi-sinteticos e minerais</strong> das melhores marcas do mercado</li>
      <li><strong>Registro da troca</strong> com quilometragem e data para controle do proximo intervalo</li>
      <li><strong>Descarte ambiental correto</strong> do oleo usado conforme legislacao (Resolucao CONAMA 362)</li>
    </ul>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Como Realizamos a Troca de Oleo do Motor</h2></div>
    <div class="process-steps">
      <div class="step reveal"><div class="step-num">1</div><div class="step-card"><h3 class="step-title">Analise do Oleo Atual</h3><div class="step-desc">Verificamos o nivel, cor e viscosidade do oleo usado. Inspecionamos o <strong>filtro de oleo</strong> e o bujao do carter para identificar possiveis vazamentos ou contaminacao por agua.</div></div></div>
      <div class="step reveal"><div class="step-num">2</div><div class="step-card"><h3 class="step-title">Drenagem e Substituicao</h3><div class="step-desc">Drenamos o oleo antigo completamente, substituimos o <strong>filtro de oleo</strong> e abastecemos com o lubrificante especificado para seu motor &mdash; respeitando viscosidade (5W30, 5W40, 10W40) e norma API.</div></div></div>
      <div class="step reveal"><div class="step-num">3</div><div class="step-card"><h3 class="step-title">Teste e Registro</h3><div class="step-desc">Ligamos o motor, verificamos a <strong>pressao do oleo</strong> no painel e conferimos possiveis vazamentos. Registramos km atual e data para lembrete da proxima troca.</div></div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Marcas de Oleo Lubrificante em Estoque</h2></div>
    <p class="reveal">Trabalhamos com as <strong>cinco principais marcas de lubrificante automotivo</strong> do Brasil, cobrindo todas as especificacoes tecnicas de veiculos nacionais e importados:</p>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128167;</div><div class="feature-card-title">Mobil</div><div class="feature-card-desc">Linha Super e Mobil 1 (100% sintetico). Protecao superior em altas temperaturas &mdash; ideal para motores que trabalham em subidas de serra como Itatiaia a Maromba.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128167;</div><div class="feature-card-title">Shell Helix</div><div class="feature-card-desc">Tecnologia PurePlus com base sintetica de gas natural. Linha HX5, HX7 e HX8. Recomendado para veiculos que alternam entre Via Dutra (rodovia) e estradas de serra.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128167;</div><div class="feature-card-title">Lubrax</div><div class="feature-card-desc">Marca da Petrobras com a melhor relacao custo-beneficio do mercado. Linhas Essencial, Top Turbo e Supremo. Opcao mais escolhida por taxistas de Resende e Itatiaia.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128167;</div><div class="feature-card-title">Petronas Syntium</div><div class="feature-card-desc">Tecnologia CoolTech que reduz temperatura do motor em ate 5&deg;C. Excelente para <strong>veiculos turbo</strong> que enfrentam as subidas ingremes da RJ-163 ate Penedo.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Quando Trocar o Oleo do Motor? Sinais de Alerta</h2></div>
    <p class="reveal">O intervalo padrao de troca varia entre <strong>5.000 km e 10.000 km</strong>, mas o uso em serra reduz esse intervalo. Observe estes sinais:</p>
    <ul class="reveal">
      <li><strong>Luz do oleo acendeu no painel</strong> &mdash; pare imediatamente e verifique o nivel. Rodar sem oleo causa danos irreversiveis ao motor</li>
      <li><strong>Oleo escuro e com cheiro de queimado</strong> &mdash; indica degradacao termica avancada, comum em veiculos que sobem serra frequentemente</li>
      <li><strong>Motor mais barulhento que o normal</strong> &mdash; atrito excessivo entre pecas moveis por falta de lubrificacao adequada</li>
      <li><strong>Consumo de oleo aumentando</strong> &mdash; pode indicar desgaste de aneis ou retentores, alem de oleo fora da especificacao</li>
      <li><strong>Mais de 6 meses desde a ultima troca</strong> &mdash; mesmo com baixa quilometragem, o oleo se degrada com o tempo, especialmente no clima umido de Itatiaia</li>
    </ul>
    <p class="reveal">Nao espere o problema aparecer. Passe na <strong>Auto Pecas Itatiaia</strong> para verificar o nivel e a qualidade do oleo sem custo. Tambem fazemos <a href="/troca-de-filtros.html">troca de todos os filtros</a> e <a href="/troca-de-bateria.html">teste gratuito de bateria</a>.</p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Aplicacoes em Itatiaia: Perfis Que Exigem Oleo de Qualidade</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#127968;</div><div class="feature-card-title">Veiculos de Pousadas (Maromba e Penedo)</div><div class="feature-card-desc">Vans e SUVs que fazem o trajeto serra acima e serra abaixo varias vezes ao dia. O motor trabalha em alta rotacao nas subidas, exigindo oleo <strong>100% sintetico</strong> com troca a cada 5.000 km.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128666;</div><div class="feature-card-title">Caminhoes de Carga na Via Dutra</div><div class="feature-card-desc">Motores diesel de alta cilindrada precisam de oleos especificos (15W40 API CI-4). Mantemos estoque de <strong>baldes de 20 litros</strong> para atender sem demora.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128663;</div><div class="feature-card-title">Carros de Passeio (Centro e Vila Florida)</div><div class="feature-card-desc">Uso misto entre cidade e estrada. Para quem faz trajetos curtos no Centro de Itatiaia, o oleo semi-sintetico <strong>5W30</strong> e a escolha mais equilibrada em custo e protecao.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#127956;</div><div class="feature-card-title">Turistas e Visitantes do Parque Nacional</div><div class="feature-card-desc">Veiculos de fora que chegam pela Via Dutra e precisam de troca de oleo antes de encarar as estradas do parque. Atendemos <strong>sem agendamento</strong> e em menos de 30 minutos.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Vantagens de Trocar o Oleo na Auto Pecas Itatiaia</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#9989;</div><div class="feature-card-title">Filtro de Oleo Incluso</div><div class="feature-card-desc">Toda troca de oleo acompanha o filtro novo (Tecfil, Mann ou Wega) sem custo extra pela mao de obra. Um filtro saturado contamina o oleo novo em semanas.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128200;</div><div class="feature-card-title">5 Marcas Premium em Estoque</div><div class="feature-card-desc">Mobil, Shell, Lubrax, Petronas e Castrol &mdash; <strong>pronta entrega</strong> para qualquer especificacao. Sem necessidade de ir ate Resende ou Volta Redonda.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128197;</div><div class="feature-card-title">Lembrete de Proxima Troca</div><div class="feature-card-desc">Registramos data e quilometragem para que voce saiba exatamente quando voltar. Enviamos lembrete pelo <strong>WhatsApp</strong> quando o prazo se aproxima.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128205;</div><div class="feature-card-title">Localizacao Estrategica</div><div class="feature-card-desc">A 200 metros da entrada da Via Dutra em Itatiaia. Motoristas de Resende, Penedo, Porto Real e Quatis passam pela nossa porta &mdash; <strong>sem desvio de rota</strong>.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Depoimentos</div><h2>Experiencias de Clientes com a Troca de Oleo</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Fernando Gomes &mdash; Dono de Pousada, Maromba</div><div class="feature-card-desc">&ldquo;Tenho 3 veiculos que sobem e descem a serra todo dia. Depois que comecei a trocar oleo aqui, o motor ficou mais silencioso e o consumo de combustivel diminuiu. Eles sabem qual oleo funciona melhor pra serra.&rdquo; <strong>Cliente desde 2023</strong></div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Marcos Silva &mdash; Caminhoneiro, Via Dutra</div><div class="feature-card-desc">&ldquo;Paro em Itatiaia toda vez que preciso de oleo pro caminhao. Eles tem balde de 20 litros em estoque e trocam rapido. Nao preciso desviar ate Resende ou Volta Redonda. Preco justo e servico honesto.&rdquo; <strong>Cliente desde 2024</strong></div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Luciana Ferreira &mdash; Mecanica, Resende</div><div class="feature-card-desc">&ldquo;Compro oleo e filtro na Auto Pecas Itatiaia pra oficina. Tem todas as marcas, todas as viscosidades e o preco e melhor do que os distribuidores de Volta Redonda. Entregam na hora.&rdquo; <strong>Cliente desde 2022</strong></div></div>
    </div>
  </div>
</section>`,
  faqs: [
    { q: 'Quanto custa a troca de oleo em Itatiaia?', a: 'O valor depende do tipo de oleo (mineral, semi-sintetico ou sintetico) e da quantidade necessaria para o seu motor. O filtro de oleo esta incluso. Consulte pelo WhatsApp (24) 99309-9190 para orcamento com a marca e viscosidade do seu veiculo.' },
    { q: 'Qual a diferenca entre oleo sintetico e semi-sintetico?', a: 'O oleo sintetico oferece protecao superior em temperaturas extremas e dura mais (ate 10.000 km). O semi-sintetico e mais acessivel e atende bem veiculos de uso misto. Para quem dirige em serra (Itatiaia a Maromba), o sintetico e recomendado.' },
    { q: 'De quantos em quantos km devo trocar o oleo em estradas de serra?', a: 'Em uso predominante de serra (subidas, descidas ingremes), recomendamos reduzir o intervalo em 20%: se o manual indica 10.000 km, troque a cada 8.000 km. Para uso misto (serra + cidade), 7.000-8.000 km e seguro.' },
    { q: 'A troca de oleo inclui o filtro?', a: 'Sim! Toda troca de oleo na Auto Pecas Itatiaia inclui a substituicao do filtro de oleo (Tecfil, Mann ou Wega) sem custo adicional pela mao de obra. Filtro saturado contamina o oleo novo e reduz sua vida util.' },
    { q: 'Vocês fazem troca de oleo de caminhao?', a: 'Sim, temos oleos diesel 15W40 API CI-4 e CK-4 em baldes de 20 litros, prontos para troca imediata. Caminhoneiros da Via Dutra sao clientes frequentes por conta da nossa localizacao estrategica em Itatiaia.' },
    { q: 'Posso trocar o oleo sem agendar?', a: 'Sim, atendemos por ordem de chegada, sem necessidade de agendamento. A troca leva cerca de 30 minutos. Funcionamos de segunda a sexta (08h-18h) e sabado (08h-13h). Estamos na Av. dos Expedicionarios, 275, Centro de Itatiaia.' },
  ],
  areaServed: ['Itatiaia','Resende','Penedo','Volta Redonda','Barra Mansa','Porto Real','Quatis'],
},

// ========== 3. TROCA DE FILTROS ==========
{
  slug: 'troca-de-filtros',
  keyword: 'troca de filtros em itatiaia',
  serviceType: 'Troca de Filtros',
  metaDesc: 'Troca de filtros automotivos em Itatiaia: filtro de oleo, ar, combustivel e cabine. Marcas Tecfil, Mann, Wega, Fram e Mahle. Auto Pecas Itatiaia (24) 99309-9190.',
  loaderWords: 'Troca de Filtros',
  heroEyebrow: 'Itatiaia, RJ &mdash; Filtros Automotivos',
  heroH1: 'Troca de <span class="highlight">Filtros</span> em Itatiaia',
  heroDesc: 'Filtros de oleo, ar do motor, combustivel e cabine (ar-condicionado) das marcas <strong>Tecfil, Mann, Wega, Fram e Mahle</strong>. Estradas de terra, poeira das trilhas do Parque Nacional e o <strong>polen da Mata Atlantica</strong> entopem filtros muito mais rapido na regiao de Itatiaia.',
  marqueeItems: ['Filtro de Oleo','Filtro de Ar','Filtro de Combustivel','Filtro de Cabine','Tecfil','Mann','Wega','Fram','Mahle','Itatiaia RJ'],
  sections: `
<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Servico</div><h2>Qual a Importancia dos Filtros Para Veiculos na Regiao Serrana?</h2></div>
    <p class="reveal">Os filtros automotivos sao a primeira linha de defesa do motor contra impurezas. Na regiao de Itatiaia, tres fatores aceleram o desgaste dos filtros: a <strong>poeira das estradas nao-pavimentadas</strong> que levam a Maromba, Maringa e ao Parque Nacional; o <strong>polen e particulas organicas da Mata Atlantica</strong> que saturam o filtro de cabine; e a <strong>umidade elevada</strong> da Serra da Mantiqueira que favorece a formacao de fungos no sistema de ar-condicionado.</p>
    <p class="reveal">Um filtro de ar entupido pode aumentar o consumo de combustivel em ate <strong>10%</strong> e reduzir a potencia do motor. Um filtro de cabine saturado causa mau cheiro, embasamento do para-brisa e crises alergicas. Na <strong>Auto Pecas Itatiaia</strong>, verificamos todos os filtros gratuitamente e indicamos apenas as trocas realmente necessarias.</p>
    <ul class="reveal">
      <li><strong>Filtro de oleo</strong> &mdash; retira particulas metalicas e residuos da combustao; trocado junto com o <a href="/troca-de-oleo.html">oleo lubrificante</a></li>
      <li><strong>Filtro de ar do motor</strong> &mdash; impede poeira e particulas de entrar no motor; vida util reduzida em estradas de terra</li>
      <li><strong>Filtro de combustivel</strong> &mdash; filtra impurezas do tanque e do combustivel; essencial para proteger os bicos injetores</li>
      <li><strong>Filtro de cabine (ar-condicionado)</strong> &mdash; filtra polen, poeira e fungos; fundamental no clima umido de Itatiaia</li>
    </ul>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Etapas da Verificacao e Troca de Filtros</h2></div>
    <div class="process-steps">
      <div class="step reveal"><div class="step-num">1</div><div class="step-card"><h3 class="step-title">Inspecao Visual Gratuita</h3><div class="step-desc">Verificamos o estado de cada filtro visualmente. Mostramos a voce a diferenca entre um filtro novo e o usado &mdash; voce decide se quer trocar. <strong>Zero pressao.</strong></div></div></div>
      <div class="step reveal"><div class="step-num">2</div><div class="step-card"><h3 class="step-title">Selecao do Filtro Correto</h3><div class="step-desc">Consultamos o catalogo tecnico para garantir <strong>compatibilidade exata</strong> com seu veiculo. Nao usamos filtros genericos &mdash; so Tecfil, Mann, Wega, Fram ou Mahle.</div></div></div>
      <div class="step reveal"><div class="step-num">3</div><div class="step-card"><h3 class="step-title">Substituicao e Teste</h3><div class="step-desc">Trocamos o(s) filtro(s) e verificamos a vedacao. No caso do filtro de cabine, <strong>higienizamos o duto</strong> do ar-condicionado com spray bactericida.</div></div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Marcas de Filtros Automotivos em Estoque</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128736;</div><div class="feature-card-title">Tecfil</div><div class="feature-card-desc">Marca brasileira lider em filtragem automotiva. Linha completa para veiculos nacionais e importados. Excelente vedacao e capacidade de retencao de particulas.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128736;</div><div class="feature-card-title">Mann-Filter</div><div class="feature-card-desc">Marca alema premium. Tecnologia de filtragem em multiplas camadas com eficiencia superior a 99%. Recomendada para veiculos que trafegam em estradas de terra.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128736;</div><div class="feature-card-title">Wega</div><div class="feature-card-desc">Melhor custo-beneficio do mercado. Aprovada por montadoras brasileiras. Opcao ideal para veiculos de uso urbano em Itatiaia e Resende.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128736;</div><div class="feature-card-title">Fram / Mahle</div><div class="feature-card-desc">Marcas com presenca global e catalogo extenso para veiculos importados. Filtros de alto desempenho com certificacao ISO e OE (equipamento original).</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Como Saber Quando os Filtros Precisam Ser Trocados?</h2></div>
    <ul class="reveal">
      <li><strong>Perda de potencia na subida</strong> &mdash; filtro de ar entupido restringe a entrada de oxigenio, e o motor perde forca justamente nas ladeiras da RJ-163</li>
      <li><strong>Consumo de combustivel aumentou</strong> &mdash; o motor compensa a falta de ar queimando mais combustivel; troca do filtro resolve em 80% dos casos</li>
      <li><strong>Mau cheiro no ar-condicionado</strong> &mdash; filtro de cabine com fungos e bacterias proliferados pela umidade da serra</li>
      <li><strong>Motor falhando ou engasgando</strong> &mdash; pode ser filtro de combustivel entupido impedindo a passagem correta para os bicos injetores</li>
      <li><strong>Mais de 10.000 km desde a ultima troca</strong> &mdash; em estradas de terra da regiao, recomendamos trocar o filtro de ar a cada 7.000 km</li>
    </ul>
    <p class="reveal">Na duvida, passe na <strong>Auto Pecas Itatiaia</strong> para uma inspecao rapida e gratuita. Tambem oferecemos <a href="/troca-de-bateria.html">teste de bateria</a> e <a href="/troca-de-palhetas.html">troca de palhetas</a> para completar a revisao.</p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Aplicacoes em Itatiaia: Onde os Filtros Desgastam Mais Rapido</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#127956;</div><div class="feature-card-title">Veiculos nas Estradas de Terra (Maromba/Maringa)</div><div class="feature-card-desc">Acessos nao-pavimentados geram nuvens de poeira que entopem o filtro de ar em metade do tempo. Recomendamos <strong>inspecao a cada 5.000 km</strong> para esses veiculos.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128663;</div><div class="feature-card-title">Carros com Ar-condicionado (Clima Umido)</div><div class="feature-card-desc">A umidade elevada de Itatiaia favorece fungos no filtro de cabine. Troca do filtro + higienizacao do duto elimina o mau cheiro e previne <strong>problemas respiratorios</strong>.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128666;</div><div class="feature-card-title">Frotas Comerciais e de Pousadas</div><div class="feature-card-desc">Veiculos com alta quilometragem mensal precisam de filtros trocados com frequencia. Oferecemos <strong>condicoes especiais para frotas</strong> com 5+ veiculos.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128663;</div><div class="feature-card-title">Veiculos de Turistas (Parque Nacional)</div><div class="feature-card-desc">Carros que acessam as trilhas do Parque Nacional do Itatiaia pegam estradas de terra e pedra. Uma troca preventiva de filtro de ar <strong>antes de subir</strong> evita problemas na volta.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Por Que Trocar Filtros na Auto Pecas Itatiaia</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#9989;</div><div class="feature-card-title">Inspecao Gratuita</div><div class="feature-card-desc">Verificamos todos os filtros sem custo. So indicamos troca quando realmente necessario &mdash; transparencia que gerou <strong>4.9 estrelas</strong> no Google.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128230;</div><div class="feature-card-title">5 Marcas em Estoque Permanente</div><div class="feature-card-desc">Tecfil, Mann, Wega, Fram e Mahle para veiculos nacionais e importados. Sem espera por encomenda &mdash; troca na hora.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128167;</div><div class="feature-card-title">Higienizacao do Ar-condicionado</div><div class="feature-card-desc">Junto com a troca do filtro de cabine, aplicamos spray bactericida nos dutos. Eliminamos <strong>fungos, acaros e bacterias</strong> em 15 minutos.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128205;</div><div class="feature-card-title">Referencia na Regiao</div><div class="feature-card-desc">Clientes de Itatiaia, Resende, Penedo, Porto Real e Quatis confiam na Auto Pecas Itatiaia ha <strong>mais de 15 anos</strong>. Mecanicos da regiao compram filtros conosco.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Depoimentos</div><h2>Relatos de Clientes Sobre Troca de Filtros</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Rodrigo Mendes &mdash; Motorista, Campo Alegre</div><div class="feature-card-desc">&ldquo;Meu carro estava gastando muito combustivel e perdia forca nas subidas. Troquei o filtro de ar na Auto Pecas e a diferenca foi imediata &mdash; voltou a ter potencia. O antigo estava completamente preto de poeira da estrada de terra.&rdquo; <strong>Cliente desde 2024</strong></div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Juliana Santos &mdash; Entregadora, Itatiaia</div><div class="feature-card-desc">&ldquo;O ar-condicionado do meu carro estava com um cheiro horrivel. Troquei o filtro de cabine e fizeram a higienizacao do duto. Ficou como novo! E o preco foi bem menor do que me pediram em Resende.&rdquo; <strong>Cliente desde 2023</strong></div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Antonio Pereira &mdash; Mecanico, Itatiaia</div><div class="feature-card-desc">&ldquo;Compro filtros Tecfil e Mann pra minha oficina na Auto Pecas. Sempre tem em estoque, preco de mecanico e nao empurram marca que eu nao pedi. Parceria de confianca ha anos.&rdquo; <strong>Cliente desde 2021</strong></div></div>
    </div>
  </div>
</section>`,
  faqs: [
    { q: 'Quanto custa trocar os filtros do carro em Itatiaia?', a: 'Depende do tipo de filtro e da marca. Filtros de cabine sao os mais acessiveis; filtros de combustivel variam conforme o veiculo. Faca um orcamento pelo WhatsApp (24) 99309-9190.' },
    { q: 'Qual filtro precisa ser trocado com mais frequencia na regiao serrana?', a: 'O filtro de ar do motor, por conta da poeira das estradas de terra que levam a Maromba, Maringa e ao Parque Nacional do Itatiaia. Recomendamos inspecao a cada 5.000 km nessas condicoes.' },
    { q: 'O filtro de cabine pode causar alergia?', a: 'Sim. Um filtro de cabine saturado acumula fungos, acaros, polen da Mata Atlantica e bacterias &mdash; especialmente no clima umido de Itatiaia. A troca do filtro + higienizacao elimina esses riscos.' },
    { q: 'Quando trocar o filtro de combustivel?', a: 'O intervalo recomendado e entre 20.000 e 40.000 km, dependendo da qualidade do combustivel. Se o carro engasgar, perder potencia em subidas ou tiver dificuldade para dar partida, o filtro de combustivel pode estar entupido.' },
    { q: 'Vocês trocam filtros de veiculos importados?', a: 'Sim. Trabalhamos com Mann-Filter e Mahle que cobrem catalogo completo de importados. Consultamos a referencia exata do seu veiculo para garantir compatibilidade.' },
    { q: 'A Auto Pecas Itatiaia vende filtros para mecanicos?', a: 'Sim! Varios mecanicos de Itatiaia e Resende compram filtros conosco por conta do estoque completo e precos competitivos. Oferecemos condicoes especiais para compras recorrentes.' },
  ],
  areaServed: ['Itatiaia','Resende','Penedo','Volta Redonda','Barra Mansa','Porto Real','Quatis'],
},

// ========== 4. TROCA DE DISCO DE FREIO ==========
{
  slug: 'troca-de-disco-de-freio',
  keyword: 'troca de disco de freio em itatiaia',
  serviceType: 'Troca de Disco de Freio',
  metaDesc: 'Troca de disco de freio em Itatiaia. Discos Fremax, Hipper Freios e Cobreq. Essencial para quem desce serra em Penedo e Maromba. Auto Pecas Itatiaia (24) 99309-9190.',
  loaderWords: 'Disco de Freio',
  heroEyebrow: 'Itatiaia, RJ &mdash; Freios Automotivos',
  heroH1: 'Troca de <span class="highlight">Disco de Freio</span> em Itatiaia',
  heroDesc: 'Discos de freio <strong>Fremax, Hipper Freios e Cobreq</strong> para veiculos nacionais e importados. Na Serra da Mantiqueira, as descidas ingremes da <strong>RJ-163 ate Penedo e Maromba</strong> desgastam discos de freio ate 40% mais rapido que em terreno plano.',
  marqueeItems: ['Disco de Freio','Fremax','Hipper Freios','Cobreq','Frenagem Segura','Itatiaia RJ','Serra da Mantiqueira','RJ-163','Descida de Serra','Via Dutra'],
  sections: `
<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Servico</div><h2>Por Que Discos de Freio Desgastam Mais Rapido em Itatiaia?</h2></div>
    <p class="reveal">A fisica nao perdoa: quando um veiculo desce uma serra, toda a energia cinetica precisa ser convertida em calor pelos freios. A descida pela <strong>RJ-163 de Itatiaia ate Penedo</strong> tem trechos com inclinacao superior a 10% ao longo de varios quilometros. Nessas condicoes, os discos de freio atingem temperaturas acima de <strong>400&deg;C</strong>, causando deformacao termica (empenamento) e desgaste acelerado da superficie de frenagem.</p>
    <p class="reveal">Veiculos que fazem esse trajeto diariamente &mdash; como vans de pousadas, taxis e utilitarios &mdash; precisam de discos de freio com <strong>maior resistencia termica</strong> e inspecao mais frequente. Na <strong>Auto Pecas Itatiaia</strong>, medimos a espessura do disco com micrometro de precisao e orientamos quando a troca e realmente necessaria. Tambem oferecemos <a href="/troca-de-pastilhas.html">troca de pastilhas de freio</a> e <a href="/troca-de-fluido-de-freio.html">troca de fluido de freio</a> para um sistema de frenagem completo.</p>
    <ul class="reveal">
      <li><strong>Medicao de espessura</strong> com micrometro &mdash; verificamos se o disco esta dentro da tolerancia do fabricante</li>
      <li><strong>Inspecao de empenamento</strong> &mdash; detectamos vibracao no pedal causada por disco deformado pelo calor</li>
      <li><strong>Discos ventilados e solidos</strong> para todas as aplicacoes &mdash; eixo dianteiro e traseiro</li>
      <li><strong>Recomendacao tecnica</strong> sobre a necessidade de trocar disco + <a href="/troca-de-pastilhas.html">pastilha</a> simultaneamente</li>
    </ul>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Como Diagnosticamos e Substituimos o Disco de Freio</h2></div>
    <div class="process-steps">
      <div class="step reveal"><div class="step-num">1</div><div class="step-card"><h3 class="step-title">Inspecao e Medicao</h3><div class="step-desc">Removemos a roda e medimos a espessura do disco com <strong>micrometro</strong>. Verificamos empenamento, trincas termicas e desgaste irregular da superficie.</div></div></div>
      <div class="step reveal"><div class="step-num">2</div><div class="step-card"><h3 class="step-title">Selecao do Disco Correto</h3><div class="step-desc">Identificamos o disco exato pelo catalogo do fabricante: <strong>diametro, numero de furos, espessura nominal</strong>. Discos ventilados para eixo dianteiro, solidos ou ventilados para traseiro.</div></div></div>
      <div class="step reveal"><div class="step-num">3</div><div class="step-card"><h3 class="step-title">Instalacao com Torque Controlado</h3><div class="step-desc">Montamos o disco novo com <strong>torquimetro</strong> nos parafusos da roda. Verificamos o sistema completo: pastilhas, fluido, flexiveis. Teste de frenagem antes de liberar.</div></div></div>
      <div class="step reveal"><div class="step-num">4</div><div class="step-card"><h3 class="step-title">Amaciamento Orientado</h3><div class="step-desc">Orientamos o procedimento de <strong>amaciamento</strong> (bedding-in): 10 frenagens progressivas para transferir material da pastilha para o disco e garantir frenagem uniforme.</div></div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Marcas de Disco de Freio com Pronta Entrega</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#9898;</div><div class="feature-card-title">Fremax</div><div class="feature-card-desc">Lider brasileira em discos de freio. Tecnologia HC (High Carbon) com maior resistencia termica &mdash; ideal para descidas de serra. Tratamento anticorrosivo em toda a superficie.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#9898;</div><div class="feature-card-title">Hipper Freios</div><div class="feature-card-desc">Marca brasileira com excelente custo-beneficio. Discos com balanceamento dinamico de fabrica para zero vibracao. Catalogo completo para veiculos nacionais.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#9898;</div><div class="feature-card-title">Cobreq</div><div class="feature-card-desc">Grupo TMD Friction &mdash; referencia mundial em frenagem. Discos com tratamento termico controlado e acabamento de precisao. Opcao premium para veiculos importados.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Quais os Sinais de Disco de Freio Gasto ou Empenado?</h2></div>
    <ul class="reveal">
      <li><strong>Vibracao no pedal de freio</strong> &mdash; sinal classico de disco empenado pelo calor excessivo nas descidas de serra</li>
      <li><strong>Volante tremendo ao frear</strong> &mdash; empenamento nos discos dianteiros transmite vibracao para a direcao</li>
      <li><strong>Barulho de metal raspando</strong> &mdash; a pastilha ja desgastou alem do limite e esta danificando a superficie do disco</li>
      <li><strong>Carro puxando para um lado ao frear</strong> &mdash; desgaste desigual entre disco esquerdo e direito</li>
      <li><strong>Sulcos visiveis na superficie do disco</strong> &mdash; ranhuras profundas indicam que o disco perdeu material e precisa ser substituido</li>
    </ul>
    <p class="reveal"><strong>Atencao:</strong> nunca ignore sinais de problema nos freios, especialmente na regiao de Itatiaia onde as descidas de serra sao longas e ingremes. Um disco gasto aumenta a distancia de frenagem em ate <strong>30%</strong>.</p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Aplicacoes em Itatiaia: Onde o Sistema de Freio e Mais Exigido</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#9968;</div><div class="feature-card-title">Descida da Serra ate Penedo (RJ-163)</div><div class="feature-card-desc">Quilometros de descida continua que superaquecem os discos. Recomendamos discos <strong>Fremax HC</strong> (High Carbon) que resistem melhor ao calor intenso e repetido.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128656;</div><div class="feature-card-title">Vans de Turismo e Pousadas</div><div class="feature-card-desc">Veiculos carregados com passageiros descendo serra = peso extra nos freios. Discos ventilados de maior diametro sao essenciais para frenagem segura.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128666;</div><div class="feature-card-title">Veiculos Comerciais na Via Dutra</div><div class="feature-card-desc">Caminhoes e utilitarios que enfrentam os trechos ondulados da BR-116 entre Itatiaia e Volta Redonda precisam de discos com alta <strong>capacidade de dissipacao de calor</strong>.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128663;</div><div class="feature-card-title">Motoristas Diarios Itatiaia-Resende</div><div class="feature-card-desc">Quem faz o trajeto ida e volta todos os dias enfrenta trechos de serra que desgastam os discos gradualmente. Inspecao semestral previne surpresas.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Depoimentos</div><h2>Relatos de Clientes Sobre Troca de Disco de Freio</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Maria Clara &mdash; Turista de Sao Paulo</div><div class="feature-card-desc">&ldquo;Descendo a serra pra Penedo, meu carro comecou a vibrar muito ao frear. Parei na Auto Pecas Itatiaia e eles viram que o disco estava empenado. Trocaram na hora com Fremax e salvaram meu fim de semana. Servico excelente e rapido.&rdquo; <strong>Atendida em 2025</strong></div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Sergio Bastos &mdash; Operador de Van, Penedo</div><div class="feature-card-desc">&ldquo;Minha van leva turistas pra Maromba e os freios sofrem demais na descida. Troco os discos e pastilhas na Auto Pecas a cada 30.000 km e nunca tive problema de seguranca. Eles conhecem o desgaste que a serra causa.&rdquo; <strong>Cliente desde 2023</strong></div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Anderson Lima &mdash; Taxista, Resende</div><div class="feature-card-desc">&ldquo;Em Resende pediam mais caro e diziam que precisava trocar as 4 rodas. Na Auto Pecas Itatiaia mediram com micrometro e so os dianteiros estavam fora. Economizei e fiquei mais seguro. Confianca total.&rdquo; <strong>Cliente desde 2024</strong></div></div>
    </div>
  </div>
</section>`,
  faqs: [
    { q: 'Quanto custa trocar o disco de freio em Itatiaia?', a: 'O valor depende do veiculo e da marca do disco. Trabalhamos com Fremax, Hipper Freios e Cobreq. Solicite um orcamento pelo WhatsApp (24) 99309-9190 informando o modelo do seu carro.' },
    { q: 'Preciso trocar pastilha e disco juntos?', a: 'Nem sempre. Se o disco estiver dentro da espessura minima e sem empenamento, basta trocar as pastilhas. Na Auto Pecas Itatiaia, medimos o disco com micrometro para recomendar apenas o necessario.' },
    { q: 'Qual a durabilidade do disco de freio em estrada de serra?', a: 'Em uso predominante de serra (como Itatiaia a Penedo), os discos duram entre 30.000 e 50.000 km &mdash; cerca de 40% menos que em terreno plano. Veiculos pesados e vans desgastam ainda mais rapido.' },
    { q: 'O que causa vibracao no pedal de freio?', a: 'Na maioria dos casos, disco empenado pelo superaquecimento. As descidas longas da RJ-163 sao a principal causa na regiao. A solucao e trocar o disco &mdash; retifica nao e recomendada em discos finos.' },
    { q: 'A Auto Pecas Itatiaia faz a instalacao do disco?', a: 'Fornecemos o disco, pastilhas e orientamos mecanicos parceiros sobre a instalacao correta. Tambem indicamos oficinas de confianca em Itatiaia e Resende para o servico completo.' },
    { q: 'Vocês atendem veiculos importados com disco de freio?', a: 'Sim. Trabalhamos com marcas que cobrem catalogo de importados como Cobreq e Fremax. Consultamos a referencia exata pelo chassis do veiculo para garantir compatibilidade.' },
  ],
  areaServed: ['Itatiaia','Resende','Penedo','Volta Redonda','Barra Mansa','Porto Real','Quatis'],
},

// ========== 5. TROCA DE LAMPADAS ==========
{
  slug: 'troca-de-lampadas',
  keyword: 'troca de lampadas carro em itatiaia',
  serviceType: 'Troca de Lampadas Automotivas',
  metaDesc: 'Troca de lampadas automotivas em Itatiaia. Lampadas Philips e Osram para farois, lanternas e auxiliares. Fundamental para neblina da serra. Auto Pecas Itatiaia (24) 99309-9190.',
  loaderWords: 'Lampadas Automotivas',
  heroEyebrow: 'Itatiaia, RJ &mdash; Iluminacao Veicular',
  heroH1: 'Troca de <span class="highlight">Lampadas</span> em Itatiaia',
  heroDesc: 'Lampadas automotivas <strong>Philips e Osram</strong> para farois, lanternas, freio e auxiliares. Na regiao de Itatiaia, a <strong>neblina frequente da Serra da Mantiqueira</strong> e as estradas sem iluminacao publica tornam farois em perfeito estado uma questao de seguranca &mdash; nao apenas de compliance.',
  marqueeItems: ['Lampadas Automotivas','Philips','Osram','Farol','Lanterna','Neblina','Itatiaia RJ','LED','Halogena','Xenon'],
  sections: `
<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Servico</div><h2>Por Que a Iluminacao do Carro e Critica na Serra de Itatiaia?</h2></div>
    <p class="reveal">A regiao de Itatiaia combina tres fatores que tornam a iluminacao veicular uma questao de vida: <strong>neblina frequente</strong> nos meses mais frios (maio a setembro), <strong>estradas rurais sem iluminacao publica</strong> (como os acessos a Maromba, Maringa e ao Parque Nacional) e <strong>chuvas intensas</strong> no verao que reduzem drasticamente a visibilidade.</p>
    <p class="reveal">Uma lampada de farol queimada ou amarelada pode reduzir o alcance de iluminacao em ate <strong>50%</strong>. Na estrada para Penedo, onde a neblina se forma rapidamente ao cair da tarde, essa diferenca pode significar nao enxergar um obstaculo na pista a tempo. Na <strong>Auto Pecas Itatiaia</strong>, temos lampadas <strong>Philips e Osram</strong> de todas as bases e potencias, com instalacao rapida.</p>
    <ul class="reveal">
      <li><strong>Lampadas de farol</strong> (baixo e alto) &mdash; H1, H3, H4, H7, H11, HB3, HB4</li>
      <li><strong>Lampadas de farol de neblina</strong> &mdash; essenciais para a serra; nao sao opcionais aqui</li>
      <li><strong>Lanternas traseiras e luz de freio</strong> &mdash; visibilidade para quem vem atras nas descidas de serra</li>
      <li><strong>Lampadas de seta e re</strong> &mdash; obrigatorias para inspecao veicular</li>
      <li><strong>Lampadas de placa e painel</strong> &mdash; pequenas mas essenciais para regularizacao</li>
    </ul>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Como Realizamos a Troca de Lampadas</h2></div>
    <div class="process-steps">
      <div class="step reveal"><div class="step-num">1</div><div class="step-card"><h3 class="step-title">Verificacao Completa</h3><div class="step-desc">Testamos <strong>todas as lampadas do veiculo</strong>: farol baixo, alto, neblina, setas, freio, re, placa e painel. Muitas vezes ha lampadas fracas que o motorista nao percebeu.</div></div></div>
      <div class="step reveal"><div class="step-num">2</div><div class="step-card"><h3 class="step-title">Escolha da Lampada</h3><div class="step-desc">Identificamos a base correta (H4, H7, etc.) e oferecemos opcoes: <strong>standard, WhiteVision, NightBreaker</strong> &mdash; cada uma com nivel diferente de luminosidade e durabilidade.</div></div></div>
      <div class="step reveal"><div class="step-num">3</div><div class="step-card"><h3 class="step-title">Instalacao e Alinhamento</h3><div class="step-desc">Substituimos a lampada sem tocar no vidro (oleosidade reduz a vida util). Verificamos o <strong>alinhamento do farol</strong> para garantir que a luz ilumina a estrada corretamente.</div></div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Marcas de Lampadas Automotivas Disponiveis</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128161;</div><div class="feature-card-title">Philips</div><div class="feature-card-desc">Lider mundial em iluminacao automotiva. Linhas Crystal Vision (luz branca), WhiteVision (ultra branca) e X-tremeVision (+150% de luminosidade). Lampadas que fazem diferenca real na neblina da serra.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128161;</div><div class="feature-card-title">Osram</div><div class="feature-card-desc">Marca alema com tecnologia de ponta. Linhas Original (OE), Night Breaker Laser (+150% de alcance) e Cool Blue Intense (efeito xenon). Ideal para estradas escuras da regiao de Itatiaia.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Quando e Hora de Trocar as Lampadas do Carro?</h2></div>
    <ul class="reveal">
      <li><strong>Lampada queimada</strong> &mdash; alem do risco de acidente, circular com farol queimado e infracao grave (7 pontos na CNH)</li>
      <li><strong>Luz amarelada ou fraca</strong> &mdash; lampadas halogenas perdem luminosidade com o tempo, mesmo sem queimar; na neblina, a diferenca e critica</li>
      <li><strong>Uma lampada mais forte que a outra</strong> &mdash; iluminacao desigual indica que uma das lampadas esta no fim da vida util</li>
      <li><strong>Preparacao para inspecao veicular</strong> &mdash; todas as lampadas devem funcionar para aprovacao no DETRAN-RJ</li>
      <li><strong>Mais de 2 anos de uso</strong> &mdash; recomendacao dos fabricantes Philips e Osram para troca preventiva</li>
    </ul>
    <p class="reveal">Faca a verificacao gratuita na <strong>Auto Pecas Itatiaia</strong>. Testamos todas as lampadas em 5 minutos e voce sai com o veiculo em conformidade. Combine com a <a href="/troca-de-palhetas.html">troca de palhetas</a> e o <a href="/troca-de-fluido-de-freio.html">check-up de fluido de freio</a> para uma revisao completa.</p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Aplicacoes em Itatiaia: Onde a Iluminacao Faz Diferenca</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#127787;</div><div class="feature-card-title">Neblina na Estrada para Penedo</div><div class="feature-card-desc">A RJ-163 fica encoberta por neblina densa no final da tarde e inicio da manha, especialmente no inverno. Farois de neblina com lampadas <strong>Philips WhiteVision</strong> cortam a bruma sem ofuscar outros motoristas.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#127761;</div><div class="feature-card-title">Estradas Rurais Sem Iluminacao</div><div class="feature-card-desc">Os acessos a Maromba, Maringa e ao Parque Nacional nao tem postes. Lampadas <strong>Osram Night Breaker Laser</strong> (+150% de alcance) sao a escolha certa para enxergar curvas e obstaculos a distancia.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128663;</div><div class="feature-card-title">Regularizacao para Inspecao</div><div class="feature-card-desc">Veiculos do RJ precisam passar na inspecao periodica com <strong>todas as lampadas funcionando</strong>. Trocamos todas as queimadas de uma vez por preco justo.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128656;</div><div class="feature-card-title">Veiculos de Pousadas e Turismo</div><div class="feature-card-desc">Vans e micro-onibus que transportam turistas a noite precisam de iluminacao impecavel. Recomendamos troca preventiva a cada <strong>12 meses</strong> para frotas.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Depoimentos</div><h2>Experiencias de Clientes com Lampadas Automotivas</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Renata Costa &mdash; Hospede de Pousada, SP</div><div class="feature-card-desc">&ldquo;Cheguei em Itatiaia de noite e percebi que o farol direito estava queimado. Fui na Auto Pecas no dia seguinte e trocaram as duas lampadas Philips em 10 minutos. Voltei pra Sao Paulo com farol novo e seguro. Otimo atendimento.&rdquo; <strong>Atendida em 2025</strong></div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Wagner Souza &mdash; Trabalha a Noite, Itatiaia</div><div class="feature-card-desc">&ldquo;Trabalho de madrugada e pego a estrada para Resende no escuro. Coloquei Osram Night Breaker e a diferenca e absurda &mdash; enxergo muito mais longe. Na neblina entao, nem se compara com a lampada que vinha de fabrica.&rdquo; <strong>Cliente desde 2024</strong></div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Jose Roberto &mdash; Motorista Comercial, Resende</div><div class="feature-card-desc">&ldquo;Precisava passar na inspecao e tinha 3 lampadas queimadas. Na Auto Pecas Itatiaia testaram todas e trocaram as que precisavam. Passei na inspecao de primeira e gastei bem menos do que esperava.&rdquo; <strong>Cliente desde 2023</strong></div></div>
    </div>
  </div>
</section>`,
  faqs: [
    { q: 'Quanto custa trocar lampada de farol em Itatiaia?', a: 'O valor depende da base (H4, H7, H11, etc.) e da linha escolhida. Lampadas standard sao mais acessiveis; linhas premium como Night Breaker ou WhiteVision custam um pouco mais. Consulte pelo WhatsApp (24) 99309-9190.' },
    { q: 'Qual lampada e melhor para neblina da serra?', a: 'Para farol de neblina, recomendamos Philips WhiteVision ou Osram Original com temperatura de cor de 3.200K a 4.000K. Luzes muito brancas (acima de 5.000K) refletem na neblina e atrapalham em vez de ajudar.' },
    { q: 'E preciso trocar as duas lampadas ao mesmo tempo?', a: 'Recomendamos trocar em par. Quando uma queima, a outra ja esta no fim da vida util e a luminosidade e desigual. Alem disso, o custo da lampada extra e pequeno comparado ao beneficio.' },
    { q: 'Lampada de LED pode substituir a halogena?', a: 'Depende do veiculo. Lampadas LED retrofit so sao permitidas se o farol for projetado para LED. Caso contrario, pode reprovar na inspecao e ofuscar outros motoristas. Na duvida, consultamos a compatibilidade.' },
    { q: 'A Auto Pecas Itatiaia faz alinhamento de farol?', a: 'Verificamos o alinhamento basico apos a troca de lampada. Para regulagem precisa com equipamento optico, indicamos oficinas parceiras especializadas em Itatiaia e Resende.' },
    { q: 'Circular com farol queimado da multa?', a: 'Sim. E infracao grave, com multa de R$ 195,23 e 5 pontos na CNH (ou 7 pontos se for a noite). Alem do risco real de acidente, especialmente nas estradas escuras e com neblina da regiao de Itatiaia.' },
  ],
  areaServed: ['Itatiaia','Resende','Penedo','Volta Redonda','Barra Mansa','Porto Real','Quatis'],
},

// ========== 6. TROCA DE PALHETAS ==========
{
  slug: 'troca-de-palhetas',
  keyword: 'troca de palhetas em itatiaia',
  serviceType: 'Troca de Palhetas',
  metaDesc: 'Troca de palhetas do para-brisa em Itatiaia. Marcas Valeo e Bosch. Chuvas intensas e neblina da serra exigem palhetas em perfeito estado. Auto Pecas Itatiaia (24) 99309-9190.',
  loaderWords: 'Palhetas do Limpador',
  heroEyebrow: 'Itatiaia, RJ &mdash; Palhetas Limpador',
  heroH1: 'Troca de <span class="highlight">Palhetas</span> em Itatiaia',
  heroDesc: 'Palhetas do para-brisa <strong>Valeo e Bosch</strong> para todos os veiculos. Na Serra da Mantiqueira, a <strong>precipitacao media anual ultrapassa 1.800 mm</strong> e a neblina e constante &mdash; palhetas gastas significam dirigir praticamente as cegas nas estradas de Itatiaia, Penedo e Maromba.',
  marqueeItems: ['Palhetas Limpador','Valeo','Bosch','Para-brisa','Chuva','Neblina','Itatiaia RJ','Serra da Mantiqueira','Visibilidade','Seguranca'],
  sections: `
<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Servico</div><h2>Por Que as Palhetas Desgastam Mais Rapido na Regiao Serrana?</h2></div>
    <p class="reveal">A regiao de Itatiaia esta na encosta da <strong>Serra da Mantiqueira</strong>, uma das areas com maior indice pluviometrico do estado do Rio de Janeiro. Sao mais de <strong>1.800 mm de chuva por ano</strong>, concentrados entre outubro e marco, com tempestades torrenciais que testam o limite das palhetas do para-brisa.</p>
    <p class="reveal">Alem da chuva, a <strong>neblina constante</strong> nos meses de inverno e a <strong>resina das arvores da Mata Atlantica</strong> que se deposita no vidro aceleram o desgaste da borracha. Palhetas que durariam 12 meses em regioes planas e urbanas precisam ser trocadas a cada <strong>6 a 8 meses</strong> em Itatiaia. Na <strong>Auto Pecas Itatiaia</strong>, verificamos o estado das palhetas gratuitamente e trocamos na hora com marcas premium.</p>
    <ul class="reveal">
      <li><strong>Palhetas convencionais</strong> com armacao metalica &mdash; opcao classica com preco acessivel</li>
      <li><strong>Palhetas tipo Flat (Aerowiper)</strong> &mdash; design aerodinamico sem armacao, melhor distribuicao de pressao no vidro</li>
      <li><strong>Palhetas hibridas</strong> &mdash; combinam a estrutura da convencional com a cobertura da flat para maior durabilidade</li>
      <li><strong>Palhetas traseiras</strong> &mdash; para veiculos com limpador traseiro (SUVs, hatches, peruas)</li>
    </ul>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Como Fazemos a Troca de Palhetas do Para-brisa</h2></div>
    <div class="process-steps">
      <div class="step reveal"><div class="step-num">1</div><div class="step-card"><h3 class="step-title">Verificacao do Estado Atual</h3><div class="step-desc">Testamos as palhetas com borrifada de agua no vidro. Verificamos <strong>faixas sem limpar, ruido e trepidacao</strong> &mdash; sinais de borracha ressecada ou deformada.</div></div></div>
      <div class="step reveal"><div class="step-num">2</div><div class="step-card"><h3 class="step-title">Medida e Encaixe Correto</h3><div class="step-desc">Identificamos o <strong>comprimento exato</strong> (em polegadas) e o tipo de encaixe: gancho J, baioneta, pinch tab ou top lock. Cada veiculo tem especificacao propria.</div></div></div>
      <div class="step reveal"><div class="step-num">3</div><div class="step-card"><h3 class="step-title">Instalacao e Teste Final</h3><div class="step-desc">Encaixamos as palhetas novas, ajustamos a pressao do braco e testamos com jatos de agua. A palheta deve limpar o vidro <strong>em uma unica passada, sem falhas</strong>.</div></div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Marcas de Palhetas em Estoque Permanente</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128167;</div><div class="feature-card-title">Valeo</div><div class="feature-card-desc">Marca francesa lider em equipamentos originais para montadoras. Linha Silencio X-TRM com borracha de <strong>grafite tratada</strong> que reduz ruido e aumenta a vida util. Ideal para a chuva forte da serra.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128167;</div><div class="feature-card-title">Bosch</div><div class="feature-card-desc">Tecnologia alema com linhas Eco, Aerofit e Aerotwin. A borracha <strong>Power Protection Plus</strong> resiste a ozonio, UV e variacao de temperatura &mdash; perfeita para o clima subtropical de Itatiaia.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Quais os Sinais de Que as Palhetas Estao Gastas?</h2></div>
    <ul class="reveal">
      <li><strong>Faixas de agua no para-brisa</strong> &mdash; a borracha nao faz contato uniforme com o vidro, deixando listras que atrapalham a visibilidade</li>
      <li><strong>Ruido ao limpar (chiado ou batida)</strong> &mdash; borracha endurecida ou deformada que trepida em vez de deslizar suavemente</li>
      <li><strong>Borracha visivelmente rachada</strong> &mdash; o sol, a chuva e o ozonio da serra ressecam a borracha com o tempo</li>
      <li><strong>Palheta "pulando" no vidro</strong> &mdash; pressao desigual do braco ou desgaste da armacao metalica</li>
      <li><strong>Mais de 8 meses de uso na regiao</strong> &mdash; na serra, o desgaste e acelerado; nao espere a palheta falhar na tempestade</li>
    </ul>
    <p class="reveal">Verifique gratuitamente na <strong>Auto Pecas Itatiaia</strong>. Combine com a <a href="/troca-de-lampadas.html">troca de lampadas</a> e <a href="/troca-de-fluido-de-freio.html">verificacao do fluido de freio</a> para ficar em dia antes da temporada de chuvas.</p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Aplicacoes em Itatiaia: Quando Palhetas Novas Sao Indispensaveis</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#127783;</div><div class="feature-card-title">Temporada de Chuvas (Out-Mar)</div><div class="feature-card-desc">Chuvas torrenciais com rajadas de vento sao comuns na serra. Trocar palhetas <strong>antes de outubro</strong> e a melhor prevencao. Na Auto Pecas Itatiaia, fazemos o estoque especial para essa epoca.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#127787;</div><div class="feature-card-title">Neblina nas Estradas de Serra (RJ-163)</div><div class="feature-card-desc">A neblina deposita goticular de agua no vidro que so uma palheta em bom estado consegue remover completamente. Palhetas gastas <strong>borram o vidro</strong> e pioram a visibilidade.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128663;</div><div class="feature-card-title">Veiculos Comerciais e de Entrega</div><div class="feature-card-desc">Quem roda o dia todo por Itatiaia, Vila Florida e Centro nao pode ser surpreendido por uma tempestade com palhetas gastas. Troca preventiva a cada <strong>6 meses</strong> e investimento minimo.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128656;</div><div class="feature-card-title">Frotas de Turismo e Pousadas</div><div class="feature-card-desc">Vans que transportam turistas para Penedo e Maromba precisam de <strong>visibilidade perfeita</strong> em qualquer condicao. Recomendamos palhetas Valeo Silencio para frotas.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Depoimentos</div><h2>O Que Clientes Dizem Sobre a Troca de Palhetas</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Eduardo Martins &mdash; Morador de Penedo</div><div class="feature-card-desc">&ldquo;Moro em Penedo e a neblina aqui e quase diaria no inverno. Troquei as palhetas na Auto Pecas por umas Valeo e a diferenca e impressionante &mdash; limpa o vidro em uma passada so, sem chiado. Duraram 10 meses mesmo com todo esse uso.&rdquo; <strong>Cliente desde 2024</strong></div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Simone Oliveira &mdash; Turista de Minas Gerais</div><div class="feature-card-desc">&ldquo;Peguei uma chuva forte subindo pra Itatiaia e minhas palhetas nao limpavam nada. Parei na Auto Pecas, trocaram em 5 minutos e o preco foi justo. Muito bom ter uma loja de confianca na beira da estrada.&rdquo; <strong>Atendida em 2025</strong></div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Paulo Freitas &mdash; Entregador, Itatiaia</div><div class="feature-card-desc">&ldquo;Troco palhetas aqui a cada 6 meses porque rodo o dia todo e a chuva na serra nao perdoa. O pessoal da Auto Pecas ja sabe o tamanho do meu carro e sempre tem Bosch em estoque. Rapido e pratico.&rdquo; <strong>Cliente desde 2023</strong></div></div>
    </div>
  </div>
</section>`,
  faqs: [
    { q: 'Quanto custam palhetas novas para meu carro em Itatiaia?', a: 'O valor depende do modelo do veiculo, comprimento e marca (Valeo ou Bosch). Palhetas convencionais sao mais acessiveis; modelos flat e hibridos custam um pouco mais. Consulte pelo WhatsApp (24) 99309-9190.' },
    { q: 'Qual a durabilidade das palhetas na regiao de serra?', a: 'Na regiao de Itatiaia, com chuva intensa e neblina frequente, as palhetas duram entre 6 e 10 meses. Em cidades planas e secas, podem durar ate 12 meses. Recomendamos trocar preventivamente antes da temporada de chuvas (outubro).' },
    { q: 'Palheta flat e melhor que a convencional?', a: 'A palheta flat (Aerowiper) distribui a pressao de forma mais uniforme no vidro, faz menos ruido e tem design aerodinamico. E superior em desempenho, mas custa um pouco mais. Para uso em serra, recomendamos a flat.' },
    { q: 'Preciso trocar as duas palhetas juntas?', a: 'Sim, recomendamos trocar o par. Quando uma desgasta, a outra esta proxima do fim da vida util. Trocar so uma gera limpeza desigual e pode riscar o vidro do lado com a palheta velha.' },
    { q: 'Vocês tem palheta traseira para SUV?', a: 'Sim! Temos palhetas traseiras para SUVs, hatches e peruas. O encaixe varia por modelo &mdash; consultamos a referencia exata para garantir compatibilidade perfeita.' },
    { q: 'Trocar palheta gasta da multa?', a: 'Nao ha multa especifica por palheta gasta, mas circular com equipamento em mau estado de conservacao pode ser enquadrado como infracao media. O maior risco e a seguranca: palhetas gastas na chuva da serra sao extremamente perigosas.' },
  ],
  areaServed: ['Itatiaia','Resende','Penedo','Volta Redonda','Barra Mansa','Porto Real','Quatis'],
},

// ========== 7. TROCA DE FLUIDO DE FREIO ==========
{
  slug: 'troca-de-fluido-de-freio',
  keyword: 'troca de fluido de freio em itatiaia',
  serviceType: 'Troca de Fluido de Freio',
  metaDesc: 'Troca de fluido de freio em Itatiaia. Marcas Bosch, TRW e Varga. Essencial para frenagem segura nas descidas da Serra da Mantiqueira. Auto Pecas Itatiaia (24) 99309-9190.',
  loaderWords: 'Fluido de Freio',
  heroEyebrow: 'Itatiaia, RJ &mdash; Sistema de Freios',
  heroH1: 'Troca de <span class="highlight">Fluido de Freio</span> em Itatiaia',
  heroDesc: 'Fluido de freio <strong>Bosch, TRW e Varga</strong> (DOT 3, DOT 4 e DOT 5.1). Nas descidas de serra de Itatiaia, o fluido de freio atinge <strong>temperaturas criticas que podem causar vapor lock</strong> &mdash; a perda total de frenagem. Manter o fluido em dia e questao de seguranca vital.',
  marqueeItems: ['Fluido de Freio','Bosch','TRW','Varga','DOT 4','DOT 3','Frenagem Segura','Itatiaia RJ','Serra','Vapor Lock'],
  sections: `
<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Servico</div><h2>O Que e Vapor Lock e Por Que Motoristas da Serra Devem se Preocupar?</h2></div>
    <p class="reveal"><strong>Vapor lock</strong> e o fenomeno em que o fluido de freio ferve dentro do sistema hidraulico devido ao calor excessivo. Quando isso acontece, formam-se bolhas de gas no circuito e o <strong>pedal de freio afunda ate o assoalho sem frear o veiculo</strong>. E uma das situacoes mais perigosas que um motorista pode enfrentar &mdash; e uma das mais comuns em regioes de serra.</p>
    <p class="reveal">A descida pela <strong>RJ-163 ate Penedo</strong> e os acessos a Maromba exigem frenagem continua por varios quilometros. Essa demanda termica aquece o fluido muito alem do normal. Se o fluido ja estiver degradado e com alto teor de umidade absorvida (fluidos velhos absorvem agua do ar), o ponto de ebulicao cai perigosamente. Na <strong>Auto Pecas Itatiaia</strong>, medimos o <strong>ponto de ebulicao do fluido</strong> com equipamento digital e indicamos a troca quando necessario.</p>
    <ul class="reveal">
      <li><strong>Teste do ponto de ebulicao</strong> com refratometro digital &mdash; resultado em 30 segundos</li>
      <li><strong>Sangria completa do sistema</strong> para remover bolhas de ar e fluido velho</li>
      <li><strong>Fluidos DOT 3, DOT 4 e DOT 5.1</strong> conforme especificacao do fabricante do veiculo</li>
      <li><strong>Verificacao de vazamentos</strong> em flexiveis, conexoes e cilindro mestre</li>
      <li><strong>Integracao com <a href="/troca-de-pastilhas.html">pastilhas</a> e <a href="/troca-de-disco-de-freio.html">discos de freio</a></strong> para revisao completa do sistema de frenagem</li>
    </ul>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Como Realizamos a Troca do Fluido de Freio</h2></div>
    <div class="process-steps">
      <div class="step reveal"><div class="step-num">1</div><div class="step-card"><h3 class="step-title">Teste do Fluido Atual</h3><div class="step-desc">Medimos o <strong>ponto de ebulicao e o teor de umidade</strong> do fluido com equipamento digital. Fluido DOT 4 novo ferve a 230&deg;C; se o seu estiver abaixo de 170&deg;C, a troca e urgente.</div></div></div>
      <div class="step reveal"><div class="step-num">2</div><div class="step-card"><h3 class="step-title">Sangria do Sistema</h3><div class="step-desc">Drenamos o fluido antigo roda por roda, na sequencia tecnica correta (roda mais distante do cilindro mestre primeiro). Isso garante <strong>remocao total de bolhas de ar</strong>.</div></div></div>
      <div class="step reveal"><div class="step-num">3</div><div class="step-card"><h3 class="step-title">Abastecimento e Teste</h3><div class="step-desc">Preenchemos com fluido novo (Bosch, TRW ou Varga) na especificacao correta. Testamos o pedal: deve estar <strong>firme, sem afundar</strong>. Verificamos vazamentos em todas as conexoes.</div></div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Marcas de Fluido de Freio Disponiveis</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128167;</div><div class="feature-card-title">Bosch</div><div class="feature-card-desc">Linha ENV6 (DOT 4+) com ponto de ebulicao seco de <strong>265&deg;C</strong>. Recomendado para veiculos que descem serra frequentemente. Compativel com ABS, ESP e controle de tracao.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128167;</div><div class="feature-card-title">TRW</div><div class="feature-card-desc">Marca do grupo ZF, referencia global em frenagem. Fluidos DOT 3 e DOT 4 com formulacao anti-umidade que retarda a degradacao &mdash; ideal para o <strong>clima umido de Itatiaia</strong>.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128167;</div><div class="feature-card-title">Varga</div><div class="feature-card-desc">Marca brasileira tradicional do grupo TRW. Fluidos DOT 3 e DOT 4 com excelente custo-beneficio e aprovacao INMETRO. Opcao mais escolhida para veiculos populares.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Quando o Fluido de Freio Precisa Ser Trocado?</h2></div>
    <ul class="reveal">
      <li><strong>Pedal de freio "esponjoso"</strong> &mdash; sensacao de pedal mole indica ar ou umidade no sistema hidraulico</li>
      <li><strong>Pedal afundando mais que o normal</strong> &mdash; pode ser fluido degradado ou vazamento; pare o veiculo imediatamente</li>
      <li><strong>Mais de 2 anos ou 40.000 km</strong> desde a ultima troca &mdash; o fluido absorve umidade do ar e perde capacidade termica</li>
      <li><strong>Fluido com cor escura</strong> &mdash; fluido novo e transparente/amarelado; escuro indica contaminacao e degradacao quimica</li>
      <li><strong>Apos troca de pastilhas ou discos</strong> &mdash; momento ideal para renovar o fluido e sangrar o sistema completo</li>
    </ul>
    <p class="reveal"><strong>Dica de seguranca:</strong> se voce desce a serra de Itatiaia regularmente e nunca trocou o fluido de freio, faca o teste gratuito do ponto de ebulicao na <strong>Auto Pecas Itatiaia</strong>. O resultado sai em 30 segundos e pode evitar um acidente grave. Combine com a <a href="/troca-de-disco-de-freio.html">inspecao de disco</a> e <a href="/troca-de-pastilhas.html">pastilhas de freio</a>.</p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Aplicacoes em Itatiaia: Onde o Fluido de Freio e Mais Exigido</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#9968;</div><div class="feature-card-title">Descidas para Penedo e Maromba</div><div class="feature-card-desc">Quilometros de descida continua que aquecem o fluido ate temperaturas criticas. Fluido <strong>DOT 4 ou superior</strong> e obrigatorio para quem faz esse trajeto regularmente.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128652;</div><div class="feature-card-title">Onibus e Vans de Turismo</div><div class="feature-card-desc">Veiculos pesados carregados de passageiros geram mais calor na frenagem. A troca do fluido a cada <strong>12 meses</strong> e recomendacao minima para frotas que operam na serra.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128666;</div><div class="feature-card-title">Veiculos na Via Dutra (Trechos Ondulados)</div><div class="feature-card-desc">Os trechos entre Itatiaia e Volta Redonda tem subidas e descidas que exigem frenagem frequente. Caminhoes com fluido degradado sao responsaveis por boa parte dos acidentes na rodovia.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128663;</div><div class="feature-card-title">Motoristas Diarios da Regiao</div><div class="feature-card-desc">Quem faz Itatiaia-Resende, Itatiaia-Penedo ou Itatiaia-Porto Real diariamente usa o freio mais do que imagina. Troca preventiva a cada <strong>2 anos ou 40.000 km</strong>.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Depoimentos</div><h2>Experiencias de Clientes com Fluido de Freio</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Mauricio Andrade &mdash; Motorista de Onibus, Itatiaia</div><div class="feature-card-desc">&ldquo;Descendo pra Penedo com o onibus cheio, senti o pedal ficar mole. Levei na Auto Pecas e o fluido estava com ponto de ebulicao de 155&deg;C &mdash; muito abaixo do seguro. Trocaram na hora e o pedal voltou firme. Poderia ter dado um acidente serio.&rdquo; <strong>Cliente desde 2023</strong></div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Fabiana Rocha &mdash; Mecanica Parceira, Resende</div><div class="feature-card-desc">&ldquo;Compro fluido Bosch e TRW na Auto Pecas Itatiaia pra oficina. Alem do preco bom, eles tem o equipamento de teste que uso nos meus clientes. Parceria tecnica que agrega valor pro meu trabalho.&rdquo; <strong>Cliente desde 2022</strong></div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Roberto Campos &mdash; Gestor de Frota, Porto Real</div><div class="feature-card-desc">&ldquo;Depois que um dos nossos veiculos teve problema de frenagem na serra, passamos a trocar o fluido de toda a frota na Auto Pecas a cada 12 meses. Nunca mais tivemos incidente. Prevencao que compensa.&rdquo; <strong>Cliente desde 2024</strong></div></div>
    </div>
  </div>
</section>`,
  faqs: [
    { q: 'Quanto custa a troca de fluido de freio em Itatiaia?', a: 'O valor depende do tipo de fluido (DOT 3, DOT 4 ou DOT 5.1) e da quantidade necessaria para o seu veiculo. A sangria completa esta inclusa. Consulte pelo WhatsApp (24) 99309-9190.' },
    { q: 'O que e vapor lock e como evitar?', a: 'Vapor lock ocorre quando o fluido de freio ferve, formando bolhas de gas que impedem a transmissao de pressao hidraulica. O pedal afunda e o carro nao freia. Para evitar: mantenha o fluido novo (troca a cada 2 anos) e use DOT 4 ou superior se dirige em serra.' },
    { q: 'Qual a diferenca entre DOT 3 e DOT 4?', a: 'O DOT 4 tem ponto de ebulicao mais alto (230&deg;C seco vs 205&deg;C do DOT 3). Para motoristas de Itatiaia que descem serra regularmente, o DOT 4 e o minimo recomendado. DOT 5.1 e ainda mais resistente ao calor.' },
    { q: 'De quanto em quanto tempo devo trocar o fluido de freio?', a: 'A recomendacao geral e a cada 2 anos ou 40.000 km. Em uso de serra (Itatiaia, Penedo, Maromba), recomendamos antecipar para 18 meses. Frotas de turismo devem trocar anualmente.' },
    { q: 'A Auto Pecas Itatiaia faz o teste do fluido?', a: 'Sim! Temos refratometro digital que mede o ponto de ebulicao e o teor de umidade do fluido em 30 segundos. O teste e gratuito e voce ve o resultado no visor.' },
    { q: 'Posso misturar marcas de fluido de freio?', a: 'Fluidos de mesma especificacao (ex: DOT 4 de marcas diferentes) podem ser misturados, mas o ideal e drenar o antigo completamente e usar uma marca so. Na sangria que fazemos, removemos todo o fluido velho.' },
  ],
  areaServed: ['Itatiaia','Resende','Penedo','Volta Redonda','Barra Mansa','Porto Real','Quatis'],
},

// ========== 8. TROCA DE PASTILHAS ==========
{
  slug: 'troca-de-pastilhas',
  keyword: 'troca de pastilhas de freio em itatiaia',
  serviceType: 'Troca de Pastilhas de Freio',
  metaDesc: 'Troca de pastilhas de freio em Itatiaia. Marcas Cobreq, Ecopads, TRW e Frasle. Frenagem constante na serra desgasta pastilhas mais rapido. Auto Pecas Itatiaia (24) 99309-9190.',
  loaderWords: 'Pastilhas de Freio',
  heroEyebrow: 'Itatiaia, RJ &mdash; Frenagem Automotiva',
  heroH1: 'Troca de <span class="highlight">Pastilhas de Freio</span> em Itatiaia',
  heroDesc: 'Pastilhas de freio <strong>Cobreq, Ecopads, TRW e Frasle</strong> para todos os veiculos. Na Serra da Mantiqueira, a <strong>frenagem constante nas descidas</strong> desgasta pastilhas ate 40% mais rapido. Motoristas de Itatiaia, Penedo e Maromba precisam de pastilhas com <strong>alto coeficiente de atrito termico</strong>.',
  marqueeItems: ['Pastilhas de Freio','Cobreq','Ecopads','TRW','Frasle','Frenagem Segura','Itatiaia RJ','Serra da Mantiqueira','Desgaste Acelerado','Via Dutra'],
  sections: `
<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Servico</div><h2>Por Que Pastilhas de Freio Duram Menos em Itatiaia?</h2></div>
    <p class="reveal">A resposta esta na topografia: Itatiaia fica encravada na <strong>Serra da Mantiqueira</strong>, com estradas de forte inclinacao que exigem uso constante dos freios. A descida pela RJ-163 ate Penedo, os acessos a Maromba e ate o trajeto diario ate Resende incluem trechos de serra que submetem as pastilhas a <strong>temperaturas acima de 350&deg;C</strong>.</p>
    <p class="reveal">Nessas temperaturas, pastilhas de baixa qualidade perdem eficiencia de frenagem (fenomeno chamado <strong>fade</strong>) e se desgastam exponencialmente mais rapido. Na <strong>Auto Pecas Itatiaia</strong>, so trabalhamos com marcas que garantem desempenho estavel em altas temperaturas: <strong>Cobreq, Ecopads, TRW e Frasle</strong>. Combinamos a troca de pastilhas com a inspecao de <a href="/troca-de-disco-de-freio.html">discos de freio</a> e <a href="/troca-de-fluido-de-freio.html">fluido de freio</a> para seguranca completa.</p>
    <ul class="reveal">
      <li><strong>Medicao da espessura</strong> da pastilha com paquimetro de precisao</li>
      <li><strong>Inspecao do disco</strong> para verificar se precisa troca conjunta</li>
      <li><strong>Verificacao do nivel de fluido</strong> (ao colocar pastilhas novas, o nivel do reservatorio sobe)</li>
      <li><strong>Limpeza e lubrificacao</strong> dos pinos-guia da pinca de freio</li>
      <li><strong>Teste de frenagem</strong> antes de liberar o veiculo</li>
    </ul>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Etapas do Servico de Troca de Pastilhas</h2></div>
    <div class="process-steps">
      <div class="step reveal"><div class="step-num">1</div><div class="step-card"><h3 class="step-title">Inspecao Completa do Freio</h3><div class="step-desc">Removemos a roda e medimos a espessura da pastilha. Verificamos <strong>disco, flexivel, pinca e fluido</strong>. So assim sabemos se basta trocar a pastilha ou se o sistema precisa de mais atencao.</div></div></div>
      <div class="step reveal"><div class="step-num">2</div><div class="step-card"><h3 class="step-title">Selecao da Pastilha Correta</h3><div class="step-desc">Identificamos a pastilha exata pelo catalogo: <strong>material de friccao, formato, presenca de sensor</strong>. Para uso de serra, priorizamos pastilhas ceramicas ou semi-metalicas de alto desempenho.</div></div></div>
      <div class="step reveal"><div class="step-num">3</div><div class="step-card"><h3 class="step-title">Instalacao e Amaciamento</h3><div class="step-desc">Instalamos as pastilhas novas, limpamos os pinos-guia e aplicamos pasta anti-ruido. Orientamos o <strong>amaciamento</strong>: 20 frenagens suaves nos primeiros 200 km.</div></div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Marcas de Pastilhas com Pronta Entrega em Itatiaia</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#9899;</div><div class="feature-card-title">Cobreq</div><div class="feature-card-desc">Grupo TMD Friction &mdash; lider mundial. Pastilhas com formulacao <strong>NAO (sem amianto)</strong> e alta resistencia termica. Linha de equipamento original para montadoras. Ideal para uso severo em serra.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#9899;</div><div class="feature-card-title">Ecopads</div><div class="feature-card-desc">Marca brasileira focada em custo-beneficio com qualidade. Pastilhas com tecnologia <strong>low-dust</strong> que reduz po de freio nas rodas. Opcao inteligente para uso urbano e misto.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#9899;</div><div class="feature-card-title">TRW</div><div class="feature-card-desc">Marca do grupo ZF com tecnologia europeia. Pastilhas com sensor de desgaste integrado e formulacao <strong>COTEC</strong> para frenagem estavel do frio ao calor extremo.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#9899;</div><div class="feature-card-title">Frasle</div><div class="feature-card-desc">Marca gaucha referencia em materiais de friccao. Linha Lonaflex para veiculos pesados e utilitarios. <strong>Exportada para mais de 100 paises</strong> &mdash; confianca comprovada.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Como Identificar Que as Pastilhas Estao no Limite?</h2></div>
    <ul class="reveal">
      <li><strong>Ruido agudo ao frear (guincho metalico)</strong> &mdash; o indicador de desgaste esta em contato com o disco, sinalizando que a pastilha chegou ao minimo</li>
      <li><strong>Luz de alerta de freio no painel</strong> &mdash; veiculos com sensor eletronico de pastilha acendem a luz quando a espessura atinge o limite</li>
      <li><strong>Distancia de frenagem maior</strong> &mdash; precisa pisar mais fundo ou mais cedo para o carro parar; perceptivel especialmente nas descidas de serra</li>
      <li><strong>Pedal vibrando ao frear</strong> &mdash; pode indicar pastilha com desgaste irregular ou disco empenado</li>
      <li><strong>Po de freio excessivo nas rodas</strong> &mdash; pastilhas gastas geram mais residuo; rodas ficam sujas muito rapido</li>
    </ul>
    <p class="reveal"><strong>Alerta importante:</strong> nunca prolongue o uso de pastilhas no limite. Na regiao de Itatiaia, com descidas longas e ingremes, pastilhas gastas podem nao conseguir parar o veiculo a tempo. Faca a inspecao gratuita na <strong>Auto Pecas Itatiaia</strong>.</p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Aplicacoes em Itatiaia: Quem Mais Desgasta Pastilhas na Regiao</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128663;</div><div class="feature-card-title">Commuters Itatiaia-Resende</div><div class="feature-card-desc">Quem faz o trajeto diario entre Itatiaia e Resende enfrenta trechos de serra que consomem pastilhas gradualmente. Inspecao a cada <strong>15.000 km</strong> previne surpresas.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128666;</div><div class="feature-card-title">Caminhoes e Utilitarios na Via Dutra</div><div class="feature-card-desc">Veiculos pesados com carga em trechos ondulados precisam de pastilhas <strong>Frasle Lonaflex</strong> com maior espessura e resistencia. Estoque permanente para troca imediata.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128656;</div><div class="feature-card-title">Veiculos de Turismo (Penedo e Maromba)</div><div class="feature-card-desc">Vans e SUVs carregados descendo serra = <strong>maximo estresse nas pastilhas</strong>. Recomendamos Cobreq ou TRW ceramica para este perfil de uso.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#127968;</div><div class="feature-card-title">Moradores que Acessam Estradas Ingremes</div><div class="feature-card-desc">Bairros como Maromba e Maringa tem acessos com inclinacao acentuada que exigem frenagem na descida. Pastilhas de qualidade evitam <strong>fade termico</strong> nessas condicoes.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Depoimentos</div><h2>Relatos de Clientes Sobre Troca de Pastilhas</h2></div>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Alexandre Ribeiro &mdash; Commuter Diario, Resende</div><div class="feature-card-desc">&ldquo;Faco Itatiaia-Resende todo dia e as pastilhas duravam so 20.000 km. Na Auto Pecas me indicaram Cobreq ceramica e agora duram 30.000 km tranquilo. Frenagem firme mesmo na descida da serra. Economia no longo prazo.&rdquo; <strong>Cliente desde 2024</strong></div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Tania Oliveira &mdash; Caminhoneira, Via Dutra</div><div class="feature-card-desc">&ldquo;Parei na Auto Pecas porque o freio do meu caminhao estava fazendo barulho. Trocaram as pastilhas Frasle na hora e o barulho sumiu. Em outros lugares queriam me vender disco novo tambem, mas aqui mediram e mostraram que nao precisava.&rdquo; <strong>Atendida em 2025</strong></div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128100;</div><div class="feature-card-title">Daniel Costa &mdash; Motorista de Pousada, Maromba</div><div class="feature-card-desc">&ldquo;A van da pousada leva hospedes todo dia e os freios sofrem na descida. Troco pastilhas e verifico disco na Auto Pecas a cada 25.000 km. Eles acompanham o desgaste e avisam quando ta na hora. Confianca total com a seguranca dos passageiros.&rdquo; <strong>Cliente desde 2023</strong></div></div>
    </div>
  </div>
</section>`,
  faqs: [
    { q: 'Quanto custa trocar pastilhas de freio em Itatiaia?', a: 'O valor depende do veiculo e da marca das pastilhas. Trabalhamos com Cobreq, Ecopads, TRW e Frasle. Solicite orcamento pelo WhatsApp (24) 99309-9190 informando marca e modelo do carro.' },
    { q: 'Pastilhas ceramicas valem a pena para uso em serra?', a: 'Sim. Pastilhas ceramicas mantem o coeficiente de atrito mais estavel em altas temperaturas (acima de 300&deg;C), geram menos po e desgastam menos o disco. Para quem desce serra regularmente em Itatiaia, o investimento se paga.' },
    { q: 'De quantos em quantos km devo trocar as pastilhas na regiao de serra?', a: 'Em uso predominante de serra (Itatiaia, Penedo, Maromba), as pastilhas duram entre 20.000 e 35.000 km &mdash; dependendo da marca, peso do veiculo e estilo de conducao. Em terreno plano, duram ate 50.000 km.' },
    { q: 'Posso trocar so as pastilhas dianteiras?', a: 'Sim, as pastilhas dianteiras desgastam mais rapido (60-70% da frenagem e feita pelo eixo dianteiro). Mas recomendamos inspecionar as traseiras ao mesmo tempo. Na Auto Pecas Itatiaia, verificamos ambos os eixos gratuitamente.' },
    { q: 'Qual a diferenca entre pastilha organica e semi-metalica?', a: 'Organicas sao mais silenciosas e desgastam menos o disco, mas perdem eficiencia em altas temperaturas. Semi-metalicas aguentam mais calor e sao melhores para serra. Para Itatiaia, recomendamos semi-metalicas ou ceramicas.' },
    { q: 'A Auto Pecas Itatiaia tem pastilhas para caminhao?', a: 'Sim! Trabalhamos com Frasle Lonaflex para veiculos pesados e utilitarios. Estoque permanente para atender caminhoneiros da Via Dutra sem espera por encomenda.' },
  ],
  areaServed: ['Itatiaia','Resende','Penedo','Volta Redonda','Barra Mansa','Porto Real','Quatis'],
},
];

function buildPage(p) {
  const faqSchemaEntities = p.faqs.map(f => `    { "@type": "Question", "name": "${f.q}", "acceptedAnswer": { "@type": "Answer", "text": "${f.a.replace(/"/g, '\\"')}" } }`).join(',\n');
  
  const faqItems = p.faqs.map(f => `        <div class="faq-item"><button class="faq-q" onclick="this.parentElement.classList.toggle('open')"><span class="faq-q-text">${f.q}</span><span class="faq-toggle">+</span></button><div class="faq-a"><div class="faq-a-inner">${f.a}</div></div></div>`).join('\n');

  const marqueeHtml = p.marqueeItems.map(item => `<span class="marquee-item">${item}</span><span class="marquee-sep"></span>`).join('');
  const marqueeDouble = marqueeHtml + marqueeHtml; // duplicate for infinite scroll

  const areaServedJson = JSON.stringify(p.areaServed);

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${p.serviceType} em Itatiaia | Auto Pecas Itatiaia</title>
<meta name="description" content="${p.metaDesc}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://autopecasitatiaia.com.br/${p.slug}.html">
<meta property="og:title" content="${p.serviceType} em Itatiaia | Auto Pecas Itatiaia">
<meta property="og:description" content="${p.metaDesc}">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:url" content="https://autopecasitatiaia.com.br/${p.slug}.html">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"><\/script>
<script src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js"><\/script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  "name": "Auto Pecas Itatiaia",
  "url": "https://autopecasitatiaia.com.br",
  "telephone": "+55-24-99309-9190",
  "address": { "@type": "PostalAddress", "streetAddress": "Av. dos Expedicionarios, 275 - loja 5 - Centro", "addressLocality": "Itatiaia", "addressRegion": "RJ", "postalCode": "27580-216", "addressCountry": "BR" },
  "geo": { "@type": "GeoCoordinates", "latitude": "-22.4939592", "longitude": "-44.5614109" },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "13:00" }
  ],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "347" }
}
<\/script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "${p.serviceType}",
  "description": "Servico de ${p.serviceType.toLowerCase()} em Itatiaia-RJ na Auto Pecas Itatiaia.",
  "provider": {
    "@type": "AutoPartsStore",
    "name": "Auto Pecas Itatiaia",
    "telephone": "+55-24-99309-9190",
    "address": { "@type": "PostalAddress", "streetAddress": "Av. dos Expedicionarios, 275 - loja 5 - Centro", "addressLocality": "Itatiaia", "addressRegion": "RJ", "postalCode": "27580-216", "addressCountry": "BR" }
  },
  "areaServed": ${areaServedJson}
}
<\/script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
${faqSchemaEntities}
  ]
}
<\/script>
<style>
:root {
  --orange: #FF6633;
  --orange-hover: #FF7A4D;
  --orange-soft: rgba(255, 102, 51, .08);
  --orange-glow: rgba(255, 102, 51, .15);
  --orange-border: rgba(255, 102, 51, .2);
  --green-wpp: #25D366;
  --green-wpp-hover: #1ebe5d;
  --bg-primary: #000000;
  --bg-secondary: #0A0A0A;
  --bg-card: #111111;
  --bg-card-hover: #1A1A1A;
  --bg-elevated: #151515;
  --bg-glass: rgba(10, 10, 10, .85);
  --border: rgba(255, 255, 255, .06);
  --border-hover: rgba(255, 255, 255, .12);
  --border-orange: rgba(255, 102, 51, .25);
  --text-primary: #FAFAFA;
  --text-secondary: #999999;
  --text-tertiary: #666666;
  --text-muted: #444444;
  --font-display: 'Inter', -apple-system, sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-mono: 'Space Grotesk', monospace;
  --s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-5: 24px;
  --s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 80px; --s-10: 120px;
  --r-sm: 6px; --r-md: 12px; --r-lg: 20px; --r-xl: 28px; --r-full: 100px;
  --shadow-sm: 0 2px 8px rgba(0,0,0,.3);
  --shadow-md: 0 8px 32px rgba(0,0,0,.4);
  --shadow-lg: 0 24px 64px rgba(0,0,0,.5);
  --shadow-orange: 0 8px 32px rgba(255,102,51,.25);
  --ease-out: cubic-bezier(.16, 1, .3, 1);
  --ease-spring: cubic-bezier(.34, 1.56, .64, 1);
  --duration-fast: .2s;
  --duration-normal: .4s;
  --duration-slow: .7s;
}
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: auto; -webkit-font-smoothing: antialiased; }
body { background: var(--bg-primary); color: var(--text-secondary); font-family: var(--font-display); font-size: 16px; line-height: 1.6; overflow-x: hidden; cursor: none; }
a { color: inherit; text-decoration: none; cursor: none; }
img { max-width: 100%; display: block; }
button { border: none; background: none; cursor: none; font-family: inherit; }
ul, ol { list-style: none; }
.loader { position: fixed; inset: 0; background: var(--bg-primary); z-index: 9999; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 32px; }
.loader-phrase { font-family: var(--font-serif); font-size: clamp(24px, 5vw, 48px); font-style: italic; color: rgba(255, 255, 255, .9); letter-spacing: .01em; text-align: center; max-width: 650px; padding: 0 24px; }
.loader-phrase span { display: inline-block; opacity: 0; transform: translateY(14px); transition: opacity .45s ease, transform .45s ease; }
.loader-phrase span.visible { opacity: 1; transform: translateY(0); }
.loader-line { width: 56px; height: 1px; background: rgba(255, 255, 255, .1); position: relative; overflow: hidden; }
.loader-line::after { content: ''; position: absolute; left: 0; top: 0; height: 100%; width: 0%; background: var(--orange); transition: width 2s var(--ease-out); }
.loader-line.active::after { width: 100%; }
.loader-brand { font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: .2em; text-transform: uppercase; color: var(--orange); opacity: 0; transition: opacity .6s ease .3s; }
.loader-brand.visible { opacity: 1; }
.loader.done { opacity: 0; transition: opacity .7s ease; pointer-events: none; }
.cursor { position: fixed; width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid var(--orange); pointer-events: none; z-index: 10000; transition: width .3s var(--ease-out), height .3s var(--ease-out), border-color .3s, background .3s, opacity .3s; transform: translate(-50%, -50%); mix-blend-mode: difference; background: transparent; }
.cursor.hover { width: 60px; height: 60px; background: rgba(255, 102, 51, .12); border-color: var(--orange-hover); }
.cursor-label { position: fixed; pointer-events: none; z-index: 10001; font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #fff; opacity: 0; transition: opacity .25s; transform: translate(-50%, -50%); font-family: var(--font-mono); }
.cursor-label.visible { opacity: 1; }
@media (hover: none), (pointer: coarse) { .cursor, .cursor-label { display: none !important; } body, a, button { cursor: auto; } }
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes marqueeReverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
@keyframes pulseGlow { 0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, .4); } 50% { box-shadow: 0 0 0 16px rgba(37, 211, 102, 0); } }
@keyframes scrollLine { 0% { top: -50%; } 100% { top: 150%; } }
@keyframes grain { 0%, 100% { transform: translate(0, 0); } 10% { transform: translate(-5%, -10%); } 30% { transform: translate(3%, -15%); } 50% { transform: translate(12%, 9%); } 70% { transform: translate(9%, 4%); } 90% { transform: translate(-1%, 7%); } }
.noise::before { content: ''; position: absolute; inset: -50%; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.03'/%3E%3C/svg%3E"); animation: grain 8s steps(10) infinite; pointer-events: none; z-index: 1; }
.reveal { opacity: 0; transform: translateY(40px); }
.container { max-width: 1280px; margin: 0 auto; padding: 0 var(--s-7); }
.section { padding: var(--s-10) 0; position: relative; }
.header { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; height: 72px; display: flex; align-items: center; background: transparent; transition: background var(--duration-normal), border-color var(--duration-normal); border-bottom: 1px solid transparent; }
.header.scrolled { background: var(--bg-glass); backdrop-filter: blur(24px) saturate(180%); -webkit-backdrop-filter: blur(24px) saturate(180%); border-bottom-color: var(--border); }
.header-inner { max-width: 1280px; margin: 0 auto; padding: 0 var(--s-7); width: 100%; display: flex; align-items: center; justify-content: space-between; }
.logo { display: flex; align-items: center; gap: var(--s-3); }
.logo-mark { width: 40px; height: 40px; background: var(--orange); border-radius: var(--r-sm); display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; color: var(--bg-primary); letter-spacing: -.02em; }
.logo-text { display: flex; flex-direction: column; line-height: 1.1; }
.logo-name { font-weight: 800; font-size: 15px; color: var(--text-primary); letter-spacing: -.02em; }
.logo-sub { font-family: var(--font-mono); font-size: 10px; color: var(--text-tertiary); letter-spacing: .08em; text-transform: uppercase; }
.nav { display: flex; align-items: center; gap: var(--s-6); }
.nav-link { font-size: 13px; font-weight: 500; color: var(--text-secondary); letter-spacing: .02em; transition: color var(--duration-fast); position: relative; }
.nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1.5px; background: var(--orange); transition: width var(--duration-normal) var(--ease-out); }
.nav-link:hover { color: var(--text-primary); }
.nav-link:hover::after { width: 100%; }
.nav-link.active { color: var(--orange); }
.nav-link.active::after { width: 100%; }
.nav-cta { background: var(--orange); color: var(--bg-primary); font-weight: 700; font-size: 13px; padding: 10px 22px; border-radius: var(--r-full); letter-spacing: .02em; transition: background var(--duration-fast), transform var(--duration-fast); position: relative; overflow: hidden; }
.nav-cta::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.25), transparent); transition: left .5s; }
.nav-cta:hover { background: var(--orange-hover); transform: translateY(-1px); }
.nav-cta:hover::before { left: 100%; }
.menu-toggle { display: none; flex-direction: column; gap: 5px; padding: 4px; z-index: 1001; }
.menu-toggle span { width: 24px; height: 2px; background: var(--text-primary); border-radius: 2px; transition: all .3s var(--ease-out); }
.menu-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.menu-toggle.active span:nth-child(2) { opacity: 0; }
.menu-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
.hero { position: relative; min-height: 70vh; display: flex; align-items: center; overflow: hidden; background: var(--bg-primary); }
.hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 70% 40%, rgba(255, 102, 51, .08) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 20% 80%, rgba(255, 102, 51, .05) 0%, transparent 60%); will-change: transform; }
.hero-grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.015) 1px, transparent 1px); background-size: 80px 80px; }
.hero-inner { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; padding: var(--s-9) var(--s-7); padding-top: calc(72px + var(--s-9)); width: 100%; }
.hero-eyebrow { display: inline-flex; align-items: center; gap: var(--s-2); font-family: var(--font-mono); font-size: 12px; font-weight: 500; color: var(--text-tertiary); letter-spacing: .1em; text-transform: uppercase; margin-bottom: var(--s-5); opacity: 0; }
.hero-eyebrow .dot { width: 6px; height: 6px; background: var(--orange); border-radius: 50%; }
.hero h1 { font-family: var(--font-display); font-size: clamp(40px, 5.5vw, 72px); font-weight: 900; line-height: .95; letter-spacing: -.04em; color: var(--text-primary); margin-bottom: var(--s-6); opacity: 0; }
.hero h1 .highlight { color: var(--orange); position: relative; display: inline-block; }
.hero h1 .highlight::after { content: ''; position: absolute; bottom: 2px; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--orange), transparent); transform: scaleX(0); transform-origin: left; }
.hero-desc { font-size: 18px; font-weight: 300; color: var(--text-secondary); line-height: 1.7; max-width: 620px; margin-bottom: var(--s-7); opacity: 0; }
.hero-desc strong { color: var(--text-primary); font-weight: 600; }
.hero-actions { display: flex; gap: var(--s-4); flex-wrap: wrap; margin-bottom: var(--s-7); opacity: 0; }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: var(--s-3); font-weight: 700; font-size: 15px; padding: 16px 32px; border-radius: var(--r-full); transition: all var(--duration-fast) var(--ease-out); white-space: nowrap; position: relative; overflow: hidden; }
.btn-primary::before, .btn-wpp::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.2), transparent); transition: left .5s; }
.btn-primary:hover::before, .btn-wpp:hover::before { left: 100%; }
.btn-primary { background: var(--orange); color: var(--bg-primary); box-shadow: var(--shadow-orange); }
.btn-primary:hover { background: var(--orange-hover); transform: translateY(-2px); box-shadow: 0 12px 40px rgba(255,102,51,.35); }
.btn-secondary { background: transparent; color: var(--text-primary); border: 1px solid var(--border-hover); }
.btn-secondary:hover { border-color: var(--orange-border); background: var(--orange-soft); }
.btn-wpp { background: var(--green-wpp); color: #fff; box-shadow: 0 8px 32px rgba(37, 211, 102, .3); }
.btn-wpp:hover { background: var(--green-wpp-hover); transform: translateY(-2px); }
.hero-metrics { display: flex; gap: var(--s-7); opacity: 0; }
.metric { display: flex; flex-direction: column; }
.metric-num { font-family: var(--font-display); font-size: 28px; font-weight: 900; color: var(--text-primary); letter-spacing: -.02em; line-height: 1; }
.metric-num .accent { color: var(--orange); }
.metric-label { font-family: var(--font-mono); font-size: 11px; color: var(--text-tertiary); letter-spacing: .06em; text-transform: uppercase; margin-top: var(--s-1); }
.marquee-strip { background: var(--orange); padding: 14px 0; overflow: hidden; }
.marquee-track { display: flex; white-space: nowrap; animation: marquee 30s linear infinite; width: max-content; }
.marquee-item { display: inline-flex; align-items: center; gap: 14px; padding: 0 24px; font-family: var(--font-display); font-size: 13px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: var(--bg-primary); }
.marquee-sep { width: 5px; height: 5px; background: rgba(0,0,0,.25); border-radius: 50%; flex-shrink: 0; }
.content-section { padding: var(--s-9) 0; position: relative; }
.content-section:nth-child(even) { background: var(--bg-secondary); }
.content-section h2 { font-family: var(--font-display); font-size: clamp(28px, 3.5vw, 42px); font-weight: 900; letter-spacing: -.03em; color: var(--text-primary); line-height: 1.05; margin-bottom: var(--s-5); }
.content-section h3 { font-family: var(--font-display); font-size: 20px; font-weight: 800; color: var(--text-primary); margin-bottom: var(--s-3); }
.content-section p { font-size: 16px; color: var(--text-secondary); line-height: 1.8; margin-bottom: var(--s-5); }
.content-section p strong { color: var(--text-primary); font-weight: 600; }
.content-section ul { margin-bottom: var(--s-5); }
.content-section ul li { font-size: 15px; color: var(--text-secondary); line-height: 1.7; padding: 8px 0; padding-left: 28px; position: relative; border-bottom: 1px solid var(--border); }
.content-section ul li::before { content: ''; position: absolute; left: 0; top: 16px; width: 8px; height: 8px; border-radius: 50%; background: var(--orange); }
.content-section a { color: var(--orange); border-bottom: 1px solid rgba(255,102,51,.3); transition: border-color var(--duration-fast); }
.content-section a:hover { border-bottom-color: var(--orange); }
.feature-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--s-4); margin-top: var(--s-6); }
.feature-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-md); padding: var(--s-6); transition: all var(--duration-normal); }
.feature-card:hover { border-color: var(--orange-border); transform: translateY(-3px); }
.feature-card-icon { font-size: 28px; margin-bottom: var(--s-4); display: block; }
.feature-card-title { font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--s-2); }
.feature-card-desc { font-size: 14px; color: var(--text-tertiary); line-height: 1.7; }
.process-steps { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--s-5); margin-top: var(--s-7); }
.step { display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1; }
.step-num { width: 54px; height: 54px; border-radius: 50%; background: var(--orange); color: var(--bg-primary); font-weight: 900; font-size: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: var(--s-5); box-shadow: 0 0 0 5px var(--bg-primary), 0 0 0 7px var(--orange-border); transition: all var(--duration-normal); }
.step:hover .step-num { box-shadow: 0 0 0 5px var(--bg-primary), 0 0 0 12px rgba(255,102,51,.3); transform: scale(1.08); }
.step-card { background: var(--orange-soft); border: 1px solid var(--orange-border); border-top: 3px solid var(--orange); border-radius: var(--r-md); padding: var(--s-6) var(--s-5); width: 100%; transition: all var(--duration-normal); }
.step:hover .step-card { background: var(--orange-glow); transform: translateY(-4px); box-shadow: var(--shadow-md); }
.step-title { font-size: 18px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--s-2); }
.step-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.7; }
.step-desc strong { color: var(--orange); }
.sec-label { font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: var(--orange); margin-bottom: var(--s-3); display: flex; align-items: center; gap: var(--s-3); }
.sec-label::before { content: ''; width: 24px; height: 1.5px; background: var(--orange); border-radius: 2px; }
.sec-title { font-family: var(--font-display); font-size: clamp(32px, 4vw, 52px); font-weight: 900; letter-spacing: -.03em; color: var(--text-primary); line-height: 1; margin-bottom: var(--s-4); }
.sec-sub { font-size: 16px; color: var(--text-tertiary); max-width: 520px; line-height: 1.7; }
.faq-layout { display: grid; grid-template-columns: 1fr 1.4fr; gap: var(--s-8); align-items: start; }
.faq-list { border: 1px solid var(--border); border-radius: var(--r-md); overflow: hidden; }
.faq-item { border-bottom: 1px solid var(--border); }
.faq-item:last-child { border-bottom: none; }
.faq-q { width: 100%; background: var(--bg-card); padding: var(--s-5); display: flex; justify-content: space-between; align-items: center; text-align: left; gap: var(--s-4); transition: background var(--duration-fast); }
.faq-q:hover { background: var(--bg-card-hover); }
.faq-q-text { font-size: 15px; font-weight: 600; color: var(--text-primary); line-height: 1.4; }
.faq-toggle { width: 28px; height: 28px; flex-shrink: 0; border-radius: 50%; background: var(--orange-soft); border: 1px solid var(--orange-border); display: flex; align-items: center; justify-content: center; color: var(--orange); font-size: 18px; transition: all .3s var(--ease-out); }
.faq-item.open .faq-toggle { transform: rotate(45deg); background: var(--orange); color: var(--bg-primary); }
.faq-a { max-height: 0; overflow: hidden; transition: max-height .4s var(--ease-out); }
.faq-item.open .faq-a { max-height: 400px; }
.faq-a-inner { padding: 0 var(--s-5) var(--s-5); font-size: 14px; color: var(--text-tertiary); line-height: 1.8; border-top: 1px solid var(--border); padding-top: var(--s-4); background: var(--bg-secondary); }
.pre-cta { background: var(--bg-card); border-top: 1px solid var(--border); padding: var(--s-7) 0; }
.pre-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: var(--s-6); flex-wrap: wrap; }
.pre-cta-title { font-size: clamp(22px, 2.5vw, 30px); font-weight: 800; color: var(--text-primary); letter-spacing: -.02em; }
.pre-cta-sub { font-size: 14px; color: var(--text-tertiary); font-family: var(--font-mono); }
.contact-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: var(--s-8); align-items: start; }
.contact-wpp { background: rgba(37,211,102,.05); border: 1px solid rgba(37,211,102,.15); border-radius: var(--r-md); padding: var(--s-6); display: flex; flex-direction: column; gap: var(--s-3); }
.contact-wpp-label { font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: rgba(37,211,102,.7); }
.contact-info-card { display: flex; align-items: flex-start; gap: var(--s-4); padding: var(--s-5); background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-md); transition: border-color var(--duration-fast); }
.contact-info-card:hover { border-color: var(--border-orange); }
.contact-info-icon { width: 40px; height: 40px; flex-shrink: 0; background: var(--orange-soft); border: 1px solid var(--orange-border); border-radius: var(--r-sm); display: flex; align-items: center; justify-content: center; color: var(--orange); }
.contact-info-label { font-family: var(--font-mono); font-size: 10px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--orange); margin-bottom: 2px; }
.contact-info-value { font-size: 14px; color: var(--text-primary); line-height: 1.5; }
.contact-info-value a { transition: color var(--duration-fast); }
.contact-info-value a:hover { color: var(--orange); }
.map-wrapper { border-radius: var(--r-md); overflow: hidden; border: 1px solid var(--border); height: 400px; }
.map-wrapper iframe { width: 100%; height: 100%; border: none; display: block; filter: grayscale(.8) contrast(1.1); transition: filter var(--duration-normal); }
.map-wrapper:hover iframe { filter: grayscale(.3) contrast(1); }
.map-link { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-mono); font-size: 12px; font-weight: 600; color: var(--orange); margin-top: var(--s-3); transition: gap var(--duration-fast); }
.map-link:hover { gap: 10px; }
.footer { background: var(--bg-secondary); border-top: 1px solid var(--border); padding: var(--s-8) 0 var(--s-6); }
.footer-grid { display: grid; grid-template-columns: 1.3fr 1fr 1fr; gap: var(--s-7); margin-bottom: var(--s-7); }
.footer-brand-desc { font-size: 14px; color: var(--text-tertiary); line-height: 1.7; max-width: 280px; margin-bottom: var(--s-3); }
.footer-col-title { font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--text-primary); margin-bottom: var(--s-4); }
.footer-links { display: flex; flex-direction: column; gap: var(--s-3); }
.footer-links a { font-size: 13px; color: var(--text-tertiary); transition: color var(--duration-fast); }
.footer-links a:hover { color: var(--orange); }
.footer-hours-row { display: flex; justify-content: space-between; font-size: 13px; color: var(--text-tertiary); }
.footer-hours-row strong { color: var(--text-primary); font-weight: 600; }
.footer-bottom { padding-top: var(--s-5); border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--s-3); font-family: var(--font-mono); font-size: 12px; color: var(--text-muted); }
.wpp-float { position: fixed; bottom: 28px; right: 28px; z-index: 999; display: flex; align-items: center; gap: 10px; background: var(--green-wpp); color: #fff; font-weight: 700; font-size: 14px; padding: 14px 22px; border-radius: var(--r-full); box-shadow: 0 8px 32px rgba(37,211,102,.4); transition: all var(--duration-fast); animation: pulseGlow 3s ease infinite; opacity: 0; transform: translateY(16px); pointer-events: none; }
.wpp-float.visible { opacity: 1; transform: translateY(0); pointer-events: auto; }
.wpp-float:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 16px 48px rgba(37,211,102,.5); }
.sticky-cta { display: none; }
@media (max-width: 768px) {
  .sticky-cta { display: flex; position: fixed; bottom: 0; left: 0; right: 0; z-index: 998; background: var(--bg-glass); backdrop-filter: blur(24px) saturate(180%); -webkit-backdrop-filter: blur(24px) saturate(180%); border-top: 1px solid var(--border); padding: 12px 16px; align-items: center; justify-content: space-between; gap: 12px; transform: translateY(100%); transition: transform .4s var(--ease-out); }
  .sticky-cta.visible { transform: translateY(0); }
  .sticky-cta-info { display: flex; flex-direction: column; min-width: 0; }
  .sticky-cta-title { font-size: 14px; font-weight: 700; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .sticky-cta-sub { font-family: var(--font-mono); font-size: 10px; color: var(--text-tertiary); letter-spacing: .04em; }
  .sticky-cta-btn { display: inline-flex; align-items: center; gap: 8px; background: var(--orange); color: var(--bg-primary); font-weight: 800; font-size: 13px; padding: 12px 20px; border-radius: var(--r-full); white-space: nowrap; flex-shrink: 0; transition: background var(--duration-fast), transform var(--duration-fast); position: relative; overflow: hidden; letter-spacing: .02em; }
  .sticky-cta-btn::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.2), transparent); transition: left .5s; }
  .sticky-cta-btn:hover::before { left: 100%; }
  .wpp-float { display: none !important; }
}
@media (max-width: 1024px) {
  .contact-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .faq-layout { grid-template-columns: 1fr; gap: var(--s-5); }
}
@media (max-width: 768px) {
  body { cursor: auto; }
  a, button { cursor: auto; }
  .container { padding: 0 14px; }
  .section { padding: 48px 0; }
  .content-section { padding: 48px 0; }
  .header { height: 56px; }
  .logo-mark { width: 34px; height: 34px; font-size: 15px; }
  .logo-name { font-size: 13px; }
  .logo-sub { font-size: 9px; }
  .nav { display: none; position: fixed; top: 56px; left: 0; right: 0; background: var(--bg-glass); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border-bottom: 1px solid var(--border); padding: var(--s-3); flex-direction: column; align-items: stretch; gap: 0; z-index: 999; }
  .nav.open { display: flex; }
  .nav.open .nav-link { padding: 12px var(--s-2); border-bottom: 1px solid var(--border); font-size: 14px; }
  .nav.open .nav-cta { margin-top: var(--s-2); padding: 14px; text-align: center; }
  .menu-toggle { display: flex; }
  .hero { min-height: auto; padding-bottom: 32px; }
  .hero-inner { padding: 32px 14px; padding-top: calc(56px + 32px); }
  .hero h1 { font-size: clamp(32px, 9vw, 44px); margin-bottom: 16px; }
  .hero-eyebrow { font-size: 10px; margin-bottom: 12px; }
  .hero-desc { font-size: 15px; margin-bottom: 24px; line-height: 1.6; }
  .hero-actions { flex-direction: column; gap: 10px; }
  .btn { width: 100%; justify-content: center; padding: 14px 24px; font-size: 14px; }
  .hero-metrics { gap: 20px; }
  .metric-num { font-size: 22px; }
  .metric-label { font-size: 10px; }
  .marquee-strip { padding: 10px 0; }
  .marquee-item { font-size: 11px; padding: 0 16px; }
  .feature-grid { grid-template-columns: 1fr; }
  .process-steps { grid-template-columns: 1fr; gap: 16px; }
  .faq-layout { grid-template-columns: 1fr; gap: 24px; }
  .faq-q { padding: 16px; }
  .faq-q-text { font-size: 14px; }
  .faq-a-inner { font-size: 13px; padding: 0 16px 16px; padding-top: 12px; }
  .pre-cta { padding: 32px 0; }
  .pre-cta-inner { flex-direction: column; gap: 16px; text-align: center; }
  .pre-cta-title { font-size: 20px; }
  .contact-grid { grid-template-columns: 1fr; gap: 20px; }
  .map-wrapper { height: 220px; }
  .footer { padding: 40px 0 24px; }
  .footer-grid { grid-template-columns: 1fr; gap: 24px; }
  .footer-bottom { flex-direction: column; text-align: center; gap: 6px; }
  .sec-title { font-size: clamp(26px, 6vw, 36px); margin-bottom: 10px; }
  .sec-sub { font-size: 14px; }
  .sec-label { font-size: 10px; }
  .footer { padding-bottom: 80px; }
  .content-section h2 { font-size: clamp(24px, 6vw, 32px); }
}
@media (max-width: 480px) {
  .hero h1 { font-size: clamp(28px, 8vw, 36px); }
  .hero-desc { font-size: 14px; }
}
</style>
</head>
<body style="overflow: hidden;">

<div class="sticky-cta" id="stickyCta">
  <div class="sticky-cta-info">
    <div class="sticky-cta-title">Auto Pecas Itatiaia</div>
    <div class="sticky-cta-sub">&#11088; 4.9 &middot; 40+ marcas &middot; Itatiaia RJ</div>
  </div>
  <a href="${WPP_LINK}" class="sticky-cta-btn" target="_blank" rel="noopener">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Pedir Peca
  </a>
</div>

<div class="loader" id="loader">
  <div class="loader-phrase" id="loaderPhrase"></div>
  <div class="loader-line" id="loaderLine"></div>
  <div class="loader-brand" id="loaderBrand">Auto Pecas Itatiaia</div>
</div>
<div class="cursor" id="cursor"></div>
<div class="cursor-label" id="cursorLabel"></div>

<a href="${WPP_LINK}" class="wpp-float" id="wpp-float" target="_blank" rel="noopener" aria-label="Chamar no WhatsApp" data-cursor="WhatsApp">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Chamar no WhatsApp
</a>

<header class="header" id="header">
  <div class="header-inner">
    <a href="/" class="logo" data-cursor="Inicio">
      <div class="logo-mark">AP</div>
      <div class="logo-text">
        <span class="logo-name">Auto Pecas Itatiaia</span>
        <span class="logo-sub">Itatiaia &middot; RJ &middot; Centro</span>
      </div>
    </a>
    <nav class="nav" id="nav">
      <a href="/" class="nav-link">Inicio</a>
      <a href="/sobre.html" class="nav-link">Sobre</a>
      <a href="/servicos.html" class="nav-link active">Servicos</a>
      <a href="/contato.html" class="nav-link">Contato</a>
      <a href="${WPP_LINK_SITE}" class="nav-cta" target="_blank" rel="noopener" data-cursor="Chamar">WhatsApp</a>
    </nav>
    <button class="menu-toggle" id="menu-toggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<section class="hero noise" id="hero">
  <div class="hero-bg" id="heroBg" aria-hidden="true"></div>
  <div class="hero-grid-bg" aria-hidden="true"></div>
  <div class="hero-inner" id="heroContent">
    <div class="hero-eyebrow" id="heroEyebrow"><span class="dot"></span> ${p.heroEyebrow}</div>
    <h1 id="heroH1">${p.heroH1}</h1>
    <p class="hero-desc" id="heroDesc">${p.heroDesc}</p>
    <div class="hero-actions" id="heroActions">
      <a href="${WPP_LINK_ORC}" class="btn btn-wpp" target="_blank" rel="noopener" data-cursor="Chamar">${WPP_SVG} Solicitar Orcamento</a>
      <a href="/servicos.html" class="btn btn-secondary" data-cursor="Ver">Ver Todos os Servicos ${ARROW_SVG}</a>
    </div>
    <div class="hero-metrics" id="heroMetrics">
      <div class="metric"><div class="metric-num">4.9<span class="accent">/5</span></div><div class="metric-label">Google Reviews</div></div>
      <div class="metric"><div class="metric-num">40<span class="accent">+</span></div><div class="metric-label">Marcas</div></div>
      <div class="metric"><div class="metric-num">15<span class="accent">+</span></div><div class="metric-label">Anos no mercado</div></div>
    </div>
  </div>
</section>

<div class="marquee-strip"><div class="marquee-track">${marqueeDouble}</div></div>

${p.sections}

<section class="section" style="background:var(--bg-secondary);">
  <div class="container">
    <div class="faq-layout">
      <div class="reveal">
        <div class="sec-label">FAQ</div>
        <h2 class="sec-title">Duvidas Frequentes</h2>
        <div class="sec-sub">Nao encontrou sua resposta? Fale com a equipe da Auto Pecas Itatiaia pelo WhatsApp.</div>
        <a href="${WPP_LINK_SITE}" class="btn btn-wpp" target="_blank" rel="noopener" style="margin-top:var(--s-6);" data-cursor="Chamar">${WPP_SVG_SM} Tirar Duvida</a>
      </div>
      <div class="faq-list">
${faqItems}
      </div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Area de Atendimento</div><h2>Atendemos Itatiaia e Toda a Regiao do Sul Fluminense</h2></div>
    <p class="reveal">A <strong>Auto Pecas Itatiaia</strong> atende motoristas, mecanicos e frotas de toda a regiao. Nossa localizacao no Centro de Itatiaia, a poucos metros da <strong>Via Dutra (BR-116)</strong>, facilita o acesso para quem vem de cidades vizinhas:</p>
    <ul class="reveal">
      <li><strong>Itatiaia</strong> &mdash; Centro, Vila Florida, Campo Alegre, Maringa, Maromba, Penedo</li>
      <li><strong>Resende</strong> &mdash; 8 km pela Via Dutra, menos de 10 minutos de carro</li>
      <li><strong>Penedo</strong> &mdash; 12 km pela RJ-163, acesso direto pela estrada da serra</li>
      <li><strong>Porto Real</strong> &mdash; 25 km, acesso rapido pela BR-116</li>
      <li><strong>Quatis</strong> &mdash; 30 km pela Via Dutra</li>
      <li><strong>Barra Mansa</strong> &mdash; 40 km, muitos clientes preferem o atendimento personalizado de Itatiaia</li>
      <li><strong>Volta Redonda</strong> &mdash; 45 km, precos competitivos atraem motoristas da regiao metropolitana</li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Contato</div><h2 class="sec-title">Localizacao e Contato</h2></div>
    <div class="contact-grid" style="margin-top:var(--s-7);">
      <div style="display:flex;flex-direction:column;gap:var(--s-3);">
        <div class="contact-wpp reveal">
          <div class="contact-wpp-label">WhatsApp principal</div>
          <a href="${WPP_LINK_SITE}" class="btn btn-wpp" target="_blank" rel="noopener" style="width:100%;" data-cursor="Chamar">${WPP_SVG} (24) 99309-9190</a>
        </div>
        <div class="contact-info-card reveal"><div class="contact-info-icon">${MAP_SVG}</div><div><div class="contact-info-label">Endereco</div><div class="contact-info-value">Av. dos Expedicionarios, 275 - loja 5 - Centro<br>Itatiaia &mdash; RJ, 27580-216</div></div></div>
        <div class="contact-info-card reveal"><div class="contact-info-icon">${CLOCK_SVG}</div><div><div class="contact-info-label">Horario</div><div class="contact-info-value">Seg&ndash;Sex: 08h&ndash;18h<br>Sabado: 08h&ndash;13h</div></div></div>
        <div class="contact-info-card reveal"><div class="contact-info-icon">${PHONE_SVG}</div><div><div class="contact-info-label">Telefone</div><div class="contact-info-value"><a href="tel:+5524993099190">(24) 99309-9190</a></div></div></div>
      </div>
      <div class="reveal" style="display:flex;flex-direction:column;gap:var(--s-3);">
        <div class="map-wrapper"><iframe src="${MAP_EMBED}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Localizacao Auto Pecas Itatiaia"></iframe></div>
        <a href="${MAP_LINK}" class="map-link" target="_blank" rel="noopener">Abrir no Google Maps ${LINK_SVG}</a>
      </div>
    </div>
  </div>
</section>

<div class="pre-cta">
  <div class="container">
    <div class="pre-cta-inner">
      <div><h2 class="pre-cta-title">Precisa de Pecas Automotivas em Itatiaia?</h2><div class="pre-cta-sub">Orcamento rapido pelo WhatsApp &mdash; (24) 99309-9190</div></div>
      <a href="${WPP_LINK_ORC}" class="btn btn-wpp" target="_blank" rel="noopener" data-cursor="Chamar">${WPP_SVG} Pedir Orcamento</a>
    </div>
  </div>
</div>

<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="logo" style="margin-bottom:var(--s-4);"><div class="logo-mark">AP</div><div class="logo-text"><span class="logo-name">Auto Pecas Itatiaia</span><span class="logo-sub">Itatiaia &middot; RJ</span></div></div>
        <p class="footer-brand-desc">Referencia em autopecas na regiao. Mais de 40 marcas, atendimento especializado para mecanicos, motoristas e frotas.</p>
        <div style="font-family:var(--font-mono);font-size:11px;color:var(--orange);letter-spacing:.06em;">&#11088; 4.9/5 &mdash; 347 AVALIACOES</div>
      </div>
      <div>
        <div class="footer-col-title">Navegacao</div>
        <div class="footer-links">
          <a href="/">Inicio</a>
          <a href="/sobre.html">Sobre Nos</a>
          <a href="/servicos.html">Servicos</a>
          <a href="/contato.html">Contato</a>
          <a href="/troca-de-bateria.html">Troca de Bateria</a>
          <a href="/troca-de-oleo.html">Troca de Oleo</a>
          <a href="/troca-de-filtros.html">Troca de Filtros</a>
          <a href="/troca-de-disco-de-freio.html">Disco de Freio</a>
          <a href="/troca-de-lampadas.html">Lampadas</a>
          <a href="/troca-de-palhetas.html">Palhetas</a>
          <a href="/troca-de-fluido-de-freio.html">Fluido de Freio</a>
          <a href="/troca-de-pastilhas.html">Pastilhas</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Horario</div>
        <div style="display:flex;flex-direction:column;gap:var(--s-2);">
          <div class="footer-hours-row"><span>Segunda a Sexta</span><strong>08h &mdash; 18h</strong></div>
          <div class="footer-hours-row"><span>Sabado</span><strong>08h &mdash; 13h</strong></div>
          <div class="footer-hours-row"><span>Domingo</span><strong>Fechado</strong></div>
        </div>
        <div style="margin-top:var(--s-5);">
          <div class="footer-col-title">Contato</div>
          <div class="footer-links">
            <a href="tel:+5524993099190">(24) 99309-9190</a>
            <a href="${WPP_LINK_SITE}" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div>&copy; 2025 Auto Pecas Itatiaia &mdash; Pecas Automotivas em Itatiaia, RJ</div>
      <div>Av. dos Expedicionarios, 275 - loja 5 - Centro, Itatiaia - RJ | (24) 99309-9190</div>
    </div>
  </div>
</footer>
<script>
/* LOADER */
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const phrase = document.getElementById('loaderPhrase');
  const line = document.getElementById('loaderLine');
  const brand = document.getElementById('loaderBrand');
  const words = '${p.loaderWords}'.split(' ');
  phrase.innerHTML = words.map(w => '<span>' + w + '</span>').join(' ');
  const spans = phrase.querySelectorAll('span');
  requestAnimationFrame(() => line.classList.add('active'));
  spans.forEach((s, i) => { setTimeout(() => s.classList.add('visible'), 300 + i * 280); });
  setTimeout(() => brand.classList.add('visible'), 300 + words.length * 280 + 300);
  setTimeout(() => {
    loader.classList.add('done');
    document.body.style.overflow = '';
    setTimeout(() => { loader.style.display = 'none'; initAnimations(); }, 700);
  }, 300 + words.length * 280 + 1000);
});
const lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);
gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
const header = document.getElementById('header');
window.addEventListener('scroll', () => { header.classList.toggle('scrolled', window.scrollY > 50); }, { passive: true });
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => { menuToggle.classList.toggle('active'); nav.classList.toggle('open'); });
nav.querySelectorAll('a').forEach(link => { link.addEventListener('click', () => { menuToggle.classList.remove('active'); nav.classList.remove('open'); }); });
const cursor = document.getElementById('cursor');
const cursorLabel = document.getElementById('cursorLabel');
let cx = 0, cy = 0, mx = 0, my = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function updateCursor() { cx += (mx - cx) * 0.15; cy += (my - cy) * 0.15; cursor.style.left = cx + 'px'; cursor.style.top = cy + 'px'; cursorLabel.style.left = cx + 'px'; cursorLabel.style.top = (cy + 36) + 'px'; requestAnimationFrame(updateCursor); }
updateCursor();
document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); const label = el.dataset.cursor; if (label) { cursorLabel.textContent = label; cursorLabel.classList.add('visible'); } });
  el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); cursorLabel.classList.remove('visible'); });
});
gsap.registerPlugin(ScrollTrigger);
function initAnimations() {
  const tl = gsap.timeline({ delay: 0.2 });
  tl.to('#heroEyebrow', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
    .to('#heroH1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
    .to('#heroDesc', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
    .to('#heroActions', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2')
    .to('#heroMetrics', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2');
  gsap.to('.highlight::after', { scaleX: 1, duration: 0.6, delay: 1.5, ease: 'power3.out' });
  gsap.to('#heroBg', { y: 150, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.utils.toArray('.reveal').forEach((el, i) => {
    gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }, delay: (i % 4) * 0.08 });
  });
  document.querySelectorAll('.stat-number').forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const suffix = counter.dataset.suffix || '';
    ScrollTrigger.create({ trigger: counter, start: 'top 85%', onEnter: () => {
      gsap.to({ val: 0 }, { val: target, duration: 2, ease: 'power2.out', onUpdate: function() { counter.textContent = Math.round(this.targets()[0].val) + suffix; } });
    }, once: true });
  });
}
const wppFloat = document.getElementById('wpp-float');
const heroEl = document.getElementById('hero');
if (heroEl && wppFloat) {
  const wppObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { wppFloat.classList.toggle('visible', !entry.isIntersecting); }); }, { threshold: 0 });
  wppObserver.observe(heroEl);
}
const stickyCta = document.getElementById('stickyCta');
if (stickyCta && heroEl) {
  const stickyObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { stickyCta.classList.toggle('visible', !entry.isIntersecting); }); }, { threshold: 0, rootMargin: '0px 0px -100px 0px' });
  stickyObserver.observe(heroEl);
}
<\/script>
</body>
</html>`;
}

// Generate all 8 pages
const outputDir = '/Users/jrios/autopecas-itatiaia';
pages.forEach(p => {
  const html = buildPage(p);
  const filePath = path.join(outputDir, `${p.slug}.html`);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Generated: ${filePath} (${(html.length / 1024).toFixed(1)} KB)`);
});

console.log('\nAll 8 pages generated successfully!');
