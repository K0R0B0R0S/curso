const form = document.getElementById("compara")


form.addEventListener("submit",
    (e) => {
        e.preventDefault()

        const aField = document.getElementById("campo-a")
        const bField = document.getElementById("campo-b")
        const outputField = document.getElementById("output")

        aValue = aField.value
        bValue = bField.value
        if (bValue > aValue) {
            outputField.innerHTML = "Valores Válidos: B é maior que A"
            if (outputField.classList.contains("invalido")) {
                outputField.classList.remove("invalido")
            }
            outputField.classList.add("valido")
        } else {
            outputField.innerHTML = "Valores Inválidos: B é menor que A"
            if (outputField.classList.contains("valido")) {
                outputField.classList.remove("valido")
            }
            outputField.classList.add("invalido")

        }


    }
)

form.addEventListener("reset",
    (e) => {
        const outputField = document.getElementById("output")
        outputField.innerHTML = ""
        outputField.remove("valido", "invalido")
    }
)