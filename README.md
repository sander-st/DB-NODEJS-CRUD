## creando un servicio de almacenar datos de usuarios (nodejs)

### modulos que se usa en el lado del servidor

- express
- morgan
- dontenv
- mysql2
- nodemon (dev)
- cors
  - usamos para la configuración de **Access-Control-Allow-Origin**

```bash
npm i express morgan dontenv mysql2 cors
```

- instalar nodemon como dependencia de desarrollador

```bash
npm i nodemon -D
```

---

crear un fichero de configuracion en la raiz **_.env_**

guarda tus configuraciones de entorno en el fichero **_.env_**, ejemplo:

```note
# process variables
PORT=4500
PORT_MYSQL=3306
PASSWORD_MYSQL='yourpassword'
URI_MYSQL=localhost
DATABASE='nombre de tu base de datos'
USER_MYSQL=root
```
