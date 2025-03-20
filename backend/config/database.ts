import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "db_pphfn",
  process.env.DB_USER || "root",
  process.env.DB_PASS || "password",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: false,
  }
);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a MySQL exitosa");
  } catch (error) {
    console.error("❌ Error al conectar a MySQL:", error);
  }
};

testConnection();

export default sequelize;
