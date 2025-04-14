
export async function POST(request) {
  const { userName, email } = await request.json();

  // Simulate a database insert operation
  const newUser = { id: Date.now(), userName, email };

  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}