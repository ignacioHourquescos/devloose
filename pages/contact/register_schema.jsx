import { object, string } from 'zod';

//prettier-ignore
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

const registerSchema = object({
  fromName: string()
    .nonempty('Nombre requerido')
    .max(50, 'Maximo 50 caracteres'),
  fromEmail: string()
    .regex(emailRegex, 'Mail invalido')
    .nonempty('Email requerido')
    .email('Email es invalido'),
  fromPhone: string()
    .regex(phoneRegex, 'Numero Invalido')
    .min(8, 'Numero invalido'),
  message: string()
    .nonempty('complete el campo por favor')
    .max(300, 'Maximo 300 caracteres'),
});

//prettier-ignore
export default registerSchema;