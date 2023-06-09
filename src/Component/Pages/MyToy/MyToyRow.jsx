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
                        <button className="btn btn-primary"> Update </button>
                    </Link>
                </span>
                <span>
                    <Link
                        onClick={() => handleDelete(toy?._id)}
                        className="font-medium"
                    >
                        <button className="btn btn-primary">  Delete </button>
                    </Link>
                </span>
            </th>
        </tr>
    );
};

export default MyToyRow;