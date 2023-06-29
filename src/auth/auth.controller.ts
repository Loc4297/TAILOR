import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LogInDTO, RegisterDTO } from './dto/auth.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiBody({
    type: RegisterDTO,
    examples: {
      user_1: {
        value: {
          name: 'John',
          phoneNumber: '84365920514',
          password: '1232@asdS',
        } as RegisterDTO,
      },
    },
  })
  async register(@Body() registrationData: RegisterDTO) {
    return this.authService.register(registrationData);
  }

  @Post('log-in')
  @ApiBody({
    type: LogInDTO,
    examples: {
      admin: {
        value: {
          phoneNumber: '84365920514',
          password: 'kemnhangheo',
        } as LogInDTO,
      },
      user: {
        value: {
          phoneNumber: '84365920123',
          password: 'kemnhangheo',
        } as LogInDTO,
      },
    },
  })
  async logIn(@Body() logInData: LogInDTO) {
    return this.authService.login(logInData);
  }
}
