import React from 'react';
import Button from '@material-ui/core/Button';


function home1() {

  return (
    <section id='vd' className='testimonial-sec'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 testimonial'>
                        <p>Upcoming Program:-</p>
                        <h1>Donate <span style={{'color':'red'}}> vitamin B12</span> supply program</h1>
                        <p>When a child gets access to good food, it can change just about everything. Sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio
                        </p>
                        <Button  style={{'background':'#f15b43','color':'white'}} variant="contained" size="large">Donate Now</Button>
                        <Button  style={{'margin-left':'20px','background':'#f15b43','color':'white'}} variant="contained" size="large">ViewPrograms</Button>
                    </div>
                    <div className='col-md-6'>
                        <img src="https://preview.colorlib.com/theme/charitee/assets/img/gallery/xabout1.jpg.pagespeed.ic.bN1am1b_q1.webp" className='img-fluid'/>
                    </div>
                </div>
                
            </div>
        </section>
  );
}

export default home1;
