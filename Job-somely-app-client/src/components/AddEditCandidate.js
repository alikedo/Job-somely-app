import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import { useContext } from "react";
import { AuthContext } from "../context/auth.context"




function AddEditCandidate(props) {
    const [candidateId, setCandidateId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [about, setAbout] = useState("");
    const [skills, setSkills] = useState("");
    const [image, setImage] = useState("");
    const [linkedin, setLinkedin] = useState("");

    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const storedToken = localStorage.getItem("authToken");


    const handleFileUpload = (e) => {
        // console.log("The file to be uploaded is: ", e.target.files[0]);

        const uploadData = new FormData();

        // imageUrl => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new movie in '/api/movies' POST route
        uploadData.append("image", e.target.files[0]);

        axios
            .post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData,
                { headers: { Authorization: `Bearer ${storedToken}` } })
            .then(response => {
                // console.log("response is: ", response);
                // response carries "fileUrl" which we can use to update the state
                setImage(response.data.fileUrl);
            })
            .catch(err => console.log("Error while uploading the file: ", err));
    };


    const getCandidate = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/api/myprofile`,
                { headers: { Authorization: `Bearer ${storedToken}` } })
            .then((response) => {
                const oneCandidate = response.data;
                if (typeof (oneCandidate._id) !== "undefined") {
                    setCandidateId(oneCandidate._id);
                }
                setFirstName(oneCandidate.firstName);
                setLastName(oneCandidate.lastName);
                setRole(oneCandidate.role);
                setEmail(oneCandidate.email);
                setPhone(oneCandidate.phone);
                setLocation(oneCandidate.location);
                setAbout(oneCandidate.about);
                setSkills(oneCandidate.skills);
                setImage(oneCandidate.image);
                setLinkedin(oneCandidate.linkedin)
            })
            .catch((error) => console.log(error));
    };


    // const {  user } = useContext(AuthContext);
    // console.log(user)

    useEffect(() => {
        getCandidate();
        // eslint-disable-next-line
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMsg("");

        const requestBody = {
            firstName,
            lastName,
            role,
            email,
            phone,
            location,
            about,
            skills,
            image,
            linkedin
        }
        console.log(requestBody)
        if (candidateId == '') {
            await axios
                .post(
                    `${process.env.REACT_APP_API_URL}/api/candidates`,
                    requestBody,
                    { headers: { Authorization: `Bearer ${storedToken}` } }
                )
                .then((response) => {
                    const newCandidateId = response.data._id;
                    console.log(response.data)
                    navigate(`/api/candidates/${newCandidateId}`);
                })
                .catch((error) => console.log(error));
        } else {
            await axios
                .put(
                    `${process.env.REACT_APP_API_URL}/api/candidates/${candidateId}`,
                    requestBody,
                    { headers: { Authorization: `Bearer ${storedToken}` } }
                )
                .then((response) => {
                    const candidateId = response.data._id;

                    navigate(`/candidates/${candidateId}`);
                })
                .catch((error) => console.log(error));
        }
    };

    const deleteCandidate = () => {
        // Make a DELETE request to delete the candidate
        axios
            .delete(
                `${process.env.REACT_APP_API_URL}/api/candidates/${candidateId}`,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then(() => {
                // Once the delete request is resolved successfully
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="text-center" style={{ backgroundColor: 'rgb(234, 243, 248) ' }}>

            <div className="p-5 bg-image" style={{ backgroundImage: `url(job-somely-header3.png)`, height: '300px', backgroundRepeat: 'no-repeat', backgroundSize: "cover" }} />


            <div className="card mx-4 mb-3 mx-md-5 shadow-5-strong shadow-lg" id="no-scale" style={{ marginTop: "-100px", backgroundColor: 'rgb(255, 225, 148)', background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(30px)" }}>
                <div className="card-body py-2 px-md-5">

                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="fw-bold mb-4" style={{ color: 'rgb(34, 28, 148)' }}>Candidate Profile</h2>
                            {errorMsg &&
                                <p classNameName="error">
                                    {errorMsg}
                                </p>
                            }
                            <Form onSubmit={handleSubmit}>

                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" style={{ color: 'rgb(34, 28, 148)' }}>First Name</label>
                                            <input type="text"
                                                name="firstName"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" style={{ color: 'rgb(34, 28, 148)' }}>Last Name</label>
                                            <input type="text"
                                                name="lastName"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-outline mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" style={{ color: 'rgb(34, 28, 148)' }}>Profile Picture</label>
                                            <input type="file"
                                                name="image"

                                                onChange={(e) => handleFileUpload(e)} className="form-control-file form-control"
                                                accept="image/png, image/jpeg, image/jpg" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" style={{ color: 'rgb(34, 28, 148)' }} >Email</label>
                                            <input type="email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" style={{ color: 'rgb(34, 28, 148)' }}>Phone Number</label>
                                            <input type="text"
                                                name="phone"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" style={{ color: 'rgb(34, 28, 148)' }}>Current Location</label>
                                            <input type="text"
                                                name="location"
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)} className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-outline mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" style={{ color: 'rgb(34, 28, 148)' }}>About</label>
                                            <textarea type="text"
                                                name="about"
                                                value={about}
                                                onChange={(e) => setAbout(e.target.value)} cols="30" rows="4" wrap="hard" className="form-control" required></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" style={{ color: 'rgb(34, 28, 148)' }}> Role</label>
                                            <input type="text"
                                                name="role"
                                                value={role}
                                                onChange={(e) => setRole(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" style={{ color: 'rgb(34, 28, 148)' }}>Skills</label>
                                            <input type="text"
                                                name="skills"
                                                value={skills}
                                                onChange={(e) => setSkills(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-outline mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" style={{ color: 'rgb(34, 28, 148)' }}>LinkedIn Profile Link</label>
                                            <input type="url"
                                                name="linkedin"
                                                value={linkedin}
                                                onChange={(e) => setLinkedin(e.target.value)} className="form-control" required></input>
                                        </div>
                                    </div>
                                </div>
                                <Button className=" px-3 mx-4 mb-4" variant="danger" onClick={deleteCandidate} style={{ borderRadius: "40px", color: 'rgb(41, 52, 98)', border: "solid", backgroundColor: 'rgb(255, 225, 148)' }}>Delete Your Profile</Button>
                                <Button type="submit" className=" px-4 mb-4"
                                    style={{ borderRadius: "40px", color: 'rgb(41, 52, 98)', border: "solid", backgroundColor: 'rgb(255, 225, 148)' }} >Save Changes</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default AddEditCandidate;

