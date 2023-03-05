import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { getUser } from "../lib/helper";
import { useQuery } from "react-query";

const Table = () => {
    // getUser().then(res => console.log(res));
    const { isLoading, isError, data, error } = useQuery('users', getUser);

    if (isLoading) return <div>Employee is loading...</div>
    if (isError) return <div>Got an error {error}</div>

    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-16 py-2">
                        <span className="text-gray-200">First Name</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Last Name</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Birthday</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Age</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Actions</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                {
                    data.map((object, index) =>
                        <Tr
                            key={index}
                            {...object}
                        />
                    )
                }
            </tbody>
        </table>
    )
}

const Tr = ({ id, firstname, lastname, birthday, age }) => {
    return (
        <tr className="bg-gray-50 text-center">
            <td className="px-16 py-2">
                <span>{firstname || "Unknown"}</span>
            </td>
            <td className="px-16 py-2">
                <span>{lastname || "Unknown"}</span>
            </td>
            <td className="px-16 py-2">
                <span>{birthday || "Unknown"}</span>
            </td>
            <td className="px-16 py-2">
                <span>{age || "Unknown"}</span>
            </td>
            <td className="px-20 py-2 flex justify-around gap-2">
                <button className="cursor"><BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit></button>
                <button className="cursor"><BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt></button>
            </td>
        </tr>
    );
}

export default Table