c.fillStyle="blue";
    for (var i = 0; i < data.length; i++) {
        var dp = data[i];
        c.fillRect(25 + i*100, 500-dp*5-30,50, dp*5)
        }   
    c.fillStyle = "white"; 
    c.fillRect(0,0,500,500);
    c.fillStyle = "blue"; 
    for(var i=0; i<data.length; i++) { 
        var dp = data[i]; 
        c.fillRect(40 + i*100, 460-dp*5 , 50, dp*5); 
    }
        c.fillStyle = "black";
    for (var i = 0; i<6; i++) {
        c.fillText((5-i)*20+"",4,i*80+60);
        c.beginPath();
        c.moveTo(25,i*80+60); 
        c.lineTo(30,i*80+60); 
        c.stroke(); 
    }
    var labels = ["JAN","FEB","MAR","APR","MAY"]; 
    for (var i =0; i<5; i++) {
        c.fillText(labels[i], 50+ i*100, 475);
    }
    c.fillStyle = "black";
    c.lineWidth = 2.0;
    c.beginPath();
    c.moveTo(30,10);
    c.lineTo(30,460);
    c.lineTo(490,460);
    c.stroke();