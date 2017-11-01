
	function validateForm() {
		var x = document.forms["teste"]["resposta1"].value;
		if (x == "") {
			alert("Name must be filled out");
			return false;
		} else {
			alert("Sucesso");
		}
	}
