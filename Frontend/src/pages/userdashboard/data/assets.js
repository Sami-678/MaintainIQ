const categories = ["Electronics", "HVAC Systems", "Electrical Units", "Plumbing Assets", "IT Infrastructure", "Furniture"];
const locations = ["Room 204", "Lab 3", "Basement", "Utility Room", "Server Room", "Admin Office"];
const statuses = ["Operational", "Under Maintenance", "Out of Service", "Retired"];

const baseAssets = [
  { name: "Classroom Projector 01", code: "AST-0231", category: "Electronics", location: "Room 204", status: "Operational", lastService: "12 May 2026" },
  { name: "AC Unit - Lab 3", code: "AST-0198", category: "HVAC Systems", location: "Lab 3", status: "Under Maintenance", lastService: "02 Jun 2026" },
  { name: "Generator Room 2", code: "AST-0110", category: "Electrical Units", location: "Basement", status: "Operational", lastService: "15 Apr 2026" },
  { name: "Water Pump A-1", code: "AST-0305", category: "Plumbing Assets", location: "Utility Room", status: "Out of Service", lastService: "20 Mar 2026" },
  { name: "Server Rack B2", code: "AST-0412", category: "IT Infrastructure", location: "Server Room", status: "Operational", lastService: "01 Jun 2026" },
  { name: "Office Chair X4", code: "AST-0551", category: "Furniture", location: "Admin Office", status: "Operational", lastService: "10 Jan 2026" },
  { name: "UPS System C", code: "AST-0488", category: "IT Infrastructure", location: "Server Room", status: "Retired", lastService: "20 Dec 2025" },
];

function generateMore(count) {
  const extra = [];
  const nameStems = [
    "Split AC Unit", "Water Cooler", "Passenger Elevator", "Backup Generator", "Fire Alarm Panel",
    "Router Cabinet", "Desk Lamp", "Whiteboard Projector", "Ceiling Fan", "Smart Lock", "CCTV Camera",
    "Printer", "Water Heater", "Exhaust Fan", "Emergency Light", "Access Control Panel",
  ];
  for (let i = 0; i < count; i++) {
    const stem = nameStems[i % nameStems.length];
    const category = categories[i % categories.length];
    const location = locations[(i + 2) % locations.length];
    const status = statuses[i % statuses.length];
    extra.push({
      name: `${stem} ${String.fromCharCode(65 + (i % 6))}${i % 4}`,
      code: `AST-${(600 + i).toString().padStart(4, "0")}`,
      category,
      location,
      status,
      lastService: `${(i % 27) + 1} ${["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i % 6]} 2026`,
    });
  }
  return extra;
}

export const allAssets = [...baseAssets, ...generateMore(35)];
export const totalAssetCount = allAssets.length;
export { categories, locations, statuses };
