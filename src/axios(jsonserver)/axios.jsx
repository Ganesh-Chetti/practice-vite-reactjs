import axios from "axios";
import { useEffect, useState } from "react";

function Axios() {
  var [data, setdata] = useState([]);

  function Call() {
    axios
      .get("http://localhost:3000/posts", {
        headers: {
          "content-Type": "application/json",
        },
      })
      .then((val) => {
        setdata(val.data);
      });
  }

  useEffect(() => {
    Call();
  }, []);

  var sub = (e) => {
    e.preventDefault();

    var p = {
      title: e.target[0].value,
    };

    axios
      .post("http://localhost:3000/posts", p, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((val) => {
        console.log(val);
        Call();
      });
  };

  var del = (val, ind) => {
    console.log(val);
    axios
      .delete("http://localhost:3000/posts/" + val.id)
      .then((res) => {
        console.log(res);
        Call();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  var edi = (val, ind) => {
    var jj = {
      title: prompt("Enter what you want to edit"),
    };
    axios
      .patch("http://localhost:3000/posts/" + val.id, jj, {
        headers: {
            "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((val) => {
        console.log(val);
        Call();
      });
  };

  var daa = data.map((val, ind) => {
    return (
      <div key={ind}>
        <li>
          {val.title}
          <button
            onClick={() => {
              edi(val, ind);
            }}
          >
            edit
          </button>
          <button
            onClick={() => {
              del(val, ind);
            }}
          >
            delete
          </button>
        </li>
      </div>
    );
  });
  return (
    <>
      <h1>hi this is todo with Axios</h1>

      <form action="" onSubmit={sub}>
        <input type="text" />
        <input type="submit" value="submit" />
      </form>
      <ul>{daa}</ul>
    </>
  );
}

export default Axios;
