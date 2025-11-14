const switchInput = document.querySelector('label.trocar input');
const body = document.querySelector('body');
const divCeu = document.querySelector('div#ceu');
const main = document.querySelector('main');
const sectionPerfil = document.querySelector('section#perfil');
const resumoFuncaoP = document.querySelector('div#resumo_funcao > p');
const sectionSobre = document.querySelector('section#sobre');
const sectionSobreH2 = document.querySelector('section#sobre > h2');
const abbrTooltip = document.querySelector('.abbr-tooltip');
const pProjetos = document.querySelector('p#p_projetos');
const pContato = document.querySelector('section.contato > p')

switchInput.addEventListener('change', () => {
  if (switchInput.checked) {
    body.classList.add('dia_fundo');
    divCeu.classList.add('dia_filtro');
    main.classList.add('noite_background');
    sectionPerfil.classList.add('dia_perfil');
    resumoFuncaoP.classList.add('dia_resumo-func_p');
    sectionSobre.classList.add('dia_sobre');
    sectionSobreH2.classList.add('dia_sobreH2');
    abbrTooltip.classList.add('dia_abbr');
    pProjetos.classList.add('dia_p_projetos');
    pContato.classList.add('p_contato');

  } else {
    body.classList.remove('dia_fundo');
    divCeu.classList.remove('dia_filtro');
    main.classList.remove('noite_background');
    sectionPerfil.classList.remove('dia_perfil');
    resumoFuncaoP.classList.remove('dia_resumo-func_p');
    sectionSobre.classList.remove('dia_sobre');
    sectionSobreH2.classList.remove('dia_sobreH2');
    abbrTooltip.classList.remove('dia_abbr');
    pProjetos.classList.remove('dia_p_projetos');
    pContato.classList.remove('p_contato');
  }
});