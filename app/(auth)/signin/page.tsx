import Link from "next/link";
import {signinHandler, googleHandler} from '@/utils/authform'

export default async function Signin() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="max-w-lg">
        <div className="px-10">
          <div className="text-3xl font-bold my-2">Login</div>
          <div className="flex flex-row gap-5 font-normal text-slate-400 mb-5">
            <div>Don't have an account?</div>
            <div className="underline">
              <Link href="/signup"> signup</Link>
            </div>
          </div>
        </div>
        <form action={signinHandler}>
          <LabelledInput
            name = "email"
            label="Email"
            type="email"
            placeholder="user@email.com"
          />
          <LabelledInput
            name = "password"
            label="Password"
            type="password"
            placeholder="********"
          />
          <div className="bg-black text-white border rounded-md text-center mt-5 p-2">
            <button type="submit">Sign in</button>
          </div>
        </form>

        {/* Add OR divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Add Google login button */}
        <form action={googleHandler} className="border border-gray-300 rounded-md text-center p-2">
          <button
            type="submit"
          >
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
}

type LabelledInputTypes = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
};
function LabelledInput({ name, label, type, placeholder }: LabelledInputTypes) {
  return (
    <>
      <div>
        <label className="block mt-2 mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
        <input
          name={name}
          type={type}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
}
