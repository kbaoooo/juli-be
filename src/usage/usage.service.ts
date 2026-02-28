import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

const PLAN_LIMITS = {
  free: { contents: 30, ai: 5 },
  pro: { contents: 500, ai: 100 },
  team: { contents: 9999, ai: 9999 },
};

@Injectable()
export class UsageService {
  constructor(private prisma: PrismaService) {}

  async getUsage(userId: string) {
    const user = await this.prisma.users.findUnique({ where: { id: userId } });
    if (!user) return null;

    const plan = user.plan as keyof typeof PLAN_LIMITS;
    const limits = PLAN_LIMITS[plan] ?? PLAN_LIMITS.free;

    // Count contents created by user across all their workspaces
    const contentsUsed = await this.prisma.saved_contents.count({
      where: { created_by: userId },
    });

    // Count AI usages (usage_logs with tokens)
    const aiUsed = await this.prisma.usage_logs.count({
      where: { user_id: userId },
    });

    return {
      plan,
      contents_used: contentsUsed,
      contents_limit: limits.contents,
      ai_used: aiUsed,
      ai_limit: limits.ai,
    };
  }
}
