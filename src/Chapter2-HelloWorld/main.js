const fetchAndInstantiate = (url, importObject) =>
    fetch(url)
        .then(response => response.arrayBuffer())
        .then(bytes => WebAssembly.instantiate(bytes, importObject))
        .then(results => results.instance)

const render = data => {
    const age = document.querySelector("#age")
    age.innerText = data;
}

fetchAndInstantiate("hello.wasm")
    .then(instance => instance.exports.how_old)
    .then(how_old => how_old(2023, 2000))
    .then(render)
