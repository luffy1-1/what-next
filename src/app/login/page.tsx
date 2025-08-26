"use client";

import { Box, Button, Group, Image, TextInput, Typography } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Login() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value: string) => value.length > 0 ? null : "Password is required"
    },
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <Box pos="fixed" top={10} left={10}>
        <Image src="/logo.svg" alt="Logo" />
      </Box>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <div className="w-96 bg-white p-8 rounded-lg shadow-lg text-black">
          <Typography>Welcome back!</Typography>
          <TextInput
            withAsterisk
            label="Email"
            type="email"
            placeholder="youremail@mail.com"
            key={form.key('email')}
            {...form.getInputProps('email')}
            
          />

          <TextInput
            withAsterisk
            label="Password"
            type="password"
            autoComplete="new-password"
            placeholder="*******"
            key={form.key('password')}
            {...form.getInputProps('password')}
          />
          <Group mt="md" justify="flex-end">
            <Button variant="outline">Register</Button>
            <Button type="submit">Login</Button>
          </Group>
        </div>
      </form>
    </div>
  );
}
