import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Card, Button, Image, Form } from 'react-bootstrap';
import { useContext } from "react";
import { AuthContext } from "../context/auth.context"


function JobsListPage() {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");

  const storedToken = localStorage.getItem("authToken");
  const { isLoggedIn } = useContext(AuthContext);

  const getAllJobs = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/jobs`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => setJobs(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllJobs();
    // eslint-disable-next-line
  }, [storedToken]);

  const searchJob = () => {
    axios.get(process.env.REACT_APP_API_URL + `/searchjob?q=${query}`,
      { headers: { Authorization: `Bearer ${storedToken}` } })
      .then(response => {
        setJobs(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="JobsListPage">
      <header className="row">

        <div className="col">

          <Image src="/job-somely-header1.png" className="shadow-lg background-cover img-fluid fluid mx-auto d-block opacity-75" alt="jobs header" />

        </div>
      </header>
      <div className="container">

        <div className="my-5">
          <h2 className="mb-4 fw-bold">Job Opportunities</h2>
          <p className=" mb-0">Looking for the next step in your career? Maybe it is the first step. Wherever you are in your life, you are in the correct place.</p>
        </div> <hr />

        <div className="row my-5">
          <div className="col-lg-4 mb-2-2 mb-lg-0">
            <div className="card card-style13">
              <div className="card-body">
                <span className="icon-circle green mb-4"><i className="ti-bar-chart"></i></span>
                <h3 className="h5 fw-bold">Ability to Work</h3>
                <p className="w-95 w-lg-100 display-30">We provide quick and detailed answers for your awesome business. It is a long establish grow your business.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-2-2 mb-lg-0">
            <div className="card card-style13">
              <div className="card-body">
                <span className="icon-circle orange mb-4"><i className="ti-ruler-pencil"></i></span>
                <h3 className="h5 fw-bold">Technical Competency</h3>
                <p className="w-95 w-lg-100 display-30">We provide quick and detailed answers for your awesome business. It is a long establish grow your business.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-style13">
              <div className="card-body">
                <span className="icon-circle blue mb-4"><i className="ti-layers-alt"></i></span>
                <h3 className="h5 fw-bold">Communication Skills</h3>
                <p className="w-95 w-lg-100 display-30">We provide quick and detailed answers for your awesome business. It is a long establish grow your business.</p>
              </div>
            </div>
          </div>
        </div><hr />
      </div>
      <div className="container mt-5">
        <Form className="d-flex">
          <Form.Control
            type="search"
            value={query}
            placeholder="Search Job"
            className="me-2 border border-2"
            aria-label="Search"
            onChange={(e) => { setQuery(e.target.value) }}
          />
          <Button variant="outline-success" onClick={searchJob}>Search</Button>
        </Form>
        <div className="album my-5 pb-2 px-4 bg-primary bg-opacity-25 shadow-lg">

          <div className="row row row-cols-1 row-cols-sm-1 row-cols-md-2 g-4 mb-5">

            {jobs.map((job) => {
              return (
                <div key={job._id} className="col">
                  <Card className="pagecard mx-2 shadow-lg">
                    <Card.Header className="fw-bold" as="h5">{job.title}</Card.Header>
                    <Card.Body>
                      <Card.Title>Company: {job.company.name}</Card.Title>
                      <Card.Text>
                        Level: {job.level}
                      </Card.Text>
                      {isLoggedIn && (
                        <Button className="bg-gradient" variant="primary"><NavLink to={`/jobs/${job._id}`}><p className="text-white m-0">More Details</p></NavLink></Button>)}
                      {!isLoggedIn && (
                        <Button className="bg-gradient" variant="primary"><NavLink to={`/login`}><p className="text-white m-0">More Details</p></NavLink></Button>)}
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


export default JobsListPage;