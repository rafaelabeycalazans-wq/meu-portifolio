// Selecionar o botão e associar o evento de clique
const botaoCalcular = document.getElementById('btnCalcular');

botaoCalcular.addEventListener('click', function() {
    // 4. Capturar os valores dos inputs com .value
    const pesoInput = document.getElementById('peso').value;
    const alturaInput = document.getElementById('altura').value;

    const pImc = document.getElementById('resultadoImc');
    const pClassificacao = document.getElementById('resultadoClassificacao');

    // Validar se os campos estão preenchidos
    if (pesoInput === '' || alturaInput === '') {
        pImc.textContent = "Por favor, preencha todos os campos!";
        pClassificacao.textContent = "";
        return;
    }

    // 5. Converter valores de texto para números com Number() ou parseFloat()
    const peso = parseFloat(pesoInput);
    const altura = parseFloat(alturaInput);

    // 6. Calcular o IMC com a fórmula: IMC = peso / (altura × altura)
    const imc = peso / (altura * altura);

    // Definir a classificação do IMC
    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Classificação: Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Classificação: Peso normal (Saudável)";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Classificação: Sobrepeso";
    } else {
        classificacao = "Classificação: Obesidade";
    }

    // 7. Exibir os resultados dinamicamente nas tags <p>
    pImc.textContent = `O seu IMC é: ${imc.toFixed(2)}`;
    pClassificacao.textContent = classificacao;
});