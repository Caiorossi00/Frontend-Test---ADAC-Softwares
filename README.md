## Sobre o Projeto

Este projeto foi desenvolvido como parte de um **teste técnico para a ADAC Softwares**, com o objetivo de implementar uma **landing page responsiva** baseada no design fornecido no Figma.

A aplicação foi construída utilizando **React**, com foco em **componentização**, **organização de código** e **fidelidade visual ao layout proposto**. O projeto contempla as principais seções de uma landing page institucional, estruturadas de forma modular para facilitar manutenção, reutilização e escalabilidade.

Todo o desenvolvimento respeitou as boas práticas de frontend, priorizando clareza estrutural, separação de responsabilidades e consistência visual entre as seções, conforme esperado em um cenário real de desenvolvimento.


## Escopo Atendido

- **Responsividade** o layout foi desenvolvido considerando os seguintes tamanhos:
  - 1024px
  - 768px
  - Iphone 11

- **Landing Page Institucional**
  - Implementação das seções conforme design fornecido no Figma
  - Estruturação modular das seções da página

- **Componentização com React**
  - Separação entre componentes reutilizáveis e seções da página
  - Criação de componentes desacoplados para facilitar manutenção
  - Organização do código visando escalabilidade

- **Estilização e Layout**
  - Fidelidade visual ao layout proposto no Figma


## Estrutura de Pastas

A estrutura de pastas foi pensada para manter a separação de responsabilidades, buscando facilitar a manutenção, a leitura do projeto e a escalabilidade, mesmo tratando-se de um teste técnico.

### 1. Assets

Responsável por armazenar os recursos estáticos utilizados na aplicação.

- **images/**: contém as imagens e elementos visuais utilizados nas seções da landing page, organizados por contexto (features, testimonials, etc.), facilitando a organização modular.
- **fonts/**: armazena as fontes utilizadas no projeto.
- **styles/**: armazena a estrutura de estilos dos componentes genéricos da aplicação.

### 2. Components

Camada destinada aos componentes reutilizáveis e independentes de contexto específico da página, como:

- Navbar
- Footer
- Cards e elementos de UI reutilizáveis

Essa separação permite maior reutilização, reduz duplicação de código e mantém a lógica de UI desacoplada das seções da página.

### 3. Sections

Responsável pelas seções da landing page, cada uma isolada em seu próprio diretório, como:

- Hero
- Contents
- Features
- Gallery
- Partners
- Testimonials

As seções atuam como blocos independentes de layout, facilitando ajustes pontuais, reordenação de conteúdo e futuras expansões da página.  
Cada section possui seu conteúdo específico e sua própria folha de estilização dentro da pasta do componente.


## Fidelidade ao Design (Pixel Perfect)

O desenvolvimento da landing page teve como foco principal a **recriação fiel do design fornecido no Figma**, buscando ao máximo manter alinhamento visual, espaçamentos, tipografia, cores e hierarquia de informação conforme o layout original.

Durante a implementação, foi adotada uma abordagem de **pixel perfect**, com atenção especial a:

- Espaçamentos e proporções entre os elementos
- Tamanhos de fonte e pesos tipográficos
- Cores e contrastes visuais
- Alinhamento dos componentes em diferentes resoluções
- Comportamento do layout nos diferentes breakpoints

Essa atenção aos detalhes garante que a interface final se mantenha consistente com o design proposto, tanto em desktop quanto em tablet e dispositivos móveis, refletindo um cuidado essencial em projetos reais de frontend orientados por design.


## Possibilidades de Melhoria

Embora o projeto atenda ao escopo proposto no teste técnico, existem pontos que poderiam ser evoluídos para agregar ainda mais robustez e diferencial à aplicação.

Uma das principais melhorias seria a **adoção do Tailwind CSS**, buscando atingir um dos diferenciais propostos no teste.

A estilização foi realizada com **SCSS**, priorizando maior controle sobre estilos específicos, organização de regras e reutilização por meio de variáveis e aninhamento. Essa escolha se deu tanto pela familiaridade quanto pela necessidade de um controle mais fino sobre o layout para garantir fidelidade ao design do Figma. Em projetos maiores, o uso de Tailwind poderia complementar ou substituir essa abordagem, dependendo dos requisitos e do padrão adotado no projeto.


## Vídeo Demo

O vídeo abaixo demonstra o fluxo completo da aplicação:

▶️ https://www.youtube.com/watch?v=9js1O_kB8I8


## Deploy

A aplicação está disponível online no seguinte endereço:

🔗 https://frontend-test-adac-softwares-ruby.vercel.app/


## Preview da Aplicação

![Preview da aplicação](https://github.com/Caiorossi00/Frontend-Test---ADAC-Softwares/blob/main/src/assets/images/UI.png?raw=true)
