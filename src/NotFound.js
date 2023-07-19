import { Link } from 'react-router-dom';

const NotFound = () => {
  return (  
    <div className="not-found">
      <h2>Opps!</h2>
      <p>page not found.</p>
      <div style={{marginTop: "20px"}}>
      <Link to="/" >Go back home ..</Link>
      </div>
      
    </div>
  );
}
 
export default NotFound;