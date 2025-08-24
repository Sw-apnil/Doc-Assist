// import { redirect } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, CreditCard, Shield, Check } from "lucide-react";
// import { PricingTable } from "@clerk/nextjs";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import Pricing from "@/components/pricing";

// export default async function PricingPage() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       {/* Header Section */}
//       <div className="flex justify-start mb-2">
//         <Link
//           href="/"
//           className="flex items-center text-muted-foreground hover:text-white transition-colors"
//         >
//           <ArrowLeft className="h-4 w-4 mr-2" />
//           Back to Home
//         </Link>
//       </div>

//       <div className="max-w-full mx-auto mb-12 text-center">
//         <Badge
//           variant="outline"
//           className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
//         >
//           Affordable Healthcare
//         </Badge>

//         <h1 className="text-4xl md:text-5xl font-bold gradient-title mb-4">
//           Simple, Transparent Pricing
//         </h1>

//         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//           Choose the perfect consultation package that fits your healthcare
//           needs with no hidden fees or long-term commitments
//         </p>
//       </div>

//       {/* Pricing Table Section */}
//       {/* <Pricing /> */}

//       {/* FAQ Section - Optional */}
//       <div className="max-w-3xl mx-auto mt-16 text-center">
//         <h2 className="text-2xl font-bold text-white mb-2">
//           Questions? We're Here to Help
//         </h2>
//         <p className="text-muted-foreground mb-4">
//           Contact our support team at support@medimeet.com
//         </p>
//       </div>
//     </div>
//   );
// }
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "₹499",
      credits: "2 credits",
      description: "Perfect for quick one-time consultations.",
      features: [
        "2 doctor consultations",
        "Access to general physicians",
        "Email support",
      ],
    },
    {
      name: "Standard",
      price: "₹1,499",
      credits: "6 credits",
      description: "Ideal for small families and regular users.",
      features: [
        "6 doctor consultations",
        "Includes specialists (Cardiology, Dermatology, etc.)",
        "Priority booking",
        "Chat support",
      ],
    },
    {
      name: "Premium",
      price: "₹2,999",
      credits: "15 credits",
      description: "Best for frequent consultations and extended care.",
      features: [
        "15 doctor consultations",
        "Access to all specialists",
        "Free follow-up within 7 days",
        "24/7 priority support",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="flex justify-start mb-2">
        <Link
          href="/"
          className="flex items-center text-muted-foreground hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-full mx-auto mb-12 text-center">
        <Badge
          variant="outline"
          className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
        >
          Affordable Healthcare
        </Badge>

        <h1 className="text-4xl md:text-5xl font-bold gradient-title mb-4">
          Simple, Transparent Pricing
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect consultation package that fits your healthcare
          needs with no hidden fees or long-term commitments.
        </p>
      </div>

      {/* Pricing Table Section */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className="bg-gradient-to-b from-emerald-950/40 to-emerald-900/20 border-emerald-700/30"
          >
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.description}</p>
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                {plan.price}
              </div>
              <p className="text-sm text-gray-400 mb-6">{plan.credits}</p>

              <ul className="space-y-2 text-sm mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="h-4 w-4 text-emerald-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                size="lg"
              >
                Choose {plan.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">
          Questions? We're Here to Help
        </h2>
        <p className="text-muted-foreground mb-4">
          Contact our support team at <span className="text-emerald-400">support@docassist.com</span>
        </p>
      </div>
    </div>
  );
}
