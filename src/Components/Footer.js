import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">NavGurukul Lite</h5>
            <p>
            Registered as: NavGurukul Foundation for Social Welfare
            </p>
            <p>CIN Number: U85300HR2016NPL066468</p>
            <p>Let's talk at hi@navgurukul.org.

            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Connect with social meadia</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.facebook.com/profile.php?id=100028953893385&ref=bookmarks">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/anand-patel-162134185/">LinkedIn</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.instagram.com/anand.react/">Instagram</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/anandpatel504">GitHub</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <p>Created by Anand Patel</p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;