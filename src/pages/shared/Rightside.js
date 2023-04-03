import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaFacebook ,FaTwitter,FaMeetup} from "react-icons/fa";
import { AuthContext } from '../../context/Contexts';
import Carausels from '../carausels/Carausels';
const Rightside = () => {
    const {loginGoogle}=useContext(AuthContext)
    const handlegoogle=()=>{
        loginGoogle()
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch=(error)=>{
         console.log(error);
        }
    }
    return (
        <div>
            <h3>login here</h3>

            <ButtonGroup vertical >
            <Button onClick={handlegoogle} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Google</Button>{' '}
            <Button className='mb-2' variant="outline-primary"><FaFacebook></FaFacebook> Facebook</Button>{' '}
            </ButtonGroup>

            <h3 className='mt-3'>Find us on </h3>
            <div>
               <ListGroup>
                <ListGroup.Item className='mb-1'><FaMeetup></FaMeetup> Meetup</ListGroup.Item>
                <ListGroup.Item className='mb-1'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-1'>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item className='mb-1'>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item className='mb-1'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>

            <div>
                <Carausels></Carausels>
            </div>
           
        </div>
    );
};


export default Rightside;