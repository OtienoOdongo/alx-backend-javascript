import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const fetchData = [uploadPhoto(), createUser()];

  return Promise.all(fetchData)
    .then((fetchData) => {
      const photoData = fetchData[0];
      const userData = fetchData[1];
      console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
