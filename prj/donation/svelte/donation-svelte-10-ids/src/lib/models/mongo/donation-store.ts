import type { Donation } from "$lib/types/donation-types.js";
import { DonationMongoose } from "./donation.js";

export const donationStore = {
  async find(): Promise<Donation[]> {
    const donations = await DonationMongoose.find().populate("donor").populate("candidate").lean();
    return donations;
  },

  async findBy(candidateId: string): Promise<Donation[]> {
    const donations = await DonationMongoose.find({ candidate: candidateId }).populate("donor").populate("candidate").lean();
    console.log(donations);
    return donations;
  },

  async add(donation: Donation): Promise<Donation | null> {
    const newDonation = new DonationMongoose({ ...donation });
    await newDonation.save();
    const populatedDonation = await DonationMongoose.findById(newDonation._id).populate("donor").populate("candidate").lean();
    return populatedDonation;
  },

  async delete() {
    await DonationMongoose.deleteMany({});
  }
};
