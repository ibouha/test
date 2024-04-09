"use client" 
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import logo from "../../../public/assets/images/eventify.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { username :"",email: "", password: "" },
  });

  const onSubmit = (values:z.infer<typeof RegisterSchema>) => {
      console.log(values);
  }
  return (
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-5xl">
      <div className="w-full p-8">
        <div className="flex justify-center">
          <Link href="/">
            <Image src={logo} width={300} height={300} alt="" />
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full flex-1 mt-6">
            <div className="flex flex-col items-center">
              <button className="w-full max-w-xs font-bold shadow-sm rounded-none py-3 bg-yellow-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                <div className="bg-white p-2 rounded-none">
                  <FcGoogle />
                </div>
                <span className="ml-4">Sign In with Google</span>
              </button>
            </div>

            <div className="my-5 border-b text-center">
              <div className="leading-none px-2 inline-block text-sm text-blue-950 tracking-wide font-medium bg-white transform translate-y-1/2">
                Or sign In with Cartesian E-mail
              </div>
            </div>

            <Form {...form}>
              <form
                className="mx-auto max-w-xs space-y-6"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="eventify"
                          type="text"
                          className="w-full  py-5 rounded-none font-medium bg-gray-100 border border-yellow-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="event.fy@example.com"
                          type="email"
                          className="w-full  py-5 rounded-none font-medium bg-gray-100 border border-yellow-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="********"
                          type="password"
                          className="w-full  py-5 rounded-none font-medium bg-gray-100 border border-yellow-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                </div>
                <FormError message=""/>
                <FormSuccess message=""/>
                <Button variant="auth" type="submit">
                  <span className="ml-1">Login</span>
                </Button>
                <p className="mt-6 text-xs text-gray-600 ">
                  Have account ?{" "}
                  <Link href="/login" className="text-yellow-400">
                    Login
                  </Link>
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

