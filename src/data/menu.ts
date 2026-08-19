import menuJson from "../../data/beer-n-nuts/menu.json";
import { type MenuDoc, toRestaurant, toSections } from "./menu-doc";

/**
 * Source of truth: data/<slug>/menu.json (Git-as-CMS, edited from the
 * MenuSnap owner dashboard). This module only adapts it for presentation.
 */
export const menuDoc = menuJson as unknown as MenuDoc;

export const restaurant = toRestaurant(menuDoc);
export const sections = toSections(menuDoc);

export type { Section, ListSection, TableSection, SimpleItem } from "./menu-doc";
