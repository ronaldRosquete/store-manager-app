// lib/fetchUsers.ts
import { User } from '../types/user';

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch('https://68f046d30b966ad500326005.mockapi.io/api/v1/users');
  if (!response.ok) {
    throw new Error('Error al obtener los usuarios');
  }
  const data: User[] = await response.json();
  return data;
}
