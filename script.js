// LETICIA
// modo escuro
document.querySelectorAll("#btn-dark-mode, #btn-dark-mode-mobile").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

// GABRIEL ALVES
// alto constraste
const body = document.body;

const contrastButtonDesktop = document.getElementById("btn-contrast-desktop");
const contrastButtonMobile = document.getElementById("btn-contrast-mobile");

const toggleContrast = () => {
    body.classList.toggle("alto-contraste");
};

contrastButtonDesktop?.addEventListener("click", toggleContrast);
contrastButtonMobile?.addEventListener("click", toggleContrast);

// LETICIA
  function iniciarContador() {
    // data do evento: 21 de setembro de 2025 às 00:00
    const dataEvento = new Date("Sep 21, 2025 00:00:00").getTime();
    const elemento = document.querySelector(".contador");

    const timer = setInterval(() => {
      const agora = new Date().getTime();
      const diferenca = dataEvento - agora;

      if (diferenca <= 0) {
        clearInterval(timer);
        elemento.textContent = "O AstroFest já começou! 🚀";
        return;
      }

      // cálculo de dias, horas, minutos e segundos
      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

      elemento.textContent = `Faltam ${dias}d ${horas}h ${minutos}m ${segundos}s para o AstroFest`;
    }, 1000);
  }

  iniciarContador();

// carrossel
let index = 0;
  const slides = document.querySelectorAll(".carrossel-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  function showSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
      if (i === n) {
        slide.classList.add("active");
        dots[i].classList.add("active");
      }
    });
  }

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
    });
  });

  showSlide(index);

// LETICIA
// seção de cadastro
  const modal = document.getElementById("modal-cadastro");
  const btn = document.querySelector(".btn-cadastrar");
  const span = document.querySelector(".fechar");

  // abrir modal
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  // fechar modal ao clicar no X
  span.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  });

  // fechar modal ao clicar fora dela
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });

// MARCO ROCHA 
// confirmação do cadastro
  document.querySelector(".form-cadastro").addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Cadastro feito com sucesso.");
});

//ORGANIZADOR : MÁRIO
// base de dados simulada
let participantes = [
  { id: 1, nome: "Participante A", email: "email.a@server.com" },
  { id: 2, nome: "Participante B", email: "email.b@server.com" },
  { id: 3, nome: "Participante C", email: "email.c@server.com" },
  { id: 4, nome: "Participante D", email: "email.d@server.com" },
  { id: 5, nome: "Participante E", email: "email.e@server.com" },
  { id: 6, nome: "Participante F", email: "email.f@server.com" }
];

// variáveis de controle
let participantesFiltrados = [...participantes];
let paginaAtual = 1;
const itensPorPagina = 3;

// DOM
const inputBusca = document.querySelector('.busca-participantes input');
const botaoBuscar = document.querySelector('.botao-buscar');
const tabelaCorpo = document.querySelector('.tabela-participantes tbody');
const paginacao = document.querySelector('.paginacao');

// renderizar tabela
function renderizarTabela() {
  const inicio = (paginaAtual - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const participantesPagina = participantesFiltrados.slice(inicio, fim);

  tabelaCorpo.innerHTML = '';

  if (participantesPagina.length === 0) {
    tabelaCorpo.innerHTML = `
      <tr>
        <td colspan="3" style="text-align: center; padding: 20px; color: #666;">
          Nenhum participante encontrado
        </td>
      </tr>
    `;
    return;
  }

  participantesPagina.forEach(participante => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
      <td>${participante.nome}</td>
      <td>${participante.email}</td>
      <td>
        <button class="botao-excluir" data-id="${participante.id}">
          Excluir
        </button>
      </td>
    `;
    tabelaCorpo.appendChild(linha);
  });

  //add event listeners aos botões de excluir
  document.querySelectorAll('.botao-excluir').forEach(botao => {
    botao.addEventListener('click', excluirParticipante);
  });
}

//renderizar a paginação
function renderizarPaginacao() {
  const totalPaginas = Math.ceil(participantesFiltrados.length / itensPorPagina);
  
  if (totalPaginas <= 1) {
    paginacao.style.display = 'none';
    return;
  }

  paginacao.style.display = 'flex';
  paginacao.innerHTML = '';

  //botão página 1
  const botaoPrimeira = document.createElement('a');
  botaoPrimeira.href = '#';
  botaoPrimeira.innerHTML = '&lt;&lt;';
  botaoPrimeira.addEventListener('click', (e) => {
    e.preventDefault();
    if (paginaAtual > 1) {
      paginaAtual = 1;
      atualizarExibicao();
    }
  });
  paginacao.appendChild(botaoPrimeira);

  //botão página anterior
  const botaoAnterior = document.createElement('a');
  botaoAnterior.href = '#';
  botaoAnterior.innerHTML = '&lt;';
  botaoAnterior.addEventListener('click', (e) => {
    e.preventDefault();
    if (paginaAtual > 1) {
      paginaAtual--;
      atualizarExibicao();
    }
  });
  paginacao.appendChild(botaoAnterior);

  //numero da página atual
  const botaoPagina = document.createElement('a');
  botaoPagina.href = '#';
  botaoPagina.textContent = paginaAtual;
  botaoPagina.classList.add('ativo');
  paginacao.appendChild(botaoPagina);

  //botão próxima página
  const botaoProximo = document.createElement('a');
  botaoProximo.href = '#';
  botaoProximo.innerHTML = '&gt;';
  botaoProximo.addEventListener('click', (e) => {
    e.preventDefault();
    if (paginaAtual < totalPaginas) {
      paginaAtual++;
      atualizarExibicao();
    }
  });
  paginacao.appendChild(botaoProximo);

  //botão última página
  const botaoUltima = document.createElement('a');
  botaoUltima.href = '#';
  botaoUltima.innerHTML = '&gt;&gt;';
  botaoUltima.addEventListener('click', (e) => {
    e.preventDefault();
    if (paginaAtual < totalPaginas) {
      paginaAtual = totalPaginas;
      atualizarExibicao();
    }
  });
  paginacao.appendChild(botaoUltima);
}

//buscar participantes
function buscarParticipantes() {
  const termo = inputBusca.value.toLowerCase().trim();
  
  if (termo === '') {
    participantesFiltrados = [...participantes];
  } else {
    participantesFiltrados = participantes.filter(participante => 
      participante.nome.toLowerCase().includes(termo) || 
      participante.email.toLowerCase().includes(termo)
    );
  }
  
  paginaAtual = 1;
  atualizarExibicao();
}

//excluir participante
function excluirParticipante(event) {
  const id = parseInt(event.target.dataset.id);
  
  if (confirm('Tem certeza que deseja excluir este participante?')) {
    participantes = participantes.filter(p => p.id !== id);
    participantesFiltrados = participantesFiltrados.filter(p => p.id !== id);
    
    const totalPaginas = Math.ceil(participantesFiltrados.length / itensPorPagina);
    if (paginaAtual > totalPaginas && totalPaginas > 0) {
      paginaAtual = totalPaginas;
    }
    
    atualizarExibicao();
    mostrarMensagem('Participante excluído com sucesso!', 'sucesso');
  }
}

//mostrar mensagens
function mostrarMensagem(texto, tipo) {
  const mensagemAnterior = document.querySelector('.mensagem-temporaria');
  if (mensagemAnterior) {
    mensagemAnterior.remove();
  }

  const mensagem = document.createElement('div');
  mensagem.className = 'mensagem-temporaria';
  mensagem.textContent = texto;
  mensagem.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    background: ${tipo === 'sucesso' ? '#088478' : '#e60160'};
    color: white;
    border-radius: 8px;
    font-weight: bold;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    animation: slideIn 0.3s ease;
  `;

  if (!document.querySelector('#mensagem-styles')) {
    const styles = document.createElement('style');
    styles.id = 'mensagem-styles';
    styles.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(styles);
  }

  document.body.appendChild(mensagem);

  setTimeout(() => {
    if (mensagem.parentNode) {
      mensagem.remove();
    }
  }, 3000);
}

//atualizar toda a exibição
function atualizarExibicao() {
  renderizarTabela();
  renderizarPaginacao();
}

//event listeners
botaoBuscar.addEventListener('click', buscarParticipantes);
inputBusca.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    buscarParticipantes();
  }
});
inputBusca.addEventListener('input', buscarParticipantes);

//inicializar
document.addEventListener('DOMContentLoaded', () => {
  atualizarExibicao();
});

// LETICIA
// seção do menu mobile
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const menuMobile = document.getElementById("menu-mobile");

// abre menu
openMenu.addEventListener("click", () => {
  menuMobile.style.display = "flex";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  document.body.style.overflow = "hidden";
});

// fecha menu
closeMenu.addEventListener("click", () => {
menuMobile.style.display = "none";
openMenu.style.display = "block";
closeMenu.style.display = "none";
document.body.style.overflow = "auto";
});

// se a tela for redimensionada para desktop, fecha o menu mobile automaticamente
window.addEventListener("resize", () => {
if (window.innerWidth > 768) {
menuMobile.style.display = "none";
openMenu.style.display = "block";
closeMenu.style.display = "none";
document.body.style.overflow = "auto";
}
});