async function loadQuiz(file) {

    alert("Prøver å laste: " + file);

    try {

        const response = await fetch(file);

        alert("Status: " + response.status);

        const xmlText = await response.text();

        alert("Fil lest!");

        document.getElementById("quiz").innerHTML =
            "<pre>" + xmlText.substring(0,500) + "</pre>";

    }
    catch(error){

        alert("FEIL: " + error);

        console.error(error);
    }
}
