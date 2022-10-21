import React from 'react';
import Button from '@material-ui/core/Button';

function sideimage() {

  return (
    <section className='sideimage-sec'>
    <div className='container'>
        <div className='row'>
        <div className='col-md-6'>
                <img src="https://preview.colorlib.com/theme/charitee/assets/img/gallery/xabout2.png.pagespeed.ic.F46wcyErVA.webp" className='img-fluid1'/>
            </div>
            <div className='col-md-6 sideimage'>
                <h1>We are  <span style={{'color':'red'}}>tender</span>  heart charity foundation </h1>
                <p>When a child gets access to good food, it can change just about everything. Sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                When a child gets access to good food, it can change just about everything. Sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <Button  style={{'background':'#f15b43','color':'white'}} variant="contained" size="large">Discover More</Button>
              
            </div>
        </div> 
    </div>
</section>
  );
}

export default sideimage;
