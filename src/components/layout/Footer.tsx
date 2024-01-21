const Footer = () => {
    let current = new Date();
    let currentYear = current.getFullYear()

    return (
        <footer className="border-t py-4 text-center text-gray-500 mt-8">
            &copy; {currentYear} All rights reserved
        </footer>
    );
}

export default Footer;