import InputField from "./InputField";

export default function Contact() {
  return (
    // 1. PAGE WRAPPER
    // 'isoalte': Creates a new stacking context (good practice when using z-indexes).
    // 'bg-white': Ensures a clean background.
    // 'px-6 py-24': Generous spacing. 96px padding top/bottom is standard for modern sections.
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* 2. CONTAINER */}
      {/* 'max-w-7xl mx-auto': Consistency is key. Matches your other pages. */}
      <div className="mx-auto max-w-7xl">
        {/* 3. GRID LAYOUT */}
        {/* 'grid-cols-1 md:grid-cols-2': Stacks on mobile, side-by-side on desktop. */}
        {/* 'gap-x-16': Large horizontal gap between the Info Box and the Form. */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:gap-x-24 md:grid-cols-2">
          {/* LEFT COLUMN: Contact Info */}
          {/* 'bg-gray-100': Subtle background to separate it from the white form. */}
          <div className="rounded-2xl bg-gray-50 p-10 lg:p-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Get in touch
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Fill in the form to start a conversation. We normally respond
              within 24 hours.
            </p>

            <dl className="mt-8 space-y-6 text-base text-gray-600">
              {/* Address Item */}
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  {/* Icon: Map Pin */}
                  <svg
                    className="h-7 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </dt>
                <dd>Acme Inc, 123 Street, State, Postal Code</dd>
              </div>

              {/* Phone Item */}
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  {/* Icon: Phone */}
                  <svg
                    className="h-7 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </dt>
                <dd>+44 123 456 7890</dd>
              </div>

              {/* Email Item */}
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  {/* Icon: Envelope */}
                  <svg
                    className="h-7 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </dt>
                <dd>support@acme.org</dd>
              </div>
            </dl>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <form className="flex flex-col gap-y-6">
            <InputField
              id="name"
              label="Full Name"
              placeholder="Enter your name"
            />

            <InputField
              id="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
            />

            <InputField
              id="phone"
              label="Phone Number"
              type="tel"
              placeholder="+1 (555) 000-0000"
            />

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                // 'w-full': Full width button on mobile and desktop is a modern pattern for forms.
                className="block w-full rounded-md bg-orange-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
