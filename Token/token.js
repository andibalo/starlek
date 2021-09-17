    function btntest_onclick(){
        if (document.getElementById('TokenInput').value == '1234') {
            window.location.href = "http://www.google.com";
        } else if(document.getElementById('TokenInput').value == '0000'){
            window.location.href = "http://www.bing.com";
        } else{
            alert("Isi yg bener dong!");
        }
    };