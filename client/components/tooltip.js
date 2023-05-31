// tooltip({
//   icon: "warnig",
//   text: "Ocurrio un erro en el servidor",
// });
export const tooltip = (obj) => {
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
