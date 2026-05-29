const $ = (id) => document.getElementById(id);
const stateKey = 'shapeDoChicaoPerfilV2';
const todayKey = 'shapeDoChicaoChecklist_' + new Date().toISOString().slice(0,10);

const videos = {
  agachamento:'https://www.youtube.com/results?search_query=agachamento+execu%C3%A7%C3%A3o+correta',
  supino:'https://www.youtube.com/results?search_query=supino+reto+execu%C3%A7%C3%A3o+correta',
  remada:'https://www.youtube.com/results?search_query=remada+curvada+execu%C3%A7%C3%A3o+correta',
  desenvolvimento:'https://www.youtube.com/results?search_query=desenvolvimento+ombro+execu%C3%A7%C3%A3o+correta',
  terra:'https://www.youtube.com/results?search_query=levantamento+terra+execu%C3%A7%C3%A3o+correta',
  puxada:'https://www.youtube.com/results?search_query=puxada+frente+execu%C3%A7%C3%A3o+correta',
  leg:'https://www.youtube.com/results?search_query=leg+press+execu%C3%A7%C3%A3o+correta',
  rosca:'https://www.youtube.com/results?search_query=rosca+direta+execu%C3%A7%C3%A3o+correta',
  triceps:'https://www.youtube.com/results?search_query=tr%C3%ADceps+corda+execu%C3%A7%C3%A3o+correta',
  prancha:'https://www.youtube.com/results?search_query=prancha+abdominal+execu%C3%A7%C3%A3o+correta',
  cardio:'https://www.youtube.com/results?search_query=cardio+hiit+iniciante+academia'
};

const planos = {
  emagrecimento: {
    resumo:'Foco em reduzir gordura, preservar massa muscular e criar rotina sustentável.',
    calorias:-450, proteina:1.8, cardio:'20 a 35 min após o treino ou em horário separado.',
    dias:[
      ['Segunda - Pernas + Cardio', [['Agachamento livre ou guiado','4x10-12','agachamento'],['Leg press','4x12','leg'],['Cadeira extensora','3x15','leg'],['Mesa flexora','3x15','leg'],['Prancha abdominal','3x40s','prancha'],['Cardio moderado','25 min','cardio']]],
      ['Terça - Superiores', [['Supino reto','4x10','supino'],['Puxada frente','4x10-12','puxada'],['Remada baixa','3x12','remada'],['Desenvolvimento ombro','3x12','desenvolvimento'],['Tríceps corda','3x12','triceps'],['Rosca direta','3x12','rosca']]],
      ['Quarta - Cardio + Abdômen', [['Caminhada inclinada ou bike','35 min','cardio'],['Prancha','4x40s','prancha'],['Abdominal infra','3x15','prancha']]],
      ['Quinta - Pernas e glúteos', [['Leg press','4x12','leg'],['Agachamento goblet','3x12','agachamento'],['Stiff','3x12','terra'],['Panturrilha','4x15','leg'],['Cardio leve','20 min','cardio']]],
      ['Sexta - Full body', [['Supino reto','3x10','supino'],['Remada curvada','3x10','remada'],['Agachamento','3x10','agachamento'],['Desenvolvimento','3x12','desenvolvimento'],['Cardio HIIT leve','12 a 15 min','cardio']]]
    ]
  },
  hipertrofia: {
    resumo:'Foco em ganho de massa muscular, progressão de cargas, boa alimentação e recuperação.',
    calorias:350, proteina:2.0, cardio:'10 a 15 min leve, 2 a 3 vezes por semana, sem exagero.',
    dias:[
      ['Segunda - Peito + tríceps', [['Supino reto','4x6-10','supino'],['Supino inclinado','3x8-10','supino'],['Crucifixo','3x12','supino'],['Tríceps corda','4x10-12','triceps'],['Tríceps testa','3x10','triceps']]],
      ['Terça - Costas + bíceps', [['Puxada frente','4x8-10','puxada'],['Remada curvada','4x8-10','remada'],['Remada baixa','3x10-12','remada'],['Rosca direta','4x10','rosca'],['Rosca martelo','3x12','rosca']]],
      ['Quarta - Pernas completas', [['Agachamento','4x6-10','agachamento'],['Leg press','4x10','leg'],['Cadeira extensora','3x12','leg'],['Mesa flexora','3x12','leg'],['Panturrilha','5x12-15','leg']]],
      ['Quinta - Ombros + abdômen', [['Desenvolvimento ombro','4x8-10','desenvolvimento'],['Elevação lateral','4x12','desenvolvimento'],['Face pull','3x12','remada'],['Prancha','4x45s','prancha']]],
      ['Sexta - Reforço muscular', [['Levantamento terra','3x6-8','terra'],['Supino reto','3x8','supino'],['Puxada frente','3x10','puxada'],['Leg press','3x10','leg'],['Rosca + tríceps','3x12','rosca']]]
    ]
  },
  manutencao: {
    resumo:'Foco em manter composição corporal, saúde, força e regularidade.',
    calorias:0, proteina:1.7, cardio:'20 min, 3 vezes por semana.',
    dias:[
      ['Segunda - Full body A', [['Agachamento','3x10','agachamento'],['Supino reto','3x10','supino'],['Puxada frente','3x12','puxada'],['Prancha','3x40s','prancha']]],
      ['Terça - Cardio + mobilidade', [['Cardio moderado','30 min','cardio'],['Alongamento geral','10 min','cardio']]],
      ['Quarta - Full body B', [['Leg press','3x12','leg'],['Remada baixa','3x12','remada'],['Desenvolvimento','3x10','desenvolvimento'],['Rosca direta','3x12','rosca']]],
      ['Quinta - Descanso ativo', [['Caminhada leve','30 min','cardio'],['Abdominal leve','3x15','prancha']]],
      ['Sexta - Full body C', [['Levantamento terra leve','3x8','terra'],['Supino inclinado','3x10','supino'],['Puxada frente','3x10','puxada'],['Tríceps corda','3x12','triceps']]]
    ]
  }
};

function calcular(perfil){
  const h = perfil.altura/100;
  const imc = perfil.peso/(h*h);
  const pesoMin = 18.5*h*h;
  const pesoMax = 24.9*h*h;
  const agua = perfil.peso*35/1000;
  const tmb = 10*perfil.peso + 6.25*perfil.altura - 5*perfil.idade + 5;
  const gasto = tmb*1.55;
  const cfg = planos[perfil.objetivo];
  const calorias = Math.round(gasto + cfg.calorias);
  const proteina = Math.round(perfil.peso*cfg.proteina);
  let faixa = imc < 18.5 ? 'Abaixo do peso' : imc < 25 ? 'Peso adequado' : imc < 30 ? 'Sobrepeso' : 'Obesidade';
  return {imc, pesoMin, pesoMax, agua, calorias, proteina, faixa};
}

function salvarPerfil(){
  const perfil = {
    nome:$('nome').value.trim() || 'Atleta',
    idade:Number($('idade').value), peso:Number($('peso').value), altura:Number($('altura').value),
    objetivo:$('objetivo').value, nivel:$('nivel').value
  };
  if(!perfil.idade || !perfil.peso || !perfil.altura){ alert('Preencha idade, peso e altura para gerar o plano.'); return; }
  localStorage.setItem(stateKey, JSON.stringify(perfil));
  render(perfil);
}

function render(perfil){
  const calc = calcular(perfil), plano = planos[perfil.objetivo];
  $('resultado').classList.remove('hidden');
  $('saudacao').innerText = `Olá, ${perfil.nome}!`;
  $('resumoObjetivo').innerText = `${plano.resumo} Nível selecionado: ${perfil.nivel}.`;
  $('metricas').innerHTML = [
    ['IMC', calc.imc.toFixed(1), calc.faixa],
    ['Peso ideal aprox.', `${calc.pesoMin.toFixed(1)} a ${calc.pesoMax.toFixed(1)} kg`, 'Faixa saudável pelo IMC'],
    ['Água diária', `${calc.agua.toFixed(1)} L`, 'Estimativa: 35 ml por kg'],
    ['Calorias/dia', `${calc.calorias} kcal`, 'Estimativa inicial ajustável'],
    ['Proteína/dia', `${calc.proteina} g`, 'Meta para preservar/ganhar massa'],
    ['Sono ideal', '7 a 9 h', 'Recuperação e controle de apetite']
  ].map(m=>`<div class="metric"><span>${m[0]}</span><strong>${m[1]}</strong><span>${m[2]}</span></div>`).join('');
  $('treino').innerHTML = plano.dias.map(([dia,exs])=>`<div class="day"><h3>${dia}</h3>${exs.map(([nome,series,key])=>`<div class="exercise"><div><b>${nome}</b><br><span class="pill">${series}</span></div><a target="_blank" href="${videos[key]}">ver vídeo</a></div>`).join('')}<p><b>Dica:</b> execute com controle, sem sacrificar a postura. Aumente carga apenas quando completar as repetições com segurança.</p></div>`).join('');
  $('dieta').innerHTML = dietaHtml(perfil, calc, plano);
  $('dicas').innerHTML = dicasHtml(perfil, calc, plano);
  $('evolucao').innerHTML = evolucaoHtml();
  bindProgress(); loadChecks(); updateScore(); window.scrollTo({top:0,behavior:'smooth'});
}

function dietaHtml(perfil, calc, plano){
  const objetivo = perfil.objetivo;
  const foco = objetivo==='emagrecimento'?'déficit calórico, proteína alta e alimentos com volume':objetivo==='hipertrofia'?'superávit calórico controlado, carboidrato em torno do treino e progressão':'equilíbrio, constância e controle de porções';
  return `<p><b>Foco nutricional:</b> ${foco}. Meta inicial: <b>${calc.calorias} kcal</b> e <b>${calc.proteina} g de proteína</b>.</p>
  <div class="recipe"><h3>Prato base</h3><p>1 porção de proteína magra + arroz/macaxeira/batata + feijão + salada + legumes. Ajuste a quantidade do carboidrato conforme o objetivo.</p></div>
  <div class="recipe"><h3>Receita rápida 1: frango cremoso fit</h3><p>Frango desfiado, iogurte natural, milho, cenoura, cheiro-verde e temperos. Serve para marmita e sanduíche.</p></div>
  <div class="recipe"><h3>Receita rápida 2: omelete reforçado</h3><p>Ovos, queijo ou frango, tomate, cebola e aveia. Boa opção para café da manhã ou jantar.</p></div>
  <div class="recipe"><h3>Receita rápida 3: vitamina estratégica</h3><p>Banana, aveia, leite ou iogurte e pasta de amendoim. Para emagrecimento, reduza pasta/aveia; para hipertrofia, aumente.</p></div>
  <p><b>Regra simples:</b> pese refeições por 2 semanas para aprender porções. Depois você consegue seguir com mais liberdade.</p>`;
}
function dicasHtml(perfil, calc, plano){
  return `<div class="tip"><h3>Cardio</h3><p>${plano.cardio}</p></div>
  <div class="tip"><h3>Autoestima e estética</h3><p>Corte de cabelo alinhado, barba feita, perfume leve, roupas com bom caimento e postura melhoram a percepção corporal enquanto o shape evolui.</p></div>
  <div class="tip"><h3> Sono</h3><p>Priorize 7 a 9 horas. Pouco sono prejudica recuperação, aumenta fome e reduz desempenho.</p></div>
  <div class="tip"><h3>Quando ajustar</h3><p>Se o peso não mudar por 14 dias, ajuste 150 a 250 kcal. No emagrecimento, reduza; na hipertrofia, aumente. Mantenha proteína alta.</p></div>
  <div class="tip"><h3>Segurança</h3><p>O app é uma orientação geral. Em caso de dor, doença, lesão, hipertensão, diabetes ou restrição alimentar, procure profissional de saúde.</p></div>`;
}
function evolucaoHtml(){
  const hist = JSON.parse(localStorage.getItem('shapeDoChicaoEvolucao')||'[]');
  return `<h3>Registrar evolução</h3><div class="progress-form"><input id="evPeso" type="number" step="0.1" placeholder="Peso kg"><input id="evCintura" type="number" step="0.1" placeholder="Cintura cm"><input id="evObs" placeholder="Observação"><button id="salvarEvolucao">Salvar</button></div>
  <table class="table"><thead><tr><th>Data</th><th>Peso</th><th>Cintura</th><th>Obs.</th></tr></thead><tbody>${hist.map(r=>`<tr><td>${r.data}</td><td>${r.peso||'-'}</td><td>${r.cintura||'-'}</td><td>${r.obs||'-'}</td></tr>`).join('')}</tbody></table>`;
}
function bindProgress(){
  const btn = $('salvarEvolucao'); if(!btn) return;
  btn.onclick = () => { const hist = JSON.parse(localStorage.getItem('shapeDoChicaoEvolucao')||'[]'); hist.unshift({data:new Date().toLocaleDateString('pt-BR'), peso:$('evPeso').value, cintura:$('evCintura').value, obs:$('evObs').value}); localStorage.setItem('shapeDoChicaoEvolucao', JSON.stringify(hist)); render(JSON.parse(localStorage.getItem(stateKey))); };
}
function updateScore(){
  let score = 0; document.querySelectorAll('.check').forEach(c=>{ if(c.checked) score += Number(c.dataset.pontos); }); $('dailyScore').innerText = score; saveChecks();
}
function saveChecks(){ const data = [...document.querySelectorAll('.check')].map(c=>c.checked); localStorage.setItem(todayKey, JSON.stringify(data)); }
function loadChecks(){ const data = JSON.parse(localStorage.getItem(todayKey)||'[]'); document.querySelectorAll('.check').forEach((c,i)=>{c.checked=!!data[i]; c.onchange=updateScore;}); }

document.querySelectorAll('.tab').forEach(btn=>btn.onclick=()=>{ document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); document.querySelectorAll('.tab-content').forEach(c=>c.classList.add('hidden')); $(btn.dataset.tab).classList.remove('hidden'); });
$('gerarPlano').onclick = salvarPerfil;
$('limparDados').onclick = () => { if(confirm('Limpar perfil e evolução deste aparelho?')){ localStorage.clear(); location.reload(); } };
const saved = JSON.parse(localStorage.getItem(stateKey)||'null');
if(saved){ ['nome','idade','peso','altura','objetivo','nivel'].forEach(k=>$(k).value=saved[k]); render(saved); }
if('serviceWorker' in navigator){ navigator.serviceWorker.register('./sw.js').catch(()=>{}); }
