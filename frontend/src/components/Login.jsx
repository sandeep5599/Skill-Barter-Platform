import React, { useState } from 'react';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { login } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const { token, user } = await login(credentials);
      authLogin(user, token);
      alert('User logged in successfully!');
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed. Please check your email and password.');
      console.error('Login failed:', err);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="shadow p-4" style={{ width: '100%', maxWidth: '400px', border: '2px solid #ced4da' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger" className="text-center">{error}</Alert>}
          <p className="text-center text-muted">Enter your credentials to access your account.</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={credentials.email}
                onChange={(e) => setCredentials({
                  ...credentials,
                  email: e.target.value
                })}
                required
                style={{ borderColor: '#6c757d', borderWidth: '2px' }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={(e) => setCredentials({
                  ...credentials,
                  password: e.target.value
                })}
                required
                style={{ borderColor: '#6c757d', borderWidth: '2px' }}
              />
            </Form.Group>
            <div className="d-grid">
              <Button type="submit" variant="primary">Login</Button>
            </div>
          </Form>
          <p className="text-center mt-2">
            <small>Don't have an account? <Link to="/register">Create one</Link></small>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
