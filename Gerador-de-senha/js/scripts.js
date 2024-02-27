//seleção de elementos
const generatePasswordBtn = document.querySelector("#generate-password")
const genereteNew = document.querySelector("#password-new")


// Funcionalidade custumização 

const openCloseGeneratorBtn = document.querySelector("#open-generate-password")
const generatePasswordContainer = document.querySelector("#generate-optinos")
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const copyPasswordButton = document.querySelector("#copy-password");

//função

const getLeetterLowerCase = () =>{

    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
};


const getLeetterUpperCase = () =>{

    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
};


const getNumber = () =>{

    return Math.floor(Math.random() * 10).toString();
};


const generatePassword = (getLeetterLowerCase, getLeetterUpperCase ,getNumber) => {

    let password = ""

    const passwordLength = +lengthInput.value;

    const  generators = []

    if(lettersInput.checked) {
        generators.push(getLeetterLowerCase, getLeetterUpperCase)
    }
    
    if(numbersInput.checked) {
        generators.push(getNumber)
    }
    if(generators.length === 0) {
        return;
    }


    for(i = 0; i < passwordLength; i = i + generators.length)

    generators.forEach(() => {
        const radomValue = generators[Math.floor(Math.random() * generators.length)]();
      
        password +=  radomValue

    })

    password = password.slice(0, passwordLength);

       genereteNew.style.display = "block";
       genereteNew.querySelector("h4").innerText = password

    };




//Eventos


generatePasswordBtn.addEventListener("click", () => {
    
    generatePassword(getLeetterLowerCase,
        getLeetterUpperCase,
        getNumber);



});

openCloseGeneratorBtn.addEventListener("click", () => {

    generatePasswordContainer.classList.toggle("hide");

})


copyPasswordButton.addEventListener("click", (e) => {

    e.preventDefault()

    const password = genereteNew.querySelector("h4").innerText

    navigator.clipboard.writeText(password).then(() => {

        copyPasswordButton.innerHTML = "senha copiada com sucesso!"
   
        setTimeout(() =>{
            copyPasswordButton.innerHTML = "Copiar"
        }, 1000)

    })

})