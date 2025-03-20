import express from "express";
import cors from "cors";
import sequelize from "./config/database";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

app.listen(PORT, async () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);

  try {
    await sequelize.sync({ alter: true });
    console.log("✅ Base de datos sincronizada");
  } catch (error) {
    console.error("❌ Error al sincronizar la base de datos:", error);
  }
});
