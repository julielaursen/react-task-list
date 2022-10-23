import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

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
  ]); 

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
