import { QuoteStatus } from '../../../generated/prisma/enums.js';;
import type { CreateQuoteInput, UpdateQuoteInput } from './devis.types.js';
import { cronJobs } from '../invoice/utils/cronJobs.js';
import { CronJob } from 'cron/dist/job.js';
import { Prisma, PrismaClient } from '../../../generated/prisma/client.js';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST || '',
  user: process.env.DATABASE_USER || '',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || '',
  connectionLimit: 5
});
const prisma = new PrismaClient({ adapter });

export class DevisService {
  async create(autoentrepreneurId: string, data: CreateQuoteInput) {

    const CreateQuoteData: Prisma.QuoteCreateInput = {
      quoteNumber:"1",
      issueDate: data.issueDate as Date,
      validityDate: data.validityDate as Date,
      notes: data.notes as string,
      status: QuoteStatus.DRAFT,
      AutoEntrepreneur:{
        connect:{
          id: autoentrepreneurId
        }
      },
      customer: {
        connect:{
          id: data.customerId
        }
      },
    }

    return prisma.quote.create({
      data: {
        ...CreateQuoteData,
        quoteLines:{
          create: data.lines
        }
      }
    });

  }

  async findAll(autoentrepreneurId: string) {
    return prisma.quote.findMany({
      where:{
        AutoEntrepreneurId: autoentrepreneurId
      },
      include: { quoteLines: true },
    });
  }

  async findById(id: string) {
    return prisma.quote.findUnique({
      where: { id },
      include: { quoteLines: true },
    });
  }

  async update(id: string, data: UpdateQuoteInput) {
    return prisma.quote.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return prisma.quote.delete({
      where: { id },
    });
  }

  async changeStatus(id: string, status: QuoteStatus) {
    return prisma.quote.update({
      where: { id },
      data: { status },
    });
  }
}

