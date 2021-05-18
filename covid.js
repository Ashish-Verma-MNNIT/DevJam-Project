const url="https://api.covid19india.org/data.json";
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            var i=0;
            while(data['statewise'][i]){
                var table=document.getElementById("table1");
                var row = table.insertRow(i+1);
                var cell0 = row.insertCell(0);
                var cell1 = row.insertCell(1);
                var cell2 = row.insertCell(2);
                var cell3 = row.insertCell(3);
                var cell4 = row.insertCell(4);
                cell0.innerHTML= data['statewise'][i]['state'];
                cell1.innerHTML= data['statewise'][i]['confirmed'];
                cell2.innerHTML=data['statewise'][i]['active'];
                cell3.innerHTML=data['statewise'][i]['deaths'];
                cell4.innerHTML=data['statewise'][i]['lastupdatedtime'];
                i++;
            }
        })
        const url2="https://api.covid19api.com/summary";
        fetch(url2)
        .then(response =>response.json())
        .then(data =>{
            var i=0;
            while(data['Countries'][i]){
                var table=document.getElementById("table2");
                var row = table.insertRow(i+1);
                var cell0 = row.insertCell(0);
                var cell1 = row.insertCell(1);
                var cell2 = row.insertCell(2);
                var cell3 = row.insertCell(3);
                var cell4 = row.insertCell(4);
                cell0.innerHTML= data['Countries'][i]['Country'];
                cell1.innerHTML= data['Countries'][i]['TotalConfirmed'];
                cell2.innerHTML=data['Countries'][i]['TotalDeaths'];
                cell3.innerHTML=data['Countries'][i]['TotalRecovered'];
                cell4.innerHTML=data['Countries'][i]['Date'];
                i++;
            }
        });