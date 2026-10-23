for(let i = 0; i < items.length; i++){

    const title =
        items[i].getAttribute("title") ||
        "Uten tittel";

    html += `
    <div class="question">

        <h3>${title}</h3>

        <p>
        Canvas-spørsmål lastet inn.
        </p>

    </div>
    `;
}
