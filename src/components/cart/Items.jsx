import React,{useState} from "react";


export default function Items({items}) {
  // const [data, setData] = useState([]);

  let price = items.price;
  let [num, setNum] = useState(1);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
      
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  return (
    <>
      <tr>
        <th scope="row">
          <div className="d-flex align-items-center">
            <img src={items.image}  className="rounded-3 my-3"
              style={{ width: "120px" }} alt="Book"/>
            <div className="flex-column ms-4">
              <p className="mb-2">{items.name}</p>
            </div>
          </div>
        </th>
        <td className="align-middle">
          <p className="mb-0" style={{ fontWeight: "500" }}>{" "}{items.type}{" "} </p>
        </td>
        <td className="align-middle">
          <div className="d-flex flex-row align-items-center">
            <button className="btn btn-outline-primary" type="button" onClick={decNum}> {" "} - {" "} </button>

            <input type="text" className="form-control w-25 ps-4 me-2 ms-2" value={num} onChange={handleChange} />

            <button className="btn btn-outline-primary" type="button" onClick={incNum}> {" "} + {" "}</button>
          </div>
        </td>
        <td className="align-middle">
          <p className="mb-0" style={{ fontWeight: "500" }}>{" "} {price} {" "} </p>
        </td>
      </tr>
    </>
  );
}
