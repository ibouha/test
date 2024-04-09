import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(1,{
        message:"Password is required"
    })
  
})

export const RegisterSchema = z.object({
    username: z.string().min(1,{
        message:"Name is required"
    }),
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string()
    .min(8, 'The password must be at least 8 characters long')
    .max(32, 'The password must be a maximun 32 characters')
    .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*-])[A-Za-z\d!@#$%&*-]{8,}$/,
        'The username must contain at least one lowercase letter, one uppercase letter, one number, and one special character (!@#$%&*-), and must be between 8 and 32 characters long.'
    )
  
})

export const eventFormSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters'),
    description: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
    location: z.string().min(3, 'Location must be at least 3 characters').max(400, 'Location must be less than 400 characters'),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()
  })