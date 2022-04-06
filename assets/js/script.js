var mom = $('#moment') 
var titleInput = $('#projectTitle')
var type = $('#projectType')
var wage = $('#hourlyWage')
var due = $('#dueDate')
var submit = $('#submit')

var table = $('#projTable')

submit.on("click", function(e){
  e.preventDefault()
  writeToTable(captureData())

})
 
console.log("this is linked")

function captureData() {
  var obj = {}
  var capTitle = titleInput.val().trim()
  obj.title = capTitle 
  console.log(obj)
  return obj
}

function writeToTable(obj) {
  var title = obj.title
  var tBod = $("tbody");
  var tRow = $("<tr>");
  var tDat = $("<td>")
  tDat.text(title)
  tRow.append(tDat)
  tBod.append(tRow)
  table.append(tBod)
  // console.log(title)
  //
  //
  // var newBod = table.add("tbody")
  // var newRow = newBod.append('<tr>')
  // var newData = newRow.append("<td>")
  // newData.text(title)
}
