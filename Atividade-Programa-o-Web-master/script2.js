class Aluno {

  nome;
  nota1;
  nota2;
  nota3;
  media;

  constructor( nome, nota1, nota2, nota3,) {

     this.nome = nome;
     this.nota1 = nota1;
     this.nota2 = nota2;
     this.nota3 = nota3;
     this.media = 0;
     
     this.arrayAlunos = [];

  }

  adicionar(aluno) {
    this.arrayAlunos.push(aluno);
  }
  
  salvar(){
    let aluno = this.lerDados();

    if(this.validaCampos(aluno) == true){
      this.adicionar(aluno);
    }

    this.listaTabela();
    this.limpar();
  }

  listaTabela(){
    let tbody = document.getElementById('tbody');
    tbody.innerText = '';

    for(let i = 0; i < this.arrayAlunos.length; i++){
      let tr = tbody.insertRow();
      let td_nome = tr.insertCell();
      let td_nota1 = tr.insertCell();
      let td_nota2 = tr.insertCell();
      let td_nota3 = tr.insertCell();
      let td_media = tr.insertCell();

  
      td_nome.innerText = this.arrayAlunos[i].nome;
      td_nota1.innerText = this.arrayAlunos[i].nota1;
      td_nota2.innerText = this.arrayAlunos[i].nota2;
      td_nota3.innerText = this.arrayAlunos[i].nota3;
      td_media.innerText = this.arrayAlunos[i].media;

      td_nome.classList.add('center');
      td_nota1.classList.add('center');
      td_nota2.classList.add('center');
      td_nota3.classList.add('center');
      td_media.classList.add('center');

      var media = (parseFloat(this.arrayAlunos[i].nota1) + parseFloat(this.arrayAlunos[i].nota2) + 
parseFloat(this.arrayAlunos[i].nota3))/3;

td_media.innerText = media.toFixed(2);
    }
  }

  lerDados() {
    let aluno = {}
    
    aluno.nome = document.getElementById('aluno').value;
    aluno.nota1 = document.getElementById('nota1').value;
    aluno.nota2 = document.getElementById('nota2').value;
    aluno.nota3 = document.getElementById('nota3').value;
    return aluno;
  }

  validaCampos(aluno) {
    let mensagem = '';

    if(aluno.nome == ''){
      mensagem += ' - Informe o nome do Aluno \n';
    }
    if(aluno.nota1 == ''){
      mensagem += ' - Informe a primeira nota do Aluno \n';
    }
    if(aluno.nota2 == ''){
      mensagem += ' - Informe a segunda nota do Aluno \n';
    }
    if(aluno.nota3 == ''){
      mensagem += ' - Informe a terceira nota do Aluno \n';
    }
    if(mensagem != ''){
      alert(mensagem);
      return false;
    }

    return true;
  }

  limpar(){      
    document.getElementById('aluno').value = ' ';
    document.getElementById('nota1').value = ' ';
    document.getElementById('nota2').value = ' ';
    document.getElementById('nota3').value = ' ';
    
  }
  

  calculaMedia(){
    return ((aluno.nota1 + aluno.nota2 + aluno.nota3) / 3).toFixed(2);
  }
}

var aluno = new Aluno();

