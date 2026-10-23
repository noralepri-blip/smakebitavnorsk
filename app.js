async function loadQuiz(file) {

    try {

        const response = await fetch(file);

        const xmlText = await response.text();

        const parser = new DOMParser();

        const xml = parser.parseFromString(
            xmlText,
            "text/xml"
        );

        const items =
            xml.getElementsByTagName("item");

        let html = "";

        html += `<h2>Fant ${items.length} spørsmål</h2>`;

        for(let i = 0; i < items.length; i++){

            const title =
                items[i].getAttribute("title") ||
                `Spørsmål ${i+1}`;

            let questionText = "";

            const mattexts =
                items[i].getElementsByTagName("mattext");

            if(mattexts.length > 0){

                questionText =
                    mattexts[0].textContent;
            }

            html += `
            <div class="question">

                <h3>${title}</h3>

                <div>
                    ${questionText}
                </div>

            </div>
            `;
        }

        document.getElementById("quiz")
            .innerHTML = html;

    }
    catch(error){

        console.error(error);

        document.getElementById("quiz")
            .innerHTML =
            "<p>Feil: " + error + "</p>";
    }
}
