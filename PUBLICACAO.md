# Publicação MJ INFO

O site institucional atualizado está em `website/`. Os arquivos da landing page anterior na raiz foram preservados para que a preparação não altere a publicação atual do GitHub Pages.

## Cloudflare Pages conectado ao GitHub

- Repositório: mjinfotec/mjinfo-site
- Branch: main (ou a branch de preparação para prévia)
- Diretório raiz: website
- Comando de compilação: npm run build
- Diretório de saída: out
- Variável de ambiente: MJINFO_STATIC_EXPORT=1
- Node.js: 22

Primeiro conferir a prévia pages.dev. Depois configurar domínio próprio e HTTPS.

## DNS atual verificado em 02/10/2026

- DNS: a.sec.dns.br e b.sec.dns.br (Registro.br).
- A do domínio: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 (GitHub Pages).
- www: CNAME para mjinfo.tec.br.
- MX: mx1.improvmx.com (10), mx2.improvmx.com (20).
- TXT SPF: v=spf1 include:spf.improvmx.com ~all

Esta consulta pública não substitui o inventário completo do painel DNS: antes de mudar servidores, copiar também quaisquer DKIM, DMARC, CAA e verificações existentes. Para usar o domínio raiz no Cloudflare Pages, o DNS deve ser gerenciado pela Cloudflare; o registro do domínio continua no Registro.br. Preservar os registros de e-mail e conferir DNSSEC antes da troca. Não alterar servidores antes de validar a zona completa e a prévia do site.

Nenhuma alteração DNS foi feita durante a preparação.
