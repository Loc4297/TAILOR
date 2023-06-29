import { IsNotEmpty, IsOptional, IsString } from '@nestjs/class-validator';
import { Role } from '@prisma/client';
import { IsNumber, IsPhoneNumber } from 'class-validator';

export class AdminDTO {
  @IsNotEmpty()
  @IsString()
  name: 'Admin';

  @IsNotEmpty()
  @IsNumber()
  @IsPhoneNumber('VN')
  phoneNumber: '036xxxxxxxx';

  @IsNotEmpty()
  @IsString()
  password: 'TailorBros';

  // @IsNotEmpty()
  // role: Role;
  @IsNotEmpty()
  isAdmin: true;
}

export class RegisterDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber('VN')
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  role: Role[];
}

export class LogInDTO {
  @IsNotEmpty()
  @IsNumber()
  @IsPhoneNumber('VN')
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class OTPVerifyDTO {}

export class OTPSendDTO {}

export class UpdateProfileDTO {}

export class ResetPasswordDTO {}

export class ChangePasswordDTO {}

export class ForgotPasswordDTO {}
