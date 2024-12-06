import Image from "next/image";

type TechCardProps = {
  name: string;
  description: string;
  image: string;
};

const TechCard = ({ name, description, image }: TechCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <Image
        src={image}
        alt={name}
        className="w-16 h-16 mx-auto mb-4"
        width={64}
        height={64}
      />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TechCard;
