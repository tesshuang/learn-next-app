import Layout from '../../components/layout';
import fetch from 'isomorphic-unfetch';

const Trip = ({ trip }) => {
  console.log(trip);
  return (
  <Layout>
    <h1>{trip.name}</h1>
    <img src={trip.hero_img_url} alt={trip.name} />
    <p>Duration: {trip.duration}</p>
  </Layout>
  )
}

Trip.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch('https://uat1.canadavacations.com/wp-json/wp/v2/trips-archive/');
  const trips = await res.json();
  // console.log(`Trip id: ${id}`);
  // console.log(`Trip slug: ${id}`);
  // // Need to fix the slug
  // console.log(`Trip detail: ${trips.find(trip => trip.slug === id )}`);
  return {
    trip: trips.find(trip => trip.slug === id)
  } 
}
export default Trip;