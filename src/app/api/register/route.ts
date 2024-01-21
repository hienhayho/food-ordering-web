import { User } from '@/app/models/User';
import mongoose from 'mongoose';

export const POST = async (req: any) => {
    const body = await req?.json();
    const URL: string = process.env.MONGO_URL
    mongoose.connect(URL);
    const createdUser = await User.create(body);
    return Response.json(createdUser)
}