import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

import { Link, useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export const AddUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = 'https://api.github.com/users';
    fetch(url)
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);
  const [name, setName] = useState('');
  const { addUser } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    addUser(users);
    console.log(users);
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          name="name"
          placeholder="Enter user"
          required
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
export default AddUser;
