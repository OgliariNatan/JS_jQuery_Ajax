// $(document).ready(function () {
//     // Carregar tarefas salvas localmente
//     loadTasks();
  
//     // Adicionar tarefa
//     $('#addTaskBtn').on('click', function () {
//       var taskText = $('#taskInput').val();
//       var taskTextDate = $('#taskInputDate').val();
//       var taskTextTime = $('#taskInputTime').val();
//       var taskTextName = $('#taskInputName').val();

//       if (taskText.trim() !== '' && taskTextDate.trim() !== '' && taskTextName.trim() !== '' && taskTextTime.trim() !== '') {
//         addTask(taskTextDate, taskTextTime, taskTextName, taskText);
//         saveTasks();
//         $('#taskInput').val('');
//         $('#taskInputDate').val('');
//         $('#taskInputTime').val('');
//         $('#taskInputName').val('');
//       }
//     });
  
//     // Marcar/desmarcar tarefa como concluída
//     $(document).on('click', 'tr', function () {
//       $(this).toggleClass('completed');
//       saveTasks();
//     });
  
//     // Remover tarefa
//     $(document).on('click', 'span', function (e) {
//       e.stopPropagation(); // Evitar a propagação do evento para o elemento pai (li)
//       $(this).closest('tr').fadeOut(200, function () {
//         $(this).remove();
//         saveTasks();
//       });
//     });
    
//     // Função Formata data
//     function dataFormat(date){
//       const [ano, mes, dia] = date.split('-');
//       return `${dia}-${mes}-${ano}`;
//     }

//     // Função para adicionar tarefa
//     function addTask(date, time, nome, situacao) {
//       //formata data
//       const dateFormatted = dataFormat(date)
//       //insere na tabela
//       $('#taskList').append(
//         '<tr>' +
//         '<td id="vago"><span>&times;</span></td>' +
//         '<td>' + dateFormatted + '</td>' +
//         '<td>' + time + '</td>' +
//         '<td>' + nome + '</td>' +
//         '<td>' + situacao + '</td>' +
//         '</tr>'
//     );
//     }
  
//     // Função para carregar tarefas salvas localmente
//     function loadTasks() {
//       var tasks = localStorage.getItem('tasks');
//       if (tasks) {
//         $('#taskList').html(tasks);
//       }
//     }
  
//     // Função para salvar tarefas localmente
//     function saveTasks() {
//       var tasks = $('#taskList').html();
//       localStorage.setItem('tasks', tasks);
//     }
//   });



$(document).ready(function () {
  // Carregar tarefas salvas localmente
  loadTasks();

  // Carregar dados do JSON
  loadJSONData();

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
      e.stopPropagation(); // Evitar a propagação do evento para o elemento pai (li)
      $(this).closest('tr').fadeOut(200, function () {
          $(this).remove();
          saveTasks();
      });
  });

  // Função Formata data
  function dataFormat(date) {
      const [ano, mes, dia] = date.split('-');
      return `${dia}-${mes}-${ano}`;
  }

  // Função para adicionar tarefa
  function addTask(date, time, nome, situacao) {
      // Formata data
      const dateFormatted = dataFormat(date);
      // Insere na tabela
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
          "taskDate": {
              "type": "date",
              "text": "Data da Tarefa",
              "value": "2024-10-20"
          },
          "taskTime": {
              "type": "time",
              "text": "Hora da Tarefa",
              "value": ""
          },
          "taskName": {
              "type": "text",
              "text": "Nome do Interno",
              "value": ""
          },
          "taskDescription": {
              "type": "text",
              "text": "Descrição da Tarefa",
              "value": ""
          }
      };

      $('#taskInputDate').val(jsonData.taskDate.value);
      $('#taskInputTime').val(jsonData.taskTime.value);
      $('#taskInputName').val(jsonData.taskName.value);
      $('#taskInput').val(jsonData.taskDescription.value);
  }
});
$(document).ready(function () {
  // Carregar tarefas salvas localmente
  loadTasks();

  // Carregar dados do JSON
  loadJSONData();

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
      e.stopPropagation(); // Evitar a propagação do evento para o elemento pai (li)
      $(this).closest('tr').fadeOut(200, function () {
          $(this).remove();
          saveTasks();
      });
  });

  // Função Formata data
  function dataFormat(date) {
      const [ano, mes, dia] = date.split('-');
      return `${dia}-${mes}-${ano}`;
  }

  // Função para adicionar tarefa
  function addTask(date, time, nome, situacao) {
      // Formata data
      const dateFormatted = dataFormat(date);
      // Insere na tabela
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
          "taskDate": {
              "type": "date",
              "text": "Data da Tarefa",
              "value": "2024-10-20"
          },
          "taskTime": {
              "type": "time",
              "text": "Hora da Tarefa",
              "value": ""
          },
          "taskName": {
              "type": "text",
              "text": "Nome do Interno",
              "value": ""
          },
          "taskDescription": {
              "type": "text",
              "text": "Descrição da Tarefa",
              "value": ""
          }
      };

      $('#taskInputDate').val(jsonData.taskDate.value);
      $('#taskInputTime').val(jsonData.taskTime.value);
      $('#taskInputName').val(jsonData.taskName.value);
      $('#taskInput').val(jsonData.taskDescription.value);
  }
});
