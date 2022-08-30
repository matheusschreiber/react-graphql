import { gql, useQuery } from "@apollo/client";


const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
interface Lesson {
  id: string
  title:string
}

function App() {
  const { data } = useQuery<{lessons:Lesson[]}>(GET_LESSONS_QUERY)

  return (
    <ul>
      {
        data?.lessons.map((l:Lesson, pos:number)=>{
          return <li key={pos}>{l.title}</li>
        })
      }
    </ul>
  )
}

export default App
