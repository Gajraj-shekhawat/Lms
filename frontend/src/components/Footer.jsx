import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter bgColor="black" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link to="#" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </Link>
          <Link to="#" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </Link>
          <Link to="#" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </Link>
          <Link to="#" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </Link>
          <Link to="#" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </Link>
          <Link to="#" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </Link>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-3">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Coding institute
              </h6>
              <p>Think Twice CODE once!</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link to="#" className="text-reset">
                  Java
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Python
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  JavaScipt
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="#" className="text-reset">
                  About
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Login
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  SignUp
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Bengaluru, karnataka, India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                condinginstitute@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 234 567 8900
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <Link className="text-reset fw-bold" to="https://mdbootstrap.com/">
          codinginstitute.com
        </Link>
      </div>
    </MDBFooter>
  );
}
