export default function About() {
    return (
        // 1. SECTION WRAPPER
        // 'py-16': Adds distinct top/bottom padding to separate this section from Header/Footer.
        // 'bg-white': explicit background color.
        <div className="py-16 bg-white">
            
            {/* 2. CONTAINER */}
            {/* 'max-w-7xl mx-auto': Matches the width of your Header/Home/Footer for consistency. */}
            {/* 'px-6': Standard horizontal padding. */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                
                {/* 3. THE GRID LAYOUT */}
                {/* 'grid': Turns on grid layout. */}
                {/* 'gap-12': Creates a big, clean space between the Image and Text (48px). */}
                {/* 'md:grid-cols-2': On desktop, split into 2 equal columns. Mobile stays 1 column. */}
                {/* 'items-center': Vertically centers the text relative to the image. */}
                <div className="grid gap-12 md:grid-cols-2 items-center">
                    
                    {/* LEFT COLUMN: IMAGE */}
                    <div className="relative">
                        <img
                            // 'w-full': Forces image to fit the column width.
                            // 'rounded-xl': Adds modern, soft corners.
                            // 'shadow-lg': Adds depth so the image doesn't look flat.
                            // 'object-cover': Ensures the image doesn't stretch weirdly.
                            className="w-full rounded-xl shadow-lg object-cover"
                            src="https://images.pexels.com/photos/14024022/pexels-photo-14024022.jpeg"
                            alt="Startup team at work"
                        />
                    </div>

                    {/* RIGHT COLUMN: TEXT CONTENT */}
                    {/* 'space-y-6': Adds consistent margin-top to every child element (Title, Para 1, Para 2). */}
                    <div className="space-y-6">
                        
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl tracking-tight">
                            React development is carried out by passionate developers
                        </h2>
                        
                        {/* 'text-gray-600': Softer color than black for better readability. */}
                        {/* 'leading-relaxed': INCREASED LINE HEIGHT. This is crucial for large blocks of text. */}
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        
                        <p className="text-gray-600 leading-relaxed">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}