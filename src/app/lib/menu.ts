import { MenuType } from "./types"


export const clientRoutes: MenuType[] = [
  { route: "/", name: "Home" },
  { route: "/contact", name: "Contact us" },
  { route: "/pricing", name: "Pricing" },
  { route: "/booking", name: "Booking" },
]

export const dashboardRoutes: MenuType[] = [
  { route: "/", name: "Web"},
  { route: "/dashboard", name: "Perfil" },
  { route: "/dasbboard/clients", name: "Clients" },
  { route: "/dashboard/paymants", name: "Payments" },
  { route: "/dashboard/calendar", name: "Calendar" }
]