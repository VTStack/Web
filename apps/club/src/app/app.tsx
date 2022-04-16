import client from './client';

export function App() {
  console.log(client.auth.user());
  // const { data, loading, error } = useQuery(testing);
  // console.log(data, loading, error);
  return <h1>hello</h1>;
}

export default App;
