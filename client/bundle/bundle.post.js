'use strict';

// tooltip({
//   icon: "warnig",
//   text: "Ocurrio un erro en el servidor",
// });
const tooltip = (obj) => {
  let type = obj.type || "default";

  const htmlTooltip = `
    <div class="box-tooltips active tooltip-${type}">
      <i class="${obj.icon}"></i>
      <p class="tooltip-text">${obj.text}</p>
    </div>
  `;

  const parser = new DOMParser()
    .parseFromString(htmlTooltip, "text/html")
    .querySelector("div");

  document.body.appendChild(parser);
  // alert("testing");
  // document.body.innerHTML += htmlTooltip;

  const timer = setTimeout(() => {
    parser.remove();
    clearTimeout(timer);
  }, 3000);
};

const form = document.querySelector("#form-post");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);

  const json = {};
  for (const [key, value] of data.entries()) {
    json[key] = value;
  }

  sendDataServer(json);
  form.reset();
});

const sendData = async (url, config) => {
  try {
    const responseFetch = await fetch(url, config);
    if (responseFetch.ok) {
      const dataReceived = await responseFetch.json();
      tooltip({
        type: "success",
        icon: "fa-solid fa-check",
        text: dataReceived.message,
      });
      // c(dataReceived);
    } else {
      throw new Error("Error en el servidor");
    }

    // c(responseFetch);
  } catch (error) {
    tooltip({
      type: "danger",
      icon: "fa-solid fa-xmark",
      text: `${error.message}`,
    });
  }
};

const sendDataServer = (data) => {
  const urlSendServer = "http://localhost:4500/dbadd",
    config = {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

  sendData(urlSendServer, config);
};
