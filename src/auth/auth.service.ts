import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { LoginDto, RegisterDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { SECRET_KEY } from 'src/app.environments.';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}
  async login(dto: LoginDto) {
    const user = await this.prismaService.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new ForbiddenException("Email doesn't exist");
    }

    const { password, ...userWithoutPassword } = user;

    const pwMatches = await argon.verify(user.password, dto.password);

    const accessToken = this.jwtService.sign(userWithoutPassword, {
      secret: SECRET_KEY,
    });

    if (!pwMatches) {
      throw new ForbiddenException("Email doesn't exist");
    }

    return { ...userWithoutPassword, accessToken };
  }

  async register(dto: RegisterDto) {
    const hashedPassword = await argon.hash(dto.password);

    try {
      const user = await this.prismaService.user.create({
        data: {
          email: dto.email,
          name: dto.name,
          password: hashedPassword,
        },
      });

      const { password, ...userWithoutPassword } = user;

      const accessToken = this.jwtService.sign(userWithoutPassword, {
        secret: SECRET_KEY,
      });

      return { ...user, accessToken };
    } catch (error) {
      return error;
    }
  }
}
