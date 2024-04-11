import * as z from "zod";

export const SocialMediaLinksSchema = z.object({
  facebook: z.string(),
  instagram: z.string(),
  orther: z.string(),
});
export type SocialMediaLinks = z.infer<typeof SocialMediaLinksSchema>;

export const DaySchema = z.object({
  start: z.string(),
  end: z.string(),
});
export type Day = z.infer<typeof DaySchema>;

export const OpeningHoursSchema = z.object({
  Monday: DaySchema,
  Tuesday: DaySchema,
  Wednesday: DaySchema,
  Thursday: DaySchema,
  Friday: DaySchema,
  Saturday: DaySchema,
  Sunday: DaySchema,
});
export type OpeningHours = z.infer<typeof OpeningHoursSchema>;

export const LocationCoordinatesSchema = z.object({
  linkGoogleMap: z.string(),
});
export type LocationCoordinates = z.infer<typeof LocationCoordinatesSchema>;

export const FacilitySchema = z.object({
  name: z.string(),
  status: z.boolean(),
  description: z.string(),
});
export type Facility = z.infer<typeof FacilitySchema>;

export const RestaurantSchema = z.object({
  _id: z.string(),
  address: z.string(),
  Phone: z.string(),
  owner: z.string(),
  CCCD: z.string(),
  capacity: z.number(),
  cuisineType: z.string(),
  facilities: z.array(FacilitySchema),
  locationCoordinates: LocationCoordinatesSchema,
  imagePaths: z.array(z.string()),
  socialMediaLinks: SocialMediaLinksSchema,
  statusRestaurants: z.string(),
  openingHours: OpeningHoursSchema,
  note: z.null(),
  description: z.string(),
  status: z.null(),
  isActive: z.null(),
  updateAt: z.null(),
  updateAtTimestamp: z.null(),
  updateBy: z.null(),
  createBy: z.null(),
  createAtTimestamp: z.null(),
  createAt: z.null(),
  name: z.string(),
});
export type Restaurant = z.infer<typeof RestaurantSchema>;
