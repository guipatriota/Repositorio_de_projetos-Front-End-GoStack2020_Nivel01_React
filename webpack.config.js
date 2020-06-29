const path = require('path'); /**Como o arquivo de config do webpack é executado pelo próprio NODE, podemos usar funções e módulos do NODE dentro dele, como o PATH, para padronizar as indicações de caminhos nos diversos sistemas, como windows, macs e linux que possuem caminhos com barras e com barras invertidas. */

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), /**Aqui indicamos qual é o primeiro arquivo a ser carregado da aplicação, o index.js que se encontra na pasta src. */
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, /**Duas barras pois escrevemos uma expressão regular (aqui o ponto significa qualquer caracter, já o \. significa o caractere ponto). O $ indica que o arquivo precisa terminar com .js */
        exclude: /node_modules/, /**Aqui excluimos a pasta node_modules pois todos os arquivos dela são de responsabilidade do node para conversão. */
        use: {
          loader: 'babel-loader', /** Em resumo: Toda vez que tiver um arquivo terminado com .js e que não esteja na pasta node_modules, usar o babel-loader patra converção. */
        }
      }
    ]
  }
}