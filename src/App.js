import './App.css';
import Header from './Components/Header';
import group75 from './img/Group 75.png';
import GroupB from './img/group-business.png';
import EveryOne from './img/everyone-is-smiling.png';
import Wing from './img/pngwing 1.png';
import mic from './img/microphone.png';
import earPhone from './img/solar_podcast.png';
import { Button } from '@mui/material';
import ReviewCarousel from './Components/Carousel';
import facebook from './img/Vector.png';
import youtube from './img/Vector (1).png';
import instagram from './img/Vector (2).png';
import twitter from './img/Vector (3).png';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='first-section info'>
        <div className="learn">
          <h1 className='title'>Learn how to launch a successful podcast</h1>
          <p className='para1'>Lorem Ipsum is simply dummy text of the printing and typesetting in ustry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <button className="signUpBtn buttonSample">
            Sign up Now
          </button>
        </div>
        <div className="first-section images">
          <img src={group75} id='group75' alt='GroupOfEclipses' />
          <img src={EveryOne} id='EveryOne' alt='GroupOfEclipses' />
          <img src={GroupB} id='GroupB' alt='GroupOfEclipses' />

          <img src={earPhone} id='earPhone' alt='earPhone' />
          <img src={mic} id='mic' alt='Microphone' />
        </div>
        <img src={Wing} id='Wing' alt='Wing' />
      </section>
      <section className='course'>
        <div className='courseInfo'>
          <div className='courseInfoOne'>
            <div className='course1 CourseSize' >
              <h3>Interactive Features</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
            </div>
            <div className='course2 CourseSize'>
              <h3>Interactive Features</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
            </div>
          </div>
          <div className='courseInfoTwo'>

            <div className='course3 CourseSize'>
              <h3>Interactive Features</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
            </div>
            <div className='course4 CourseSize'>
              <h3>Interactive Features</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
            </div>

          </div>
        </div>

        <div className='courseTitle'>
          <div className='aboutCourse'>
            <h1>About the Course</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
            <button className="exploreNow buttonSample">

              Explore Now
            </button>
          </div>
        </div>
      </section>
      <section className='frame78'>
        <div className="group78">
          <h1>Choose your plan</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
          <div className='radioButton'>
            <input type="radio" checked name="myRadioButton" id="radioButton1" />
            <label for="radioButton1">monthly</label>

            <input type="radio" name="myRadioButton" id="radioButton2" />
            <label for="radioButton2">yearly</label>
          </div>
          <div className="group77">
            <div className='plan'>
              <div className='frame1'>
                <h1>Basic Plan</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>

              </div>
              <div id='pricePara'><span id='price'>$ 54</span> <p>/month</p></div>
              <ul >
                <li>Free access to video class</li>
                <li>Free access to video class</li>
                <li>Free access to video class</li>
              </ul>
              <Button style={{
                color: "#E1A6FF",
                border: "1px solid #E1A6FF",
              }} variant="outlined">Start Free Trial</Button>
            </div>
            <div className='plan premium'>
              <div className='frame1'>
                <h1>Premium Plan</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                <div id='pricePara'><span id='price'>$ 54</span> <p>/month</p></div>

              </div>
              <ul >
                <li>Free access to video class</li>
                <li>Free access to video class</li>
                <li>Free access to video class</li>
              </ul>
              <Button style={{
                background: "#ffff",
                color: "#E1A6FF",
              }} variant="contained">Start Free Trial</Button>
            </div>
            <div className='plan'>
              <div className='frame1'>
                <h1>Basic Plan</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                <div id='pricePara'><span id='price'>$ 54</span> <p>/month</p></div>

              </div>
              <ul >
                <li>Free access to video class</li>
                <li>Free access to video class</li>
                <li>Free access to video class</li>
              </ul>
              <Button style={{
                color: "#E1A6FF",
                backgroundColor: "linear-gradient(90deg,#4776E6,  #8E54E9)",
                border: "1px solid #E1A6FF",
              }} variant="contained">Start Free Trial</Button>
            </div>
          </div>

        </div>
      </section>
      <section className='carousel'>
        <ReviewCarousel />
      </section>
      <footer>
        <div className='frame-92'>
          <h1 style={{
            fontSize: "32px",
          }}>
            We have what you’re looking for
          </h1>
          <p
            style={{
              background: 'linear-gradient(90deg, #4776E6, #8E54E9)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              marginTop: "10px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type a
          </p>

          <Button
            style={{
              color: '#fff',
              fontSize: "20px",
              width: "237px",
              height: "60px",
              fontWeight: "700",
              background: 'linear-gradient(90deg, #4776E6, #8E54E9)',
              borderRadius: "10px",
              marginTop: "64px",
              textShadow: "1px 1px 2px black",
              border: "none",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
              WebkitTextStroke: "1px black",
            }}
            variant="outlined"
          >
            Get Started Now
          </Button>


        </div>
        <div className='frame-88'>
          <div className='copyright'>
            <p>All Right Reserved @Copyright 2023</p>
          </div>
          <div className='linksAndIcons'>
            <ul>
              <li style={{ marginRight: '15px' }}>Terms of Service</li>
              <li style={{ marginRight: '15px' }}>Privacy Policy</li>
              <li style={{ marginRight: '15px' }}>Product</li>
            </ul>
            <div className='icons'>
              <img src={facebook} alt='facebook' style={{ marginRight: '10px' }} />
              <img src={youtube} alt='youtube' style={{ marginRight: '10px' }} />
              <img src={instagram} alt='instagram' style={{ marginRight: '10px' }} />
              <img src={twitter} alt='twitter' style={{ marginRight: '10px' }} />
            </div>

          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;
