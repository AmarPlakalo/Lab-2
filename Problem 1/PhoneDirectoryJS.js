function add_contact()
{
	var x = document.forms["contact_form"]["mobile"].value;
	var y = document.forms["contact_form"]["name"].value;
	var z = document.forms["contact_form"]["email"].value;
	
	if (x.length != 10) 
	{
		alert("Mobile number needs to be 10 digits long");
		return false;
	}
	
	if (/^[A-Za-z\s]*$/.test(y) == false)
	{
		alert("Name isn't valid. The name can only contain alphabets and spaces");
		return false;
	}
	
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

function mobile_phone_search() 
{
	var input = document.getElementById("search");
	
	var table = document.getElementById("contact_list");
	
	var tr = table.getElementsByTagName("tr");
	
	var td;
	
	var cell;
	
	var i;
	
	for (i = 1; i < tr.length; i++) 
	{
		tr[i].style.display = "none";
  
		td = tr[i].getElementsByTagName("td");

		cell = tr[i].getElementsByTagName("td")[1];
		
		if (cell) 
		{
			if (cell.innerHTML.indexOf(input.value) > -1) 
			{
				tr[i].style.display = "";
			} 
		}
	}
}
