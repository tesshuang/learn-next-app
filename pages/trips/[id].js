import Layout from '../../components/layout';
import fetch from 'isomorphic-unfetch';

const Trip = props => {
  console.log(props.trip);

  return (
  <Layout>
    <h1>This is a trip template</h1>
  </Layout>
  )
}

Trip.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch('https://uat1.canadavacations.com/wp-json/wp/v2/trips-archive/');
  const trips = await res.json();
  console.log(`Trip id: ${id}`);
  console.log(`Trip slug: ${id}`);
  // Need to fix the slug
  console.log(`Trip detail: ${trips.find(trip => trip.slug === id )}`);
  return {
    trip: trips.find(trip => trip.slug === id)
  } 
}
export default Trip;