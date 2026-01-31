import { Link } from "react-router";

export default function Home() {
  return (
    // 1. PAGE WRAPPER
    // 'mx-auto': Sets margin-left and margin-right to 'auto'. This centers the div horizontally.
    // 'max-w-7xl': Constraints width to approx 1280px. Without this, on a 4k screen, your content would stretch to the edges and look bad.
    // 'px-5': Adds internal spacing (padding) on the sides so content doesn't touch the screen edge on mobile.
    <div className="mx-auto w-full max-w-7xl px-5 py-12">
      {/* 2. HERO CARD (The split view) */}
      {/* 'grid': Turns on Grid Layout. Children become grid items. */}
      {/* 'md:grid-cols-2': RESPONSIVE BREAKPOINT. */}
      {/* - Mobile (default): 1 column (everything stacks vertically). */}
      {/* - Desktop (md+): 2 columns side-by-side. */}
      {/* 'items-center': Centers items vertically. If the text is short and image is tall, the text won't stick to the top. */}
      <aside className="grid gap-10 overflow-hidden rounded-2xl bg-gray-100 md:grid-cols-2 items-center">
        {/* COLUMN 1: TEXT SECTION */}

        {/* 'order-last': On MOBILE, this div moves to the bottom. We want the image seen first on phones. */}
        {/* 'md:order-first': On DESKTOP, this div moves to the first position (Left side). */}
        {/* This implies the Image div will naturally take the other spot. */}
        <div className="p-8 md:p-12 text-center md:text-right order-last md:order-first">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Download Now
            {/* 'block': Span is usually inline. 'block' forces it to break onto a new line. */}
            <span className="block text-orange-700">Lorem Ipsum</span>
          </h2>

          {/* BUTTON WRAPPER */}
          {/* 'mt-6': Margin Top. Adds space between the title and the button. */}
          {/* 'flex': We use Flexbox here for alignment control. */}
          {/* 'justify-center': Centers button horizontally on mobile. */}
          {/* 'md:justify-end': Pushes button to the right on desktop to match the text alignment. */}
          <div className="mt-6 flex justify-center md:justify-end">
            <Link
              to="/"
              // 'inline-flex': Allows the Link to sit nicely in flow but still use flexbox inside itself (to align icon + text).
              // 'items-center': Ensures the SVG icon and Text are perfectly aligned vertically.
              // 'focus:ring-2': Accessibility feature. Adds a blue ring when using Keyboard Tab navigation.
              className="inline-flex items-center gap-2 rounded-lg bg-orange-700 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              <span>Download now</span>
            </Link>
          </div>
        </div>

        {/* COLUMN 2: IMAGE SECTION */}
        {/* Note: This div doesn't need an 'order' class because it will just fill whatever slot is left. */}
        {/* 'h-full': Crucial for Grid. Forces this container to be as tall as the Text container next to it. */}
        <div className="h-full w-full">
          <img
            // --- LEARNING MOMENT: IMAGE FIT ---
            // 'object-cover': This acts like `background-size: cover`.
            // It crops the image to fill the space perfectly without distorting it.
            // 'min-h-[300px]': Ensures that on mobile, the image isn't too short. It forces at least 300px height.
            className="h-full w-full object-cover min-h-75"
            src="https://images.pexels.com/photos/6821435/pexels-photo-6821435.jpeg"
            alt="Mobile App"
          />
        </div>
      </aside>

      {/* 3. BOTTOM SECTION */}
      {/* 'flex-col': We want a vertical stack (Image on top of Text). Default Flex is row (side-by-side). */}
      {/* 'space-y-6': Adds margin-top to every child element except the first one. */}
      <div className="mt-16 flex flex-col items-center justify-center space-y-6">
        <img
          // 'shadow-lg': Adds a large drop shadow to make the image "pop" off the page.
          className="w-48 rounded-lg shadow-lg sm:w-80"
          src="https://images.pexels.com/photos/3469074/pexels-photo-3469074.jpeg"
          alt="Feature Preview"
        />

        <h1 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Lorem Ipsum Yojo
        </h1>
      </div>
    </div>
  );
}
