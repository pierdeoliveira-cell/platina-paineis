# Platina Painéis

Site de ferramentas premium — hospedado via Netlify + GitHub.

## Estrutura
- `index.html` — página principal
- `encurtador.html` — encurtador com 7 etapas
- `style.css` — estilos globais
- `ads.js` — integração Monetag (configure seu Publisher ID)

## Configurar anúncios
1. Acesse monetag.com e crie uma conta grátis
2. Crie uma zona de anúncios
3. Copie seu Publisher ID
4. Edite `ads.js` e substitua `SEU_ID_MONETAG` pelo seu ID real

## Configurar links das ferramentas
Em `encurtador.html`, localize o objeto `tools` e coloque a URL real de cada ferramenta no campo `url`.
