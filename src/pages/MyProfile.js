import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../axiosConfig';
import '../styles/MyProfile.css';

const MyProfile = ({ isAuthenticated }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      // fetch user info from backend
      axiosInstance.get('auth/profile/')
        .then(response => {
          console.log(response.data);
          setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user info:', error);
      });
    }
  }, [isAuthenticated]);

  if (!user) {
    return (<div>Loading...</div>)
  }

  return (
    <div className='user-profile'>
      <h2>My Details</h2>
      <table>
            <thead>
               <tr>
                <td>Field</td>
                <td>Value</td>
               </tr>
             </thead>
             <tbody>
                <tr>
                 <td>Email</td>
                 <td>{user?.email || 'Not Available'}</td>
                </tr>
                <tr>
                 <td>Firstname</td>
                 <td>{user?.first_name || 'Not Available'}</td>
                </tr>
                <tr>
                 <td>Lastname</td>
                 <td>{user?.last_name || 'Not Available'}</td>
                </tr>
                <tr>
                 <td>Username</td>
                 <td>{user?.username || 'Not Available'}</td>
                </tr>
                <tr>
                 <td>Province</td>
                 <td>{user?.province || 'Not Available'}</td>
                </tr>
                <tr>
                 <td>Municipality</td>
                 <td>{user?.municipality || 'Not Available'}</td>
                </tr>
                <tr>
                 <td>Ward_number</td>
                 <td>{user?.ward_number || 'Not Available'}</td>
                </tr>
                <tr>
                 <td>Section_or_area</td>
                 <td>{user?.section_or_area || 'Not Available'}</td>
                </tr>
             </tbody> 
        </table> 
    </div>
  );
};
export default MyProfile;