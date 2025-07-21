# README

# Projeto - Organograma da Empresa Web APP

Projeto organograma da empresa em conjunto com projeto https://github.com/murilo-miranda/orgchart-api

## Informações técnicas

- React 19.1.0
- Vite 7.0.4

## Como executar o projeto

- Instale docker na máquina
- Faça clone do projeto
- Na raiz do projeto, gere a imagem com o comando:
```
docker build .
```
- Na raiz do projeto, execute o container com o comando:
```
docker compose up
```
- Na raiz do projeto, acesse o container com o comando:
```
docker exec -it orgchart-webapp bash
```

### Como executar os testes
- Dentro do container, execute o comando:
```
npx vitest run
```
