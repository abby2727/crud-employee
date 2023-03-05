import connectMongo from "../../../database/conn";
import { getUsers, postUser } from "../../../database/controllers";

export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }))

    const { method } = req

    switch (method) {
        case 'GET':
            // res.status(200).json({ method, name: 'GET Request' });
            getUsers(req, res);
            break;
        case 'POST':
            // res.status(200).json({ method, name: 'POST Request' });
            postUser(req, res);
            break;
        case 'PUT':
            res.status(200).json({ method, name: 'PUT Request' });
            break;
        case 'DELETE':
            res.status(200).json({ method, name: 'DELETE Request' });
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowd`)
            break;
    }
}
