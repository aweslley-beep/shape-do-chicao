const categories = ['Todos','Masculino','Feminino quadríceps','Feminino glúteo','Feminino posterior','Idosos','Equilíbrio/Parkinson','Funcional','Casa'];
const workouts = [
 {cat:'Masculino', title:'Hipertrofia A - Peito, ombro e tríceps', level:'Intermediário', duration:'55 min', items:[['Supino reto','4x8-12 • descanso 90s'],['Supino inclinado halteres','3x10-12'],['Desenvolvimento sentado','3x8-10'],['Elevação lateral','4x12-15'],['Tríceps corda','3x12-15'],['Prancha','3x30-45s']], tip:'Controle o movimento e aumente carga apenas mantendo execução limpa.'},
 {cat:'Masculino', title:'Hipertrofia B - Costas e bíceps', level:'Intermediário', duration:'55 min', items:[['Puxada frente','4x8-12'],['Remada baixa','4x10-12'],['Remada unilateral','3x10 cada lado'],['Face pull','3x15'],['Rosca direta','3x10-12'],['Rosca martelo','3x12']], tip:'Puxe com as costas, evitando roubar com lombar.'},
 {cat:'Feminino quadríceps', title:'Feminino - Quadríceps forte', level:'Intermediário', duration:'50 min', items:[['Agachamento livre ou goblet','4x8-12'],['Leg press pés baixos','4x10-12'],['Cadeira extensora','4x12-15'],['Afundo búlgaro','3x10 cada perna'],['Passada caminhando','3x12 cada perna'],['Panturrilha em pé','4x15']], tip:'Priorize amplitude segura e joelhos alinhados com os pés.'},
 {cat:'Feminino quadríceps', title:'Feminino - Quadríceps iniciante', level:'Iniciante', duration:'38 min', items:[['Agachamento no banco','3x12'],['Leg press leve','3x12'],['Extensora leve','3x15'],['Step baixo','3x10 cada perna'],['Ponte de glúteo','3x15'],['Alongamento leve','5 min']], tip:'Cargas leves, foco em aprender o padrão do movimento.'},
 {cat:'Feminino glúteo', title:'Feminino - Glúteos ênfase máxima', level:'Intermediário', duration:'55 min', items:[['Elevação pélvica','5x8-12'],['Agachamento sumô','4x10-12'],['Abdução de quadril','4x15-20'],['Cadeira abdutora','4x15-20'],['Coice na polia','3x12 cada perna'],['Stiff leve/moderado','3x10']], tip:'Faça pausa de 1 segundo no pico da contração da elevação pélvica.'},
 {cat:'Feminino glúteo', title:'Feminino - Glúteo em casa', level:'Iniciante', duration:'30 min', items:[['Ponte de glúteo','4x15'],['Abdução deitada','3x15 cada lado'],['Agachamento sumô sem carga','3x15'],['Coice quatro apoios','3x15 cada perna'],['Elevação pélvica unilateral','3x10 cada perna'],['Caminhada lateral com elástico','3x12']], tip:'Pode usar elástico ou mochila leve.'},
 {cat:'Feminino posterior', title:'Feminino - Posterior de coxa', level:'Intermediário', duration:'50 min', items:[['Stiff com halteres','4x8-12'],['Mesa flexora','4x10-12'],['Cadeira flexora','3x12-15'],['Levantamento terra romeno','3x8-10'],['Bom dia com bastão/barra leve','3x12'],['Panturrilha sentada','4x15']], tip:'Mantenha coluna neutra e sinta alongar posterior sem dor lombar.'},
 {cat:'Idosos', title:'Idosos - Funcional seguro', level:'Baixa carga', duration:'25-35 min', items:[['Sentar e levantar da cadeira','3x8-12'],['Remada com elástico','3x12'],['Elevação de calcanhar segurando apoio','3x12'],['Caminhada estacionária','5x1 min'],['Press de parede','3x10'],['Mobilidade de tornozelo e ombro','5 min']], tip:'Sempre com apoio próximo. Parar em caso de tontura, dor no peito ou falta de ar intensa.'},
 {cat:'Idosos', title:'Idosos - Mobilidade e força leve', level:'Baixa carga', duration:'30 min', items:[['Marcha sentada','3x45s'],['Extensão de joelho sentado','3x12 cada perna'],['Rosca bíceps com garrafa','3x12'],['Levantamento lateral de braços','3x10'],['Caminhada leve','10 min'],['Respiração e alongamento','5 min']], tip:'Ideal para dias de retomada ou condicionamento inicial.'},
 {cat:'Equilíbrio/Parkinson', title:'Equilíbrio/Parkinson - Base segura', level:'Supervisionado', duration:'20-30 min', items:[['Transferência de peso lateral com apoio','3x30s'],['Marcha com marcações no chão','5x1 min'],['Sentar e levantar com apoio','3x8'],['Passo à frente e volta','3x8 cada perna'],['Alcance de braços sentado','3x10'],['Alongamento de panturrilha','3x20s']], tip:'Recomendado acompanhamento de fisioterapeuta/educador físico. Evitar exercícios sem apoio se houver risco de queda.'},
 {cat:'Equilíbrio/Parkinson', title:'Equilíbrio reduzido - Funcional com apoio', level:'Baixa carga', duration:'25 min', items:[['Caminhada ao lado de parede/corrimão','6x1 min'],['Mini agachamento segurando apoio','3x10'],['Elevação de joelho com apoio','3x10 cada perna'],['Passo lateral com apoio','3x8 cada lado'],['Remada elástica sentada','3x12'],['Respiração diafragmática','3 min']], tip:'Ambiente sem tapetes soltos, boa iluminação e calçado firme.'},
 {cat:'Funcional', title:'Funcional emagrecimento leve', level:'Iniciante', duration:'28 min', items:[['Polichinelo adaptado','4x40s'],['Agachamento no banco','4x12'],['Remada com elástico','4x12'],['Prancha inclinada','3x30s'],['Step baixo','3x10 cada perna'],['Caminhada acelerada','8 min']], tip:'Baixo impacto e pausas quando necessário.'},
 {cat:'Casa', title:'Treino rápido em casa', level:'Todos', duration:'20 min', items:[['Agachamento livre','3x15'],['Flexão na parede ou joelhos','3x10'],['Ponte de glúteo','3x15'],['Prancha','3x20-40s'],['Abdominal dead bug','3x10 cada lado'],['Alongamento','4 min']], tip:'Sem equipamento. Ideal para manter constância.'}
];
const filters = document.getElementById('filters');
const grid = document.getElementById('workoutGrid');
let current = 'Todos';
function renderFilters(){filters.innerHTML = categories.map(c=>`<button class="chip ${c===current?'active':''}" onclick="setFilter('${c}')">${c}</button>`).join('')}
function setFilter(c){current=c;renderFilters();renderCards()}
function renderCards(){const list=current==='Todos'?workouts:workouts.filter(w=>w.cat===current);grid.innerHTML=list.map(w=>`<article class="card"><span class="tag">${w.cat}</span><h3>${w.title}</h3><div class="meta">${w.level} • ${w.duration}</div>${w.items.map(i=>`<div class="exercise"><b>${i[0]}</b><span>${i[1]}</span></div>`).join('')}<div class="tips"><b>Orientação:</b> ${w.tip}</div></article>`).join('')}
renderFilters();renderCards();

const input=document.getElementById('photoInput'), preview=document.getElementById('preview'), analysis=document.getElementById('analysis'), canvas=document.getElementById('photoCanvas');
let imageStats=null;

function classifyImage(img){
  const ctx=canvas.getContext('2d');
  const maxW=420;
  const ratio=img.naturalWidth/img.naturalHeight;
  canvas.width=maxW;
  canvas.height=Math.round(maxW/ratio);
  ctx.drawImage(img,0,0,canvas.width,canvas.height);
  const data=ctx.getImageData(0,0,canvas.width,canvas.height).data;
  let bright=0, contrast=0, skinLike=0, total=data.length/4;
  const samples=[];
  for(let i=0;i<data.length;i+=16){
    const r=data[i], g=data[i+1], b=data[i+2];
    const lum=(0.299*r+0.587*g+0.114*b);
    bright+=lum;
    samples.push(lum);
    if(r>80 && g>45 && b>25 && r>g && g>b && Math.abs(r-g)>12){skinLike++}
  }
  bright=bright/(data.length/16);
  for(const v of samples){contrast+=Math.abs(v-bright)}
  contrast=contrast/samples.length;
  const skinRatio=Math.min(100, Math.round((skinLike/samples.length)*100));
  const quality = bright<45?'escura':bright>215?'muito clara':contrast<18?'baixo contraste':'boa';
  return {largura:img.naturalWidth, altura:img.naturalHeight, brilho:Math.round(bright), contraste:Math.round(contrast), pele:skinRatio, qualidade:quality};
}

input.addEventListener('change', e=>{
  const file=e.target.files?.[0];
  if(!file)return;
  const url=URL.createObjectURL(file);
  preview.src=url;
  preview.hidden=false;
  preview.onload=()=>{
    imageStats=classifyImage(preview);
    analysis.style.display='block';
    analysis.innerHTML=`<b>Foto carregada e analisada localmente.</b><div class="metric-grid"><div class="metric"><b>Qualidade</b>${imageStats.qualidade}</div><div class="metric"><b>Resolução</b>${imageStats.largura} x ${imageStats.altura}</div><div class="metric"><b>Leitura corporal</b>Foto apta para sugestão inicial</div></div><small>A imagem fica no aparelho. A análise não mede gordura corporal nem substitui avaliação profissional.</small>`;
  };
});

function chooseWorkout(goal, profile){
  if(profile==='idoso') return workouts.find(w=>w.title.includes('Idosos - Funcional'));
  if(profile==='equilibrio') return workouts.find(w=>w.title.includes('Equilíbrio/Parkinson'));
  if(goal==='gluteo') return workouts.find(w=>w.cat==='Feminino glúteo');
  if(goal==='quadriceps') return workouts.find(w=>w.cat==='Feminino quadríceps');
  if(goal==='posterior') return workouts.find(w=>w.cat==='Feminino posterior');
  if(goal==='massa') return workouts.find(w=>w.title.includes('Hipertrofia A'));
  if(goal==='saude') return workouts.find(w=>w.cat==='Funcional');
  return workouts.find(w=>w.title.includes('Funcional emagrecimento'));
}

function generatePhotoGuidance(stats, goal, profile){
  let obs=[];
  if(!stats) obs.push('Você ainda não enviou foto. A sugestão abaixo usa apenas objetivo e perfil.');
  else {
    if(stats.qualidade==='escura') obs.push('A foto está escura. Para acompanhar evolução, tire outra com luz frontal.');
    if(stats.qualidade==='muito clara') obs.push('A foto está muito clara. Evite luz estourada para comparar evolução.');
    if(stats.qualidade==='baixo contraste') obs.push('Use fundo neutro e roupa ajustada para melhor comparação visual mensal.');
    if(stats.qualidade==='boa') obs.push('A foto está adequada para registro de evolução mensal.');
  }
  if(profile==='idoso') obs.push('Use cargas leves, apoio próximo e progressão lenta.');
  if(profile==='equilibrio') obs.push('Priorize exercícios com apoio, ambiente seguro e supervisão profissional.');
  if(goal==='massa') obs.push('Estratégia: progressão de carga, boa execução e descanso entre grupos musculares.');
  if(goal==='emagrecimento') obs.push('Estratégia: treino funcional leve + caminhada + regularidade alimentar.');
  return obs;
}

document.getElementById('analyzeBtn').addEventListener('click',()=>{
  const goal=document.getElementById('goal').value;
  const profile=document.getElementById('profile').value;
  const selected=chooseWorkout(goal, profile);
  const guidance=generatePhotoGuidance(imageStats, goal, profile);
  analysis.style.display='block';
  analysis.innerHTML=`
    <b>Resultado da análise do shape</b>
    <div class="metric-grid">
      <div class="metric"><b>Foto</b>${imageStats?imageStats.qualidade:'não enviada'}</div>
      <div class="metric"><b>Objetivo</b>${document.getElementById('goal').selectedOptions[0].text}</div>
      <div class="metric"><b>Perfil</b>${document.getElementById('profile').selectedOptions[0].text}</div>
    </div>
    <b>Treino sugerido:</b> ${selected.title}<br>
    <b>Duração:</b> ${selected.duration} • <b>Nível:</b> ${selected.level}
    <div style="margin-top:10px">${selected.items.map(i=>`<div class="exercise"><b>${i[0]}</b><span>${i[1]}</span></div>`).join('')}</div>
    <div class="tips"><b>Orientação:</b> ${selected.tip}</div>
    <div class="warning"><b>Leitura da foto:</b> ${guidance.join(' ')}</div>
    <small>Esta função é uma análise educativa local, não diagnóstico médico ou avaliação estética precisa. Para IA avançada real, conecte uma API no backend e mantenha consentimento/política de privacidade.</small>
  `;
});
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js')}
