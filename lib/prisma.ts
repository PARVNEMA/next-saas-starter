import { PrismaClient } from "@prisma/client";
const PrismaClientSingleton = () => {
	return new PrismaClient();
};

const globalforPrisma = globalThis as unknown as {
	Prisma: PrismaClient | undefined;
};

const Prisma =
	globalforPrisma.Prisma ?? PrismaClientSingleton();

export default Prisma;

if (process.env.NODE_ENV !== "production") {
	globalforPrisma.Prisma = Prisma;
}
