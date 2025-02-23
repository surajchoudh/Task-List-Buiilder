	var i=0;var j=10;
	function addItem()
	{
		document.getElementById('error').innerHTML = "";
		var task=document.getElementById("task_txt").value;
		document.getElementById("task_txt").value = '';
		if(task=='')
		{   
	    var err="Please enter some task....";
		  document.getElementById('error').innerHTML=err;
		}
		else{
			
			var id = i;
			var text = document.getElementById('ul_id');
	//		console.log(text);
			
			var li = document.createElement('li');	
	
	//		console.log(li);
	//		console.log("before asign task to li innerText");
	
			li.innerText=task;
	
	//		console.log(li);
			
			li.setAttribute('ID', id);
			li.setAttribute('class','List');
	
			var dlt=document.createElement("Button");
			dlt.innerHTML = "Delete";
			dlt.setAttribute('class','dlt_bt');
			dlt.setAttribute('onclick', 'dltItem('+id+')');
	
	//		dlt.setAttribute('onclick','dltbut('+id+')');
	
			
			li.appendChild(dlt);
				
			var pos = text.firstElementChild;
			if(pos==null)
			{
				text.appendChild(li);
	//			text.appendChild(dlt);
			}
			else{
				text.insertBefore(li,pos);
	//			 text.insertBefore(dlt,pos);
			}
			i++;
	//		j++;
		}	
	}
	function dltItem(kj)
	{
	//	console.log("value of kj in delete Item function");
	//	console.log(kj);
		
		let del = document.getElementById(kj);
		
	//	console.log(del);
		
		let dltd_task = document.getElementById('ul2');
		console.log(dltd_task);
		del.removeChild(del.firstElementChild);
		
	//	console.log(dltd_task);
		
		let undo=document.createElement("Button");
			undo.innerHTML = "undo";
		    undo.setAttribute('id',j);
			undo.setAttribute('class','dlt_bt');
			
			
		//	console.log("value of j in dlt fun ");
		//	console.log(j);
		//	console.log("value of kj in dlt fun ");
		//	console.log(kj);
			
			del.appendChild(undo);
			
			dltd_task.appendChild(del);
			undo.setAttribute('onclick', 'Undo('+kj+')');
			
		//	del.removeChild(del.firstElementChild);
		//	console.log();
		
		j++;
	}
	function Undo(kj)
	{
		var un = document.getElementById(kj);
		un.removeChild(un.firstElementChild);
		var dlt=document.createElement("Button");
		dlt.innerHTML = "Delete";
		dlt.setAttribute('class','dlt_bt');
		dlt.setAttribute('onclick', 'dltItem('+kj+')');
		un.appendChild(dlt);
		 var undo_Item = document.getElementById('ul_id');
		 undo_Item.appendChild(un);
		
		console.log(undo_Item);
	console.log(kj);
		console.log(un);
	
	//	document.getElementById(
	//	un.removeChild(un.firstElementChild);
		
	}  
	function dltall()
	{
		while (ul_id.firstChild!=null)
		{
	//		console.log("delete all calling")
			
			ul_id.removeChild(ul_id.firstChild);
		
		}
		while (ul2.firstChild!=null)
		{
	//		console.log("delete all calling")
			
			ul2.removeChild(ul2.firstChild);
		
		}
	//	console.log();
	//	console.log("sare khatm");
		
	}
	function All_clear()
	{
	//	console.log("clear all calling");
		while (ul2.firstChild!=null)
		{
	//		console.log("all cleared");
			ul2.removeChild(ul2.firstChild);
		}
	}
	