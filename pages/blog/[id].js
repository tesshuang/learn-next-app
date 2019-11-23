import { useRouter } from 'next/router';
import posts from '../../posts.json';
import Nav from '../../components/nav'

export default () => {
  const router = useRouter();
  const post = posts[router.query.id];
  if (!post) return <p></p>;

  return (
    <>
      <Nav />
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <style jsx>{`
        h1{
          color: green;
        }
      `}
      </style>
    </>
  )
};