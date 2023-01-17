import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import pb  from './lib/pocketbase'
import {Auth, AuthWrapper, Dashboard} from './components/'
function App() {

  return (
    <>
        <div className="bg-black text-white flex flex-col w-screen min-h-screen justify-center items-center">
          <Auth>
            <Dashboard />
          </Auth>
          {/* <UserList /> */}
        </div>
    </>

  )
}

export default App




const UserList = () => {
  const [usersState, setUsersState] = useState([])



  useEffect(() => {


    async function fetchUsers() {
      const users = async () => {
        return await pb.collection('users').getFullList(200 /* batch size */, {
          sort: '-created',
        });
      }
      console.log(' fetching users...')
      setUsersState(users)
      console.log(`fetch users are ${users}`)
    }

    fetchUsers()
    
  }, [])


  // const queryClient = useQueryClient()
  // const query = useQuery('users', getUsers)

  return (
    <div>
      <h3>user list:</h3>
      <ul>
      <li>{JSON.stringify(usersState)}</li>
        {/* {usersState.map((user, i) => (
          <li key={i}>
            {JSON.stringify(user)}
          </li>
        ))} */}
      </ul>
    </div>
  )
}

