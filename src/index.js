// import express from 'express';
import morgan from "morgan";
import { config } from "dotenv";
import { app, expressJSON, router } from "./routes/index.js";
import cors from "cors";

// initializing
config();

// settings global

// midlewares
app.use(morgan("dev"));
app.use(expressJSON);
app.use(cors({ origin: "http://localhost:3000" })); // esto vamos a desactiva para generar errores

// routes
app.use(router);

// static files
app.use((req, res) => {
  res.status(404).send("page not found.");
});

// server listenning
app.listen(process.env.PORT, () =>
  console.log(`Listennig server on port http://localhost:${process.env.PORT}`)
);
