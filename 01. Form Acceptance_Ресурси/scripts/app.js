function acceptance() {
	let button = document.querySelector("#acceptance");
	button.addEventListener("click", accept);
	function clear() {
		document.querySelector("#fields > td:nth-child(1) > input[type=text]").value = "";
		document.querySelector("#fields > td:nth-child(2) > input[type=text]").value = "";
		document.querySelector("#fields > td:nth-child(3) > input[type=text]").value = "";
		document.querySelector("#fields > td:nth-child(4) > input[type=text]").value = "";
	}
	function check(array) {
		if (array[0] == "" || array[1] == "" || array[2] == "" || array[3] == "") {
			clear();
			return false;
		}
		else if (/\D/m.test(array[2]) || /\D/m.test(array[3])) {
			clear();
			return false;
		}
		else if (array[2] - array[3] <= 0) {
			clear();
			return false;
		}
		return true;
	};
	
	function createButton(parent, text) {
		let buttonOut = document.createElement("button");
		parent.appendChild(buttonOut);
		buttonOut.textContent = text;
		let type = document.createAttribute("type");
		type.value = "button";
		buttonOut.setAttributeNode(type)
	}
	function accept() {
		let obj = Array.from(document.getElementsByTagName("input"));
		let values = obj.map(x => x.value);
		if (check(values)) {
			let warehouse = document.querySelector("#warehouse")
			let divNew = document.createElement("div");
			warehouse.appendChild(divNew)
			let p = document.createElement("p");
			divNew.appendChild(p)
			let text = document.createTextNode(`[${values[0]}] ${values[1]} - ${values[2] - values[3]} pieces`);
			p.appendChild(text);
			createButton(divNew, "Out of stock");
			clear();
			Array.from(document.getElementsByTagName("button")).map(x => x.addEventListener("click", removeBut))
			function removeBut(e) {
				if (e.target.innerHTML != "Add it") {
					e.target.parentElement.remove();
				}
			}
		}
	}
}