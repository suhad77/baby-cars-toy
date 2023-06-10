import { Link } from "react-router-dom";

const MyToyRow = ({ toy, handleDelete }) => {
    const { name, price, selerName, quantity, Catagory, } = toy;
    return (
        <tr className="text-center">
            <td>
                {selerName}
            </td>
            <td>
                <div className="font-bold">{name}</div>
            </td>
            <td>
                {Catagory}
            </td>
            <td>
                {price}
            </td>
            <td>
                {quantity}
            </td>
            <th className="flex gap-4">
                <span>
                    <Link
                        to={`/myToys/${toy?._id}`}
                        className="font-medium"
                    >
                        <button className="btn bg-blue-700 hover:bg-blue-800"> Update </button>
                    </Link>
                </span>
                <span>
                    <Link
                        onClick={() => handleDelete(toy?._id)}
                        className="font-medium"
                    >
                        <button className="btn bg-blue-700 hover:bg-blue-800">  Delete </button>
                    </Link>
                </span>
            </th>
        </tr>
    );
};

export default MyToyRow;