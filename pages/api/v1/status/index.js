import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT NOW() as dia;");
  console.log(result.rows)
  response.status(200).json({ Eu: "sou acima da média." });
}

export default status;