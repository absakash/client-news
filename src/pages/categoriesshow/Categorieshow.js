import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Categorieshow.css'
const Categorieshow = ({m}) => {
    const {_id,title,author,details,image_url,total_view,rating}=m;
    return (
        <div>
           
           

    <Card className="mb-5">
      <Card.Header>
        <div className='d-flex'>
            <Image className='me-4' style={{height:"40px"}} roundedCircle src={author.img}>

            </Image>
            <div>
                <p className='mb-0'>{author?.name}</p>
                <p>{author?.published_date}</p>
            </div>
        </div>
      </Card.Header>
      <Card.Body>
      <Card.Title>{title}</Card.Title>

      <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {
            details.length>250 ?
            <p>{details.slice(0,250) + '...'}<Link to={`/news/${_id}`}>read more</Link> </p>
            :<p>{details}</p>
          }
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className=" d-flex justify-content-between">
        <div>
            <FaStar className='text-warning me-3'></FaStar>
            <span>{rating?.number}</span>
        </div>
        <div>
            <FaEye className='me-3'>

            </FaEye>
            <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
        </div>
    );
};

export default Categorieshow;