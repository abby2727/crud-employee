import { BiEdit, BiTrashAlt } from "react-icons/bi"

const Table = () => {
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
                <tr className="bg-gray-50 text-center">
                    <td className="px-16 py-2">
                        <span>Abdul Fahad</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>Pangandaman</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>Sep 28, 1999</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>23</span>
                    </td>
                    <td className="px-16 py-2 flex justify-around gap-2">
                        <button className="cursor"><BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit></button>
                        <button className="cursor"><BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt></button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table