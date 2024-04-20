import { IsString, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    phone: string;

    @IsString()
    cpf: string;

    @IsString()
    password: string;
}
