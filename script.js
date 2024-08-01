document.getElementById("myButton").addEventListener("click", function() {
        // Play sound
        const sound = document.getElementById("clickSound");
        const sound1 = document.getElementById("clickSound1");
        const sound2 = document.getElementById("clickSound2");
        const sound3 = document.getElementById("clickSound3");
        const sound4 = document.getElementById("clickSound3");
        sound.play();
        setTimeout( ()=>sound1.play(), 1500);
        setTimeout( ()=>sound2.play(), 3000);
        setTimeout( ()=>sound3.play(), 3500);
        setTimeout( ()=>sound4.play(), 4500);
    setTimeout(function() {
            // Hide the h2, p elements, and button
    document.querySelector("h2").style.display = "none";
    document.querySelectorAll("p").forEach(function(p) {
        p.style.display = "none";
    });
    document.getElementById("myButton").style.display = "none";
    



    // Expand the image
    const img = document.getElementById("image");
    img.classList.add("expand");
    },500)

});
