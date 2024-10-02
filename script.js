$(document).ready(function () {
carregaTarefas();


// Adicionar tarefa
$('#addTarefaBtn').on('click', function () {
    var tarefaText = $('#tarefaInput').val();
    
    //console.log(tarefaText) //mostra na tela

    if (tarefaText.length > 0 ){ //Se tiver tarefa ele adiciona
        addTarefas(tarefaText); //adiciona tarefa
        salvarTarefas();
        $('#tarefaInput').val('');
    } 
    
  });

  //Função para adicionar tarefas
  function addTarefas(text){
    $('#tarefaList').append(
        '<li> <span>&times;</span>' + text + '</li>' );

  }

  //mARCA como concluido
  $(document).on('click', 'li', function(){
    $(this).toggleClass('completed');//adiciona a classe completed no li
    salvarTarefas();
  });

  //remove tarefa
  $(document).on('click', 'span', function(e){
    e.stopPropagation();//não deixa aplicar na pai
    $(this).parent().fadeOut(200, function() {
        $(this).remove();
        salvarTarefas();
    });
  });


  //Função para salvar tarefas
  function salvarTarefas() {
    var tarefa = $('tarefaList').html();
    localStorage.setItem('tarefas', tarefa);
    
  }
  //Função para carregar as tarefas
  function carregaTarefas() {
    var tarefas = localStorage.getItem('tarefas');
    //verifica se exitem dados 
    if (tarefas) {
        $('#tarefaList').html(tarefas);
    }
  }

})