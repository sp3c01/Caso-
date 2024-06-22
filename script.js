// Event listener para formulário de resolução de enigmas
document.getElementById("riddleForm1").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    var answer1 = document.getElementById("answer1").value.toLowerCase(); // Converte a resposta para minúsculas
    var result1 = document.getElementById("result1");

    if (answer1 === "pista" || answer1 === "pistas") {
        result1.textContent = "Correto! Você encontrou uma pista crucial.";
        sendData(answer1, result1); // Envia a resposta para o servidor
    } else {
        result1.textContent = "Resposta incorreta. Por que você não tenta novamente?";
    }
    document.getElementById("answer1").value = ""; // Limpa o campo de resposta após verificar
});

document.getElementById("riddleForm2").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    var answer2 = document.getElementById("answer2").value.toLowerCase(); // Converte a resposta para minúsculas
    var result2 = document.getElementById("result2");

    if (answer2 === "sequestro" || answer2 === "sequestrada") {
        result2.textContent = "Correto! Alison Botha foi sequestrada naquela noite.";
        sendData(answer2, result2); // Envia a resposta para o servidor
    } else {
        result2.textContent = "Resposta incorreta. Por que você não tenta novamente?";
    }
    document.getElementById("answer2").value = ""; // Limpa o campo de resposta após verificar
});

document.getElementById("riddleForm3").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    var answer3 = document.getElementById("answer3").value.toLowerCase(); // Converte a resposta para minúsculas
    var result3 = document.getElementById("result3");

    if (answer3 === "facão" || answer3 === "facao") {
        result3.textContent = "Correto! Um facão foi encontrado próximo ao local do crime.";
        sendData(answer3, result3); // Envia a resposta para o servidor
    } else {
        result3.textContent = "Resposta incorreta. Por que você não tenta novamente?";
    }
    document.getElementById("answer3").value = ""; // Limpa o campo de resposta após verificar
});

document.getElementById("riddleForm4").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    var answer4 = document.getElementById("answer4").value.toLowerCase(); // Converte a resposta para minúsculas
    var result4 = document.getElementById("result4");

    if (answer4 === "vizinho" || answer4 === "testemunha") {
        result4.textContent = "Correto! Um vizinho viu algo suspeito naquela noite.";
        sendData(answer4, result4); // Envia a resposta para o servidor
    } else {
        result4.textContent = "Resposta incorreta. Por que você não tenta novamente?";
    }
    document.getElementById("answer4").value = ""; // Limpa o campo de resposta após verificar
});

document.getElementById("riddleForm5").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    var answer5 = document.getElementById("answer5").value.toLowerCase(); // Converte a resposta para minúsculas
    var result5 = document.getElementById("result5");

    if (answer5 === "23:00" || answer5 === "23h" || answer5 === "23 horas") {
        result5.textContent = "Correto! O incidente ocorreu às 23:00.";
        sendData(answer5, result5); // Envia a resposta para o servidor
    } else {
        result5.textContent = "Resposta incorreta. Por que você não tenta novamente?";
    }
    document.getElementById("answer5").value = ""; // Limpa o campo de resposta após verificar
});

document.getElementById("riddleForm6").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    var answer6 = document.getElementById("answer6").value.toLowerCase(); // Converte a resposta para minúsculas
    var result6 = document.getElementById("result6");

    if (answer6 === "comparsa" || answer6 === "cumplice") {
        result6.textContent = "Correto! O nome do cúmplice foi revelado.";
        sendData(answer6, result6); // Envia a resposta para o servidor
    } else {
        result6.textContent = "Resposta incorreta. Por que você não tenta novamente?";
    }
    document.getElementById("answer6").value = ""; // Limpa o campo de resposta após verificar
});

document.getElementById("riddleForm7").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    var answer7 = document.getElementById("answer7").value.toLowerCase(); // Converte a resposta para minúsculas
    var result7 = document.getElementById("result7");

    if (answer7 === "mato" || answer7 === "matagal") {
        result7.textContent = "Correto! O veículo foi encontrado escondido em um matagal.";
        sendData(answer7, result7); // Envia a resposta para o servidor
    } else {
        result7.textContent = "Resposta incorreta. Por que você não tenta novamente?";
    }
    document.getElementById("answer7").value = ""; // Limpa o campo de resposta após verificar
});

document.getElementById("riddleForm8").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    var answer8 = document.getElementById("answer8").value.toLowerCase(); // Converte a resposta para minúsculas
    var result8 = document.getElementById("result8");

    if (answer8 === "vingança" || answer8 === "vingar-se") {
        result8.textContent = "Correto! O sequestro foi motivado por vingança.";
        sendData(answer8, result8); // Envia a resposta para o servidor
    } else {
        result8.textContent = "Resposta incorreta. Por que você não tenta novamente?";
    }
    document.getElementById("answer8").value = ""; // Limpa o campo de resposta após verificar
});

// Função para enviar dados para o servidor e tratar a resposta
function sendData(answer, resultElement) {
    // Cria um objeto com os dados a serem enviados
    var data = {
        answer: answer
    };

    // Configuração da requisição HTTP
    var xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:8000"; // URL do servidor local
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Converte o objeto de dados para JSON antes de enviar
    xhr.send(JSON.stringify(data));

    // Callback para quando a requisição retornar do servidor
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                handleServerResponse(response, resultElement);
            } else {
                console.error("Ocorreu um erro ao enviar a resposta para o servidor.");
            }
        }
    };
}

// Função para lidar com a resposta do servidor
function handleServerResponse(response, resultElement) {
    if (response.correct) {
        resultElement.textContent = "Resposta correta!";
    } else {
        resultElement.textContent = "Resposta incorreta. Por que você não tenta novamente?";
    }
}