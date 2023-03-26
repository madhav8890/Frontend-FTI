import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";

const Testimonial = () => {
  return (
    <>
        <h1 className="text-center mt-5">What Our Students Have to Say</h1>
      <Row xs={1} md={2} className="g-5 px-5 mt-2">
      <div>
      <Card>
         <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                        Very good Linux training. All concepts got cleared. The whole lecture we enjoyed with fun and learning. If any concept is not cleared then Bobby sir told the same thing till that concept gets cleared. I will refer this to my friends.
                        </p>
                        <footer className="blockquote-footer">
                        Shapnesh <cite title="Source Title">From Satna,India</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
      </div>
      <div>
      <Card>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                        Bobby sir, Providing excellent knowledge for us briefly. Thanks. Also, I will plan for the next courses with your organization. All facilities are better as well as the tea facility also nice. Now I have good knowledge. Thank you so much, sir.
                        </p>
                        <footer className="blockquote-footer">
                        Aditi Dubey <cite title="Source Title">From Jablpur</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
      </div>
      <div>
      <Card>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                        As a beginner, many things are new to me and quite challenging but their teaching methods are great. He explains everything in a way that helps me understand. I learned a lot from him about many technical topics
                        </p>
                        <footer className="blockquote-footer">
                        Shivi Saini <cite title="Source Title">From Bhopal, MP</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
      </div>
      <div>
      <Card>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                        It was a great experience to get training from Bobby sir. He elaborates every topic in a very simple manner so that we can understand the concept. I was not that much confident but now I have much more knowledge
                        </p>
                        <footer className="blockquote-footer">
                        Ayush Gupta <cite title="Source Title">From Jablpur</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
      </div>
    </Row>
    </>
  );
};

export default Testimonial;
