"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authenticateWithWillys } from "@/actions/auth";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    setError(null);

    const credentials = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    try {
      const result = await authenticateWithWillys(credentials);

      if (result.success) {
        router.push("/orders");
      } else {
        setError(result.error || "Authentication failed");
      }
    } catch (_err) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Willys Order Checklist
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in with your Willys credentials
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-md text-sm text-blue-800">
            <p className="font-medium mb-2">🤖 Automated Login:</p>
            <p>
              This app uses Puppeteer to automatically log in to Willys.se and
              extract session cookies.
            </p>
            <p className="mt-2">
              <strong>Note:</strong> First login may take 15-30 seconds as it
              launches a browser in the background.
            </p>
          </div>

          <div className="mt-4 p-4 bg-amber-50 rounded-md text-sm text-amber-800">
            <p className="font-medium mb-2">⚠️ Test Credentials:</p>
            <p>
              The provided test credentials may be expired. To use this app with
              your own account:
            </p>
            <ol className="list-decimal list-inside mt-2 space-y-1 text-xs">
              <li>Enter your actual Willys username/password</li>
              <li>
                Or log in to Willys.se manually first to verify credentials
              </li>
            </ol>
          </div>
        </div>

        <form action={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Enter your Willys username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Enter your Willys password"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
