$(document).ready(function() {


//stop default event of putting info in url
$('#employeeForm').on('submit', function(event){
  event.preventDefault();


//create array that holds the values entered (from object)
var enteredValues = {};

//test
console.log($('#employeeForm').serializeArray());

//create object from values entered
$.each($('#employeeForm').serializeArray(), function(i, field){
  enteredValues[field.name] = field.value;
});

//clear out form
$('#employeeForm').find('input[type=text]').val('');

//push into array
empArray.push(enteredValues);

monthlySalaryExpense();


});

//repeated in Scott's code - doesn't seem needed?
// monthlySalaryExpense();


});

var empArray = [];

//calculate monthly salary expense
function monthlySalaryExpense(){
  var salaryExpense = 0;
  for(i = 0; i < empArray.length; i++){
    var emp = empArray[i];
    salaryExpense += parseInt(emp.salary/12);

  }



  //show each entry in a list
  function addEntry(){
    $('.output-container').append('<li></li>');

    var $el = $('.output-container').children().last();

    $el.append('.output-container').text(emp.firstname + ' ' + emp.lastname +
    ', #' + emp.empID + ', ' + emp.title +
      ', $' + emp.salary + '/year ').append('<button class="delete">Delete</button>');

  }

  addEntry()

  //set the delete button
    function deleteClick(){
      $(this).parent().remove();

    }


  //console.log(salaryExpense);

  //show updated total
  $('.monthly-total-comp').text('$' + salaryExpense + '/month');

  //delete entry from output-container
  $('.output-container').on('click', '.delete', deleteClick);


}
