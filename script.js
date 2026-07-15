const method =
document.getElementById("method");

const url =
document.getElementById("url");

const bodyInput =
document.getElementById("body");

const responseBox =
document.getElementById("response");

const historyDiv =
document.getElementById("history");

let history =
JSON.parse(
localStorage.getItem("history")
) || [];

function saveHistory(){

    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );
}

function renderHistory(){

    historyDiv.innerHTML = "";

    history.forEach(item => {

        const div =
        document.createElement("div");

        div.className =
        "history-item";

        div.textContent =
        `${item.method}
         ${item.url}`;

        div.onclick = () => {

            method.value =
            item.method;

            url.value =
            item.url;

            bodyInput.value =
            item.body;
        };

        historyDiv.appendChild(div);
    });
}

document
.getElementById("sendBtn")
.addEventListener(
"click",
async () => {

    const request = {

        method:
        method.value,

        headers:{
            "Content-Type":
            "application/json"
        }
    };

    if(
        method.value !== "GET"
    ){

        request.body =
        bodyInput.value;
    }

    try{

        const start =
        performance.now();

        const res =
        await fetch(
            url.value,
            request
        );

        const data =
        await res.json();

        const end =
        performance.now();

        responseBox.textContent =
        JSON.stringify(
            {
                status:
                res.status,

                time:
                `${Math.round(
                    end-start
                )}ms`,

                data
            },
            null,
            2
        );

        history.unshift({

            method:
            method.value,

            url:
            url.value,

            body:
            bodyInput.value
        });

        saveHistory();
        renderHistory();

    }catch(error){

        responseBox.textContent =
        error.message;
    }
});

renderHistory();