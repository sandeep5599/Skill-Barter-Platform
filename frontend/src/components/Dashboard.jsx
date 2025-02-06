import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="py-4">
      {/* Welcome Section */}
      <Card className="mb-4 bg-light">
        <Card.Body>
          <h2>Welcome to Skill Barter</h2>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;
