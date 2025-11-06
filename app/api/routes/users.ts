import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { prisma } from "@/lib/db";
import { createUserSchema, updateUserSchema } from "@/lib/schemas";

const users = new Hono()
  // Listar usuários
  .get("/", async (c) => {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
        },
      });
      return c.json({ users });
    } catch (error) {
      return c.json({ error: "Erro ao buscar usuários" }, 500);
    }
  })

  // Buscar usuário por ID
  .get("/:id", async (c) => {
    const id = c.req.param("id");

    try {
      const user = await prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      if (!user) {
        return c.json({ error: "Usuário não encontrado" }, 404);
      }

      return c.json({ user });
    } catch (error) {
      return c.json({ error: "Erro ao buscar usuário" }, 500);
    }
  })

  // Criar usuário (com validação Zod)
  .post("/", zValidator("json", createUserSchema), async (c) => {
    const data = c.req.valid("json");

    try {
      const user = await prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
        },
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
        },
      });

      return c.json({ user }, 201);
    } catch (error: any) {
      if (error.code === "P2002") {
        return c.json({ error: "Email já cadastrado" }, 409);
      }
      return c.json({ error: "Erro ao criar usuário" }, 500);
    }
  })

  // Atualizar usuário (com validação Zod)
  .patch("/:id", zValidator("json", updateUserSchema), async (c) => {
    const id = c.req.param("id");
    const data = c.req.valid("json");

    try {
      const user = await prisma.user.update({
        where: { id },
        data,
        select: {
          id: true,
          name: true,
          email: true,
          updatedAt: true,
        },
      });

      return c.json({ user });
    } catch (error: any) {
      if (error.code === "P2025") {
        return c.json({ error: "Usuário não encontrado" }, 404);
      }
      if (error.code === "P2002") {
        return c.json({ error: "Email já cadastrado" }, 409);
      }
      return c.json({ error: "Erro ao atualizar usuário" }, 500);
    }
  })

  // Deletar usuário
  .delete("/:id", async (c) => {
    const id = c.req.param("id");

    try {
      await prisma.user.delete({
        where: { id },
      });

      return c.json({ message: "Usuário deletado com sucesso" });
    } catch (error: any) {
      if (error.code === "P2025") {
        return c.json({ error: "Usuário não encontrado" }, 404);
      }
      return c.json({ error: "Erro ao deletar usuário" }, 500);
    }
  });

export default users;
