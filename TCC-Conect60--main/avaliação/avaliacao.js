let nivelSelecionado = null;
let notaNumerica = 0;
let tagSelecionada = null;

const dicionarioMotivos = {
    'NAO_GOSTEI': ['Atrasou a sessão', 'Exercício muito difícil', 'Comunicação ruim'],
    'NEUTRO': ['Atendimento normal', 'Exercício cansativo', 'Sem observações'],
    'GOSTEI': ['Muito atencioso', 'Explica bem', 'Pontual'],
    'OTIMO': ['Excelente profissional', 'Muito paciente', 'Pontual', 'Recomendo']
};

function selecionarNivel(classificacao, nota, elemento) {
    nivelSelecionado = classificacao;
    notaNumerica = nota;
    tagSelecionada = null;

    document.querySelectorAll('.btn-nivel').forEach(b => b.classList.remove('selected'));
    elemento.classList.add('selected');

    // Carregar Tags Dinâmicas
    const containerTags = document.getElementById('lista-tags-dinamicas');
    containerTags.innerHTML = '';
    
    dicionarioMotivos[classificacao].forEach(texto => {
        const btnTag = document.createElement('button');
        btnTag.className = 'btn-tag-item';
        btnTag.innerText = texto;
        btnTag.onclick = () => {
            document.querySelectorAll('.btn-tag-item').forEach(t => t.classList.remove('active'));
            btnTag.classList.add('active');
            tagSelecionada = texto;
        };
        containerTags.appendChild(btnTag);
    });

    document.getElementById('box-motivos-rapidos').classList.remove('hidden');
    document.getElementById('btn-confirmar-avaliacao').disabled = false;
}

function ouvirPerguntaAba() {
    const texto = document.getElementById('texto-pergunta').innerText;
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-PT';
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
    }
}

async function submeterAvaliacaoAba() {
    if (!nivelSelecionado) return;

    // Dados de exemplo do atendimento atual (numa aplicação real viriam da sessão/URL)
    const payload = {
        atendimento_id: 101,
        idoso_id: 1,
        profissional_id: 10,
        classificacao: nivelSelecionado,
        nota_numerica: notaNumerica,
        tag_motivo: tagSelecionada
    };

    try {
        const response = await fetch('http://localhost:3000/api/avaliacoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
             },
    body: JSON.stringify(payload)
});

        const resultado = await response.json();

        if (response.ok) {
            alert('Obrigado! A sua avaliação foi guardada com sucesso.');
            fecharAbaAvaliacao();
        } else {
            alert('Ocorreu um erro: ' + resultado.erro);
        }
    } catch (error) {
        console.error('Erro na ligação com o servidor:', error);
        alert('Não foi possível ligar ao servidor.');
    }
}