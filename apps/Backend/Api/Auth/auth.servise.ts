
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client.ts";
const adpater = new PrismaPg({ connectionString: "postgresql://postgres.iujfyvqraisphuzgoakk:meritrade001212@aws-0-ap-northeast-1.pooler.supabase.com:5432/postgres" });
const prisma = new PrismaClient({ adapter: adpater });

const authService = {
    async singUp(
        name: string,
        email: string,
        password: string
    ) {
        await prisma.user.create({
            data: {
                name, email, password
            }

        })
    },

    async login(
        email: string,
        password: string,
    ) {

    }


}
export default authService;