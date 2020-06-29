module.exports = {
  presets: [ /**Configurações que são pré-feitas por outros desenvolvedores e que podemos usar em nossos projetos. */
    '@babel/preset-env', /**Converte o código do JS mais moderno para o JS mais antigo que os browsers entendam, porém baseado no ambiente de nossa aplicação. */
    '@babel/preset-react' /**Preset para adicionar as funcionalidades do REACT nesta conversão do Babel. */
  ],
};