// THE CHIEF ESTATE AKPALATA CONFIGURATION

const ESTATE_CONFIG = {
  name: "The Chief Estate Akpalata",
  location: "Akparata Ogbeke-Nike",
  state: "Enugu State",
  country: "Nigeria",
  
  contact: {
    whatsapp: "+2348031856498",
    email: "happibrawn4@gmail.com",
    phone: "+2348031856498"
  },
  
  coordinates: {
    // Auto-calculated from parcel bounding box - no manual entry needed
    center: [6.557, 7.552],   // [lat, lng] for Leaflet
    zoom: 16
  },
  
  plots: {
    total: 52,
    status: {
      available: "Available",
      reserved: "Reserved",
      sold: "Sold"
    }
  },
  
  google_sheets: {
    sheet_id: "1WjDg0hZ4ePklwf4R6ViRbAqBG-Ry3hxptP4rNJsel7E",
    sheet_tab: "THE_CHIEF_ESTATE_AKPALATA_PARCELS",
    enabled: true
  },
  
  admin: {
    password: "",
    features: {
      edit_status: true,
      change_prices: true,
      manage_marketers: true,
      export_data: true
    }
  },
  
  branding: {
    company: "A&Z Projects Ltd",
    logo_url: "https://azprojects-tech.github.io/assets/logo.png",
    footer_contact: "happibrawn4@gmail.com"
  }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ESTATE_CONFIG;
}
