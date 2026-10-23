for(let i = 0; i < items.length; i++){

    const title =
        items[i].getAttribute("title");

    const mattext =
        items[i]
        .getElementsByTagName("mattext");

    let text = "";

    if(mattext.length > 0){

        text =
            mattext[0]
            .textContent
            .substring(0,500);
    }

    html += `
        <div style="
            border:1px solid #ccc;
            padding:15px;
            margin:10px 0;
            border-radius:8px;
        ">
            <h3>${title}</h3>

            <p>${text}</p>

        </div>
    `;
}
