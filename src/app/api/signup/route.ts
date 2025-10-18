import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email y contraseña requeridos" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return NextResponse.json(
        { success: false, error: "El correo ya está registrado" },
        { status: 409 }
      );
    }

    const newUser = await prisma.user.create({
      data: { email, password },
    });

    return NextResponse.json({ success: true, userId: newUser.id });
  } catch (error) {
    console.error("Error en /api/signup:", error);
    return NextResponse.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
