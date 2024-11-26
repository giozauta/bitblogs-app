"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/supabase/auth";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({

  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),

  confirmPassword: z.string().min(2, {
    message: "Password must be at least 6 characters.",
  }),
});

export function SignUpForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
    onSuccess: (data) => {
      console.log("Registration successful:", data);
    },
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {

      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.password !== data.confirmPassword && data.email == "") {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    handleRegister(data);
    navigate("/");
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("registration.email")}</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email" {...field} />
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
              <FormLabel>{t("registration.password")}</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("registration.confirmPassword")}</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="confirmPassword"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full bg-blue-500 hover:bg-blue-700" type="submit">
          {t("registration.signUp")}
        </Button>
      </form>
    </Form>
  );
}
