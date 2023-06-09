import { Link } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const ToyTable = ({toy}) => {
    // eslint-disable-next-line react/prop-types
    const {  name, photoUrl, price,  selerName, quantity, Catagory, _id } = toy;
    return (
            <tr className="text-center">
                <td>
                    {selerName}
                </td>
                <td>
                    <div className="flex items-center space-x-3 text-center">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={`${photoUrl}`} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
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
                <th>
                <Link
                    to={`/details/${_id}`}
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                    View Details
                </Link>
                </th>
            </tr>
    );
};

export default ToyTable;