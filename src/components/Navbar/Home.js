import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="veni-slider"
          src="https://img.freepik.com/free-photo/close-up-volunteer-oganizing-stuff-donation_23-2149134446.jpg?w=826&t=st=1666267022~exp=1666267622~hmac=b7e28d4a9109607375124db7caeb3c1240cfa739a8e29dcc306bfa7b8f5f8e6c"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='veni-cap'>The club is organizing a Blood Donation Camp<br/> with the help of the Rotary Club.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="veni-slider"
          src="https://img.freepik.com/free-photo/group-volunteers-collecting-garbage_23-2147807241.jpg?w=996&t=st=1666266782~exp=1666267382~hmac=c052126aa396b5ea03fdde04f10bcbc39526cfedef4d6b7f0d8c23e84bc3c34c"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='veni-cap'> The club is organizing a Blood Donation Camp<br/> with the help of the Rotary Club.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="veni-slider"
          src="https://img.freepik.com/free-photo/sorting-point-young-volunteers-red-tshirts-work-distribution-point_259150-57362.jpg?w=996&t=st=1666256408~exp=1666257008~hmac=eb7bcccc869e32653f521794efb7c73f8dce729fdcaf4fa35b5a8bf64804283d"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='veni-cap'>The club is organizing a Blood Donation Camp<br/> with the help of the Rotary Club.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;