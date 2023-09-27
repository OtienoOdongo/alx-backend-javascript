import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName).then((value) => ({
    status: 'fulfilled',
    value,
  }));

  const photoPromise = uploadPhoto(fileName).catch((error) => ({
    status: 'rejected',
    value: `${error.name}: ${error.message}`,
  }));

  const [user, photo] = await Promise.all([userPromise, photoPromise]);

  return [user, photo];
}
