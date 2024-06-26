document.addEventListener('DOMContentLoaded', (event) => {
    // Load saved code from localStorage
    if (localStorage.getItem('htmlCode')) {
        document.getElementById("htmlCode").value = localStorage.getItem('htmlCode');
    }
    if (localStorage.getItem('cssCode')) {
        document.getElementById("cssCode").value = localStorage.getItem('cssCode');
    }
    if (localStorage.getItem('jsCode')) {
        document.getElementById("jsCode").value = localStorage.getItem('jsCode');
    }
    showPreview();

    // Add event listeners to save code on input
    document.getElementById("htmlCode").addEventListener('input', () => {
        localStorage.setItem('htmlCode', document.getElementById("htmlCode").value);
        showPreview();
    });

    document.getElementById("cssCode").addEventListener('input', () => {
        localStorage.setItem('cssCode', document.getElementById("cssCode").value);
        showPreview();
    });

    document.getElementById("jsCode").addEventListener('input', () => {
        localStorage.setItem('jsCode', document.getElementById("jsCode").value);
        showPreview();
    });
});

function showPreview() {
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = "<style>" + document.getElementById("cssCode").value + "</style>";
    var jsCode = "<script>" + document.getElementById("jsCode").value + "</script>";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode + cssCode + jsCode);
    frame.close();
}

function show(x) {
    document.getElementById("html").style.display = "none";
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById(x).style.display = "block";
}

function show_all() {
    if (window.innerWidth >= 992) {
        document.getElementById("html").style.display = "block";
        document.getElementById("css").style.display = "block";
        document.getElementById("js").style.display = "block";
        document.getElementById("result").style.display = "block";
    }
    if (window.innerWidth < 992 && document.getElementById("html").style.display == "block") {
        document.getElementById("css").style.display = "none";
        document.getElementById("js").style.display = "none";
        document.getElementById("result").style.display = "none";
    }
}
