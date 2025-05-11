import { donationService } from "$lib/services/donation-service";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const candidates = await donationService.getCandidates();
  const candidate = candidates.find((c) => c._id === params.id);
  return {
    candidate,
    donations: await donationService.getDonations(params.id)
  };
};
