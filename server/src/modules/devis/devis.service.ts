import { PrismaClient} from '@prisma/client/extension';
import { QuoteStatus } from '../../../generated/prisma/enums.js';;
import type { CreateQuoteInput, UpdateQuoteInput } from './devis.types.js';
import { cronJobs } from '../invoice/utils/cronJobs.js';
import { CronJob } from 'cron/dist/job.js';

const prisma = new PrismaClient();

export class DevisService {
  async create(data: CreateQuoteInput) {
    
    return prisma.quote.create({
      data: {
        issueDate: data.issueDate,
        validityDate: data.validityDate,
        customerId: data.customerId,
        notes: data.notes,
        status: QuoteStatus.DRAFT,
        lines: {
          create: data.lines,
        },
      },
    });

  }

  async findAll() {
    return prisma.quote.findMany({
      include: { lines: true },
    });
  }

  async findById(id: string) {
    return prisma.quote.findUnique({
      where: { id },
      include: { lines: true },
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

