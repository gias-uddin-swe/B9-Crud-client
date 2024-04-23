import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { baseURL } from "../utilitis/Url";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

const MyCartPage = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([]);
  // console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/myProduct/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);

  return (
    <div className="gadgetContainer pt-10">
      
      {
        item?.map(p => (
          <div>
            <h1>Hello</h1>
          </div>
        ))
      }
    </div>
  );
};

export default MyCartPage;
