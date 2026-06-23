"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FRONTEND_ADMIN_CREDENTIALS,
  isRegistrationAdminAuthenticated,
  setRegistrationAdminSession,
} from "../../../components/verbattle/registrationStorage";

export default function RegistrationAdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isRegistrationAdminAuthenticated()) {
      router.replace("/register/admin/dashboard");
    }
  }, [router]);

  function handleSubmit(event) {
    event.preventDefault();

    if (
      username.trim() === FRONTEND_ADMIN_CREDENTIALS.username &&
      password === FRONTEND_ADMIN_CREDENTIALS.password
    ) {
      setRegistrationAdminSession();
      router.push("/register/admin/dashboard");
      return;
    }

    setError("Invalid login details. Please try again.");
  }

  return (
    <>
      <style>{`
        .vba-login {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 32px 18px;
          background:
            radial-gradient(circle at top left, rgba(209, 27, 47, 0.10), transparent 24%),
            linear-gradient(180deg, #f7f9fc 0%, #eef3fb 100%);
        }
        .vba-login__card {
          width: min(100%, 440px);
          padding: 28px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(8, 35, 77, 0.08);
          box-shadow: 0 24px 60px rgba(8, 35, 77, 0.10);
        }
        .vba-login__eyebrow {
          display: inline-block;
          margin-bottom: 10px;
          color: #d11b2f;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .vba-login h1 {
          margin: 0 0 10px;
          color: #08234d;
          font-size: 32px;
          line-height: 1;
        }
        .vba-login p {
          margin: 0 0 22px;
          color: #64748b;
          font-size: 14px;
          line-height: 1.6;
        }
        .vba-login__hint {
          margin-top: 14px;
          padding: 12px 14px;
          border-radius: 14px;
          background: #f8fafc;
          color: #475569;
          font-size: 12px;
          line-height: 1.5;
        }
        .vba-login__grid {
          display: grid;
          gap: 14px;
        }
        .vba-login__field label {
          display: block;
          margin-bottom: 6px;
          color: #21344f;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .vba-login__field input {
          width: 100%;
          min-height: 48px;
          padding: 0 14px;
          border: 1px solid rgba(8, 35, 77, 0.12);
          border-radius: 14px;
          background: #fff;
          color: #08234d;
          font: inherit;
        }
        .vba-login__button {
          min-height: 50px;
          border: 0;
          border-radius: 999px;
          background: linear-gradient(135deg, #d11b2f 0%, #f04c3a 100%);
          color: #fff;
          font: inherit;
          font-size: 14px;
          font-weight: 800;
          box-shadow: 0 16px 38px rgba(209, 27, 47, 0.24);
        }
        .vba-login__error {
          margin-top: 14px;
          padding: 12px 14px;
          border-radius: 14px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #b91c1c;
          font-size: 13px;
          font-weight: 700;
        }
      `}</style>

      <main className="vba-login">
        <form className="vba-login__card" onSubmit={handleSubmit}>
          <span className="vba-login__eyebrow">Frontend Only Admin</span>
          <h1>Registration Login</h1>
          <p>
            Use this screen to open saved registration records and download
            print-ready PDF sheets from the browser.
          </p>

          <div className="vba-login__grid">
            <div className="vba-login__field">
              <label htmlFor="admin-username">Username</label>
              <input
                id="admin-username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                  setError("");
                }}
              />
            </div>

            <div className="vba-login__field">
              <label htmlFor="admin-password">Password</label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError("");
                }}
              />
            </div>

            <button className="vba-login__button" type="submit">
              Open Admin Dashboard
            </button>
          </div>

          {error ? <div className="vba-login__error">{error}</div> : null}

          <div className="vba-login__hint">
            Demo login:
            <br />
            Username: <strong>{FRONTEND_ADMIN_CREDENTIALS.username}</strong>
            <br />
            Password: <strong>{FRONTEND_ADMIN_CREDENTIALS.password}</strong>
          </div>
        </form>
      </main>
    </>
  );
}
