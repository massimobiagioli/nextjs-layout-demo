import { NextApiRequest, NextApiResponse } from "next"
import { Profile } from "../../../types/profile"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Profile>
) {
    const myProfile = {
        id: "1",
        nickname: "johndoe",
        firstName: "John",
        lastName: "Doe"
    }

    res.status(200).json(myProfile)
}