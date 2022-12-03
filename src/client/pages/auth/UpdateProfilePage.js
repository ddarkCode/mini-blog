import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { updateProfile } from '../../redux/auth/actions';
import InputContainer from '../../components/input/InputContainer';
import Input from '../../components/input/Input';

function UpdateProfilePage() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const [profile, setProfile] = useState({
    ...auth.profile,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  function handleSubmit(e) {
    const { fullname, username, img_url } = profile;
    e.preventDefault();
    dispatch(
      updateProfile({ fullname, username, img_url }, profile._id, auth.token)
    );
    history.push('/options');
  }

  return (
    <div className="form-container">
      <form className="auth-form-container" onSubmit={handleSubmit}>
        <h2>Update Profile</h2>
        <InputContainer>
          {/* <label htmlFor="fullname">First Name</label> */}
          <Input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Enter Your Full Name"
            value={profile.fullname}
            onChange={handleFormChange}
          />
        </InputContainer>

        <InputContainer>
          {/* <label htmlFor="username">Email</label> */}
          <Input
            type="email"
            name="username"
            id="username"
            placeholder="Enter Your Email"
            value={profile.username}
            onChange={handleFormChange}
          />
        </InputContainer>
        <InputContainer>
          {/* <label htmlFor="password">Password</label> */}
          <Input
            type="text"
            name="img_url"
            id="img_url"
            placeholder="Enter Your Image Url"
            value={profile.img_url}
            onChange={handleFormChange}
          />
        </InputContainer>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default {
  component: UpdateProfilePage,
};
