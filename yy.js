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



_____________________________________________________________________


    window.requestAnimFrame = (function(){ 
        return  window.requestAnimationFrame   || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function( callback ){ 
                window.setTimeout(callback, 1000 / 60); 
              }; 
    })();

    var  canvas = document.getElementById('canvas');
    var particles = [];
    function loop() {
        window.requestAnimFrame(loop);
        createParticles();
        updateParticles();
        killParticles();
        drawParticles();
    }
    window.requestAnimFrame(loop);

    function createParticles(){
        if (particles.length<100) {
            particles.push({
                x: Math.random()*canvas.width,
                y:0,
                speed: 2+Math.random()*3,
                radius: 5+Math.random()*5,
                color:"white",
            });
        }
    }
    function updateParticles() {
        for(var i in particles) {
            var part = particles[i];
            part.y += part.speed;
        }
    }
    function killParticles() {
        for(var i in particles) {
            var part = particles[i];
            if(part.y > canvas.height) {
                part.y = 0;
            }
        }
    }

    function drawParticles(){
        var c = canvas.getContext('2d');
        c.fillStyle = "black";
        c.fillRect(0,0,canvas.width, canvas.height);
        for(var i in particles) {
            var part = particles[i];
            c.beginPath();
            c.arc(part.x,part.y,part.radius,0,Math.PI*2);
            c.closePath();
            c.fillStyle = part.color;
            c.fill();
        }
    }
______________________________________________________________________




function loop(){
    window.requestAnimFrame(loop);
    let tick =0;
    var frame = tick % 10;
    var x = frame * 12;
    var img;
    img = new Image();
        img.src = 'img.png';
    context.drawImage(
        img,
        x,0,13,13,
        0,0,13,13,
    );
    tick++;
};
window.requestAnimFrame(loop);
