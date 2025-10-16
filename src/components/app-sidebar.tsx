"use client";

import {
  AppleIcon,
  AudioWaveform,
  ChartColumnStacked,
  Command,
  GalleryVerticalEnd,
  Handshake,
  LayoutDashboard,
  MessageSquareWarning,
  TruckElectricIcon,
  Undo2,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import Link from "next/link";

// User and team data
const data = {
  user: {
    name: "Ronald Rosquete",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "StoreZone",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
};

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    url: "/dashboard/products",
    icon: AppleIcon,
  },
  {
    title: "Category",
    url: "/dashboard/category",
    icon: ChartColumnStacked,
  },
  {
    title: "Delivery",
    url: "/dashboard/delivery",
    icon: TruckElectricIcon,
  },
  {
    title: "Reports",
    url: "/dashboard/reports",
    icon: MessageSquareWarning,
  },
  {
    title: "Suppliers",
    url: "/dashboard/suppliers",
    icon: Handshake,
  },
  {
    title: "Returns",
    url: "/dashboard/returns",
    icon: Undo2,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Inventario</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
