$(document).ready(function () {
    // Carregar tarefas salvas localmente
    loadTasks();
  
    // Adicionar tarefa
    $('#addTaskBtn').on('click', function () {
      var taskText = $('#taskInput').val();
      var taskTextDate = $('#taskInputDate').val();
      var taskTextTime = $('#taskInputTime').val();
      var taskTextName = $('#taskInputName').val();

      if (taskText.trim() !== '') {
        addTask(taskTextDate, taskTextTime, taskTextName, taskText);
        saveTasks();
        $('#taskInput').val('');
        $('#taskInputDate').val('');
        $('#taskInputTime').val('');
        $('#taskInputName').val('');
      }
    });
  
    // Marcar/desmarcar tarefa como concluída
    $(document).on('click', 'li', function () {
      $(this).toggleClass('completed');
      saveTasks();
    });
  
    // Remover tarefa
    $(document).on('click', 'span', function (e) {
      e.stopPropagation(); // Evitar a propagação do evento para o elemento pai (li)
      $(this).parent().fadeOut(200, function () {
        $(this).remove();
        saveTasks();
      });
    });
  
    // Função para adicionar tarefa
    function addTask(date, time, nome, text) {
      $('#taskList').append('<tr> <td id="vago"> <span>&times;</span></td>' + '<td>'+ date +'</td>' +'<td>'+text+'</td>' + '</tr>');
    }
  
    // Função para carregar tarefas salvas localmente
    function loadTasks() {
      var tasks = localStorage.getItem('tasks');
      if (tasks) {
        $('#taskList').html(tasks);
      }
    }
  
    // Função para salvar tarefas localmente
    function saveTasks() {
      var tasks = $('#taskList').html();
      localStorage.setItem('tasks', tasks);
    }
  });