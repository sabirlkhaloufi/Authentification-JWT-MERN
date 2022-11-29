import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import Register from '../Register'; 
import {BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom';

const data = {
    email:"sabirlkhaloufi@gmail.com",
    role:"manager",
    name:"sabir",
    password:"sabir123"
}

it('should render register component',()=>{
    render(
        <BrowserRouter>
            <Register/>
        </BrowserRouter>
    );
    const registerElement = screen.getByTestId('Register');
    expect(registerElement).toBeInTheDocument();
})



it('should render inputs',()=>{
    render(
        <BrowserRouter>
            <Register/>
        </BrowserRouter>
    );
    const email =screen.getByTestId('email')
    const name = screen.getByTestId('name')
    const role = screen.getByTestId("role")
    const pass = screen.getByTestId("password")
    const btnS = screen.getByTestId("submit");

    expect(email).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(role).toBeInTheDocument()
    expect(pass).toBeInTheDocument()
    expect(btnS).toBeInTheDocument()
})



