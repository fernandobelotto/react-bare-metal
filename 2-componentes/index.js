const MeuComponente = React.createElement('h1', {}, "Meu Título")

const App = React.createElement("div", {}, MeuComponente)

const root = document.getElementById("root");

ReactDOM.render(App, root);
