import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
const NewSummaryCard = ({ news }) => {
   console.log(news)
   const { _id, title, author, details, image_url, rating, total_view } = news;

   return (
      <Card className="mb-5">
         {/* //💥💥💥💥💥💥💥💥💥💥💥💥💥 */}
         <Card.Header className='d-flex justify-content-between align-items-center'>





            <div className='d-flex '>
               {/* //💥💥💥💥💥💥 */}
               {/* Author image */}
               <Image
                  roundedCircle
                  className='me-2'
                  src={author?.img}
                  style={{ height: '60px' }}
               ></Image>
               {/* //💥💥💥💥💥💥 */}





               {/* //💥💥💥💥💥💥 */}
               <div>
                  {/* Author name and p.date */}
                  <p className='mb-1'>{author?.name}</p>
                  <p >{author?.published_date}</p>
               </div>
               {/* //💥💥💥💥💥💥 */}
            </div>






            <div>
               {/* //💥💥💥💥💥💥 */}
               {/* icons */}
               <FaRegBookmark className='me-2'></FaRegBookmark>
               <FaShareAlt></FaShareAlt>
               {/* //💥💥💥💥💥💥 */}
            </div>

         </Card.Header>
         {/* //💥💥💥💥💥💥💥💥💥💥💥💥💥 */}
         {/* //💥💥💥💥💥💥 */}{/* //💥💥💥💥💥💥 */}










         {/* //💥💥💥💥💥💥 */}{/* //💥💥💥💥💥💥 */}
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
                  details.length > 250 ?
                     <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link> </p>
                     :
                     <p>{details}</p>
               }
            </Card.Text>
            {/* //💥💥💥💥💥💥💥💥💥💥💥💥💥 */}
         </Card.Body>








         {/* //💥💥💥💥💥💥💥💥💥💥💥💥💥 */}
         <Card.Footer className="d-flex justify-content-between ">




            {/* //💥💥💥💥 */}
            <div>
               <FaStar className='text-warning me-2'></FaStar>
               <span>{rating?.number}</span>
            </div>





            {/* //💥💥💥💥 */}
            <div>
               <FaEye className='me-2'></FaEye>
               <span>{total_view}</span>
            </div>



         </Card.Footer>
         {/* //💥💥💥💥💥💥💥💥💥💥💥💥💥 */}
      </Card>
   );
};

export default NewSummaryCard;