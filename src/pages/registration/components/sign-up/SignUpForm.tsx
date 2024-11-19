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

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function SignUpForm() {
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("registration.name")}</FormLabel>
              <FormControl>
                <Input placeholder="Gio Zauta" {...field} />
              </FormControl>
              <br />
              <FormLabel>{t("registration.email")}</FormLabel>
              <FormControl>
                <Input placeholder="zauta@example.com" {...field} />
              </FormControl>
              <br />
              <FormLabel>{t("registration.password")}</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormLabel>{t("registration.confirmPassword")}</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <br />

              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full bg-blue-500 hover:bg-blue-700" type="submit">
          {t("registration.login")}
        </Button>
      </form>
    </Form>
  );
}
