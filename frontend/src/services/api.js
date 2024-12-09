const BASE_URL = 'http://localhost:8080/api';

export async function fetchTasks() {
    const response = await fetch(`${BASE_URL}/tasks`);
    if (!response.ok) throw new Error('Failed to fetch tasks');
    return await response.json();
}

export async function loginUser(credentials) {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });
    if (!response.ok) throw new Error('Login failed');
    return await response.json();
}
