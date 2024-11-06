import { Router } from "express";

/**
 * @swagger
 * /api/v1/github-repos:
 *   get:
 *     summary: "Obtiene repositorios de un usuario de GitHub"
 *     description: "Esta ruta obtiene la lista de repositorios públicos de un usuario de GitHub."
 *     tags:
 *       - Repositorios github
 *     parameters:
 *       - in: query
 *         name: user
 *         required: true
 *         description: El nombre de usuario de GitHub para obtener los repositorios.
 *         schema:
 *           type: string
 *           example: octocat
 *     responses:
 *       200:
 *         description: "Lista de repositorios obtenida correctamente"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: "ID del repositorio"
 *                   name:
 *                     type: string
 *                     description: "Nombre del repositorio"
 *                   description:
 *                     type: string
 *                     description: "Descripción del repositorio"
 *                   url:
 *                     type: string
 *                     description: "URL del repositorio en GitHub"
 *               example:
 *                 - id: 12345
 *                   name: "octocat-repo"
 *                   description: "Este es un ejemplo de repositorio de Octocat"
 *                   url: "https://github.com/octocat/octocat-repo"
 *                 - id: 67890
 *                   name: "hello-world"
 *                   description: "Repositorio para aprender a usar GitHub"
 *                   url: "https://github.com/octocat/hello-world"
 *       500:
 *         description: "Error al obtener los datos desde la API de GitHub"
 */
const apipruebas = Router();

export class ApiPruebas {
  static routes(): Router {
    apipruebas.get("/github-repos", async (req, res) => {
      const user = req.query.user || "";
      try {
        const response = await fetch(
          `https://api.github.com/users/${user}/repos`,
        );

        const poke = await response.json();

        res.status(200).json(poke);
      } catch (error) {
        console.error(error);
        res.status(500).json({
          error: "Error al obtener los datos desde la PokeAPI",
        });
      }
    });

    return apipruebas;
  }
}
