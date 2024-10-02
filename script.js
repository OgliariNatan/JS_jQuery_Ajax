$(document).ready(function () {

// Adicionar tarefa
$('#addTarefaBtn').on('click', function () {
    var tarefaText = $('#tarefaInput').val();
    
    //console.log(tarefaText) //mostra na tela

    if (tarefaText.length > 0 ){ //Se tiver tarefa ele adiciona
        addTarefas(tarefaText) //adiciona tarefa
    } 
  });

  //Função para adicionar tarefas
  function addTarefas(text){
    $('#tarefaList').append(
        '<li> <span>&times;</span>' + text + '</li>' );

  }

  //mARCA como concluido
  $(document).on('click', 'li', function(){
    $(this).toggleClass('completed');

  });

})