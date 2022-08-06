import { supabase } from "../utils/supabase";
import Twitter from "../components/twitter";

export default function Login({ handle }) {
  return (
    <>
      <button onClick={handle}>
        <Twitter />
        login con twitter
      </button>
      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background-color: #2b8cc9;
          color: white;
          width: 200px;
          height: 50px;
          font-size: 1.2rem;
          border: none;
          border-radius: 5px;
          margin-top: 32px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}