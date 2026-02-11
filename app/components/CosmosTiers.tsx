export default function CosmosTiers() {
  const tiers = [
    {
      name: "SURVIVAL",
      tier: "Common",
      color: "#9ca3af",
      items: ["Ramen Bowl", "Instant Coffee", "Water Bottle", "Basic Phone", "Cheap Laptop", "Bus Ticket", "Subway Card"],
    },
    {
      name: "COMFORT",
      tier: "Uncommon",
      color: "#22c55e",
      items: ["Starbucks Cup", "Proper Meal", "Pizza", "iPhone", "Good Headphones", "Uber Ride", "Decent Apartment"],
    },
    {
      name: "FLEX",
      tier: "Rare",
      color: "#3b82f6",
      items: ["Jordan 1s", "Supreme Hoodie", "Designer Bag", "MacBook Pro", "High-End Monitor", "Tesla Model 3", "Rolex Submariner"],
    },
    {
      name: "DREAM",
      tier: "Epic",
      color: "#a855f7",
      items: ["Lamborghini Aventador", "Ferrari", "Penthouse", "Beach House", "Patek Philippe", "Diamond Chain"],
    },
    {
      name: "GOD",
      tier: "Legendary",
      color: "#06b6d4",
      items: ["Private Jet", "Yacht", "Private Island", "Mountain", "Bugatti", "Koenigsegg"],
    },
    {
      name: "META",
      tier: "Mythic",
      color: "#ef4444",
      items: ["Bitcoin (Full Coin)", "Ethereum Stack", "Blue Checkmark", "Verified Status", "Freedom", "Time", "Influence"],
    },
  ];

  return (
    <section id="cosmos" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-20" />

        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Cosmos of Cream
        </h2>
        <p className="text-[#666] mb-16 max-w-2xl">
          10,000+ hand-drawn items. From instant noodles to private islands.
        </p>

        <div className="space-y-4">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className="border rounded-lg p-5 md:p-6 bg-[#0a0a0a] card-hover"
              style={{ borderColor: `${tier.color}20` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span
                  className="text-xs font-mono px-3 py-1 rounded border font-bold tracking-wider"
                  style={{ color: tier.color, borderColor: `${tier.color}50` }}
                >
                  {tier.tier.toUpperCase()}
                </span>
                <h3 className="text-lg font-bold" style={{ color: tier.color }}>
                  {tier.name} TIER
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {tier.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full border bg-[#050505]"
                    style={{ borderColor: `${tier.color}15`, color: `${tier.color}cc` }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-4 h-[2px] bg-[#111] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${((index + 1) / tiers.length) * 100}%`,
                    backgroundColor: tier.color,
                    boxShadow: `0 0 10px ${tier.color}60`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
