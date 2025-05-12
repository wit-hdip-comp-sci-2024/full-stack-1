import { donationService } from "$lib/services/donation-service";
import type { User } from "$lib/types/donation-types";
import { redirect } from "@sveltejs/kit";

export const actions = {
  signup: async ({ request, cookies }) => {
    const form = await request.formData();
    const user: User = {
      firstName: form.get("firstName") as string,
      lastName: form.get("lastName") as string,
      email: form.get("email") as string,
      password: form.get("password") as string
    };
    if (user.email === "" || user.password === "") {
      throw redirect(307, "/");
    } else {
      console.log(`attempting to sign up email: ${user.email} with password: ${user.password}`);
      const success = await donationService.signup(user);
      if (success) {
        throw redirect(303, "/");
      } else {
        throw redirect(307, "/");
      }
    }
  }
};
