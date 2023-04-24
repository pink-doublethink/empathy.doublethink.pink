import { useParams } from 'react-router-dom';

const Post = () => {
    const { title } = useParams();
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default Post