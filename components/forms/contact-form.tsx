"use client";

import React from "react";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MoveRight, Rocket, RotateCw } from "lucide-react";
import { sendEmail } from "@/actions";
import { getErrorMessage } from "@/lib/utils";
import { useToast } from "../ui/use-toast";

type Props = {};
const formSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be atleast 3 characters long" })
    .max(50, { message: "Name must be less than 50 characters long" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  message: z
    .string({ required_error: "Message is required" })
    .min(10, { message: "Message must be atleast 10 characters long" })
    .max(500, { message: "Message must be less than 500 characters long" }),
});

export type formSchemaType = z.infer<typeof formSchema>;

const ContactForm = (props: Props) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  /**useForm */
  const form = useForm<formSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  /**onSubmit */
  const onSubmit = async (data: formSchemaType) => {
    console.log(data);
    setIsLoading(true);
    try {
      const { success, error } = await sendEmail(data);
      setIsLoading(false);
      if (success) {
        form.reset();
        toast({
          description: "Email sent successfully",
        });
      } else {
        throw new Error(error);
      }
    } catch (error: unknown) {
      console.log(getErrorMessage(error).error);
      toast({
        title: "Error",
        variant: "destructive",
        description: getErrorMessage(error).error,
      });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="jhon" {...field} className=" w-full" />
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
                  placeholder="jhon@gmail.com"
                  {...field}
                  className=" w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Message  "
                  {...field}
                  className=" w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={!form.formState.isDirty || !form.formState.isValid}
        >
          {isLoading && <RotateCw className=" animate-spin w-6 h-6 mr-2" />}
          Send
          <MoveRight className=" ml-2 w-6 h-6" />
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
