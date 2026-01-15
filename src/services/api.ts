import { SITE_CONFIG } from "@/constants";

export const api = {
  subscribeToWaitlist: async (email: string) => {
    // This is a mock API call
    console.log(`Subscribing ${email} to ${SITE_CONFIG.name} waitlist...`);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "Successfully joined waitlist!" });
      }, 1000);
    });
  },
};
