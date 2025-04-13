function run() {
    let html_code = document.getElementById('html-code').value
    let css_code = document.getElementById('css-code').value
    let js_code = document.getElementById('js-code').value
    let output = document.getElementById('output')

    output.contentDocument.body.innerHTML = html_code + "<style>" + css_code + "</style>"
    output.contentWindow.eval(js_code) 
}