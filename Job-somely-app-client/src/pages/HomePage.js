import { Button, Image } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { Card } from 'react-bootstrap';

function HomePage() {
  return (
    <div className="HomePage">
      <header>
        <div className="col">
          <Image src="/job-somely-home-header8.png" className="background-cover img-fluid fluid mx-auto d-block w-100" alt="homepage header" />
        </div>
      </header>
      <div className='container'>
        <div className="row">
          <div className="feature col-md-9 text-center fw-bold bg-gradient p-3">
            <h2 className="text-success opacity-75">Connecting The Right People To The Right Businesses</h2>
          </div>

          <div className="feature col-md-3 py-3 text-start">
            <NavLink to="/signup">
              <Button className="btn btn-outline-warning btn-rounded fw-bold bg-white" style={{ borderRadius: "40px", color: 'rgb(190, 104, 36)', border: "solid" }} >Create an Account</Button>
            </NavLink>
          </div>
          <div className="album mt-5 pb-2 px-4">
            <div className="row row row-cols-1 row-cols-sm-1 row-cols-md-3 g-4">
              <div className="col my-4" >
                <Card className="pagecard mx-2 border-0" >
                  <Card.Body>
                    <Card.Title>
                      <Image src="/job-somely-icon6.png" style={{ height: "65px" }} />
                      <h4>Building Company</h4>
                    </Card.Title>
                    <Card.Text>
                      Expending your company is not an easy task. Let us help you find good candidates and join your company as valuable members.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col my-4" >
                <Card className="pagecard mx-2 border-0" >
                  <Card.Body>
                    <Card.Title>
                      <Image src="/job-somely-icon4.png" style={{ height: "65px" }} />
                      <h4>Finding Best Job</h4>
                    </Card.Title>
                    <Card.Text>
                      Looking for the next step in your career? Maybe it is the first step. Wherever you are in your life, you are in the correct place.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col my-4" >
                <Card className="pagecard mx-2 border-0" >
                  <Card.Body>
                    <Card.Title>
                      <Image src="/job-somely-icon5.png" style={{ height: "65px" }} />
                      <h4>Creating Quality Team</h4>
                    </Card.Title>
                    <Card.Text>
                      Hiring wrong team member can cost you more than money. Let us help you find good people who are fit your company culture.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="row row row-cols-1 row-cols-sm-1 row-cols-md-2 g-4">
            <div className="col" >
              <Image src="pic" className="background-cover img-fluid fluid mx-auto d-block" style={{ height: "400px" }} alt="homepage about1" />
            </div>
            <div className="col" >
              <h1 className='fw-bold mt-5 pt-5 text-success'>Get your dream job today</h1><br />
              <h3>Explore all the most exciting <span style={{ color: 'rgb(190, 104, 36)' }}><strong>job roles</strong></span> based on your interest and study major.</h3>
            </div>
          </div>
          <div className="row row row-cols-1 row-cols-sm-1 row-cols-md-2 g-4">
            <div className="col" >
              <h1 className='fw-bold mt-5 pt-5 text-success'>Post Your Jobs for Specialists</h1><br />
              <h3>Next Job helps you post your jobs for finding<span style={{ color: 'rgb(190, 104, 36)' }}><strong> your best teammates</strong></span>. Track your candidates all in one place, and take your hiring on the go.</h3>
            </div>
            <div className="col" >
              <Image src="/pic" className="background-cover img-fluid fluid mx-auto d-block" style={{ height: "400px" }} alt="homepage about2" />
            </div>
          </div>
          <div className="row row row-cols-1 row-cols-sm-1 row-cols-md-2 g-4">
            <div className="col" >
              <Image src="/pic" className="background-cover img-fluid fluid mx-auto d-block" style={{ height: "400px" }} alt="homepage about1" />
            </div>
            <div className="col" >
              <h1 className='fw-bold mt-5 pt-5 text-success'>Find The Best for You</h1><br />
              <h3>Our industry expertise will find you <span style={{ color: 'rgb(190, 104, 36)' }}><strong>the right role, person, or service</strong></span> in the evolving digital world.</h3>
            </div>
          </div>
        </div>
      </div>
      <Image src="/footer1.png" className="background-cover img-fluid fluid mx-auto d-block" alt="homepage footer" />
    </div>
  );
}


export default HomePage; 