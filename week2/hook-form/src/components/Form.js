import React, {useState} from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        // important!!!!!!!!!
        e.preventDefault();
        if ( firstName && lastName && email && password && confirmPassword ){

            console.log("Form submitteed", e.target.price.value)
        } else {
            setError('You need to fill the form');
        }

    }
  return (
    <>
    {error && <p>{error}</p>}
    <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
        </div>
        {firstName && firstName.length < 2 && <p>First Name must be at least 2 characters</p>}
        <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
        </div>
        {lastName && lastName.length < 2 && <p>Last Name must be at least 2 characters</p>}
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        {email && email.length < 2 && <p>Email must be at least 2 characters</p>}
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
        </div>
        {password && password < 8 && <p>password must be at least 8 characters</p>}
        {password && confirmPassword && password !== confirmPassword && <p>passwords must be match</p>}
        {/*name !== '' && name.length <= 5 ? <p>Name must be at least 5 characters</p>: null */}
        
        <button className='btn btn-primary'>Submit</button>
    </form>
        <div>
            <h4>Your Form Data</h4>
            <table>
                <tr>
                    <th>First Name</th>
                    <td>{firstName}</td>
                </tr>
                <tr>
                    <th>Last Name</th>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{email}</td>
                </tr>
                <tr>
                    <th>Password</th>
                    <td>{password}</td>
                </tr>
                <tr>
                    <th>Confirm Password</th>
                    <td>{confirmPassword}</td>
                </tr>
            </table>
        </div>
    </>
  )
}
export default Form;