import { Controller, Get, UseGuards } from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { UsageService } from './usage.service';

@Controller('usage')
@UseGuards(SupabaseAuthGuard)
export class UsageController {
  constructor(private readonly usageService: UsageService) {}

  @Get()
  getUsage(@CurrentUser() user: any) {
    return this.usageService.getUsage(user.id);
  }
}
