import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-50 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <div className="bg-white p-2 rounded-lg inline-block mb-4">
              <img src="/images/softek-logo.png" alt="Softek Labs Logo" className="h-10 w-auto" />
            </div>
            <p className="text-slate-200 mb-6 max-w-sm">
              We build custom software around your business, not your business around the software.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-200 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/our-process" className="text-slate-200 hover:text-white transition-colors">Our Process</Link></li>
              <li><Link href="/case-studies" className="text-slate-200 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="text-slate-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/solutions/inventory-management" className="text-slate-200 hover:text-white transition-colors">Inventory Management</Link></li>
              <li><Link href="/solutions/crm" className="text-slate-200 hover:text-white transition-colors">CRM Software</Link></li>
              <li><Link href="/solutions/warehouse-management" className="text-slate-200 hover:text-white transition-colors">Warehouse Management</Link></li>
              <li><Link href="/solutions/manufacturing" className="text-slate-200 hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link href="/custom-software-development" className="text-slate-200 hover:text-white transition-colors">Custom Software</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="text-slate-200">Raipur, Chhattisgarh, India</li>
              <li className="text-slate-200">Email: softeklabsrpr@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Softek Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
