export function Header(props) {
  const { todos } = props
  const todosLength = todos.length
  const isPrular = (todosLength > 1) ? 'tabs' : 'tab'

  return (
    <header>
      <h1 className="text-gradient">You have {todosLength} open {isPrular}.</h1>
    </header>
  )
}
