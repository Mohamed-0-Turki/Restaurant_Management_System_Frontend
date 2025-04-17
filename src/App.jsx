import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {
  RouterProvider,
} from "react-router";
import createAppRouter from './router';

const queryClient = new QueryClient()


function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={createAppRouter(true, "admin")} />
      </QueryClientProvider>
    </>
  )
}

export default App
