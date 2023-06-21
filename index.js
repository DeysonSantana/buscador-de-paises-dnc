document.getElementById('card').style.setProperty('Display', 'none', 'important')

function Procurar (){
    document.getElementById('card').style.setProperty('Display', 'block', 'important')

    let pais = document.getElementById('pais').value
    let finalUrl = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    console.log(finalUrl)
    fetch(finalUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data[0])
        console.log(data[0].population)
        console.log(data[0].capital[0])
        console.log(data[0].continents[0])

        let bandeira = document.getElementById('bandeira')
        let name = document.getElementById('nome')
        let capital = document.getElementById('capital')
        let continente = document.getElementById('continente')
        let populacao= document.getElementById('populacao')

        name.innerHTML = pais
        capital.innerHTML = data[0].capital[0]
        continente.innerHTML = data[0].continents[0]
        populacao.innerHTML = data[0].population
        bandeira.src = data[0].flags.svg
    })
}