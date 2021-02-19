import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { firstName, lastName, email } = req.body;

    const data = {
        members: [
            {
                email_address: email,
                status: 'pending',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                },
            },
        ],
    };

    const JsonData = JSON.stringify(data);

    try {
        const resp = await axios.post(
            'https://us2.api.mailchimp.com/3.0/lists/d77da7e4b1',
            JsonData,
            {
                headers: {
                    Authorization: `auth ${process.env.MAILCHIMP_KEY}`,
                },
            },
        );

        if (resp.data.errors.length > 0) {
            if (resp.data.errors[0].error_code === 'ERROR_CONTACT_EXISTS') {
                return res.status(409).json({ error: 'Email already on the list!' });
            }
        }

        if (resp.status === 200) return res.status(200).json({ message: 'Check your inbox for a confirmation message (;' });
        return res.status(resp.status).json({ error: 'Process Failed!', details: resp.data.errors[0] });
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        return res.status(500).json({ error: 'Server Error!' });
    }
};
