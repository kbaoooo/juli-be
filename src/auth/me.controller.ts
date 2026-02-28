import { Controller, Get, UseGuards } from '@nestjs/common';
import { CurrentUser } from './decorators/current-user.decorator';
import { SupabaseAuthGuard } from './guards/supabase-auth.guard';

@Controller('me')
@UseGuards(SupabaseAuthGuard)
export class MeController {
  @Get()
  getMe(@CurrentUser() user: any) {
    return {
      id: user.id,
      email: user.email,
      plan: user.plan,
    };
  }
}
