import React, { Component } from 'react';
import {Link} from "react-router-dom";


import userimg from './270236150_637446750716451_3181187670546686420_n.jpg';

import Qualification from './quallification';
import Projects from './projects';

    
    

class Home extends React.Component {

 
  
    render() {
        return (

            <>
            
            
            <div class='border'>
            <Link className='title' to=''>
                <p >A professional Portfolio</p>
                </Link> 
                    <div class="body">

                        



                    </div>
                    <div class="user_details"> <div class='nav'>
                    <Link to=''><p class='username'>Suroj Gurung</p></Link>
                        

                    </div>
                        <div class='yt69'><div class='img'>
                            <img src={userimg} alt=' portfolio owner' />

                        </div>
                            
                          
                        </div></div>

                </div></>
        )
    }
} 
export default Home
