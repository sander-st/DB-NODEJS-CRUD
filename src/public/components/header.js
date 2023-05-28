const compHeader = () => {
  const urlPath = location.href,
    // nameUrl = fileURL.substring(fileURL.lastIndexOf("/") + 1),
    urlNotDocument = urlPath.replace(/\/[^/]+$/, "");

  const currentTarget = document.currentScript.parentNode;
  const header = `
  <header id="header" class="header" data-content="header">
    <div class="brand_content">
      <a href="#" class="brand"><img src="./images/sander_logo.png" alt="save dates user database"></a>
    </div>
    <nav class="navbar" id="navbar">
      <ul class="nav_content">
        <li class="nav_item"><a href="${urlNotDocument}/index.html" class="item"><i class="fa-solid fa-house"></i>Inicio</a></li>
        <li class="nav_item"><a href="${urlNotDocument}/tables.html" class="item"><i class="fa-solid fa-table"></i>Tabla de Usuarios</a></li>
      </ul>
    </nav>
  </header>
  `;

  // autor: s4nder
  const parser = new DOMParser()
    .parseFromString(header, "text/html")
    .querySelector("header");

  if (currentTarget.childNodes.length > 0) {
    let firstChild = currentTarget.childNodes[0];
    currentTarget.insertBefore(parser, firstChild);
  } else {
    currentTarget.appendChild(parser);
  }

  // add class active a item nav
  [...document.querySelector("#navbar").querySelectorAll("a")]
    .filter((items) => items.href === urlPath)[0]
    .classList.add("active");
};
