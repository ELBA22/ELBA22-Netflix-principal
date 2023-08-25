const path = "config";

let construirHead = async()=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let selecion = document.querySelector("#myJsonSection");
    selecion.insertAdjacentHTML("beforeend",/*html*/`
    <h1 clas="display-6 fw-normal text-body-emphasis">${resizeTo.section.
        titulo}</h1>
        <p class = "fs-5 text-body-secondary">
            ${res.section.parrafo.map((value)=> /*html*/`
                <img src = "${value.imagen}"
                    class = "me-2"
                    style="width: 2vh; filter: invert(100%) sepia(0%) saturate
                    (1%) hue-rotate(72deg) brightness(104%) contrast(101%);"
                alt = "">${value.texto}<br>`).join("")}
        </p>
    `);
}

let construirElEncabezado = async()=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let selecion = document.querySelector("#myJsonSection");
    selecion.insertAdjacentHTML("beforeend", /*html*/`
    
    )
};