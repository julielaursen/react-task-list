import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's appointment",
      day: 'Nov 4, 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Send thank you notes',
      day: 'Oct 23, 8:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Call mom',
      day: 'Oct 23, 9:00pm',
      reminder: true,
    },
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task,
      ),
    )
  }

  // app.js is where we get access to state
  // state gets passed down, actions get passed up
  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'There are no tasks'
      )}
    </div>
  )
}

export default App
