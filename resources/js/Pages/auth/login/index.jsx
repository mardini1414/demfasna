import React from 'react';
import Logo from '../../../assets/img/logo.png';
import { useForm, usePage } from '@inertiajs/inertia-react';

const Login = () => {
  const { setData, post, processing } = useForm({ email: '', password: '', remember: false });
  const { flash } = usePage().props;

  const submit = e => {
    e.preventDefault();
    post('/login');
  };

  return (
    <div className="flex justify-center h-screen bg-white md:bg-blue-100 md:items-center">
      <div className="w-full md:w-[400px]">
        <form className="grid gap-3 px-4 py-6 bg-white md:rounded md:shadow" onSubmit={submit}>
          {flash.message && (
            <div className="p-4 text-red-500 bg-red-200 rounded-sm">{flash.message}</div>
          )}
          <div className="mb-4">
            <img src={Logo} alt="logo" width={90} className="mx-auto mb-4" />
            <h1 className="text-2xl font-semibold text-center text-primary">Login to demfasna</h1>
          </div>
          <label htmlFor="email" className="-mb-2 text-primary">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="p-2 border border-gray-300 rounded outline-none focus:border-2 focus:border-blue-400"
            onChange={e => setData('email', e.target.value)}
          />
          <label htmlFor="password" className="-mb-2 text-primary">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="p-2 border border-gray-300 rounded outline-none focus:border-2 focus:border-blue-400"
            onChange={e => setData('password', e.target.value)}
          />
          <div className="flex items-center mb-1">
            <input
              type="checkbox"
              id="remember"
              onChange={e => setData('remember', e.target.checked)}
              className="bg-red-500"
            />
            <label htmlFor="remember" className="ml-2 text-xs text-gray-400">
              remember me
            </label>
          </div>
          <button
            type="submit"
            disabled={processing}
            className="w-full py-2 text-white bg-blue-600 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
