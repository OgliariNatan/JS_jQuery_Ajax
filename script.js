

$(document).ready(function () {
  // Carregar tarefas salvas localmente
  loadTasks();

  // Carregar dados do JSON
  loadJSONData();

  // Var tempo
  const myDate = new Date(Date.now()).toLocaleString().split(',')[0];
  console.log(myDate);
 
 
  // Adicionar tarefa
  $('#addTaskBtn').on('click', function () {
      var taskText = $('#taskInput').val();
      var taskTextDate = $('#taskInputDate').val();
      var taskTextTime = $('#taskInputTime').val();
      var taskTextName = $('#taskInputName').val();

      if (taskText.trim() !== '' && taskTextDate.trim() !== '' && taskTextName.trim() !== '' && taskTextTime.trim() !== '') {
          addTask(taskTextDate, taskTextTime, taskTextName, taskText);
          saveTasks();
          $('#taskInput').val('');
          $('#taskInputDate').val('');
          $('#taskInputTime').val('');
          $('#taskInputName').val('');
      }
  });

  // Marcar/desmarcar tarefa como concluída
  $(document).on('click', 'tr', function () {
      $(this).toggleClass('completed');
      saveTasks();
  });

  // Remover tarefa
  $(document).on('click', 'span', function (e) {
      e.stopPropagation(); // Evitar a propagação do evento para o elemento pai (tr)
      $(this).closest('tr').fadeOut(200, function () {
          $(this).remove();
          saveTasks();
      });
  });

  // Função para formatar data
  function dataFormat(date) {
      const [ano, mes, dia] = date.split('-');
      return `${dia}-${mes}-${ano}`;
  }

  // Função para adicionar tarefa
  function addTask(date, time, nome, situacao) {
      const dateFormatted = dataFormat(date);
      $('#taskList').append(
          '<tr>' +
          '<td id="vago"><span>×</span></td>' +
          '<td>' + dateFormatted + '</td>' +
          '<td>' + time + '</td>' +
          '<td>' + nome + '</td>' +
          '<td>' + situacao + '</td>' +
          '</tr>'
      );
  }

  // Função para carregar tarefas salvas localmente
  function loadTasks() {
      var tasks = localStorage.getItem('tasks');
      if (tasks) {
          $('#taskList').html(tasks);
      }
  }

  // Função para carregar dados do JSON
  function loadJSONData() {
      var jsonData = {
          "taskInputDate": {
              "type": "date",
              "text": "Data da Tarefa",
              "value": ""
          },
          "taskInputTime": {
              "type": "time",
              "text": "Hora da Tarefa",
              "value": ""
          },
          "taskInputName": {
              "type": "string",
              "text": "Nome do Interno",
              "value": ""
          },
          "taskInput": {
              "type": "string",
              "text": "Descrição da Tarefa",
              "value": ""
          }
      };

      $('#taskInputDate').val(jsonData.taskInputDate.value);
      $('#taskInputTime').val(jsonData.taskInputTime.value);
      $('#taskInputName').val(jsonData.taskInputName.value);
      $('#taskInput').val(jsonData.taskInput.value);
  }
});
