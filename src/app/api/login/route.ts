// app/api/login/route.ts
import { NextResponse } from 'next/server';

const users = [
  { email: 'admin@example.com', password: '123456' },
  { email: 'user@example.com', password: 'abcdef' },
];

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = users.find((u) => u.email === email);

  if (!user) {
    return NextResponse.json({ success: false, error: 'Correo no registrado' }, { status: 401 });
  }

  if (user.password !== password) {
    return NextResponse.json({ success: false, error: 'Contraseña incorrecta' }, { status: 401 });
  }

  return NextResponse.json({ success: true });
}
