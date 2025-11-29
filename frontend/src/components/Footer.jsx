function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 bg-black border-t border-[#b9ff1c]/30">
      <div className="container mx-auto text-center">
        <p className="text-white text-sm sm:text-base">
          © {new Date().getFullYear()} Portfolio. Built with React & Tailwind
          CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;

