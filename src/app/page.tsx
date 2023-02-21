export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const toDo = await response.json()

  return (
    <div>
      <h1>ToDo:</h1>
      <pre>{JSON.stringify(toDo, null, 2)}</pre>
    </div>
  )
}
