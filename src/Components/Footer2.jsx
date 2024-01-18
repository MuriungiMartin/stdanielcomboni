
const Footer = () => {
  return (
    <footer className="bg-black text-white p-6">
      <div className="grid grid-cols-4 gap-8">
        <div>
          <h3 className="text-red-500 mb-4">About Zegen</h3>
          <p>Zegen Church WordPress Theme is professionally designed for non-profit church, modern church, prayer group, Christian, charity, non-profit organization. Grab it soon!</p>
          <div className="flex space-x-2 mt-4">
            {/* Add your social icon components or images here */}
          </div>
        </div>

        {/* Other sections like Quick Links, Latest News and Newsletter can be added similarly */}

      </div>

      <p className="text-center text-sm mt-8">Copyrights © 2024 Zegen. Designed by Zoothemes</p>
    </footer>
  );
};

export default Footer;
