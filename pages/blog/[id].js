import { useRouter } from 'next/router';
import posts from '../../posts.json';
// import Nav from '../../components/nav'
import Layout from '../../components/layout'

export default () => {
  const router = useRouter();
  const post = posts[router.query.id];
  if (!post) return <p></p>;

  return (
    <div>
      <Layout>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </Layout>
      <style jsx>{`
        h1{
          color: green;
        }
      `}
      </style>
    </div>
  )
};