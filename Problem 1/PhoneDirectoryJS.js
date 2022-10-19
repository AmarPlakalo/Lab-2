function add_contact()
{	
	var name = document.getElementById('name').value;
	var mobile = document.getElementById('mobile').value;
	var email = document.getElementById('email').value;
	
	var tableRef = document.getElementById('contact_list').getElementsByTagName('tbody')[0];
	
	var row = tableRef.insertRow();
	
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	
	cell1.innerHTML = name;
	cell2.innerHTML = mobile;
	cell3.innerHTML = email;
	
	for (var i = 0, row; row = contact_list.rows[i]; i++) 
	{
		if (i % 2 != 0)
		{
			var x = document.getElementById("contact_list").getElementsByTagName("tr");
			x[i].style.backgroundColor = '#f2f2f2';
		}
	}
	
	document.getElementById('name').value = '';
	document.getElementById('mobile').value = '';
	document.getElementById('email').value = '';
}
