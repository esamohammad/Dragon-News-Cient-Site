import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewSummaryCard = ({ news }) => {
   console.log(news)
   const { _id, title, author, details, image_url, rating, total_view } = news;

   return (
      <Card className="">
         <Card.Header>Featured</Card.Header>
         <Card.Body>
            <Card.Title>{title}</Card.Title>
            {/* //💥💥💥💥💥💥💥💥💥💥💥💥💥 */}





            {/* //💥💥💥💥💥💥💥💥💥💥💥💥💥 */}
            <Card.Img variant="top" src={image_url} />
            {/* news image  */}
            {/* //💥💥💥💥💥💥💥💥💥💥💥💥💥 */}






            {/* //💥💥💥💥💥💥💥💥💥💥💥💥💥 */}
            {/* News text details */}
            <Card.Text>
               {
                  details.length > 200 ?
                     <p>{details.slice(0, 200) + '...'} <Link to={`/news/${_id}`}>Read More</Link> </p>
                     :
                     <p>{details}</p>
               }
            </Card.Text>
            {/* //💥💥💥💥💥💥💥💥💥💥💥💥💥 */}




         </Card.Body>
         <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
   );
};

export default NewSummaryCard;