const metinTamamı = document.querySelector(".container-wrapper");
const metinTodoBaslik = document.querySelector(".todo-list h4");
const poppup = document.querySelector(".dogrula-poppup");
const todoList = document.querySelector(".todo-list");
const respSearchBox = document.querySelector(".resp-search-box");

// Popup'u açan fonksiyon
const dogrulaAcilPoppup = () => {
    poppup.style.display = "block"; // Popup'u görünür yap
}

// Popup'u kapatan fonksiyon
const kapatPoppup = () => {
    poppup.style.display = "none";
}

// Metinleri güncelleyen fonksiyon
const degistirİnnerHTML = (deger) => {
    const texts = {
        metin1: {
            baslik: "Taverna",
            metin: `
            <p class="baslik">Taverna</p>
            <p>Lorem İpsum Door Sit Amet.</p>
            `,
            todoList: `
            <h4>Taverna</h4><br>
            <div class="todo-list-item">
                <span class="material-symbols-outlined" style="color: var(--blue);">
                    library_books
                </span>
                <p><a href="#taverna-giris" style="color: black; text-decoration: none;">Taverna Giriş</a></p>
            </div>
            `,
        }
    };

    if (deger === "x9gy45" || deger === "x09gy45") {
        metinTamamı.innerHTML = texts.metin1.metin;
        todoList.innerHTML = "";
        todoList.innerHTML = texts.metin1.todoList;
    }
};

// Doğrulama popup'ını kontrol eden fonksiyon
const dogrulaPoppup = () => {
    const input = document.querySelector(".dpc-right .google-input").value; // Input değerini burada al

    if (input === "X9GY45" || input === "x9gy45" || input === "X9gy45") {
        metinTamamı.innerHTML = "";
        degistirİnnerHTML("x9gy45");
        kapatPoppup();
    } else {
        if (input === "X09GY45" || input === "x09gy45" || input === "X09gy45") {
            metinTamamı.innerHTML = "";
            degistirİnnerHTML("x09gy45");
            kapatPoppup();
        } else {
            alert("Doğru değil");
        }
    }
};


const respSearchBoxOpenFunction = () => {
    respSearchBox.style.display = "block";
}

const respSearchBoxCloseFunction = () => {
    respSearchBox.style.display = "none";
}

const appsAcilPoppup = () => {
    const apps = document.querySelector(".apps");
    apps.style.display = "block";
}
const appsKapatPoppup = () => {
    const apps = document.querySelector(".apps");
    apps.style.display = "none";
}

