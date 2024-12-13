import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import PageContent from '../layout/PageContent';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userActions';

const axiosInstance = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      let postData = {
        email: data.email,
        password: data.password,
      };

      const response = await axiosInstance.post('/login', postData);

      const userData = response.data;
      dispatch(setUser(userData));

      toast.success('Login successful!');
      history.push("/");
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <PageContent>
    <div className="flex font-monts items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat p-4" style={{ backgroundImage: `url('/images/signup-img.jpg')` }}>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full max-w-md p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email *</label>
          <input
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            className={`border p-2 w-full rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="example@gmail.com"
          />
          {errors.email && <span className="text-red-500 text-sm">Email is required and must be valid.</span>}
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Password *</label>
          <input
            type="password"
            {...register('password', { 
              required: true, 
            })}
            className={`border p-2 w-full rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              Please enter correct password.
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-6 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition disabled:opacity-50 flex items-center justify-center"
        >
          {isSubmitting && (
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path 
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          )}
          {isSubmitting ? 'Submitting...' : 'Log In'}
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Not Registered? <Link to="/signup" className="text-blue-500 hover:text-blue-600 font-semibold">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
    </PageContent>
  );
};

export default LoginForm;