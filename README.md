


## Projeto

A ideia principal desse projeto é ter um painel contendo as informações meterologicas atuais e dos proximos dias, utilizando da localização atual do usuário para consulta. A princial fonte de dados desse projeto vem da  [API do Open Weather](https://openweathermap.org/api)

O painel é totalmente responsivo e oferece a disponibilidade de exibição em dois temas, o dark e o light.

A construção deste projeto é como forma de estudo.

O projeto se encontra em funcionamento nessa url https://my-local-weather.vercel.app/, foi utilizado o ambiente da vercel devido a facilidade para subir projetos em next.js e sua fácil integração com github

## 💻 Desktop
<h1 align="center">
   <img alt="Screen Shot 1" src="https://user-images.githubusercontent.com/25651712/150698155-ab69a3af-9c2f-4bbc-b444-725257055a7f.png" width="100%">
</h1>
<h1 align="center">
   <img alt="Screen Shot 1" src="https://user-images.githubusercontent.com/25651712/150699418-40357138-719f-45e9-99c5-9ad2f471c395.png" width="100%">
</h1>

## 📱 Mobile
![WhatsApp Video 2022-01-23 at 19 06 50](https://user-images.githubusercontent.com/25651712/150699997-81613d08-9d8e-4dfa-93c9-01c953eae66e.gif)


## :rocket: Tecnologias

-  [Next.js](https://nextjs.org/)
-  [React](https://pt-br.reactjs.org/)
-  [LottieFiles](https://lottiefiles.com/?gclid=CjwKCAiAlrSPBhBaEiwAuLSDULhXUrAfduFnc-Evb6iGZENbKbeBnKX9A0ACvJ4Of6bAW5pHP96WbRoCEw0QAvD_BwE)
-  [Testing Libary](https://testing-library.com/)
-  [Jest](https://jestjs.io/)
-  [Styled-components](https://www.styled-components.com/)
-  [Axios](https://axios-http.com/docs/intro)
-  [Day.js](https://day.js.org/)
-  [Prettier](https://prettier.io/)
-  [YARN](https://yarnpkg.com/)
-  [SWR](https://swr.vercel.app/)
-  [Husky](https://typicode.github.io/husky/#/)
-  [React-toastify](https://fkhadra.github.io/react-toastify/introduction)
## :wrench: Funcionalidades

Abaixo contém a descrição das funcionalidades oferecidas no painel
-  Atualização em tempo real utilizando das estratégia de revalidação de cache com SWR
-  Botão de update para atualização manual 
-  Os ícones do clima são sicronizados automaticamente de acordo com as informações retornadas da API
-  A imagem de background é sincronizada automaticamente para mudar de acordo com o retorno da API , referente ao tempo atual
-  Botão para troca de tema , realizando a troca de tema para escuro ou claro. De acordo com o que o usuário selecionou
-  Layout responsivo , e adaptado para uma melhor experiência do usuário em tablets e dispositivos móveis

## 📥 Instalação e execução

Faça um clone desse repositório e acesse o diretório:

```bash
$ git clone https://github.com/lcsoares10/my-local-weather.git && cd my-local-weather
```
Instale os pacotes e execute o projeto:

```bash
# Instalando os pacotes do package.json
$ yarn install
# Executanto projeto
$ yarn dev
# Executanto todos os testes
$ yarn testAll
```
Agora basta acessar a url **http://localhost:3000**

## :muscle: Contribuir

Caso tenha encontrado algum erro ou queira implementar uma nova feature , então faça o `fork` e clone o projeto a partir do seu usuário.

```bash
$ git clone https://github.com/SEU-NOME-DE-USUARIO/my-local-weather.git
```
Gere uma nova ramificação do projeto, no exemplo a seguir vou chamar o branch de `minha-alteracao`, mas você pode dar o nome que quiser.

```bash
# Criando um branch
$ git branch minha-alteracao
# Acessando o novo branch
$ git checkout minha-alteracao
```

Faça as alterações necessárias e o push para a branch.

```bash
# Adicionando os arquivos alterados
$ git add .
# Mensagem do commit
$ git commit -m "Corrigindo...."
# Enviando alterações para o brach
$ git push --set-upstream origin minha-alteracao
```
Por último, você deve navegar até o seu repositório onde fez o fork e pressionar o botão *New pull request* no lado esquerdo da página.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
