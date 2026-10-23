async function loadQuiz(file) {

    try {

        const response = await fetch(file);

        const xmlText = await response.text();

        const parser = new DOMParser();

        const xml =
            parser.parseFromString(
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
                "Uten tittel";

            html += `
                <div style="
                    border:1px solid #ccc;
                    padding:15px;
                    margin:10px 0;
                ">
                    <strong>${title}</strong>
                </div>
            `;
        }

        document
            .getElementById("quiz")
            .innerHTML = html;

    }
    catch(error){

        document
            .getElementById("quiz")
            .innerHTML =
            "<p>Feil: " + error + "</p>";

        console.error(error);
    }
}
