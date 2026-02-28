import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AiService {
  constructor(private prisma: PrismaService) {}

  /**
   * Stub: analyze a content item and store a mock AI insight.
   * Replace this with a real LLM call in v2.
   */
  async analyze(workspaceId: string, contentId: string) {
    const content = await this.prisma.saved_contents.findFirst({
      where: { id: contentId, workspace_id: workspaceId },
    });
    if (!content) throw new NotFoundException('Content not found');

    // Upsert a mock insight
    const insight = await this.prisma.ai_insights.upsert({
      where: { content_id: contentId },
      create: {
        content_id: contentId,
        summary: 'Mock AI summary — replace with real LLM output in v2.',
        hook: { type: 'curiosity', score: 0.85 },
        format: { type: 'short-form', duration_seconds: 30 },
        angle: { primary: 'pain-point', secondary: 'aspiration' },
        idea_suggestions: ['Hook idea 1', 'Hook idea 2'],
        confidence: 0.7,
        raw_analysis: {},
      },
      update: {
        summary: 'Mock AI summary (refreshed).',
      },
    });

    return insight;
  }

  /**
   * Stub: aggregate patterns from ai_insights for a workspace.
   */
  async getPatterns(workspaceId: string) {
    const insights = await this.prisma.ai_insights.findMany({
      where: {
        saved_contents: { workspace_id: workspaceId },
      },
      include: { saved_contents: true },
    });

    // Simple aggregation for MVP
    const hookTypes = insights.map((i) => (i.hook as any)?.type ?? 'unknown');
    const frequency: Record<string, number> = {};
    for (const type of hookTypes) {
      frequency[type] = (frequency[type] ?? 0) + 1;
    }

    return {
      total_analyzed: insights.length,
      hook_frequency: frequency,
    };
  }
}
