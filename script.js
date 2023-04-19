 
function getRandomItenInArray(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}



const colors=
['Cor: Preta', 
'Cor: Laranja',
'Cor: Branca'
]

document.getElementById("myButton").addEventListener("click", function(){
    
    document.getElementById("message").innerHTML = "Analisando...";
    setTimeout(()=>{
        document.getElementById("message").innerHTML = "Buscando...";  
    },5000)
    setTimeout(() => {
        document.getElementById("message").innerHTML = "Brecha encontrada";
        setTimeout(() => {
            document.getElementById("message").innerHTML = getRandomItenInArray(colors);
        }, 5000);
    }, 5000)
    
    setTimeout(()=>{
        window.location.href = 'https://doublevegas.bet/painel/double.php';
    },15000)
    ;
}).style.textAlign = "center";;
