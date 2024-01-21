import { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs"

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {
        type: String, 
        required: true,
        validate: (password: string) => {
            if (!password?.length || password.length < 5){
                new Error("Password must be at least 6 characters");
            }
        }
    },
}, {timestamps: true})

UserSchema.post("validate", (user) => {
    const notHashedPassword = user.password;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(notHashedPassword, salt);
})

export const User = models?.User || model("User", UserSchema);