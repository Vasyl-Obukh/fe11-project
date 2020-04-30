import { Controller, Request, Post, UseGuards, Get, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local.guard';
import { JwtAuthGuard } from './jwt.guard';
import { UserDto } from '../users/dto/user.dto';

const cookieConfig = {
  httpOnly: true,
  maxAge: 3600000,
};

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  @Post('register')
  async register(@Body() userDto: UserDto, @Res() res) {
    const token: string = await this.authService.register(userDto);

    res.status(201)
      .cookie('ACCESS_TOKEN', token, cookieConfig)
      .send();
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Res() res) {
    const token: string = await this.authService.getToken(req.user);

    res.status(201)
      .cookie('ACCESS_TOKEN', token, cookieConfig)
      .send(req.user.getPublicFields());
  }

  @UseGuards(JwtAuthGuard)
  @Get('dummy')
  getDummy(@Request() req) {
    return req.user;
  }
}
