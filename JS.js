var People = [];
var aPerson = function (name, country, city, spouse,children) {
	this.name = name;
	this.country = country;
	this.city = city;
	this.spouse = spouse;
	this.children = [];

};

var Child = function (name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender

};
var Ajit = new aPerson("Ajit Mandal","U.S.","Benicia, CA","Katarina Mandal", null);
Ajit.children.push(new Child("Niall Mandal", "12", "Male"));
Ajit.children.push(new Child("Krishna Mandal", "12", "Male"));
Ajit.children.push(new Child("Sophie Mandal", "10", "Female"));
Ajit.children.push(new Child("Adam Mandal", "0", "Male"));
People.push(Ajit);

var Ajay = new aPerson("Ajay Mandal","U.S.","Savage, MN","Tori Mandal", null);
Ajay.children.push(new Child("Ashwin Mandal", "6", "Male"));
Ajay.children.push(new Child("Nikhil Mandal", "3", "Male"));
Ajay.children.push(new Child("Jaya Mandal", "1", "Female"));
People.push(Ajay);

var Sanjay = new aPerson("Sanjay Mandal","Germany","Gräfelfing","Katharina Mandal", null);
Sanjay.children.push(new Child("Hansini Mandal", "16", "Female"));
Sanjay.children.push(new Child("Neel Mandal", "13", "Male"));
People.push(Sanjay);

//[------[::::::::::::::::>[------[::::::::::::::::>[------[::::::::::::::::>[------[::::::::::::::::>[------[::::::::::::::::>[------[::::::::::::::::>[------[::::::::::::::::>[------[::::::::::::::::>[------[::::::::::::::::>
//[------[::::::::::::::::>[------[::::::::::::::::>[------[::::::::::::::::>[------[::::::::::::::::>[------[::::::::::::::::>[------[::::::::::::::::>[------[::::::::::::::::>[------[::::::::::::::::>[------[::::::::::::::::>
function dropSingle (x) { $('#dropOne').append("<option value=\"" + People[x].name + "\">" + People[x].name + "</option>") }
function fillDrop () {
	for (var i = 0; i < People.length; i++) {
		dropSingle(i);
	}
}
fillDrop();
	selectName();
	$('#dropOne').change(changeKids);
    $('#dropOne').change(selectName);

var currPerson;
//var globalChangeKids;
function selectName () {
		var checkName = true;
	for (var i = 0; checkName, i < People.length; i++) {
		if (People[i].name === $('#dropOne').val()) {
			currPerson = People[i];
			checkName = false;
		}
	}
	function fillInInfo() {
		$("#td1").val(currPerson.country);
		$('#td2').val(currPerson.city);
		$("#td3").val(currPerson.spouse)
	}
	var SaveId;
	for (var i  = 1; i < currPerson.constructor.length - 1; i++) {
		SaveId = document.getElementById("saveBtn" + i);
		//console.log(SaveId)
		//console.log(i)
		SaveId.addEventListener('click', (function (itNum) {
				return function () {
					var row = $('#saveBtn' + itNum).parent().parent();
					//console.log(row)
					var rowSubject = row.children().first().html().toLowerCase();
					//console.log(rowSubject);
					currPerson[rowSubject] = $('#td' + itNum).val();
				}
			})(i)
		)
	}
	var addNewPersonBtn = document.getElementById('buttonAddPer');
	$(addNewPersonBtn).unbind('click');
	$(addNewPersonBtn).click(function () {
		var newPerson = new aPerson($('#perInput').val(),null,null,null,null)
		People.push(newPerson);
		changeKids();
		selectName();
		dropSingle(People.length - 1)
	})
	//globalChangeKids = changeKids;
		function actionFIC (i) {
			var table2Kid = document.getElementById('insertDaRows');
			var row = table2Kid.insertRow(table2Kid.rows.length);
			//row id = [i]
			var cell1 = row.insertCell(0);//
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);

			var cell1Input = document.createElement("INPUT");
			//$(cell1Input).attr('id', 'cell1Row' + i);
			var cell2Input = document.createElement("INPUT");

			var cell1Val = currPerson.children[i].name;
			var cell2Val = currPerson.children[i].age;

			var cell1Type = 'text';
			var cell2Type = 'number';

			var cell1Name = 'kidName';
			var cell2Name = 'kidAge';

			cell1Input.setAttribute('value', cell1Val);
			cell2Input.setAttribute('value', cell2Val);

			cell1Input.setAttribute('type', cell1Type);
			cell2Input.setAttribute('type', cell2Type);

			cell1Input.setAttribute('name', cell1Name);
			cell2Input.setAttribute('name', cell2Name);

			$(cell1).append(cell1Input);
			$(cell2).append(cell2Input);

			//Keep doing
			//to update value, set value variable to text box input

			//cell1.innerHTML = '<input type="text" name="Kid" value="' + cell1Val + "\">";
			//cell2.innerHTML = '<input type="text" name="Kid" value="' + cell2Val + "\">";

			var genderSelect = document.createElement("SELECT");
			cell3.appendChild(genderSelect);
			var male = document.createElement("OPTION");
			var female = document.createElement("OPTION");
			var maleText = document.createTextNode("Male");
			var femaleText = document.createTextNode("Female");
			male.setAttribute("Male", "Male");
			female.setAttribute("Female", "Female");
			//male.appendChild(maleText)
			$(male).append(maleText);
			$(female).append(femaleText);
			$(genderSelect).append(female);
			$(genderSelect).append(male);

			var kidSave = document.createElement("Button");
			kidSave.type = 'button';
			$(kidSave).attr('id', 'cell1Save' + i);
			var kidDelete = document.createElement("Button");
			$(kidDelete).attr('id', 'cell1Delete' + i);
			kidDelete.type = 'button';
			var kidSaveText = document.createTextNode("Save ");
			var kidDeleteText = document.createTextNode("Delete");
			$(kidSave).append(kidSaveText);
			$(kidDelete).append(kidDeleteText);
			$(cell4).append(kidSave);
			$(cell4).append(kidDelete);
			var kidSaveId = document.getElementById("cell1Save" + i);
			kidSaveId.addEventListener('click', (function (itNum) {
				$(cell1Input).attr('id', 'cell1Input' + itNum);
				$(cell2Input).attr('id', 'cell2Input' + itNum);
				$(genderSelect).attr('id', 'genderSelect' + itNum);
				return function () {
					currPerson.children[itNum].name = $('#cell1Input' + itNum).val();
					currPerson.children[itNum].age = $('#cell2Input' + itNum).val();
					currPerson.children[itNum].gender = $('#genderSelect' + itNum).val();
				}
			})(i));
			var kidDeleteId = document.getElementById('cell1Delete' + i);
			kidDeleteId.addEventListener('click', (function (itNum) {
				$(cell1Input).attr('id', 'cell1Input' + itNum);
				$(cell2Input).attr('id', 'cell2Input' + itNum);
				$(genderSelect).attr('id', 'genderSelect' + itNum);
				return function () {
					var $rowThatIsDead = $(this).parent().parent();
					$rowThatIsDead.empty();
					currPerson.children.splice(itNum, 1);
					//console.log('I ran')

				}
			})(i));

			//GET By ID oR CLASS
			//Button Action
			function checkGender() {
				if (currPerson.children[i].gender === "Female") {
					$(female).attr('selected', true);
					//$(genderSelect).append(female)
					//genderSelect.appendChild(female)
				}
				else {
					$(male).attr('selected', true);
					//$(genderSelect).append(male)
					//genderSelect.appendChild(male)
				}
			}

			checkGender();
		}
	fillInInfo();
	function fillInChild() {
		for (var i = 0; i < currPerson.children.length; i++) {
		actionFIC(i);
		}
	}
	fillInChild();
		//}
	//changeKids();

		document.getElementById('addChild').type = 'button';
	    $("#addChild").unbind('click');
		$('#addChild').click(function () {
			changeKids()
			currPerson.children.push(new Child($('#larryBox').val(), $('#21Box').val(), $('maleSelectAdd').val()));
			fillInChild(currPerson.children.length);
		})
}
var table2 = document.getElementById('insertDaRows');
function changeKids () {
	//if (table2.rows.length - 2 !== currPerson.children.length) {
	for (var i = 0; i < currPerson.children.length; i++) {
		//console.log(currPerson);
		table2.deleteRow(0);
	}
}
//jQuery-fill in behaviors for elements (buttons, drops, boxes)

//For Specifically Today
//Do default button behavior-addPerson, AddChild, Save, Delete
//Try simple examples with only one property
//REMEMBER Children have delete and save
// save, input:value = Obj.propName
// delete: look up
// addPerson: new instance of Class to make person
// addChild: new instance of Class child