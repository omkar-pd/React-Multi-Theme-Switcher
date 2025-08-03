function Contact() {
    return (
        <div className="h-screen flex items-center justify-center pt-20">
            <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl p-8 max-w-2xl w-full">
                <h1 className="text-4xl font-bold mb-4 text-center text-green-600 dark:text-yellow-300">
                    Contact Us
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 text-center">
                    Have questions or feedback? We&apos;d love to hear from you!
                </p>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="rounded px-3 py-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="rounded px-3 py-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="rounded px-3 py-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors"
                    >
                        Send Message
                    </button>
                </form>
                <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                    Or email us at{" "}
                    <a
                        href="mailto:info@example.com"
                        className="underline text-green-700 dark:text-yellow-300"
                    >
                        info@example.com
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
