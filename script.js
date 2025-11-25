function createTable() {
    //Write your code here
	const rows=prompt("Input number of rows");
	const cols=prompt("Input number of columns");

	if(isNaN(rows) || isNaN(cols) ||rows<=0 || cols<=0){
		alert("Invalid input .please provide the positive number.");
		return;
	}
	const rn=parseInt(rows);
	const cn=parseInt(cols);

	const table=document.getElementById("myTable");

	table.innerHTML="";


	for(let i=0;i<rn;i++){
		const row=table.insertRow();
		for(let j=0;j<cn;j++){
			const cell=row.insertCell();
			cell.textContent=`Row-${i} Column-${j}`;
		}
	}



	

	
}
