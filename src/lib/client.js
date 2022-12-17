import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "r2av0n77",
  dataset: "production",
  apiVersion: "2022-12-17",
  useCdn: true,
});
