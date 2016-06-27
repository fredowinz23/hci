// JavaScript Document
function checkAdd()
{
	with (window.document.frmAdd) {
		if (isEmpty(txtTeacher, 'Enter Teacher ID number')) {
			return;
		} else {
			submit();
		}
	}
}







function checkAddClassForm()
{
	with (window.document.frmAddClass) {
		if (isEmpty(SubjCode, 'Enter Subject Code')) {
			return;
		} else if (isEmpty(ClassCode, 'Enter Class Code')) {
			return;
		} else if (isEmpty(txtFrom, 'Enter Start Time')) {
			return;
		} else if (isEmpty(txtTo, 'Enter End Time')) {
			return;
		} else if (isEmpty(maxStud, 'Enter Maximum Number of Students')) {
			return;
		} else {
			submit();
		}
	}
}

function checkEvaluationForm()
{
	with (window.document.frmEvaluate) {
		if (isEmpty(checkbox, 'You haven not chosen a subject yet')) {
			return;
		} else {
			submit();
		}
	}
}



function checkIdnumberForm()
{
	with (window.document.frmStudent) {
		if (isEmpty(IdNumber, 'Type ID Number')) {
			return;
		} else {
			submit();
		}
	}
}




function addMajor()
{
	window.location.href = 'index.php?view=addMajor';
}

function modifyMajor(MajorId)
{
	window.location.href = 'index.php?view=modifyMajor&MajorId=' + MajorId;
}

function viewSem(MajorId)
{
	window.location.href = 'index.php?view=viewSem&MajorId=' + MajorId;
}

function deleteMajor(MajorId)
{
	if (confirm('Delete this Major?')) {
		window.location.href = 'processSubjects.php?action=deleteMajor&MajorId=' + MajorId;
	}
}


function deleteClass(ClassId)
{
	if (confirm('Delete this Class?')) {
		window.location.href = 'processClass.php?action=delete&ClassId=' + ClassId;
	}
}


function deleteEvaluation(eId)
{
	if (confirm('Remove this Evaluated Subject?')) {
		window.location.href = 'processEvaluation.php?action=deleteEvaluation&eId=' + eId;
	}
}

