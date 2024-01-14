// Defining the type for a Logo object
interface Logo {
    name: string;
    domain: string;
    icon: string | null;
}

interface SelectedLogosProps {
    selectedLogos: Logo[];
  }

  const SelectedLogos: React.FC<SelectedLogosProps> = ({ selectedLogos }) => {
    return (
      <div className="flex flex-wrap gap-4">
        {selectedLogos.map((logo, index) => (
          <div key={index} className="flex items-center">
            <img src={logo.icon || 'placeholder-image-url'} alt={logo.name} className="w-8 h-8" />
            <span className="logo-name">{logo.name}</span>
          </div>
        ))}
      </div>
    );
  };

  export default SelectedLogos;